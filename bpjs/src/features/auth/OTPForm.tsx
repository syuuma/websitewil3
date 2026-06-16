/**
 * OTP Form Component
 */

'use client';

import React, { useState, useEffect } from 'react';
import { Input, Button, Alert } from '@/shared/ui';

interface OTPFormProps {
  phone: string;
  onVerified?: () => void;
}

export const OTPForm: React.FC<OTPFormProps> = ({ phone, onVerified }) => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [isResending, setIsResending] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      if (!otp || otp.length !== 6) {
        setError('OTP harus terdiri dari 6 digit');
        return;
      }

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Call actual API to verify OTP
      console.log('Verify OTP:', otp);
      onVerified?.();
    } catch (err) {
      setError('Verifikasi OTP gagal. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    setIsResending(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Call actual API to resend OTP
      setTimeLeft(300);
      setOtp('');
      setError('');
      console.log('OTP resent to:', phone);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="text-center mb-4">
        <p className="text-gray-600 text-sm">
          Kami telah mengirim kode OTP ke nomor {phone}
        </p>
      </div>

      {error && (
        <Alert type="error" onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      <Input
        label="Kode OTP"
        type="text"
        placeholder="Masukkan 6 digit OTP"
        maxLength={6}
        value={otp}
        onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
      />

      <div className="text-center text-sm text-gray-600">
        Kode berlaku dalam: <span className="font-semibold text-blue-600">{formatTime(timeLeft)}</span>
      </div>

      <Button type="submit" fullWidth isLoading={isLoading} disabled={isLoading || timeLeft === 0}>
        Verifikasi OTP
      </Button>

      <div className="text-center">
        <button
          type="button"
          onClick={handleResend}
          disabled={isResending || timeLeft > 0}
          className="text-sm text-blue-600 hover:text-blue-700 disabled:text-gray-400 disabled:cursor-not-allowed font-semibold"
        >
          Kirim ulang OTP
        </button>
      </div>
    </form>
  );
};
