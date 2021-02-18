import React from "react";

const SongRowItems = (props) => {
  <div className="song-row-items">
    <table >
      <tr className="song-row-items__header">
        <th className="song-row-items__item" songs={props.songs} >Song</th>
        <th className="song-row-items__item" songs={props.songs} >Artist</th>
        <th className="song-row-items__item" songs={props.songs} >Genre</th>
        <th className="song-row-items__item" songs={props.songs} >Rating</th>
      </tr>
    </table>
  </div>
}

export default SongRowItems;