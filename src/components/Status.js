import React,{Component} from 'react'
import Player from './choosePlayer'
class Status extends Component{
  handlePlayer(e){
    this.props.setPlayer(e);
  }
  renderHtml(){
    if(this.props.winner){
      return (<h2>Winner is {this.props.winner}</h2>)
    }
    else{
      return (this.props.player?<h1>Next Player is {this.props.player}</h1>:<Player player={(e)=>this.handlePlayer(e)}/>)
    }
  }
  render(){
    return( <span>{this.renderHtml()}</span>)
      
      
      
    
  }
}
export default Status
