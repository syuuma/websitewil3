'use client';

import { useState } from 'react';
import { Layout } from '@/widgets/Layout';
import { PaymentForm, PaymentList } from '@/features/payment';
import { Card, CardBody, CardHeader, Tabs, Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@/shared/ui';
import { Tagihan } from '@/shared/types';

const mockTagihan: Tagihan[] = [
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
];

export default function PaymentPage() {
  const [activeTab, setActiveTab] = useState('daftar');
  const [selectedTagihan, setSelectedTagihan] = useState<Tagihan | null>(null);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  const totalTagihan = mockTagihan.reduce((sum, t) => sum + t.nominal, 0);
  const belumBayar = mockTagihan.filter((t) => t.status === 'belum_bayar').length;

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Pembayaran Iuran BPJS</h1>
          <p className="text-gray-600">Kelola pembayaran iuran bulanan Anda dengan mudah dan aman</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardBody className="p-4">
              <p className="text-sm text-gray-600 mb-1">Total Tagihan</p>
              <h3 className="text-2xl font-bold text-gray-900">
                Rp {totalTagihan.toLocaleString('id-ID')}
              </h3>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-4">
              <p className="text-sm text-gray-600 mb-1">Belum Dibayar</p>
              <h3 className="text-2xl font-bold text-blue-600">{belumBayar} Bulan</h3>
            </CardBody>
          </Card>
          <Card>
            <CardBody className="p-4">
              <p className="text-sm text-gray-600 mb-1">Status</p>
              <h3 className="text-2xl font-bold text-green-600">Aktif</h3>
            </CardBody>
          </Card>
        </div>

        {/* Tabs */}
        <Card>
          <CardBody className="p-6">
            <Tabs
              items={[
                { label: 'Daftar Tagihan', value: 'daftar' },
                { label: 'Histori Pembayaran', value: 'histori' },
                { label: 'Panduan', value: 'panduan' },
              ]}
              defaultValue="daftar"
              onChange={setActiveTab}
            />

            {activeTab === 'daftar' && (
              <div className="mt-6">
                <PaymentList
                  tagihan={mockTagihan}
                  onPayment={(tagihan) => {
                    setSelectedTagihan(tagihan);
                    setIsPaymentModalOpen(true);
                  }}
                />
              </div>
            )}

            {activeTab === 'histori' && (
              <div className="mt-6">
                <p className="text-gray-600 text-center py-8">
                  Tidak ada riwayat pembayaran. Lakukan pembayaran pertama Anda sekarang.
                </p>
              </div>
            )}

            {activeTab === 'panduan' && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <h3 className="font-semibold text-blue-900 mb-2">Cara Pembayaran</h3>
                  <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
                    <li>Pilih tagihan yang ingin Anda bayar</li>
                    <li>Klik tombol &quot;Bayar Sekarang&quot;</li>
                    <li>Pilih metode pembayaran yang Anda inginkan</li>
                    <li>Ikuti instruksi pembayaran sesuai metode yang dipilih</li>
                    <li>Pembayaran akan dikonfirmasi dalam 5-10 menit</li>
                  </ol>
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>

      {/* Payment Modal */}
      <Modal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        size="lg"
      >
        <ModalHeader>
          <h2 className="text-2xl font-bold text-gray-900">Proses Pembayaran</h2>
        </ModalHeader>
        <ModalBody>
          {selectedTagihan && <PaymentForm tagihan={selectedTagihan} />}
        </ModalBody>
      </Modal>
    </Layout>
  );
}
