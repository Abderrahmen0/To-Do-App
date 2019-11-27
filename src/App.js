import React from "react";
import "./App.css";
import Header from "./Components/Header";
import List from "./Components/List";
class App extends React.Component {
  constructor() {
    super();
    this.state ={list: [
      {desc:'',isCompleted:false},
      {desc:'',isCompleted:false}
      
    ]};
  }
  removeFunction=(index)=>{
    let newState=this.state.list
    newState.splice(index,1)
    this.setState(
      {list:newState}
    )
    }
    linethroughFunction=(index)=>{
    let newState=this.state.list
    newState[index].isCompleted=true 
    
    this.setState(
      {list:newState}
    )
  console.log('lineThroughFunction',this.state)
  }
  addFunction=(param)=>{
    let newState= this.state.list
    console.log('newState',newState)
    newState.push({desc:param,isCompleted:false})
    this.setState(
      {
        list:newState
      }
    )
  }


 
  render() {
    return (
      <div>
        <Header addFunction={this.addFunction} />
        <List list={this.state.list} linethroughFunction={this.linethroughFunction} removeFunction={this.removeFunction}/>
      </div>
    );
  }
}

export default App;
