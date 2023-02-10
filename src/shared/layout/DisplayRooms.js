import axios from "axios";
import { useEffect, useState } from "react";
import "./AddRooms.css";
import {useNavigate} from "react-router-dom";

const DisplayRooms = () => {
  const navigate = useNavigate()
  const [roomNumber, setRoomNumber] = useState("");
  const [floor,setFloor] = useState("");
  const [rooms,setRooms] = useState([])

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
  axios
  .get("displayRooms",{headers:{"Authorization":`Bearer ${localStorage.getItem("_token")}`}})
  .then((response) => {
    console.log(response)
    setRooms(response.data.result)
  })
  .catch((err) => console.log(err));
},[])
const handleSubmit  = async(e) => {
  navigate(`/getUpdateRooms?id=${e.target.id}`)
  // axios
  //   .get("https://cubical-backend.onrender.com/api/v1/entrance/room")
  //   .then((response) => {
  //     console.log(response)
  //     navigate('/rooms');
  //   })
  //   .catch((err) => console.log(err));
}
const handleDelete = (e)=>{
  axios.delete(`/deleteRooms?id=${e.target.roomId}`,{headers:{"Authorization":`Bearer ${localStorage.getItem("_token")}`}}).then(response=>{
    console.log("Deleted")
  })

}
  return (
   
  <div className="room-list">
    <table>
      <thead>
      <tr>
        <th>Room id</th>
        <th>Room Number</th>
        <th>Floor</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
      </thead>
      <tbody>
        {rooms.map(room=><tr key={room.roomId}><td>{room.roomId}</td><td>{room.roomNumber}</td><td>{room.floor}</td><td><button id={room.roomId} onClick={(e)=>handleSubmit(e)}>Edit</button></td><td><button id={room.roomId} onClick={(e)=>handleDelete(e)}>Delete</button></td></tr>)}
        
       
          
          <td><button>Delete</button></td>
       
      </tbody>
      
    </table>
  </div>
  );
};

export default DisplayRooms;
