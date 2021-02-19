import React from "react";
import Songs from "./Songs";

const SongList = (props) => {
  return (
    <div className="song-list">
      <Songs key={props.id}
        type={props.type}
        title={props.title}
        artist={props.artist}
        genre={props.genre}
        rating={props.rating} />
      {/* <button className="delete-button"></button> */}
    </div>
  )
}

export default SongList;

{/* <div className="song-form-items">
      <table items={props.songs} >
        <thead>
          <tr className="song-form-items__header" >
            {<SongFormItems key={props.id} /> }
            <th ><span className="song-form-item__song">Song</span>
              {addSong={props.addSong}
           }
            </th>
            {<input value="hello">
            </input> }

            <th><textarea className="song-form-item__artist">Artist</textarea>
              { addSong={props.addSong} }

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
      </table >
      <button>Add Song</button>
    </div >
  ) */}