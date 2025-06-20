import './Handle.scss'
import {useState} from "react";

function Handle({hiddenText, visibleText, isActive, toggleHandle}) {
    const [isHandleOn, setIsHandleOn] = useState(false)

    return (
        <div className='main__about-line'>
            <div onClick={toggleHandle}
                 className={`main__about-line-handle ${isActive || isHandleOn ? 'open' : null}`}>
            </div>
            <div className="main__about-line-text-container">
                <div className={`main__about-line-text ${isActive ? 'visible' : ''}`}>
                    {visibleText}
                </div>
                <div className={`main__about-line-text ${!isActive ? 'visible' : ''}`}>
                    {hiddenText}
                </div>
            </div>
        </div>
    )
}

export default Handle