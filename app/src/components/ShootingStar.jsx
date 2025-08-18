import {useCallback, useState} from "react";

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

function randomSize() {
    return Math.random() + 1;
}

const ShootingStar = ({starContainerRef}) => {
    const [position, setPosition] = useState(() => randomPosTopHalf(starContainerRef));
    const [delay, setDelay] = useState(() => randomAnimationDelay());
    const [duration, setDuration] = useState(() => randomAnimationDuration());
    const size = randomSize();

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
                className={"absolute size-2 animate-shooting-star"}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    animationDelay: delay + 's',
                    animationDuration: duration + 's',
                    opacity: 0
                }}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className={"absolute bg-white rounded-full shadow-[0_0_4px_1px_hsla(0,0%,100%,.5)] z-10"}
                     style={{width: `${size}px`, height: `${size}px`}}
                >
                </div>
            </div>
        </>
    )
}

export default ShootingStar