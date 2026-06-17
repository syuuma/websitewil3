/**
 * Login Form Component
 */

'use client';

import React, { useState } from 'react';
import { Input, Button, Alert } from '@/shared/ui';

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (!email || !password) {
        setError('Email dan password tidak boleh kosong');
        return;
      }

      // TODO: Call actual API
      console.log('Login with:', { email, password });
      // window.location.href = '/dashboard';
    } catch (err) {
      setError('Login gagal. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <Alert type="error" onClose={() => setError('')}>
          {error}
        </Alert>
      )}

      <Input
        label="Email"
        type="email"
        placeholder="Masukkan email Anda"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        label="Password"
        type="password"
        placeholder="Masukkan password Anda"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button
        type="submit"
        fullWidth
        isLoading={isLoading}
        disabled={isLoading}
      >
        Login
      </Button>

      <div className="text-center text-sm">
        <p className="text-gray-600">
          Belum memiliki akun?{' '}
          <a href="/auth/register" className="text-blue-600 hover:text-blue-700 font-semibold">
            Daftar sekarang
          </a>
        </p>
      </div>
    </form>
  );
};
