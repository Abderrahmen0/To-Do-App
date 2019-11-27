import React from "react";


export default function Item(props) {
  console.log(props);
  return (
    <div>
      <button onClick={()=> props.linethroughFunction(props.cle)} > {props.isComplete?'undo' :'Complete'}</button>
      <button onClick={() => props.removeFunction(props.cle)}>Delete</button>
      <span className={props.isComplete? 'undo':''} >{props.item}</span>
    </div>
  );
}
