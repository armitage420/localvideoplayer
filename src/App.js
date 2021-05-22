import React, {useState} from 'react';
import ReactPlayer from 'react-player';
import classes from './App.css';

function App(){
    const [videoFilePath, setVideoFilePath] = useState("cakebytheocean.mp4");

    return(
        <div>
        {videoFilePath ? (
          <ReactPlayer
            className={classes.reactPlayer}
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