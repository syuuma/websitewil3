'use client';

import { useState } from 'react';
import { Layout } from '@/widgets/Layout';
import { HealthcareFinder, FaskesList, FaskesFilter } from '@/features/healthcare';
import { FaskesFilter as FaskesFilterType } from '@/shared/types';

export default function HealthcarePage() {
  const [filter, setFilter] = useState<FaskesFilterType>({});

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Cari Fasilitas Kesehatan
          </h1>
          <p className="text-gray-600">
            Temukan rumah sakit, klinik, dan puskesmas yang tersedia di wilayah Anda
          </p>
        </div>

        {/* Search Component */}
        <HealthcareFinder />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filter Sidebar */}
          <div>
            <FaskesFilter filter={filter} onChange={setFilter} />
          </div>

          {/* List */}
          <div className="lg:col-span-3">
            <FaskesList />
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="font-semibold text-green-900 mb-3">💡 Informasi Penting</h3>
          <ul className="text-sm text-green-800 space-y-2">
            <li>✓ Semua fasilitas kesehatan di sini sudah terdaftar dan bekerja sama dengan BPJS Kesehatan</li>
            <li>✓ Anda dapat memilih FKTP (Puskesmas) untuk layanan kesehatan tingkat pertama</li>
            <li>✓ Untuk pengobatan spesialis, Anda akan dirujuk ke FKRTL (Rumah Sakit) berdasarkan kebutuhan</li>
            <li>✓ Jangan lupa membawa kartu BPJS dan KTP saat berkunjung ke fasilitas kesehatan</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
