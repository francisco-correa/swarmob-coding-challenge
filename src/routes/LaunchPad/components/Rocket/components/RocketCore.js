import React from 'react';
import '../styles/_rocket.scss';

const SECONDS_TO_TAKEOFF = 5;
const MS_TO_TAKEOFF = SECONDS_TO_TAKEOFF * 1000;
const FINAL_POSITION_BOTTOM_VAL = 'calc(400px)';

function timeToPositionPercent(startTime) {    
    const now = Date.now();
    const timeDiff = now - startTime;

// separate function with different variables

    if (timeDiff >= MS_TO_TAKEOFF) { return FINAL_POSITION_BOTTOM_VAL; }
    let percentage = (timeDiff / MS_TO_TAKEOFF) * 100
    const range_max = 0
    percentage = percentage >= range_max ? range_max : percentage
    const launchRocket = `calc(400px + ${(percentage).toFixed(0)}%)`;
    console.log(launchRocket, "<--rocket")
    return launchRocket

}

function generateEmptyListEls(quantity) {
    return [...Array(quantity)].map((num) => <li key={num}></li>);
}

export default function RocketCore({ initialLaunchTime }) {
    return (
        <>
            <div className="rocket" style={{ bottom: timeToPositionPercent(initialLaunchTime) }}>
                <div className="rocket__body">
                    <div className="rocket__body__main" />
                    <div className="rocket__body__fin rocket__body__fin__left" />
                    <div className="rocket__body__fin rocket__body__fin__right" />
                    <div className="rocket__body__window" />
                </div>
                <div className="rocket__exhaust__flame" />
                <ul className="rocket__exhaust__fumes">
                    {generateEmptyListEls(9)}
                </ul>
            </div>
            <ul className="stars">
                {generateEmptyListEls(7)}
            </ul>
        </>
    );
}
