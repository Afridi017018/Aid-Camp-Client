import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { toast } from 'react-toastify';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("Successfully submitted !");
        e.target.reset()
        setFormData({
            name: '',
            email: '',
            phone: '',
            message: '',
          })
      };
    return (
        <div className=''>

              <Helmet>
                <title>Aid Camp | Contact Us</title>
            </Helmet>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/red-background-with-stethoscope-red-background_836919-1341.jpg?w=826)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" w-96 lg:w-[30rem]">
                    <div className="container mx-auto mt-8">

      <div className="w-full mx-auto p-4 mt-20">
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold mb-4 text-gray-600">Contact Us</h1>
          <form onSubmit={handleSubmit} className="text-black">
            <div className="mb-4">
              
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your Phone Number"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                rows="3"
                required
              ></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>

    </div>
       </div>
       </div>
 </div>
        </div>
    );
};

export default ContactUs;


// // src/components/ContactForm.js
// import React, { useState } from 'react';

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted:', formData);
//     // You can implement further actions, such as sending the data to a server or displaying a success message
//   };

//   return (
    
//   );
// };

// export default ContactUs;
