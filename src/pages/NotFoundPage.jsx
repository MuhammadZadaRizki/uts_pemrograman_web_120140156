// src/pages/NotFoundPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold text-red-600 mb-4">404 - Halaman Tidak Ditemukan</h2>
      <p className="mb-6">Halaman yang kamu cari tidak tersedia.</p>
      <button
        onClick={() => navigate('/')}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Kembali ke Beranda
      </button>
    </div>
  );
};

export default NotFoundPage;
