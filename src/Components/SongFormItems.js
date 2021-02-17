import React from "react";

const SongFormItems = (props) => {
  return (
    <div className="song-form-item">


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

    </div >
  )
}

export default SongFormItems;

