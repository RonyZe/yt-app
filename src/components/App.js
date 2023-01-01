import React from "react";
import SearchBar from "./SearchBar";
// import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { useState, useEffect } from "react";
import useVideos from "../hooks/useVideos";

const App = () => {
  // const [videos, setVideo] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [videos, search] = useVideos("Imran Khan");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // setSelectedVideo(response.data.items[0]);
  // useEffect(() => {
  //   onTermSubmit("Imran Khan");
  // }, []);

  // const onTermSubmit = async (term) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });

  //   // console.log(response);
  //   // console.log(response.data.items);

  //   setVideo(response.data.items);
  //   setSelectedVideo(response.data.items[0]);
  // };

  // const onVideoSelect = (video) => {
  //   // console.log("From the App:", video);
  //   setSelectedVideo(video);
  // };

  //This thing below is equalent to when we have only one argument
  //(video)=>setSelectedVideo(video) = setSelectedVideo

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onFormSubmit={search} />
      {/* I have {this.state.videos.length} videos. */}

      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
