import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setGreeting } from '../redux/actions';

const fetchGreeting = async () => {
  try {
    const response = await fetch('http://127.0.0.1:3000/api/v1/greetings');
    const data = await response.json();
    setGreeting(data.greeting);
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};

function Greeting({ greeting, setGreeting }) {
  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
}

Greeting.propTypes = {
  greeting: PropTypes.string.isRequired,
  setGreeting: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  greeting: state.greeting,
});

const mapDispatchToProps = {
  setGreeting,
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
