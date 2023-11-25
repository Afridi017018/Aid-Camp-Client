import React, { useState } from 'react';

const AddUpcomingCamp = () => {
    const [campData, setCampData] = useState({
        name: '',
        image: null,
        fees: null,
        date: '',
        time:'',
        location: '',
        servicesProvided: '',
        professionalsInAttendance: '',
        targetAudience: '',
        description: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCampData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Camp Data:', campData);

        setCampData({
            name: '',
            image: null,
            fees: '',
            date: '',
            time:'',
            location: '',
            servicesProvided: '',
            targetAudience: '',
            description: '',
        });
    };

    return (
        <div className="container mx-auto my-5">
            <div className="lg:w-full mx-auto p-4 lg:px-20">
                <div className="bg-white py-5 rounded border shadow-2xl px-10">
                    <h1 className="text-3xl font-semibold mb-5">Add Upcoming Camp</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                value={campData.name}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Camp Name'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="file"
                                name="image"
                                value={campData.image}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="number"
                                name="fees"
                                value={campData.fees}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Camp Fees'
                                required
                            />
                        </div>
                        <div className="mb-4 flex gap-5">
                            <input
                                type="date"
                                name="date"
                                value={campData.date}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                required
                            />

                            <input
                                type="time"
                                name="time"
                                value={campData.time}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                required
                            />

                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="location"
                                value={campData.location}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Venue Location'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="servicesProvided"
                                name="servicesProvided"
                                value={campData.servicesProvided}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Specialized Services Provided'
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                id="targetAudience"
                                name="targetAudience"
                                value={campData.targetAudience}
                                onChange={handleInputChange}
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder='Target Audience'
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <textarea
                                id="description"
                                name="description"
                                value={campData.description}
                                onChange={handleInputChange}
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
            </div>
        </div>
    );
};

export default AddUpcomingCamp;
