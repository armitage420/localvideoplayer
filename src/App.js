import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import './Player.css';

function App(){
    const [videoFilePath, setVideoFilePath] = useState("cakebytheocean.mp4");
    return(
      <div className='playerWrapper'>
        {videoFilePath ? (
          <ReactPlayer
            className='reactPlayer'
            url={videoFilePath}
            width="100%"
            height="100%"
            controls={true}
          />
        ) : (
          <div></div>
        )}
      </div>
    );   
}

export default App;