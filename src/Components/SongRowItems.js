import React from "react";

const SongRowItems = (props) => {
  <div className="song-row-items">
    <table style="width:100%">
      <tr className="song-row-items__header">
        <th className="song-row-items__item">Song</th>
        <th className="song-row-items__item">Artist</th>
        <th className="song-row-items__item">Genre</th>
        <th className="song-row-items__item">Rating</th>
      </tr>
    </table>
  </div>
}

export default SongRowItems;