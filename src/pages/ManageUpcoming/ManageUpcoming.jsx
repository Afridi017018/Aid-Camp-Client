import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom/dist';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading/Loading';

const ManageUpcoming = () => {

    const { user } = useAuth();
    const axios = useAxios();
    const navigate = useNavigate();

    const [updateElement, setUpdateElement] = useState(null)

    const [open, setOpen] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;


    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const getUpcomingCampsByOrganizer = async () => {
        const res = await axios.get(`/api/camp/get-upcoming-camps-by-organizer?email=${user.email}`);
        return res;
    }


    const { data, isLoading, refetch } = useQuery({
        queryKey: ["organizerUpcomingCamps", user],
        queryFn: getUpcomingCampsByOrganizer
    })

    if (isLoading) {
        return <Loading />
    }


    const indexOfLastUser = currentPage * itemsPerPage;
    const indexOfFirstUser = indexOfLastUser - itemsPerPage;
    const currentUsers = data.data.data.slice(indexOfFirstUser, indexOfLastUser);

    const handlePageChange = (direction) => {
        setCurrentPage((direction === 'prev' ? currentPage - 1 : currentPage + 1));
    };



    const handleSubmit = async (e) => {

        e.preventDefault();
        const newForm = new FormData(e.currentTarget);
        const name = newForm.get('name');
        const image = newForm.get('image').size > 0 ? newForm.get('image') : updateElement.image;
        const fees = newForm.get('fees');
        const date = newForm.get('date') !== "" ? moment(newForm.get('date'), 'YYYY-MM-DD').format('DD/MM/YYYY') : updateElement.date;
        const time = newForm.get('time') !== "" ? moment(newForm.get('time'), 'HH:mm').format('h:mm A') : updateElement.time;
        const location = newForm.get('location');
        const service = newForm.get('service');
        const professional = newForm.get('professional');
        const target = newForm.get('target');
        const description = newForm.get('description');

        let obj;

        if (newForm.get('image').size > 0) {
            const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
            const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

            const imageFile = { image: image }
            const res = await axios.post(image_hosting_api, imageFile, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });


            obj = { email: user.email, campId: updateElement._id, name, image: res.data.data.display_url, fees, date, time, location, service, professional, target, description }
        }

        else {
            obj = { email: user.email, campId: updateElement._id, name, image, fees, date, time, location, service, professional, target, description }
        }


        const result = await axios.put('/api/camp/update-camp', obj);

        toast.dismiss();
        refetch();
        toast.success(result.data.message);

        onCloseModal();
        setUpdateElement(null)


    }

    const handleModal = async (element) => {

        // console.log(element)
        setUpdateElement(element);
        onOpenModal();

    }

    const handleDelete = async (campId) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                await axios.delete(`/api/camp/delete-camp/${campId}`);
                refetch();

                Swal.fire({
                    title: "Deleted!",
                    text: "Your camp has been deleted",
                    icon: "success"
                });
            }
        });

    }



    const handlePublish = async (id) => {
        const result = await axios.put(`/api/camp/publish-camp/${id}`)
        Swal.fire({
            title: result.data.message,
            icon: "success"
        });

        refetch();
    }



    return (
        <div className='px-2 lg:px-20 my-10'>

            <Helmet>
                <title>Aid Camp | Manage Upcoming Camps</title>
            </Helmet>

            <div className='text-center font-bold'>Manage Upcoming Camps</div>

            <div className="overflow-x-auto shadow mt-5">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Date & Time</th>
                            <th>Approved Participants</th>
                            <th>Approved Interested Professionals</th>
                            <th>Target Audience</th>
                            <th>Action</th>
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
                                                <div className="font-bold">{element.name}</div>
                                                <div className="text-sm opacity-50">{element.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {element.date}, {element.time}
                                    </td>
                                    <td>{element.participant_count}</td>
                                    <td>{element.professional_count}</td>
                                    <td>{element.target}</td>

                                    <td>


                                        <div className='flex gap-2'>
                                            <button onClick={() => navigate(`/dashboard/interested-participants/${element._id}`)} className='bg-gray-500 text-white px-2 py-1 rounded'>Participants</button>


                                            <button onClick={() => navigate(`/dashboard/interested-professionals/${element._id}`)} className=' bg-cyan-500 text-white px-2 py-1 rounded'>Professionals
                                            </button>
                                        </div>




                                        <div className='flex gap-2 mt-2'>

                                            {element.professional_count > 0 ?

                                                element.participant_count > 2 ?

                                                    <button onClick={() => handlePublish(element._id)} className='bg-green-500 text-white px-2 py-1 rounded'>Publish</button>
                                                    :
                                                    ""
                                                :
                                                ""

                                            }

                                            <button onClick={() => handleModal(element)} className='bg-blue-500 text-white px-2 py-1 rounded'>Update</button>
                                            <button onClick={() => handleDelete(element._id)} className='bg-red-600 text-white px-2 py-1 rounded'>Delete</button>


                                        </div>


                                    </td>

                                </tr>
                            ))
                        }


                    </tbody>

                </table>
            </div>




            <div>
                <Modal open={open} onClose={onCloseModal} center>
                    <div className="bg-white p-4 rounded-md shadow-md w-96">
                        <h2 className="text-2xl font-semibold mb-4">Update Camp</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={updateElement?.name}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder='Camp Name'
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="file"
                                    name="image"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="number"
                                    name="fees"
                                    defaultValue={updateElement?.fees}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder='Camp Fees'
                                    required
                                />
                            </div>
                            <div className="mb-4 flex gap-5">
                                <input
                                    type="date"
                                    name="date"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                />

                                <input
                                    type="time"
                                    name="time"
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                />

                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="location"
                                    defaultValue={updateElement?.location}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder='Venue Location'
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="service"
                                    defaultValue={updateElement?.service}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder='Specialized Services Provided'
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="professional"
                                    defaultValue={updateElement?.professional}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder='Healthcare Professionals in Attendance'
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="target"
                                    defaultValue={updateElement?.target}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    placeholder='Target Audience'
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    id="description"
                                    name="description"
                                    defaultValue={updateElement?.description}
                                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                    rows="3"
                                    placeholder='Description'
                                    required
                                ></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                                    Submit
                                </button>
                            </div>
                        </form>

                    </div>
                </Modal>
            </div>




{/* Pagination buttons */}
<div className='text-center my-3'>
                <button className={`cursor-pointer ${currentPage === 1 && "text-gray-500"}`} onClick={() => handlePageChange('prev')} disabled={currentPage === 1}>
                    Prev
                </button>
                <span className='mx-3 border border-gray-500 px-1'>{currentPage}</span>
                <button className={`cursor-pointer ${indexOfLastUser >= data.data.data.length && "text-gray-500"}`} onClick={() => handlePageChange('next')} disabled={indexOfLastUser >= data.data.data.length}>
                    Next
                </button>
            </div>




        </div>
    );
};

export default ManageUpcoming;