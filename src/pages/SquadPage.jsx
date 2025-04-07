// src/pages/SquadPage.jsx
import React from 'react';
import useFetch from '../hooks/useFetch';
import PlayerCard from '../components/PlayerCard';

const SquadPage = () => {
  const { data: players, loading, error } = useFetch(
    'https://mocki.io/v1/0ddcc82f-9e2d-48b5-9026-8c7e080aa588'
  );

  if (loading) return <p>Loading pemain...</p>;
  if (error) return <p>Error saat memuat data: {error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Daftar Pemain Timnas Indonesia</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

export default SquadPage;
