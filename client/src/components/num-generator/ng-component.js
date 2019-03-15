import React from 'react'
import NumberChild from './num-child/nc-component'

import './ng-style.css'

function NumGen(props) {

  function childComponentNumber(min, max) {
    // We want integers not floats yo...
    min = Math.ceil(min)
    max = Math.floor(max)

    //The maximum & minimum are possible values
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  function generateChildComponents(arg) {
    let childArray = []
    for(let i = 0; i < arg; i++) {
      childArray.push(<NumberChild value={childComponentNumber(props.min, props.max)} key={i}/>)
    }
    return childArray
  }

  return (
    <div className="numgen-wrapper border-box-gl flex-container-gl">
      {props.name}
      <div className="child-component-wrapper border-box-gl flex-container-gl">
        {generateChildComponents(props.howMany)}
      </div>
    </div>
  )
}


export default NumGen
