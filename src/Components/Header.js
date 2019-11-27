import React from "react";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       input:'' 
    };
  }
  
  changeHandler=(e)=>{this.setState({input:e.target.value})}
  render() {
    return (
      <div>
        <div className="bg-info m-5 ">
          <div className="p-5 mx-5 ">
            <h1 className="text-right text-white font-weight-bold ">To-Do-App!</h1>
            <p className="text-right text-white font-weight-bold ">Add New To-Do</p>
            <input
              type="text"
              className="form-control text-info "
              id="valid"
              placeholder="Enter New Task"
              onChange={(e)=>this.changeHandler(e)}
            />
            <button
              id="addbtn"
              type="button"
              className="btn btn-info font-weight-bold text-white mt-3"
              onClick={()=>this.props.addFunction(this.state.input)}
            >
              Add
            </button>
          </div>
        </div>
        
          </div>
    );
  }
}
