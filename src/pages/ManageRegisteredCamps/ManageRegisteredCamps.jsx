import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';

const manageRegisteredCamps = () => {

    const axios = useAxios();
    const { user } = useAuth();

    const navigate = useNavigate();

    const getRegCamp = async () => {
        const res = await axios.get(`/api/join/manage-reg-camps?organizer=${user?.email}`)
        return res;
    }


    const { data, isLoading, refetch } = useQuery({
        queryKey: ["manage-reg-camps", user],
        queryFn: getRegCamp
    })


    if (isLoading || !user) {
        return <Loading />
    }

    // console.log(data.data.data)


    const handleCancel = async (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                const result = await axios.delete(`/api/join/delete-reg-camp/${id}`);
                refetch();
              Swal.fire({
                title: "Canceled!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });



    }


    const handleConfirm = async (joinId)=>{
       await axios.put('/api/join/update-confirm', {joinId});

       refetch();
    }


    return (
        <div className='px-2 lg:px-20 my-10'>

            <div className="overflow-x-auto shadow">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Camp</th>
                            <th>Date & Time</th>
                            <th>Fees</th>
                            <th>Payment Status</th>
                            <th>Confirmation Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.data.data.length > 0 &&

                            data.data.data.map((element) => (
                                <tr key={element._id}>
                                    <td>
                                        <div className="flex items-center gap-3">

                                            <div>
                                                <div className="font-bold">{element.campId.name}</div>
                                                <div className="text-sm opacity-50">{element.campId.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {element.campId.date}, {element.campId.time}
                                    </td>
                                    <td>${element.campId.fees}</td>

                                    <td>{element.payment_status === "unpaid" ? <p className='text-gray-600 font-bold'>Unpaid</p> : <p className='text-gray-600 font-bold'>Paid</p>}</td>

                                    {element.confirmation_status === "pending" && <td><button onClick={()=>handleConfirm(element._id)} className='text-white bg-gray-500 px-2 py-1 rounded'>Pending</button></td>}
                                    {element.confirmation_status === "confirmed" && <td className='text-green-600 font-bold'>Confirmed</td>}

                                    <td>{element.payment_status === "paid" && <button onClick={() => handleCancel(element._id)} className='px-3 py-1 rounded bg-red-600 text-white'>Cancel</button>}</td>

                                </tr>
                            ))

                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default manageRegisteredCamps;