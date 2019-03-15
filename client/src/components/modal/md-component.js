import React from 'react'

import './md-style.css'

function Mdl(props) {
    if (props.active) {
        return (
            <div className="modal border-box-gl flex-container-gl">
                <form className="border-box-gl flex-container-gl">
                    <div className="close-form border-box-gl flex-container-gl" onClick={props.closeModal}>
                        <p>X</p>
                    </div>
                    <div>stuff and things!</div>
                </form>
            </div>
        )
    }
    else {
        return null
    }
}

export default Mdl