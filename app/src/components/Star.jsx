function randomSize() {
    return Math.random() * 2 + 1;
}

function randomPos(containerElement) {
    if (!containerElement) return {x: 0, y: 0};

    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;

    const x = Math.random() * containerWidth;
    const y = Math.random() * containerHeight;

    return {x, y}
}

function randomAnimationStartDelay() {
    return Math.random() * 8;
}

function randomOpacity() {
    return Math.random() * 0.75 + 0.25;
}

const Star = ({starContainerRef, name}) => {
    const size = randomSize();
    const {x, y} = randomPos(starContainerRef);
    const delay = randomAnimationStartDelay();
    const opacity = randomOpacity();

    return (
        <>
            <div style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${x}px`,
                top: `${y}px`,
                animationDelay: `${delay}s`,
            }} className={"absolute bg-white rounded-full animate-twinkle opacity-0"}>
            </div>
        </>
    )
}

export default Star