import React from 'react'

import './nc-style.css'

function NumChild(props) {

  return (
    <div className="number-child border-box-gl flex-container-gl">
      {props.value}
    </div>
  )
}

export default NumChild