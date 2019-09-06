import React from 'react';
import maze from './bug-maze.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>The Spider's Web</h1>
      <p>I.B. Spider (better known to us as the itsy bitsy spider) has spun this web and caught a whole lot of disgusting but quite yummy bugs. One day he sees that a lady spider has entered his web. I.B. decides to go over to the lady spider and ask her out for dinner.</p>
      <p>I.B. Spider has a problem, though. He can only travel around his web by making a series of moves. Each move must be in a straight line, and each move must travel over two bugs and end at the third bug. (Despite the best efforts of many scientists, exactly why this breed of spiders moves in this way is still unknown.)</p>
      <p>I.B. begins at the upper left. From there his first move will take him to the bug marked Bug A. He is now at an intersection and his next move could take him forward to Bug B, or he could go south to Bug C, or he could move southwest to Bug D.</p>
      <p>The lady spider is at the bottom of the. web. I.B. must reach her at the end of a move; therefore, he must somehow find his way to Bug E, which is the third bug away from the lady spider.</p>
      <p>So: how can I.B. Spider use his maze-threading abilites to reach the lady spider? And will she really have dinner with him?</p>
      <img src={maze} alt="Bug Maze"/>
    </div>
  );
}

export default App;
