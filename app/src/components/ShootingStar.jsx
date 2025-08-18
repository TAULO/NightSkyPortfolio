import {useCallback, useState, useEffect} from "react";

function randomPosTopHalf(containerElement) {
    if (!containerElement) return {x: 0, y: 0};

    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;

    const x = Math.random() * containerWidth;
    const y = (Math.random() * containerHeight) / 2;

    return {x, y}
}

function randomAnimationDelay() {
    return Math.random() * 6;
}

function randomAnimationDuration() {
    return Math.random() * 4 + 2;
}

const ShootingStar = ({starContainerRef}) => {
    const [position, setPosition] = useState(() => randomPosTopHalf(starContainerRef));
    const [delay, setDelay] = useState(() => randomAnimationDelay());
    const [duration, setDuration] = useState(() => randomAnimationDuration());

    const [key, setKey] = useState(0); // Add key to force re-render

    const handleAnimationEnd = useCallback(() => {
        setPosition(randomPosTopHalf(starContainerRef));
        setDelay(randomAnimationDelay());
        setDuration(randomAnimationDuration());

        setKey(prev => prev + 1);
    }, [starContainerRef]);

    return (
        <>
            <div
                key={key}
                className="shooting-star-container"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    animationDelay: delay + 's',
                    animationDuration: duration + 's',
                    opacity: 0
                }}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className="shooting-star-dot" style={{width: '1.78701px', height: '1.78701px'}}></div>
                <div className="shooting-star-trail"
                     style={{
                         width: '51.4803px',
                         transform: 'rotate(50.5597deg)',
                         transformOrigin: 'right center'
                     }}></div>
            </div>
        </>
    )
}

export default ShootingStar