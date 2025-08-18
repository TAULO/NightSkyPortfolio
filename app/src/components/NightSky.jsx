import Star from "./Star.jsx";
import {useEffect, useRef, useState} from "react";
import ShootingStar from "./ShootingStar.jsx";

const STARS_COUNT = 200;
const SHOOTING_STARS_COUNT = 3;

const NightSky = () => {
    const starContainerRef = useRef(null);
    const [stars, setStars] = useState([]);
    const [shootingStars, setShootingStars] = useState([]);

    useEffect(() => {
        if (starContainerRef.current) {
            setStars(Array.from({length: STARS_COUNT}).map((_, i) => (
                <Star key={i} starContainerRef={starContainerRef.current}/>
            )));

            setShootingStars(Array.from({length: SHOOTING_STARS_COUNT}).map((_, i) =>
                <ShootingStar key={i} starContainerRef={starContainerRef.current}/>
            ));
        }
    }, []);

    return (
        <div className={'absolute inset-0 size-full'} ref={starContainerRef}>
            {stars}
            {shootingStars}
        </div>
    )
}

export default NightSky