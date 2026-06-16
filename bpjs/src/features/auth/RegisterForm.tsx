/**
 * Register Form Component
 */

'use client';

import React, { useState } from 'react';
import { Input, Button, Alert, Stepper } from '@/shared/ui';

const registerSteps = [
  { label: 'Data Pribadi' },
  { label: 'Verifikasi' },
  { label: 'Pilih Faskes' },
  { label: 'Selesai' },
];

export const RegisterForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    nik: '',
    nama: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = async () => {
    setError('');

    // Validate current step
    if (currentStep === 0) {
      if (!formData.nik || !formData.nama || !formData.email) {
        setError('Silakan isi semua field');
        return;
      }
    } else if (currentStep === 1) {
      if (!formData.phone) {
        setError('Nomor telepon harus diisi');
        return;
      }
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (currentStep < registerSteps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validate all fields
      if (
        !formData.nik ||
        !formData.nama ||
        !formData.email ||
        !formData.phone ||
        !formData.password
      ) {
        setError('Silakan isi semua field');
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Password dan konfirmasi password tidak sama');
        return;
      }

      // TODO: Call actual API
      console.log('Register with:', formData);
      // window.location.href = '/auth/verify';
    } catch (err) {
      setError('Pendaftaran gagal. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Stepper */}
      <Stepper steps={registerSteps} currentStep={currentStep} />

      {error && (
        <Alert type="error" onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      {/* Step 0: Personal Data */}
      {currentStep === 0 && (
        <div className="space-y-4">
          <Input
            label="NIK"
            type="text"
            placeholder="Nomor Induk Kependudukan"
            name="nik"
            value={formData.nik}
            onChange={handleInputChange}
          />
          <Input
            label="Nama Lengkap"
            type="text"
            placeholder="Masukkan nama lengkap"
            name="nama"
            value={formData.nama}
            onChange={handleInputChange}
          />
          <Input
            label="Email"
            type="email"
            placeholder="Masukkan email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
      )}

      {/* Step 1: Verification */}
      {currentStep === 1 && (
        <div className="space-y-4">
          <Input
            label="Nomor Telepon"
            type="tel"
            placeholder="Masukkan nomor telepon"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Masukkan password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <Input
            label="Konfirmasi Password"
            type="password"
            placeholder="Konfirmasi password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
      )}

      {/* Step 2: Choose Faskes */}
      {currentStep === 2 && (
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-700">
              Silakan pilih fasilitas kesehatan tingkat pertama (FKTP) terdekat untuk dijadikan
              referensi awal Anda.
            </p>
          </div>
          <div className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
            <p className="text-gray-600">Pilih Fasilitas Kesehatan (coming soon)</p>
          </div>
        </div>
      )}

      {/* Step 3: Summary */}
      {currentStep === 3 && (
        <div className="space-y-4">
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <h3 className="font-semibold text-green-800 mb-2">✓ Pendaftaran Selesai</h3>
            <p className="text-sm text-green-700">
              Akun Anda telah berhasil dibuat. Silakan login untuk mengakses dashboard Anda.
            </p>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={handleBack}
          disabled={currentStep === 0 || isLoading}
        >
          Kembali
        </Button>
        {currentStep < registerSteps.length - 1 ? (
          <Button type="button" onClick={handleNext} isLoading={isLoading} disabled={isLoading}>
            Lanjutkan
          </Button>
        ) : (
          <Button type="submit" isLoading={isLoading} disabled={isLoading}>
            Selesai
          </Button>
        )}
      </div>
    </form>
  );
};
