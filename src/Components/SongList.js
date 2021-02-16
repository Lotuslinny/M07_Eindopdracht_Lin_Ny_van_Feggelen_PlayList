import React from "react";
import Songs from "./Songs";

const SongList = (props) => {
  <div className="song-list">
    <Songs songs={props.songs} />
    <button className="delete-button"></button>
  </div>
}

export default SongList;