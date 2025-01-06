import React from 'react'
import viteLogo from '/vite.svg'
import { useState } from 'react'
import { wembyImg } from '../constants'
import Averages from './Averages'
import "./styles.css"
const MainPlayer = () => {
    const [isRecentDisplayed, setIsRecentDisplayed] = useState(false)
    const [isOpponentDisplayed, setIsOpponentDisplayed] = useState(false)

    const handleRecentClicked = () => {
        setIsRecentDisplayed(!isRecentDisplayed);
        setIsOpponentDisplayed(false);
    }

    const handleOpponentClicked = () => {
        setIsOpponentDisplayed(!isOpponentDisplayed);
        setIsRecentDisplayed(false);
    }
    return (
        <>
            <div className="main-player-box">
                <div>
                    <img src={wembyImg} className="headshot" alt="Player headshot" />
                </div>
                <div>
                    <p className="primary-text"> Player Name</p>
                    <p className="secondary-text">Team Name</p>
                </div>
                <div style={{ flexDirection: 'row' }}>
                    <button className={isRecentDisplayed ? "primary" : "secondary"} onClick={() => handleRecentClicked()}>
                        Last 5 games
                    </button>
                    <button className={isOpponentDisplayed ? "primary" : "secondary"} onClick={() => handleOpponentClicked()}>
                        vs Boston
                    </button>
                </div>
            </div >
            {isRecentDisplayed ? <p>recents</p> :
                isOpponentDisplayed ? <p>opponents</p> :
                    <Averages />}
        </>
    )
}

export default MainPlayer