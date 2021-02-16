import React from "react";

const SongFormItems = (props) => {
  <div className="song-form-items">
    <table style="width:100%">
      <tr className="song-form-items__header">
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
      </tr>
    </table>
  </div>
}

export default SongFormItems;

