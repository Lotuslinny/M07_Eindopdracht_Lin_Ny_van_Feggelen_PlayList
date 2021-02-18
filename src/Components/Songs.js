import React from "react";
//import SongRowItems from "./SongRowItems";

const Songs = (props) => {
  return (
    <div className="songs">
      <table >
        <tbody>
          <tr className="songs__header">
            <th className="songs__title" key={props.id} value={props.title}></th>
            <th className="songs__artist" key={props.id} >Artist</th>
            <th className="songs__genre" key={props.id} >Genre</th>
            <th className="songs__rating" key={props.id} >Rating</th>

          </tr>
        </tbody>
      </table>
      <h1>Hello</h1>
    </div>
  )
}

export default Songs;