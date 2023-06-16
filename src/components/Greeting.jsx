import React, { useEffect, useState } from 'react';

function Greeting() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    fetchGreeting();
  }, []);

  const fetchGreeting = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
      const data = await response.json();
      setGreeting(data.greeting);
    } catch (error) {
      console.error('Error fetching greeting:', error);
    }
  };

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
}

export default Greeting;
