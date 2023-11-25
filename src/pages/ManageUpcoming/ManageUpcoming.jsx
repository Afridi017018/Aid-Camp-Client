import React from 'react';

const ManageUpcoming = () => {
    return (
        <div className='px-2 lg:px-20 my-10'>

            <div className="overflow-x-auto shadow">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Date & Time</th>
                            <th>Total Participants</th>
                            <th>Total Interested Professionals</th>
                            <th>Target Audience</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">

                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                22/03/23, 4.00pm
                            </td>
                            <td>15</td>
                            <td>5</td>
                            <td className=''>Children</td>

                            <td>
                                <div className='flex gap-2'>
                                    <button className='bg-blue-500 text-white px-2 py-1 rounded'>Update</button>
                                    <button className='bg-red-600 text-white px-2 py-1 rounded'>Delete</button>
                                </div>
                            </td>

                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUpcoming;