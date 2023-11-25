import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Loading from '../../pages/Loading/Loading';

const Profile = () => {

    const {user, loading} = useAuth();

    const axios = useAxios();

    const [profileData, setProfileData] = useState({
        name: '',
        phone: '',
        interests: "",
      });
  

      const getUserInfo = async () => {
        const result = await axios.post(`/api/user/get-user-info?email=${user?.email}`);
        // console.log(result.data.data.name)
        const {name, phone, interests} = result?.data?.data;
        setProfileData({name, phone, interests})
        return result;
      }

      const { data, isLoading } = useQuery({
        queryKey: ["profile", user],
        queryFn: getUserInfo,
        refetchOnWindowFocus:false,
        refetchOnMount:true,
        cacheTime: 10000,
        staleTimeout: 10000,
      })


if(isLoading)
{
    return <Loading />
}
  
// console.log(data.data.data.name)



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

 
  const handleUpdate = async (e)=>{
    e.preventDefault();

    const {name, phone, interests} = profileData
    const obj = {
        email: user.email,
        name,
        phone,
        interests
    }

    const res = await axios.put('/api/user/update-user-info', obj);
// console.log(res.data.message)
    toast.dismiss();
    toast.success(res.data.message)

  }



  return (
    <div className="container mx-auto mt-8 px-20">
      <div className="max-w-full mx-auto p-4 border shadow-2xl">
        <div className="bg-white p-4 rounded-lg">
          <h1 className="text-3xl font-semibold mb-4">My Profile</h1>
          <form className='my-5' onSubmit={handleUpdate}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder='Your name'
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                defaultValue={profileData.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder='Your phone number'
                required
              />
            </div>


            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                Interests
              </label>
              <input
                type="text"
                name="interests"
                value={profileData.interests}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                placeholder='Interests'
                required
              />
            </div>
            <div className='text-center pt-5'>
                <button type='submit' className='px-3 text-lg font-bold text-white bg-blue-600 py-1 rounded w-44'>Save</button>
            </div>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;
