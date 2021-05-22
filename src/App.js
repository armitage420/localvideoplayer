import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import './App.css';
import './Player.css';

function App(){
    const [videoFilePath, setVideoFilePath] = useState("cakebytheocean.mp4");
    const [controls, toggle] = useState(
      (controls) => !controls,
      false
      );

    return(
      <div className='App'>
        <div className='playerWrapper'>
          <ReactPlayer
            className='reactPlayer'
            url={videoFilePath}
            muted={true}
            playing={true}
            controls={controls}
            events={{
              onMouseOver: () => {toggle}
            }}
          />
      </div>
      </div>
      
    );   
}

export default App;