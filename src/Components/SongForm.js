import React from "react";
import SongFormItem from "./SongFormItem";

const SongForm = (props) => {
  return (
    <div className="song-form-items">
      <table items={props.songs} >
        <tr className="song-form-items__header">
          <SongFormItem key={props.id} />
          {/* <th className="song-form-items__item"
          //addSong={props.addSong}
          >Song
        </th>
          <th className="song-form-items__item"
          //addSong={props.addSong}
          >Artist
        </th>
          <th className="song-form-items__item"
            addSong={props.addSong}
          >Genre
        </th>
          <th className="song-form-items__item"
            addSong={props.addSong}
          >Rating
        </th> */}
        </tr>
      </table>
    </div>
  )
}
export default SongForm;