import React from "react";
import video from "../data/video.js";
import VideoPlayer from "./VideoPlayer.js";
import Details from "./Details.js";

function App() {
  //console.log("Here's your data:", video);

  return (
    <div className="ui container App">
      <div className="">
        <VideoPlayer video={video} />
      </div>
      <div>
        <h1 className="ui header">{video.title}</h1>
      </div>
      <div>
        <Details video={video} />
      </div>
    </div>
  );
}

export default App;
