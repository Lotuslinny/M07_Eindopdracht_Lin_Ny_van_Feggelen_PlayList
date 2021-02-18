import React from "react";
//import SongFormItems from "./SongFormItems";

const SongForm = (props) => {
  return (
    <div className="song-form_input">
      <form /* onSubmit={props.handleSubmit} */ >
        <input className="song-form-item__song"
          key={props.id}
          type={props.type}
          title={props.title}
          value={props.value}
        ></input>
      </form>
      <button>Add Song</button>
    </div >
  )
}
export default SongForm;