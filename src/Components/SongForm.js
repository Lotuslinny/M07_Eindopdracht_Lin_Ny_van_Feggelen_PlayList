import React from "react";
//import SongFormItems from "./SongFormItems";

const SongForm = (props) => {
  {/* <div className="song-form">
    { SongFormItems className="song-form__items" }
    <p></p>
    <h1> {props.items}
      { addSong={props.addSong} }</h1>
    { <button className="song-form__button"
      onClick={props.handleClickForm}
    >Add Song</button> }
  </div>
} */}
  return (
    <div className="song-form-items">
      <table items={props.songs} >
        <tr className="song-form-items__header">
          <th className="song-form-items__item"
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
        </th>
        </tr>
      </table>
    </div>
  )
}
export default SongForm;