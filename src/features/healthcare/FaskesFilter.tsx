/**
 * Faskes Filter Component
 */

'use client';

import React from 'react';
import { Card, CardBody } from '@/shared/ui';
import { FaskesFilter as FaskesFilterType } from '@/shared/types';

interface FaskesFilterProps {
  filter: FaskesFilterType;
  onChange: (filter: FaskesFilterType) => void;
}

const spesialisOptions = [
  'Umum',
  'Gigi',
  'Kandungan',
  'Anak-anak',
  'Mata',
  'Kardiologi',
  'Neorologi',
  'Bedah',
  'Onkologi',
];

export const FaskesFilter: React.FC<FaskesFilterProps> = ({ filter, onChange }) => {
  return (
    <Card>
      <CardBody className="p-4">
        <h3 className="font-semibold text-gray-900 mb-4">Filter Fasilitas</h3>

        <div className="space-y-4">
          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipe Fasilitas
            </label>
            <select
              value={filter.tipe || ''}
              onChange={(e) =>
                onChange({
                  ...filter,
                  tipe: e.target.value ? (e.target.value as 'FKTP' | 'FKRTL') : undefined,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Semua Tipe</option>
              <option value="FKTP">FKTP (Puskesmas)</option>
              <option value="FKRTL">FKRTL (Rumah Sakit)</option>
            </select>
          </div>

          {/* City Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Kota/Kabupaten
            </label>
            <input
              type="text"
              placeholder="Masukkan kota..."
              value={filter.kota || ''}
              onChange={(e) => onChange({ ...filter, kota: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Specialist Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Spesialisasi
            </label>
            <select
              value={filter.spesialis || ''}
              onChange={(e) => onChange({ ...filter, spesialis: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Semua Spesialisasi</option>
              {spesialisOptions.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>

          {/* Radius Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Radius: {filter.radius || 10} km
            </label>
            <input
              type="range"
              min="1"
              max="50"
              value={filter.radius || 10}
              onChange={(e) => onChange({ ...filter, radius: Number(e.target.value) })}
              className="w-full"
            />
          </div>

          {/* Reset Button */}
          <button
            onClick={() =>
              onChange({
                tipe: undefined,
                kota: undefined,
                spesialis: undefined,
                radius: undefined,
              })
            }
            className="w-full px-3 py-2 text-sm font-medium text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
          >
            Reset Filter
          </button>
        </div>
      </CardBody>
    </Card>
  );
};
