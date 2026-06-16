/**
 * Healthcare Finder Component
 */

'use client';

import React, { useState } from 'react';
import { Input, Button, Card, CardBody } from '@/shared/ui';

export const HealthcareFinder: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<'FKTP' | 'FKRTL' | ''>('');
  const [city, setCity] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search for:', { searchQuery, selectedType, city });
    // TODO: Implement search functionality
  };

  return (
    <Card>
      <CardBody className="p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Cari Fasilitas Kesehatan</h2>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="md:col-span-2">
              <Input
                placeholder="Cari rumah sakit, klinik, atau puskesmas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Semua Tipe</option>
              <option value="FKTP">FKTP (Puskesmas)</option>
              <option value="FKRTL">FKRTL (Rumah Sakit)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* City Filter */}
            <Input
              placeholder="Kota/Kabupaten"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />

            {/* Search Button */}
            <Button type="submit" fullWidth>
              Cari
            </Button>
          </div>
        </form>

        {/* Info Box */}
        <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
          <p className="text-sm text-blue-800">
            💡 Gunakan filter di atas untuk menemukan fasilitas kesehatan yang tersedia di area Anda. Anda bisa membandingkan jam operasional, spesialisasi, dan rating dari pengguna lain.
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
