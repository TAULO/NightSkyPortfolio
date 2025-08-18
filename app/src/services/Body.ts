import bodies from "./Bodies.js";

const sun = bodies[0];
const moon = bodies[1];
const mercury = bodies[2];
const venus = bodies[3];
const earth = bodies[4];
const mars = bodies[5];
const jupiter = bodies[6];
const saturn = bodies[7];
const uranus = bodies[8];
const neptune = bodies[9];
const pluto = bodies[10];

class CelestialBody {
    private readonly _body: any;

    constructor(body) {
        this._body = body
    }

    getName() {
        return this._body['entry']['name'];
    }

    getDistanceFromEarthInKm() {
        return this._body['cells'][0]['distance']['fromEarth']['km'];
    }

    /**
     * Up / Down
     * @returns {*}
     */
    getAltitudeInDeg() {
        return this._body['cells'][0]['position']['horizontal']['altitude']['degrees'];
    }

    /**
     * Left / Right
     * 0° = North, 90° = East, 180° = South, 270° = West
     * @returns {*}
     */
    getAzimuthInDeg() {
        return this._body['cells'][0]['position']['horizontal']['azimuth']['degrees'];
    }
}


export class Sun extends CelestialBody {
    constructor() {
        super(sun);
    }
}

export class Moon extends CelestialBody {
    constructor() {
        super(moon);
    }
}

export class Mars extends CelestialBody {
    constructor() {
        super(mars);
    }
}