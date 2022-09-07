import React from 'react'

function Count(props) {
    

    const style1={
        backgroundColor:props.on?"#222222":"transparent"
    }

  return (
    <div>
    <div>{props.number}</div>
   <div className='box' style={style1} key={props.id} onClick={()=>(props.toggle(props.id))}></div>

    </div>
  )
}

export default Count