import React from 'react'
import {Link} from "react-router-dom";
import axios from "axios";

export default function HomePageProducts() {

   const [product, setproduct] = React.useState("")


React.useEffect(()=>{
   axios({
        method: 'get',
        url: `${process.env.REACT_APP_BACK_END_URL}/allphones`,

    })
        .then((response) => {
            console.log(response.data.data);
            setproduct ( response.data.data)





        })
        .catch((error) => {
            console.log(error);
            //setShowPopup(true);
            //setpopup(response.data.message);
        })

},[])



    return (

        <div className="bg-white text-center py-6 pb-16">
            <h1 className="text-2xl font-bold text-[#005D7A] font-poppins"> LATEST PRODUCTS</h1>

            <div className="flex flex-wrap px-4">

                {product ? (
                    product.map((product) => (
                        <div key={product.id} className="shadow-md w-[275px] text-center p-1 pb-5 mx-8 mt-36">
                            <img alt="" className="-mt-20 mx-auto mb-7" src={product.image} />
                            <h1 className="font-bold font-poppins text-xl mb-1">{product.name}</h1>
                            <p className="text-sm mb-2">{product.description}</p>
                            <h3 className="font-bold text-lg font-poppins text-emerald-600 mb-2">PRICE: {product.price}</h3>
                            <Link to={`/product/${product.id}`} className="bg-blue-700 text-white font-poppins font-semibold py-2 px-5 mb-2">VIEW</Link>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}





            </div>
        </div>
    )
}