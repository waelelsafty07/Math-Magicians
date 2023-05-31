import { useState, useEffect } from 'react';
import { apiKey, apiUrl } from '../env';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);

  const fetchQuote = async () => {
    const options = {
      headers: { 'X-Api-Key': apiKey },
      contentType: 'application/json',
      method: 'GET',
    };

    try {
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      if (response.status === 200 && data.length > 0) {
        setQuote(`${data[0].quote} - ${data[0].author}`);
        setLoading(false);
      } else {
        setError(data.error);
        setLoading(false);
      }
    } catch (error) {
      setError('Error fetching the quote.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);
  return (
    <div>
      <p>{isLoading ? 'Loading...' : error || quote}</p>
    </div>
  );
};

export default Quote;
