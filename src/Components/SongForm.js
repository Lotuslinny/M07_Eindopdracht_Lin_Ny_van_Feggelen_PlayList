import React from "react";
//import SongFormItems from "./SongFormItems";

const SongForm = (props) => {
  return (
    <div className="song-form-items">
      <table items={props.songs} >
        <thead>
          <tr className="song-form-items__header">
            {/* <SongFormItems key={props.id} /> */}
            <th className="song-form-item__song"
            //addSong={props.addSong}
            >Song
        </th>
            <th className="song-form-item__artist"
            //addSong={props.addSong}
            >Artist
        </th>
            <th className="song-form-item__genre"
            //addSong={props.addSong}
            >Genre
        </th>
            <th className="song-form-item__rating"
            //addSong={props.addSong}
            >Rating
        </th>


          </tr >
        </thead>
      </table>
    </div>
  )
}
export default SongForm;