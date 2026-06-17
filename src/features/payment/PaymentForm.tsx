/**
 * Payment Form Component
 */

'use client';

import React, { useState } from 'react';
import { Input, Button, Alert, Card, CardBody, Badge } from '@/shared/ui';
import { Tagihan } from '@/shared/types';

interface PaymentFormProps {
  tagihan?: Tagihan;
  onSuccess?: () => void;
}

export const PaymentForm: React.FC<PaymentFormProps> = ({ tagihan, onSuccess }) => {
  const [selectedMethod, setSelectedMethod] = useState<'transfer_bank' | 'e_wallet' | 'debit_otomatis'>(
    'transfer_bank'
  );
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const paymentMethods = [
    {
      id: 'transfer_bank',
      name: 'Transfer Bank',
      description: 'Transfer ke rekening BPJS melalui bank Anda',
      icon: '🏦',
    },
    {
      id: 'e_wallet',
      name: 'E-Wallet',
      description: 'Bayar menggunakan GCash, OVO, DANA, dll',
      icon: '📱',
    },
    {
      id: 'debit_otomatis',
      name: 'Debit Otomatis',
      description: 'Pembayaran otomatis setiap bulannya',
      icon: '🔄',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // TODO: Call actual payment API
      console.log('Process payment:', {
        tagihanId: tagihan?.id,
        method: selectedMethod,
        nominal: tagihan?.nominal,
      });

      setIsSuccess(true);
      onSuccess?.();
    } catch (err) {
      setError('Pembayaran gagal. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <Alert type="success" title="Pembayaran Berhasil">
        Pembayaran Anda telah diproses. Bukti pembayaran akan dikirim ke email Anda dalam 5 menit.
      </Alert>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <Alert type="error" onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      {/* Bill Summary */}
      {tagihan && (
        <Card>
          <CardBody className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Periode Tagihan</span>
                <span className="font-semibold">
                  {tagihan.bulan}/{tagihan.tahun}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Nominal</span>
                <span className="font-semibold text-lg">
                  Rp {tagihan.nominal.toLocaleString('id-ID')}
                </span>
              </div>
              <div className="flex items-center justify-between pt-3 border-t">
                <span className="text-gray-600">Total Bayar</span>
                <span className="font-bold text-xl text-blue-600">
                  Rp {tagihan.nominal.toLocaleString('id-ID')}
                </span>
              </div>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Payment Method Selection */}
      <div className="space-y-3">
        <label className="block font-semibold text-gray-900">Metode Pembayaran</label>
        {paymentMethods.map((method) => (
          <label key={method.id} className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-blue-50">
            <input
              type="radio"
              name="payment-method"
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={() => setSelectedMethod(method.id as any)}
              className="w-4 h-4"
            />
            <div className="ml-3 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-xl">{method.icon}</span>
                <span className="font-semibold text-gray-900">{method.name}</span>
              </div>
              <p className="text-sm text-gray-600">{method.description}</p>
            </div>
          </label>
        ))}
      </div>

      {/* Bank Account Info (for transfer) */}
      {selectedMethod === 'transfer_bank' && (
        <Card>
          <CardBody className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Rekening Transfer</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="text-gray-600">Bank</p>
                <p className="font-semibold">PT Bank Rakyat Indonesia (Persero) Tbk</p>
              </div>
              <div>
                <p className="text-gray-600">Nomor Rekening</p>
                <p className="font-semibold font-mono">1234 5678 9012 3456</p>
              </div>
              <div>
                <p className="text-gray-600">Atas Nama</p>
                <p className="font-semibold">BPJS KESEHATAN</p>
              </div>
            </div>
          </CardBody>
        </Card>
      )}

      {/* Submit Button */}
      <Button type="submit" fullWidth isLoading={isLoading} disabled={isLoading}>
        {selectedMethod === 'debit_otomatis' ? 'Daftarkan Debit Otomatis' : 'Lanjutkan Pembayaran'}
      </Button>

      <p className="text-xs text-center text-gray-500">
        ✓ Pembayaran Anda dilindungi dengan enkripsi SSL 256-bit
      </p>
    </form>
  );
};
