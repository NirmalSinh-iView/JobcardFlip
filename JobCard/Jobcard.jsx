import React from 'react'
import ReactCardFlip from 'react-card-flip';
import Frontside from '../Frontside/Frontside';
import Backside from '../Backside/Backside';
import "./jobcard.css"
import { useState } from 'react';
const Jobcard = ({direction}) => {
    const [isFlipped, setisFlipped] = useState(false)
    return (
        <div className='mx-4 my-2 flipcard'>
            <ReactCardFlip isFlipped={isFlipped} flipDirection={direction} flipSpeedBackToFront="1" flipSpeedFrontToBack="1">
                <Frontside setisFlipped={setisFlipped} />
                <Backside setisFlipped={setisFlipped} />
            </ReactCardFlip>

        </div>
    )
}

export default Jobcard
