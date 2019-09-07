import React, { Component } from 'react';
import maze from './bug-maze.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      id: 0,
      start: 0,
      end: 0,
      startNode: 0,
      endNode: 0,
      path: ""
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/mazes')
    .then(response => response.json())
    .then(response => {
      this.setState({
        id: response[0].id,
        startNode: response[0].start,
        endNode: response[0].end,
        path: response[0].path
      })
    })
  }

  handleStartChange = event => {
    this.setState({
      start: event.target.value
    });
  }

  handleEndChange = event => {
    this.setState({
      end: event.target.value
    });
  }

  handleSolveSubmit = event => {
    const url = `http://localhost:3000/mazes/${this.state.id}`

    event.preventDefault();

    const maze = {
      start: this.state.start,
      end: this.state.end
    }

    fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(maze)
    })
    .then(response => response.json())
    .then(response => {
      this.setState({
        startNode: response.start,
        endNode: response.end,
        path: response.path
      })
    })
  }
  render() {
    return (
      <div className="container">
        <h1>The Spider's Web</h1>
        <p>I.B. Spider (better known to us as the itsy bitsy spider) has spun this web and caught a whole lot of disgusting but quite yummy bugs. One day he sees that a lady spider has entered his web. I.B. decides to go over to the lady spider and ask her out for dinner.</p>
        <p>I.B. Spider has a problem, though. He can only travel around his web by making a series of moves. Each move must be in a straight line, and each move must travel over two bugs and end at the third bug. (Despite the best efforts of many scientists, exactly why this breed of spiders moves in this way is still unknown.)</p>
        <p>I.B. begins at the upper left. From there his first move will take him to the bug marked Bug A. He is now at an intersection and his next move could take him forward to Bug B, or he could go south to Bug C, or he could move southwest to Bug D.</p>
        <p>The lady spider is at the bottom of the. web. I.B. must reach her at the end of a move; therefore, he must somehow find his way to Bug E, which is the third bug away from the lady spider.</p>
        <p>So: how can I.B. Spider use his maze-threading abilites to reach the lady spider? And will she really have dinner with him?</p>
        <img src={maze} alt="Bug Maze"/>

        <p>Start Bug: {this.state.startNode}; End Bug: {this.state.endNode}</p>
        <p>{this.state.path}</p>

        <form onSubmit={this.handleSolveSubmit}>
          <div className="form-group">
            <label htmlFor="start">Start:</label>
            <input
                  type="text"
                  className="form-control"
                  id="start"
                  value={this.state.start}
                  onChange={this.handleStartChange}
            />
            </div>

          <div className="form-group">
            <label htmlFor="end">End:</label>
            <input
                  type="text"
                  className="form-control"
                  id="end"
                  value={this.state.end}
                  onChange={this.handleEndChange}
            />
            </div>

            <button type="submit" className="btn btn-primary m-2">Solve</button>
        </form>
      </div>
      );
  }
}

export default App;
