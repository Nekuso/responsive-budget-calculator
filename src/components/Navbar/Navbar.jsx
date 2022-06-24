import React from 'react'
import "../../Styles/dist-css/Navbar.css"

export default function Navbar() {

    function play() {
        var audio = new Audio("sound/click.mp3")
        audio.play()
    }

    return (
        <div className="navbar">
            <h1>CalcMe</h1>
            <a onClick={play()} href="https://github.com/Nekuso" target="_blank"><i class='bx bxl-github'></i>Github</a>
        </div>
    )
}
