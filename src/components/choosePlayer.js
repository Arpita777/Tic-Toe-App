import React,{Component} from 'react'
class Player extends Component{
  handleSubmit(e){
    e.preventDefault();
    this.props.player(e.target.player.value)
  }
  render(){

    return(
      <form onSubmit={(e)=> this.handleSubmit(e)}>
         <label>Player X</label>
         <input type="radio" name="player" value="X" />
          <label>Player O</label>
         <input type="radio" name="player" value="O" />
         <input type="submit" value="start" />
         
      </form>
    )
  }
}
export default Player
