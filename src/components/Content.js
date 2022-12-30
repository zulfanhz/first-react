import React from 'react'
import Picture from '../assets/pic.png'

const Content = () => {
    return (
        <div>
            <div className="content">
                <button className="anim">A SIMPLE APP</button>
                <h1 className="anim">Browse all assets smoothly.</h1>
                <p className="anim">Your solution to organizing design assets.</p>
                <div className="btnleft">
                    <a href="#" className="btn anim">Join Now</a>
                    <a href="#" className="btn anim">Watch Now</a>
                </div>
            </div>
            <img src={Picture} className="img anim" />
        </div>
    )
}

export default Content