import React from 'react';
import RandomWords from './RandomWords.js';

const RandomList = ({ randomWords }) => {
  return (
    <div className="random-list">
      {randomWords && randomWords.map((RandomWords) => <User key={user.login.uuid} {...user} />)}
    </div>
  );
};

export default RandomList;