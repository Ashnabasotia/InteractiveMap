import React, { useEffect } from 'react';
import { Chart } from 'react-google-charts';

const MapWithBubbles = () => {
    const bubbleData = [
        { lat: 51.1657, lng: 10.4515, internetUsage: 74.9 },   // Germany
        { lat: 37.7749, lng: -122.4194, internetUsage: 89.2 },  // United States
        { lat: 35.6895, lng: 139.6917, internetUsage: 93.3 },  // Japan
        { lat: -33.8688, lng: 151.2093, internetUsage: 88.2 }, // Australia
        { lat: 55.7558, lng: 37.6173, internetUsage: 75.8 },   // Russia
        { lat: -22.9068, lng: -43.1729, internetUsage: 66.0 }, // Brazil
        { lat: 51.5074, lng: -0.1278, internetUsage: 92.0 },   // United Kingdom
        { lat: 39.9042, lng: 116.4074, internetUsage: 54.3 }, // China
        { lat: 28.6139, lng: 77.2090, internetUsage: 34.8 },  // India
      ];
      
      

  useEffect(() => {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&callback=initMap`;
    googleMapsScript.async = true;
    window.initMap = initMap;
    window.document.body.appendChild(googleMapsScript);
  }, []);

  const initMap = () => {
    const data = [
      ['Lat', 'Lng', 'internetUsage'],
      ...bubbleData.map((bubble) => [bubble.lat, bubble.lng, bubble.internetUsage]),
    ];

    const options = {
      region: 'world',
      displayMode: 'markers',
      colorAxis: { colors: ['#9EC2FF', '#03018C'] },
      datalessRegionColor: '#f8bbd0',
      sizeAxis: { minValue: 0, maxValue: 100 },
      magnifyingGlass: { enable: true },
      bubble: { textStyle: { fontSize: 11 } },
    };

    return (
      <div>
        <Chart
          width={'100%'}
          height={'500px'}
          chartType="GeoChart"
          data={data}
          options={options}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
    );
  };

  return (
    <div>
      {initMap()}
    </div>
  );
};

export default MapWithBubbles;
