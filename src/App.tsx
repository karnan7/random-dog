import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [details, setDetails] = useState<string>("");

  const fetchData = async (): Promise<void> => {
    try {
      const response = await fetch("https://random.dog/woof.json");
      const data = await response.json();
      const { url } = data;

      setDetails(url);

    } catch (error) {
      console.log(error);
    }
  };

  const videoUrl = details.endsWith('.mp4');

  useEffect(() => {
    fetchData();
  }, []);

  if (!details) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <h1>
        I know, I know
        <br />
        I'm
        <br />
        Adorable
      </h1>
      <div className="container">
        {videoUrl ? (
          <video src={details} autoPlay loop muted />
        ) : (
          <img src={details} alt="Random Dog" />
        )}
      </div>
    </div>
  );
};

export default App;
