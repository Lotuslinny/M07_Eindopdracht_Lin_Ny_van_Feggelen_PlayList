import React from "react";
import SongForm from "./Components/SongForm";
//import SongList from "./Components/SongList";
console.log("************")

class SongOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songFormInput: [{
        type: "songFormInput", id: 1, title: "Song", value: " "
      }]
    }
    {
      // songs: [{ type: "songs", id: 1, title: "hello", artist: "Lionel", genre: "love", rating: "5" }]
    }
    //this.addSong = this.addSong.bind(this);
    //this.handleClickForm = this.handleClickForm.bind(this);
  }

  /* addSong = (song) => {
    // doe iets om de state aan te passen
    console.log(song = "Hello!") }*/

  /* handleClickForm = (song) => {
    // doe iets om de state aan te passen
    console.log(song = "Hello!")
  } */

  render() {
    return (
      < div >
        <SongForm items={this.songFormInput} //addSong={this.addSong}
          /* handleClickForm={this.handleClickForm} */ />
        {/* <SongList songs={this.state.songs} />   */}
      </div >

    )
  }
}


export default SongOverview;