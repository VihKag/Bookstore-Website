import user from "../../assets/image/profile.jpg"
const Profile = ()=>{
    return(
        <>
            <div className="mb-8 border p-4">
                <div className="text-2xl p-2 bg-gray-900 text-white my-2 rounded-sm">User Profile</div>
                <div className="md:grid-cols-2 lg:grid-cols-3 grid">
                    <div className="col-span-1 mx-4">
                        <div className="my-4">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John" required/>
                        </div>
                        <div className="my-4">
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe" required/>
                        </div>
                        <div className="my-4">
                            <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Male" required/>
                        </div>
                        <div className="my-4">
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                        </div>
                    </div>
                    <div className="col-span-1 mx-4">
                        <div className="my-4">
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="John191SQ" required/>
                        </div>
                        <div className="my-4">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Doe@gmail.com" required/>
                        </div>
                        <div className="my-4">
                            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Admin" required/>
                        </div> 
                    </div>
                    <div className="col-span-1 flex justify-center">
                        <div className="m-2">
                            <img className="border p-1 mb-2 w-72" src={user} alt="user"/>
                            <button className="w-full p-2 bg-blue-500 text-white font-medium rounded-sm hover:scale-105">Change picture</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Profile;