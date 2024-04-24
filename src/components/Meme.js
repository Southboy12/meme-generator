import React, { useState } from "react";
import data from '../memeData'

document.querySelector('button')

export default function Meme() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = useState(data)
    function getMeme(event) {
        event.preventDefault()
        const memeArray = allMemeImages.data.memes
        const randomIndex = Math.floor(Math.random() * memeArray.length)
        const url = memeArray[randomIndex].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }



    return (
        <div>
             <form>
                <div className="form__input">
                    <input type="text"/>
                    <input type="text"/>
                </div>
                <button onClick={getMeme}>Get a new meme image</button>
             </form>
             <div className="img">
                <img src={meme.randomImage} alt="meme"/>
             </div>
        </div>
    )
}
