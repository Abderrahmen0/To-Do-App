import React from 'react'
import Item from './item'

export default function List(props) {
    return (
        <div>
            {
                props.list.map((el,i)=><Item item={el.desc} isComplete={el.isCompleted} cle={i} key={i}  linethroughFunction={props.linethroughFunction} 
                removeFunction={props.removeFunction} />)
            }
        </div>
    )
}
