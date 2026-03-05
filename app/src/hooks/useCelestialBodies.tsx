import { useState, useEffect } from 'react';
import { fetchBodiesPositions } from '../services/Bodies.js';
import { CelestialBody } from '../services/Body.ts';

export function useCelestialBodies(intervalMs = 30000) {
  const [bodies, setBodies] = useState<any[] | null>(null);

  useEffect(() => {
    let active = true;

    function fetchData() {
      fetchBodiesPositions().then((data: any | null) => {
        if (active) {
          setBodies(data)
        }
      });
    }

    fetchData(); // initial fetch

    const interval = setInterval(fetchData, intervalMs);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [intervalMs]);

  if (!bodies) return null;

  return {
    sun: new CelestialBody(bodies[0]),
    moon: new CelestialBody(bodies[1]),
    mercury: new CelestialBody(bodies[2]),
    venus: new CelestialBody(bodies[3]),
    earth: new CelestialBody(bodies[4]),
    mars: new CelestialBody(bodies[5]),
    jupiter: new CelestialBody(bodies[6]),
    saturn: new CelestialBody(bodies[7]),
    uranus: new CelestialBody(bodies[8]),
    neptune: new CelestialBody(bodies[9]),
  };
}
