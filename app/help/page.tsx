'use client';

import { useState } from 'react';
import { Layout } from '@/widgets/Layout';
import { Card, CardBody, Tabs } from '@/shared/ui';
import { ComplaintForm, ComplaintList } from '@/features/complaint';
import { Keluhan } from '@/shared/types';

const mockKeluhan: Keluhan[] = [
  {
    id: '1',
    pesertaId: '1',
    judul: 'Masalah Pembayaran Tidak Terproses',
    deskripsi: 'Saya sudah melakukan transfer pada tanggal 5 Juni, namun pembayaran belum tercatat di sistem.',
    kategori: 'pembayaran',
    status: 'in_progress',
    prioritas: 'high',
    tanggalBuat: new Date('2026-06-06'),
    tanggalUpdate: new Date('2026-06-10'),
  },
  {
    id: '2',
    pesertaId: '1',
    judul: 'Pertanyaan tentang Prosedur Klaim',
    deskripsi: 'Saya ingin mengetahui prosedur lengkap untuk mengajukan klaim kesehatan.',
    kategori: 'layanan',
    status: 'resolved',
    prioritas: 'medium',
    tanggalBuat: new Date('2026-06-01'),
    tanggalUpdate: new Date('2026-06-03'),
    tanggalSelesai: new Date('2026-06-03'),
  },
];

export default function HelpPage() {
  const [activeTab, setActiveTab] = useState('pengaduan');

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Pusat Bantuan & Pengaduan
          </h1>
          <p className="text-gray-600">
            Kami siap membantu Anda 24/7. Ajukan pertanyaan atau laporan masalah Anda di sini
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardBody className="p-4 text-center">
              <div className="text-3xl mb-2">📞</div>
              <h3 className="font-semibold text-gray-900 mb-1">Telepon</h3>
              <p className="text-gray-600 text-sm">1500400</p>
              <p className="text-gray-500 text-xs">24 Jam / Hari</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-4 text-center">
              <div className="text-3xl mb-2">📧</div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-gray-600 text-sm">info@bpjs-kesehatan.go.id</p>
              <p className="text-gray-500 text-xs">Respons dalam 24 jam</p>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-4 text-center">
              <div className="text-3xl mb-2">💬</div>
              <h3 className="font-semibold text-gray-900 mb-1">WhatsApp</h3>
              <p className="text-gray-600 text-sm">+62-812-3456-7890</p>
              <p className="text-gray-500 text-xs">Chat interaktif dengan petugas</p>
            </CardBody>
          </Card>
        </div>

        {/* Tabs */}
        <Card>
          <CardBody className="p-6">
            <Tabs
              items={[
                { label: 'Ajukan Pengaduan', value: 'pengaduan' },
                { label: 'Pengaduan Saya', value: 'riwayat' },
                { label: 'FAQ', value: 'faq' },
              ]}
              defaultValue="pengaduan"
              onChange={setActiveTab}
            />

            {activeTab === 'pengaduan' && (
              <div className="mt-6">
                <ComplaintForm />
              </div>
            )}

            {activeTab === 'riwayat' && (
              <div className="mt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Riwayat Pengaduan Anda</h3>
                <ComplaintList keluhan={mockKeluhan} />
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="mt-6 space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Bagaimana cara daftar BPJS Kesehatan?</h4>
                  <p className="text-gray-600 text-sm">
                    Anda dapat mendaftar melalui halaman pendaftaran atau langsung ke kantor cabang BPJS Kesehatan terdekat. Proses pendaftaran hanya membutuhkan NIK dan KK.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Berapa besar iuran BPJS Kesehatan?</h4>
                  <p className="text-gray-600 text-sm">
                    Iuran BPJS Kesehatan bervariasi sesuai dengan kategori peserta. Untuk peserta mandiri, iuran dimulai dari Rp 25.500 per orang per bulan.
                  </p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Bagaimana jika ada tagihan yang belum dibayar?</h4>
                  <p className="text-gray-600 text-sm">
                    Jika ada tagihan yang belum dibayar, status kepesertaan Anda akan menjadi aktif sampai akhir bulan. Setelah itu, Anda harus membayar cicilan atau denda keterlambatan.
                  </p>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </Layout>
  );
}
