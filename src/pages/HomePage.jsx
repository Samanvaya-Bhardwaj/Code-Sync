import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {

  const navigate = useNavigate();

  const [ roomid, setRoomid] = useState('');
  const [ username, setUsername ] = useState('');

  //create a new room id and use hot-toast
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomid(id);
    toast.success("Successfully created a New Room");
  }

  //creating a joinroom requirement and direction function
  const joinRoom = (e) => {
    if(!roomid || !username){
      toast.error("Kindly fill all the required fields");
      return;
    }
    navigate(`/editor/${roomid}`,{
       state: {
           username,
       },
    })
    
  }

  const handleInputEnter = (e) => {
      if(e.code === 'Enter'){
        joinRoom(e);
      }
  }

  return (
    <div className="homepage">
      <div className="form">
        <img src="/code-sync.png" alt="Code-Sync-Editor logo" />
        <h4 className="label">Paste Your Invitation ROOM ID</h4>
        <div className="input">

          <input type="text" value={roomid} onChange={(e) => setRoomid(e.target.value)} className="inputbox" placeholder='ROOM ID' onKeyUp={handleInputEnter} />

          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="inputbox" placeholder='USER NAME' onKeyUp={handleInputEnter} />

          <button onClick={joinRoom} className="btn Joinbtn">Join</button>

        </div>
        <span className="info">
          Create Random Room and enjoy coding&nbsp; 
          <button onClick={createNewRoom} className="btn createNewRoomBtn">New Room</button>
        </span>
      </div>
      <footer>
        <h4>Built with 💛 by Samanvaya Bhardwaj </h4>
      </footer>
    </div>
  )
}

export default HomePage;