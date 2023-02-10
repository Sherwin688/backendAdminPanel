import axios from "axios";
import { useEffect, useState } from "react";
import "./AddRooms.css";
import {useNavigate, useSearchParams} from "react-router-dom";


const UpdateRooms = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const term = queryParams.get("id")
  const navigate = useNavigate()
  const [room,setRoom] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [floor,setFloor] = useState("");

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "roomNumber"){
        setRoomNumber(value);
    }
    if(id === "floor"){
        setFloor(value);
    }
  

}
useEffect(()=>{
axios.get(`updateRooms?id=${term}`,{headers:{"Authorization":`Bearer ${localStorage.getItem("_token")}`}}).then((response) => {
  console.log(response)
  setRoomNumber(response.data.result.roomNumber)
  setFloor(response.data.result.floor)
  // navigate('/dashboard');
})
},[])
const handleSubmit  = async(e) => {
  e.preventDefault();

axios
    .get(`updateRooms?id=${term}`)
    .then((response) => {
      console.log(response)
      navigate('/dashboard');
    })
    .catch((err) => console.log(err));

}
  return (
    <div className="login form">
    <header>Update Room</header>
    <form>
    <input type="text" value={roomNumber} onChange = {(e) => handleInputChange(e)} placeholder="Enter Room Number" id="roomNumber"/>
    <input type="text" value={floor} onChange = {(e) => handleInputChange(e)} placeholder="Enter Floor Number" id="floor"/>
      <input type="submit" className="button" onChange = {(e) => handleInputChange(e)} onClick={(e)=>handleSubmit(e)}  value="Modify"/>

    </form>

  </div>
  
  );
};

export default UpdateRooms;
