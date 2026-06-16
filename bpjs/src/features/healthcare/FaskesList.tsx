/**
 * Faskes List Component
 */

'use client';

import React, { useState } from 'react';
import { Card, CardBody, Badge, Pagination } from '@/shared/ui';
import { FaskesType } from '@/shared/types';

interface FaskesListProps {
  faskes?: FaskesType[];
  isLoading?: boolean;
  onSelect?: (faskes: FaskesType) => void;
}

const mockFaskes: FaskesType[] = [
  {
    id: '1',
    nama: 'Puskesmas Pusat Kota',
    tipe: 'FKTP',
    alamat: 'Jl. Merdeka No. 123',
    kota: 'Jakarta Pusat',
    provinsi: 'DKI Jakarta',
    latitude: -6.2088,
    longitude: 106.8456,
    noTelepon: '021-1234567',
    jamBuka: '08:00 - 16:00',
    spesialis: ['Umum', 'Gigi', 'Kandungan'],
    rating: 4.5,
    jumlahReview: 234,
  },
  {
    id: '2',
    nama: 'Rumah Sakit Harapan',
    tipe: 'FKRTL',
    alamat: 'Jl. Gatot Subroto No. 456',
    kota: 'Jakarta Selatan',
    provinsi: 'DKI Jakarta',
    latitude: -6.2748,
    longitude: 106.8201,
    noTelepon: '021-2345678',
    jamBuka: '24 Jam',
    spesialis: ['Kardiologi', 'Neorologi', 'Bedah', 'Onkologi'],
    rating: 4.8,
    jumlahReview: 567,
  },
  {
    id: '3',
    nama: 'Klinik Sehat Sejahtera',
    tipe: 'FKTP',
    alamat: 'Jl. Ahmad Yani No. 789',
    kota: 'Jakarta Timur',
    provinsi: 'DKI Jakarta',
    latitude: -6.2297,
    longitude: 106.9202,
    noTelepon: '021-3456789',
    jamBuka: '07:00 - 19:00',
    spesialis: ['Umum', 'Anak-anak', 'Mata'],
    rating: 4.3,
    jumlahReview: 198,
  },
];

export const FaskesList: React.FC<FaskesListProps> = ({
  faskes = mockFaskes,
  isLoading = false,
  onSelect,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(faskes.length / itemsPerPage);

  const paginatedFaskes = faskes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-32 bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {paginatedFaskes.length > 0 ? (
        <>
          {paginatedFaskes.map((item) => (
            <Card key={item.id} hoverable onClick={() => onSelect?.(item)}>
              <CardBody className="p-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.nama}</h3>
                      <Badge variant={item.tipe === 'FKTP' ? 'info' : 'success'}>
                        {item.tipe === 'FKTP' ? 'Puskesmas' : 'Rumah Sakit'}
                      </Badge>
                    </div>

                    <div className="space-y-2 text-sm text-gray-600 mb-3">
                      <p>📍 {item.alamat}, {item.kota}</p>
                      <p>📞 {item.noTelepon}</p>
                      <p>🕐 {item.jamBuka}</p>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {item.spesialis?.map((spec) => (
                        <Badge key={spec} variant="info" size="sm">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center justify-end gap-1 mb-2">
                      <span className="text-xl">⭐</span>
                      <span className="font-bold text-lg">{item.rating?.toFixed(1)}</span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {item.jumlahReview} ulasan
                    </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}

          {totalPages > 1 && (
            <div className="mt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>
      ) : (
        <Card>
          <CardBody className="p-8 text-center">
            <p className="text-gray-500">Fasilitas kesehatan tidak ditemukan</p>
          </CardBody>
        </Card>
      )}
    </div>
  );
};
