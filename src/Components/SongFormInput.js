import React from "react";

const SongFormInput = (props) => {
  return (
    <div className="song-form-input">
      <input className="song-form-input__song"
        key={props.id}
        type={props.type}
        title={props.title}
        value={props.value}
      ></input>
      <input className="song-form-input__artist"
        key={props.id}
        type={props.type}
        title={props.title}
        value={props.value}
      ></input>
      <input className="song-form-input__genre"
        key={props.id}
        type={props.type}
        title={props.title}
        value={props.value}
      ></input>
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