import React from 'react'

export default function Header () {

    return (

        <div className="flex flex-row justify-between bg-white shadow-md">
            <div className="mx-[36px] my-[18px] m text-md font-semibold font-poppins"> MOBILE SHOP </div>

            <div className="flex flex-row mx-[36px] my-[18px]">
                <p className="font-poppins text-md font-semibold mr-5">HOME</p>
                <p className="font-poppins text-md font-semibold mr-5">ABOUT</p>
                <p className="font-poppins text-md font-semibold mr-5">CONTACT </p>
                <p className="font-poppins text-md font-semibold mr-5">SHOP</p>
            </div>
        </div>
    )
}