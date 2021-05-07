import React from 'react';
import PropTypes from 'prop-types';

function SignIn({ user }) {
  return (
    <div>
      {
        user ? <h1>Welcome!</h1> : <h1>Please sign in to view your team and players.</h1>
      }
    </div>
  );
}

SignIn.propTypes = {
  user: PropTypes.any
};

export default SignIn;
