import React, { Component } from 'react';
import Status from './components/Status'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      board:Array(9).fill(null),
      player:null,
      winner:null
    }
   
  }
  handleWinner(){
    let list = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    this.checkMatch(list)
  }

 checkMatch(list) {
    for (let index = 0; index < list.length; index++) {
      const [a, b, c] = list[index];
      let board = this.state.board
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
       
        this.setState({
          winner: this.state.player
        })
        
      }
    }
  }

  setPlayer(player){
    this.setState({
      player
    })
  }

 handleClick(index){
   if(this.state.player && !this.state.winner ){
           let newboard = this.state.board;
           let newplayer = this.state.player;
    newplayer=this.state.player==="X" ?"O":"X";
    if(newboard[index]==null){
        newboard[index]=this.state.player;
        this.setState({
        board:newboard,
        player:newplayer
    })
    this.handleWinner();
    }
   }
   
    
  }
  reset(){
    this.setState({
      player:null,
      winner:null,
      board:Array(9).fill(null)

    })
  }
  renderBoxes(){
    return this.state.board.map((box,index) =>
      <div className="box" 
           key={index}
           onClick={()=> this.handleClick(index)}>
           {box}
      </div>)
  }
  render() {
    
   
    
    return (
      <div className="App">
      <Status player={this.state.player}
              setPlayer={(e)=>this.setPlayer(e)}
              winner={this.state.winner}/>
      <div className="board">
        {this.renderBoxes()}
         
      </div>
      <button onClick={()=>this.reset()}>Reset</button>
      </div>
    );
  }
}

export default App;
