// src/pages/PlayerDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTeam } from '../context/TeamContext';

const PlayerDetailPage = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const { state } = useTeam();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const selected = state.players.find(p => p.id === parseInt(playerId));
    setPlayer(selected);
  }, [playerId, state.players]);

  if (state.loading) return <p>Loading...</p>;
  if (state.error) return <p className="text-red-500">Error: {state.error}</p>;

  if (!player) {
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">Pemain tidak ditemukan</h2>
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Kembali
        </button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{player.name}</h2>
      <ul className="space-y-2">
        <li><strong>Posisi:</strong> {player.position}</li>
        <li><strong>Usia:</strong> {player.age}</li>
        <li><strong>Klub:</strong> {player.club}</li>
      </ul>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Kembali ke Daftar Pemain
      </button>
    </div>
  );
};

export default PlayerDetailPage;
