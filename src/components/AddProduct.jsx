import React from 'react'
import axios from "axios";

export default function AddProduct() {

    const [formData, setformData] = React.useState([])

    function handlechange(event) {

        setformData((olddata)=>{

            return {...olddata,
               [event.target.name]: event.target.files?.[0] ? event.target.files[0] : event.target.value
        }
        })

        console.log(formData)
    }

    //submit to api

    function handlesubmit(event) {
        event.preventDefault()

        axios({
            method: 'post',
            url: 'http://localhost:5000/postphone',
            data: {
                "name" : formData.name ,
                "brand" : formData.brand ,
                "description" : formData.description ,
                "price" : formData.price
            }
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            });

    }

    return(
        <div className="bg-white text-center py-10">
            <h1 className="text-2xl font-bold text-[#005D7A] font-poppins"> ADD PRODUCT</h1>


            <form onSubmit={handlesubmit} className="mt-7">

                <h1 className="text-xl font-poppins mt-4">Name</h1>
                <input className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="text" onChange={handlechange} value={formData.name} name="name" />

                <h1 className="text-xl font-poppins mt-4">Brand</h1>
                <input className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="text" onChange={handlechange} name="brand" />

                <h1 className="text-xl font-poppins mt-4">Price</h1>
                <input className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="text" onChange={handlechange} name="price" />

                <h1 className="text-xl font-poppins mt-4">Description</h1>
                <textarea className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="text" onChange={handlechange} name="description" />

                <h1 className="text-xl font-poppins mt-4">Image</h1>
                <input className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="file" onChange={handlechange} id="myFile" name="image" />



                <br />
                <button className="mt-4 bg-blue-700 text-white font-poppins py-2 px-4" type="submit" >ADD</button>
            </form>




        </div>
    )
}