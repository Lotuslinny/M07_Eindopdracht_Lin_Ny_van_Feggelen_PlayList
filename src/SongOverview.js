import React from "React";
import SongForm from "./Components/SongForm";
import SongList from "./Components/SongList";

class SongOverview extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      songs: []
    }
    this.addSong = this.addSong.bind(this);
  }

  addSong = (song) => {
    // doe iets om de state aan te passen
    console.log("Hello!")
  }

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <SongList songs={this.state.songs} />
      </div>
    );
  }
}

export default SongOverview;