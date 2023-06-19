import React from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({setShowPopup, setpopup}) {

    const navigate = useNavigate();
    const [login, setlogin] = React.useState({})
    function handlesubmit(event){

    event.preventDefault()

        axios({
            method: 'post',
            url: `${process.env.REACT_APP_BACK_END_URL}/login`,
            data: {
                user: login.user,
                password: login.password
            }
        })
            .then((response) => {
                console.log(response.data.message);

                if(response.data.success) {
                    console.log(response.data.success)

                    navigate("/addproduct")

                }


                setShowPopup(true);
               setpopup(response.data.message);
            })
            .catch((error) => {
                console.error(error.response.data);

                setShowPopup(true);
                setpopup(error.response.data.message);
            });

    }

    function handlechange(event){

        setlogin((old)=>{

            return { ...old,
            [event.target.name] : event.target.value
            }
        })
console.log(login)
    }

    return(



        <div className="bg-white text-center py-10">

            <h1 className="text-2xl font-bold text-[#005D7A] font-poppins"> LOGIN</h1>


                <form onSubmit={handlesubmit} className="mt-7">

                <h1 className="text-xl font-poppins">Username</h1>
                <input className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" onChange={handlechange} value={login.name} type="text" name="user" />

                    <h1 className="text-xl font-poppins mt-5">Password</h1>
                    <input className="border border-light-blue-500 py-1 px-2 focus:outline-none  bg-gray-100" onChange={handlechange} value={login.password} type="password" name="password" />
                    <br />
                    <button className="mt-4 bg-blue-700 text-white font-poppins py-2 px-4" type="submit" >LOGIN</button>
                </form>




        </div>
    )
}