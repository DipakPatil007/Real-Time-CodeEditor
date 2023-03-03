import React,{useState} from 'react';
import {v4 as uuidv4} from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    
    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');

    const createnewroom = (e)=>{
        e.preventDefault();
        const id = uuidv4();
        setRoomId(id);
        toast.success('Created a new room');
    }

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };

  return (
      <div className="homePageWrapper">
          <div className="formWrapper">
            <h1>OIAS</h1>
              <h4 className='mainLabel'>Enter Invitaion Link Here</h4>
              <div className="inputGroup">
                <input type="text" className='inputBox' placeholder='RoomID' onChange={(e) => setRoomId(e.target.value)}
                      value={roomId} onKeyUp={handleInputEnter}/>
                  <input type="text" className='inputBox' placeholder='UserName' onChange={(e) => setUsername(e.target.value)} value={username} onKeyUp={handleInputEnter} />
                  <button className="btn joinBtn" onClick={joinRoom}>Join</button>
                  <span className="createInfo">If you don't have an invitaion then create &nbsp;
                      <a onClick={createnewroom} href="/" className="createNewBtn">New Room</a>
                </span>
            </div>
        </div>
        <footer></footer>
       
    </div>
  )
}

export default Home
