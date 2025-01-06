import React from 'react'
import "./styles.css"
const Averages = () => {
    return (
        <div className="average-container">
            <div className="average-stat-box">
                <p>PTS</p>
                <button>25.7</button>
            </div>
            <div className="average-stat-box">
                <p>REB</p>
                <button>12.5</button>
            </div>
            <div className="average-stat-box">
                <p>AST</p>
                <button>4.3</button>
            </div>
        </div>
    )
}

export default Averages