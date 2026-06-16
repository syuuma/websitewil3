'use client';

import { Layout } from '@/widgets/Layout';
import { DashboardOverview, StatusCard, QuickActions } from '@/features/dashboard';
import { Peserta, Tagihan } from '@/shared/types';

const mockPeserta: Peserta = {
  id: '1',
  nik: '3201234567890123',
  nama: 'Budi Santoso',
  status: 'aktif',
  tanggalDaftar: new Date('2024-01-15'),
  faskesPertama: 'Puskesmas Pusat Kota',
  iuranBulan: 35000,
  tagihan: [
    {
      id: '1',
      pesertaId: '1',
      bulan: 6,
      tahun: 2026,
      nominal: 35000,
      status: 'belum_bayar',
      tanggalJatuhTempo: new Date('2026-06-10'),
    },
    {
      id: '2',
      pesertaId: '1',
      bulan: 5,
      tahun: 2026,
      nominal: 35000,
      status: 'belum_bayar',
      tanggalJatuhTempo: new Date('2026-05-10'),
    },
    {
      id: '3',
      pesertaId: '1',
      bulan: 4,
      tahun: 2026,
      nominal: 35000,
      status: 'lunas',
      tanggalJatuhTempo: new Date('2026-04-10'),
    },
  ],
};

export default function DashboardPage() {
  return (
    <Layout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Selamat Datang, {mockPeserta.nama}!
          </h1>
          <p className="text-gray-600">
            Kelola kepesertaan dan pembayaran BPJS Kesehatan Anda dengan mudah
          </p>
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Dashboard Overview */}
        <DashboardOverview peserta={mockPeserta} />

        {/* Status Cards */}
        <StatusCard tagihan={mockPeserta.tagihan} />
      </div>
    </Layout>
  );
}
