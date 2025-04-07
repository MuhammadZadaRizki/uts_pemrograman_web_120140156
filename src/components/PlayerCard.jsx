// src/components/PlayerCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PlayerCard = ({ player }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-lg font-bold">{player.name}</h3>
      <p className="text-gray-600">{player.position}</p>
      <Link
        to={`/squad/${player.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        Detail
      </Link>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    position: PropTypes.string,
  }).isRequired,
};

export default PlayerCard;
