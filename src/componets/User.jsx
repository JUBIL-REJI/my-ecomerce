import { useEffect, useState } from "react";
import axios from "axios";
import Navbars from "./Navbar";
import { useParams } from "react-router-dom";

const User = () => {
  const{id}=useParams()
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((response) => {
      setData(response.data);
      setLoading(false);
    })
    .catch((error) => console.error("Error fetching user:", error));


    
  }, [id]); 


  if (loading) return <p>Loading user data...</p>;
  const address = data.address.street;

  return (
    <>
    <Navbars/>
    <div className="flex justify-center items-center gap-10 pt-10 pb-10 bg-red-300" >
      
      <div>
        <img src="https://www.clipartmax.com/png/middle/242-2428107_png-file-icone-contact-png.png" alt="" className="w-40"/>
      </div>
      <div>   
            <div  className="text-white">
            <ul>
            <li><b>name:</b><i>{data.name}</i></li>
            <li><b>email:</b>{data.email}</li>
            <li><b>phone:</b>{data.phone}</li>
            <li><b>address:</b>{address}</li>
          </ul>
          </div>
      
      </div>
    </div>
    </>
    
  );
};

export default User;
