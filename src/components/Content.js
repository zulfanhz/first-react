import React from 'react'
import ContentCSS from './Content.module.css'
import Picture from '../assets/pic.png'

const Content = () => {
    return (
        <div>
            <div className={ContentCSS.content}>
                <button>A SIMPLE APP</button>
                <h1 className={ContentCSS.anim}>Browse all assets smoothly.</h1>
                <p className={ContentCSS.anim}>Your solution to organizing design assets.</p>
                <div className={ContentCSS.btnleft}>
                    <a href="#" className={ContentCSS.btn}>Join Now</a>
                    <a href="#" className={ContentCSS.btn}>Watch Now</a>
                </div>
            </div>
            <img src={Picture} className={ContentCSS.img} />
        </div>
    )
}

export default Content