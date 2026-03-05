const applicationId = import.meta.env.VITE_APPLICATION_ID;
const applicationSecret = import.meta.env.VITE_APPLICATION_SECRET;

const authString = btoa(`${applicationId}:${applicationSecret}`);

const response = await fetch('http://ip-api.com/json/');
const location = await response.json();

function getToday() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

function getTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`;
}

async function getBodiesPositions() {
  const lat = location.lat;
  const lon = location.lon;
  const elevation = '900';
  const fromDate = getToday();
  const toDate = getToday();
  const time = getTime();

  const apiUrl = new URL(
    'https://api.astronomyapi.com/api/v2/bodies/positions'
  );
  apiUrl.searchParams.append('latitude', lat);
  apiUrl.searchParams.append('longitude', lon);
  apiUrl.searchParams.append('elevation', elevation);
  apiUrl.searchParams.append('from_date', fromDate);
  apiUrl.searchParams.append('to_date', toDate);
  apiUrl.searchParams.append('time', time);

  const res = await getRes(apiUrl);
  return res.json();
}

async function getBodies() {
  const res = await getRes('https://api.astronomyapi.com/api/v2/bodies');

  return res.json();
}

async function getRes(url) {
  return await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Basic ${authString}`,
    },
  });
}

export async function fetchBodiesPositions() {
  const bodiesPositions = await getBodiesPositions();
  return bodiesPositions['data']['table']['rows'];
}