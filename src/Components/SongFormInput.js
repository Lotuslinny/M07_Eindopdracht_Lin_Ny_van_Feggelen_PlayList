import React from "react";

const SongFormInput = (props) => {
  return (
    <div className="song-form-input">
      <label>Song</label>
      <input className="song-form-input__song"
        key={props.id}
        type={props.type}
        title={props.title}
        value={props.value}
      ></input>
      <label>Artist</label>
      <input className="song-form-input__artist"
        key={props.id}
        type={props.type}
        title={props.title}
        value={props.value}
      ></input>
      <label>Genre</label>
      <input className="song-form-input__genre"
        key={props.id}
        type={props.type}
        title={props.title}
        value={props.value}
      ></input>
      <label>Rating</label>
      <input className="song-form-input__rating"
        key={props.id}
        type={props.type}
        title={props.title}
        value={props.value}
      ></input>
    </div>
  )
}
export default SongFormInput;