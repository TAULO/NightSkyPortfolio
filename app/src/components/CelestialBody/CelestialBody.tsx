import { Mars, Moon, Sun } from '../../services/Body.ts';
const sun = new Sun();
const moon = new Moon();
const mars = new Mars();

function getScreenPosition(
  altitudeDeg,
  azimuthDeg,
  containerWidth,
  containerHeight
) {
  // Horizontal position based on azimuth (0° = North at center, wraps around)
  // Map azimuth to screen width: 0°-360° maps to full width
  let xNorm;

  // Center North (0°) in the middle of the screen
  // East (90°) to the right, West (270°) to the left
  if (azimuthDeg <= 180) {
    // 0° to 180°: center to right edge and back to center
    xNorm = 0.5 + azimuthDeg / 360;
  } else {
    // 180° to 360°: center to left edge and back to center
    xNorm = (azimuthDeg - 360) / 360 + 0.5;
  }

  // Vertical position based on altitude
  // 0° altitude (horizon) = bottom of screen (y = containerHeight)
  // 90° altitude (zenith) = top of screen (y = 0)
  const yNorm = 1 - altitudeDeg / 90;

  return {
    x: xNorm * containerWidth,
    y: yNorm * containerHeight,
  };
}

function updateBodyPosition(bodyName, altitude, azimuth) {
  const hero = document.getElementById('hero');
  const sunEl = document.getElementById(bodyName);

  const pos = getScreenPosition(
    altitude,
    azimuth,
    hero.clientWidth,
    hero.clientHeight
  );

  // Position the body
  sunEl.style.left = `${pos.x}px`;
  sunEl.style.top = `${pos.y}px`;

  // Debug info
  console.log(
    `${bodyName}: ${altitude}° alt, ${azimuth}° az → screen (${pos.x.toFixed(1)}, ${pos.y.toFixed(1)})`
  );
}

const CelestialBody = (props) => {
  return (
    <>
      <div> {props.name} </div>
    </>
  );
};

export default CelestialBody;
