import PropTypes from 'prop-types';
import { useEffect } from 'react';

const NASADataFetcher = ({ selectedDate, setData, setOtherData }) => {
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

      const NASA_URL = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`;

      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`

      try {
        const res = await fetch(NASA_URL)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setData(apiData)
        console.log('Fetched from API today')
      } catch (err) {
        console.log(err.message)
      }

      // Fetch other API data based on selected date
      if (selectedDate) {
        const formattedDate = selectedDate; // No need to format if the date is already in yyyy-mm-dd format
        const otherAPI_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${formattedDate}&api_key=${NASA_KEY}`;
        
        try {
          const otherRes = await fetch(otherAPI_URL);
          if (!otherRes.ok) {
            throw new Error('Failed to fetch other API data');
          }
          const otherApiData = await otherRes.json();
          const { photos } = otherApiData;
          setOtherData(photos);
          console.log('Fetched other API data');
        } catch (err) {
          console.error('Error fetching other API data:', err.message);
        }
      }
      
    }

    fetchAPIData();
  }, [selectedDate, setData, setOtherData]);

  return null;
};

NASADataFetcher.propTypes = {
  setData: PropTypes.func.isRequired,
  setOtherData: PropTypes.func.isRequired,
  selectedDate: PropTypes.string // PropType for selected date
};

export default NASADataFetcher;
