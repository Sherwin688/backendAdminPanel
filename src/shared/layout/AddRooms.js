import axios from "axios";
import { useState } from "react";
import "./AddRooms.css";
import {useNavigate} from "react-router-dom";

const AddRooms = () => {
  const navigate = useNavigate()
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
const handleSubmit  = async(e) => {
  e.preventDefault();

axios
    .post("adminAddRoom",{"roomNumber":roomNumber,"floor":floor})
    .then((response) => {
      console.log(response)
      navigate('/dashboard');
    })
    .catch((err) => console.log(err));

}
  return (
    <div className="login form">
    <header>Add Room</header>
    <form>
    <input type="text" value={roomNumber} onChange = {(e) => handleInputChange(e)} placeholder="Enter Room Number" id="roomNumber"/>
    <input type="text" value={floor} onChange = {(e) => handleInputChange(e)} placeholder="Enter Floor Number" id="floor"/>
      <input type="submit" className="button" onChange = {(e) => handleInputChange(e)} onClick={(e)=>handleSubmit(e)}  value="Add"/>

    </form>

  </div>
  
  );
};

export default AddRooms;
