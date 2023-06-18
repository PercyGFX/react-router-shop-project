import React from 'react'
import axios from "axios";
import Popup from 'reactjs-popup';
import { storage } from '../services/firebase'

export default function AddProduct() {

    const initialState = {
        name: '',
        brand: '',
        description: '',
        price: '',
        file: null,}

    const [formData, setformData] = React.useState(initialState)
    const [showPopup, setShowPopup] = React.useState(false);
    const [popup, setpopup] = React.useState("")

function handleclose(event) {

    setShowPopup(false)
}


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

        console.log(formData.image)

        let image = "image"

        const uploadImageToFirebaseStorage = async () => {
            try {
                // Create a reference to the file in Firebase Storage
                const storageRef = storage.ref();

                // Generate a unique file name or use the original file name
                const fileName = `${Date.now()}-${formData.image.name}`;

                const imageRef = storageRef.child(`images/${fileName}`);

                // Upload the file to Firebase Storage
                const snapshot = await imageRef.put(formData.image);

                // Get the download URL of the uploaded file
                image = await snapshot.ref.getDownloadURL();

                console.log('Download URL:', image);

                // Send the Axios request after image upload
                axios({
                    method: 'post',
                    url: 'http://localhost:5000/postphone',
                    data: {
                        name: formData.name,
                        brand: formData.brand,
                        description: formData.description,
                        price: formData.price,
                        image: image
                    }
                })
                    .then((response) => {
                        console.log(response.data.message);
                        setformData(initialState)

                        setShowPopup(true);
                        setpopup(response.data.message);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (error) {
                console.log(error);
            }
        };

// Call the function to upload the image and send the Axios request
        uploadImageToFirebaseStorage();

    }

    return(
        <div className="bg-white text-center py-10">
            <h1 className="text-2xl font-bold text-[#005D7A] font-poppins"> ADD PRODUCT</h1>

            <Popup open={showPopup} onClose={() => setShowPopup(false)}>
                <div className="bg-amber-100 py-6 px-3" >

                    <p className="font-poppins font-semibold text-xl">{popup}</p>

                    <button className="bg-blue-700 text-white font-poppins font-semibold py-3 px-4" onClick={handleclose}>Close</button>
                </div>
            </Popup>
            <form onSubmit={handlesubmit} className="mt-7">

                <h1 className="text-xl font-poppins mt-4">Name</h1>
                <input className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="text" onChange={handlechange} value={formData.name} name="name" />

                <h1 className="text-xl font-poppins mt-4">Brand</h1>
                <input className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="text" onChange={handlechange} value={formData.brand} name="brand" />

                <h1 className="text-xl font-poppins mt-4">Price</h1>
                <input className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="text" onChange={handlechange} value={formData.price} name="price" />

                <h1 className="text-xl font-poppins mt-4">Description</h1>
                <textarea className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="text" onChange={handlechange} value={formData.description} name="description" />

                <h1 className="text-xl font-poppins mt-4">Image</h1>
                <input className="border border-light-blue-500 mt-4 py-1 px-2 focus:outline-none bg-gray-100" type="file" onInput={handlechange} id="myFile" name="image" />



                <br />
                <button className="mt-4 bg-blue-700 text-white font-poppins py-2 px-4" type="submit" >ADD</button>
            </form>




        </div>
    )
}