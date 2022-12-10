import React from 'react'
import Nav from './Nav'

const Header = () => {
    const backgroundImage = {
        backgroundImage: 'url(img/img.png)',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
    return (
        <header>
            <Nav />
            <div
                className="home"
                style={backgroundImage}>
                <h2>Watch something incredible.</h2>
            </div>
        </header>
    )
}

export default Header