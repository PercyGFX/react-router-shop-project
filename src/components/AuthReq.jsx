import React from "react";
import { useNavigate, Outlet} from "react-router-dom";
import axios from "axios";


export default function AuthReq() {

    const navigate = useNavigate()



    React.useEffect(() => {
        axios.get(`${process.env.REACT_APP_BACK_END_URL}/check`)
            .then((response) => {
                if (response.data.success === true) {


                } else {
                    navigate('/login')
                }
            })
            .catch((error) => {
                console.error(error.response.data);
                navigate('/login')

            });
    }, [navigate]);




    return <Outlet />;



}