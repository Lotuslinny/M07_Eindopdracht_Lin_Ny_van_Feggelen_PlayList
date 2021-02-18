import React from "react";
import SongFormInput from "./SongFormInput";

const SongForm = (props) => {
  return (
    <div className="song-form_input">
      <form /* onSubmit={props.handleSubmit} */ >
        <SongFormInput
          key={props.id}
          type={props.type}
          title={props.title}
          value={props.value}
        />
      </form>
      <button>Add Song</button>
    </div >
  )
}
export default SongForm;