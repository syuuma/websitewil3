/**
 * Dashboard Overview Component
 */

'use client';

import React from 'react';
import { Card, CardBody, Badge } from '@/shared/ui';
import { Peserta } from '@/shared/types';

interface DashboardOverviewProps {
  peserta?: Peserta;
  isLoading?: boolean;
}

export const DashboardOverview: React.FC<DashboardOverviewProps> = ({
  peserta,
  isLoading = false,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-gray-200 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      {/* Status Card */}
      <Card>
        <CardBody className="p-4">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Status Kepesertaan</p>
              <h3 className="text-2xl font-bold text-gray-900">
                {peserta?.status === 'aktif' ? 'Aktif' : 'Non-Aktif'}
              </h3>
            </div>
            <Badge variant={peserta?.status === 'aktif' ? 'success' : 'error'}>
              {peserta?.status === 'aktif' ? 'Aktif' : 'Non-Aktif'}
            </Badge>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Terdaftar sejak {peserta?.tanggalDaftar?.toLocaleDateString('id-ID')}
          </p>
        </CardBody>
      </Card>

      {/* Monthly Payment Card */}
      <Card>
        <CardBody className="p-4">
          <p className="text-sm text-gray-600 mb-1">Iuran Bulanan</p>
          <h3 className="text-2xl font-bold text-gray-900">
            Rp {peserta?.iuranBulan?.toLocaleString('id-ID') || '0'}
          </h3>
          <p className="text-xs text-gray-500 mt-2">Per bulan</p>
        </CardBody>
      </Card>

      {/* Primary Healthcare Card */}
      <Card>
        <CardBody className="p-4">
          <p className="text-sm text-gray-600 mb-1">FKTP</p>
          <h3 className="text-sm font-bold text-gray-900 truncate">
            {peserta?.faskesPertama || 'Belum dipilih'}
          </h3>
          <p className="text-xs text-gray-500 mt-2">Fasilitas Kesehatan Tingkat Pertama</p>
        </CardBody>
      </Card>
    </div>
  );
};
