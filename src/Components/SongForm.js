import React from "react";
import SongFormItems from "./SongFormItems";

const SongForm = (props) => {
  <div className="song-form">
    <SongFormItems addSong={props.addSong} />
    <button>Add Song</button>
  </div>
}

export default SongForm;