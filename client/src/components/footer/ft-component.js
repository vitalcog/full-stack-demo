import React from 'react'

import './ft-style.css'

function Foot() {
    return(
        <footer className="border-box-gl flex-container-gl footer">
            <div className="footer-child left">stuff and things here</div>
            <div className="footer-child right">
                <a href="https://github.com/vitalcog/pPortDemo" target="blank">Check it out!</a>
            </div>
        </footer>
    )
}

export default Foot