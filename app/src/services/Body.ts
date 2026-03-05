export class CelestialBody {
  private readonly _body: any;
  name: string;

  constructor(body: unknown) {
    this._body = body;
    this.name = this._body['entry']['name'];
    console.log(this._body);
  }

  getDistanceFromEarthInKm(): number {
    return this._body['cells'][0]['distance']['fromEarth']['km'];
  }

  getDistanceFromEarthInAU(): number {
    return this._body['cells'][0]['distance']['fromEarth']['au'];
  }

  /**
   * Up / Down
   * @returns {*}
   */
  getAltitudeInDeg(): number {
    return this._body['cells'][0]['position']['horizontal']['altitude'][
      'degrees'
    ];
  }

  /**
   * Left / Right
   * 0° = North, 90° = East, 180° = South, 270° = West
   * @returns {*}
   */
  getAzimuthInDeg(): number {
    return this._body['cells'][0]['position']['horizontal']['azimuth'][
      'degrees'
    ];
  }
}