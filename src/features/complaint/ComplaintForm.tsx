/**
 * Complaint Form Component
 */

'use client';

import React, { useState } from 'react';
import { Input, Button, Alert, Card, CardBody } from '@/shared/ui';

interface ComplaintFormProps {
  onSuccess?: () => void;
}

export const ComplaintForm: React.FC<ComplaintFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    judul: '',
    kategori: 'lainnya',
    deskripsi: '',
    prioritas: 'medium',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!formData.judul || !formData.deskripsi) {
        setError('Judul dan deskripsi tidak boleh kosong');
        return;
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Call actual API
      console.log('Submit complaint:', formData);
      setIsSuccess(true);
      onSuccess?.();
    } catch (err) {
      setError('Pengaduan gagal diajukan. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Alert type="success" title="Pengaduan Berhasil Diajukan">
        Terima kasih telah melaporkan keluhan Anda. Tim kami akan meninjau pengaduan Anda dalam 24 jam.
      </Alert>
    );
  }

  return (
    <Card>
      <CardBody className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Ajukan Pengaduan</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <Alert type="error" onClose={() => setError('')}>
              {error}
            </Alert>
          )}

          <Input
            label="Judul Pengaduan"
            placeholder="Ringkas masalah Anda"
            name="judul"
            value={formData.judul}
            onChange={handleInputChange}
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Kategori
            </label>
            <select
              name="kategori"
              value={formData.kategori}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="pembayaran">Masalah Pembayaran</option>
              <option value="faskes">Masalah Fasilitas Kesehatan</option>
              <option value="layanan">Masalah Layanan</option>
              <option value="lainnya">Lainnya</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Prioritas
            </label>
            <select
              name="prioritas"
              value={formData.prioritas}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="low">Rendah</option>
              <option value="medium">Sedang</option>
              <option value="high">Tinggi</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Deskripsi Masalah
            </label>
            <textarea
              name="deskripsi"
              value={formData.deskripsi}
              onChange={handleInputChange}
              placeholder="Jelaskan masalah Anda secara detail..."
              rows={5}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <Button type="submit" fullWidth isLoading={isLoading} disabled={isLoading}>
            Kirim Pengaduan
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
