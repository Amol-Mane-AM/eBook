import { useContext, useEffect } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom';

function Checkout(){

    const{user} = useContext(ThemeContext);
const navigate=useNavigate();
 const { pid } = useParams();

 useEffect(()=>{
if(user === ' ' || user === null){
    navigate('/login');
}
 },[])

   return (
    <div>
      <h2>Checkout Page</h2>
      <p>Product ID: {pid}</p>
    </div>
  );
}
export default Checkout;