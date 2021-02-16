import React from "react";
import SongFormItems from "./SongFormItems";

const SongForm = (props) => {
  <div className="song-form">
    <SongFormItems className="song-form__items"
      items={props.items}
      addSong={props.addSong} />
    <button className="song-form__button"
      onClick={props.handleClickForm}
    >Add Song</button>
  </div>
}

export default SongForm;