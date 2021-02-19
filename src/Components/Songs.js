import React from "react";
//import SongRowItems from "./SongRowItems";

const Songs = (props) => {
  return (
    <div className="songs">
      <table >
        <tbody /* key={props.id} type={props.type} title={props.title} artist={props.artist} genre={props.genre} rating={props.rating} */>

          <tr className="songs__header" key={props.id} type={props.type} title={props.title} artist={props.artist} genre={props.genre} rating={props.rating}>
            <th className="songs__title" >{props.title}</th>
            <th className="songs__artist" key={props.id} ><h1>{props.artist}</h1></th>
            <th className="songs__genre" key={props.id} >Genre</th>
            <th className="songs__rating" key={props.id} >Rating</th>
          </tr>
        </tbody>
      </table>
      <h1>Hello</h1>
    </div >
  )
}

export default Songs;