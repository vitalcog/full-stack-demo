import React from 'react'

import './ao-style.css'

function AddOne(props) {
    return (
        <div onClick={props.openModal} className="add-one border-box-gl flex-container-gl">+</div>
    )
}

export default AddOne