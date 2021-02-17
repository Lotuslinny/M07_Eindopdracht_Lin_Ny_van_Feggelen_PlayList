import React from "react";

const SongFormItem = (props) => {
  return (
    <div className="song-form-items">
      <th className="song-form-items__item"
        addSong={props.addSong}
      >Song
        </th>
      <th className="song-form-items__item"
        addSong={props.addSong}
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
    </div >
  )
}

export default SongFormItem;

