import React from 'react'

export default function Login() {

    return(
        <div className="bg-white text-center py-10">
            <h1 className="text-2xl font-bold text-[#005D7A] font-poppins"> LOGIN</h1>


                <form className="mt-7">

                <h1 className="text-xl font-poppins">Username</h1>
                <input className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="text" name="username" />

                    <h1 className="text-xl font-poppins mt-5">Password</h1>
                    <input className="border border-light-blue-500 py-1 px-2 focus:outline-none  bg-gray-100" type="password" name="password" />
                    <br />
                    <button className="mt-4 bg-blue-700 text-white font-poppins py-2 px-4" type="submit" >LOGIN</button>
                </form>




        </div>
    )
}