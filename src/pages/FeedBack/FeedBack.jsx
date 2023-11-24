import React from 'react';

const FeedBack = () => {
    return (
        <div className='px-2 lg:px-20 my-10'>

            <div className="overflow-x-auto shadow">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Name</th>
                            <th>Date & Time</th>
                            <th>Fees</th>
                            <th>Payment Status</th>
                            <th>Confirmation Status</th>
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
                            <td>$250</td>

                            <td><button className='bg-blue-500 text-white px-3 py-1 rounded'>Pay</button></td>

                            <td>Pending</td>

                            <td><button className='px-3 py-1 rounded bg-blue-500 text-white'>Review</button></td>

                        </tr>

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default FeedBack;