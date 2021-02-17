import React from "react";
import SongFormItems from "./SongFormItems";

const SongForm = (props) => {
  return (
    <div className="song-form-items">
      <table items={props.songs} >

        <tr className="song-form-items__header">
          <SongFormItems key={props.id} />

        </tr >

      </table>
    </div>
  )
}
export default SongForm;