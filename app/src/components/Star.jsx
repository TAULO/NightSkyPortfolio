function randomSize() {
    const size = Math.random() * 2 + 1;
    return {height: size, width: size}
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

const Star = ({ starContainerRef, name }) => {
    const {height, width} = randomSize();
    const {x, y} = randomPos(starContainerRef);
    const delay = randomAnimationStartDelay();
    const opacity = randomOpacity();

    return (
        <>
            <div style={{
                width: `${height}px`,
                height: `${width}px`,
                left: `${x}px`,
                top: `${y}px`,
                animationDelay: `${delay}s`,
                opacity,
            }} className={'star'}></div>
        </>
    )
}

export default Star