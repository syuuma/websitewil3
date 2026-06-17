/**
 * Quick Actions Component
 */

'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardBody } from '@/shared/ui';

export const QuickActions: React.FC = () => {
  const actions = [
    {
      id: 'payment',
      title: 'Bayar Iuran',
      description: 'Bayar tagihan BPJS Kesehatan',
      icon: '💳',
      href: '/payment',
    },
    {
      id: 'faskes',
      title: 'Cari Fasilitas',
      description: 'Cari rumah sakit terdekat',
      icon: '🏥',
      href: '/healthcare',
    },
    {
      id: 'queue',
      title: 'Ambil Antrian',
      description: 'Ambil antrian di fasilitas kesehatan',
      icon: '🎫',
      href: '/queue',
    },
    {
      id: 'complaint',
      title: 'Pengaduan',
      description: 'Ajukan keluhan atau pertanyaan',
      icon: '📞',
      href: '/complaint',
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Akses Cepat</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Link key={action.id} href={action.href}>
            <Card hoverable className="h-full">
              <CardBody className="p-4 text-center">
                <div className="text-3xl mb-2">{action.icon}</div>
                <h3 className="font-semibold text-sm text-gray-900 mb-1">{action.title}</h3>
                <p className="text-xs text-gray-500">{action.description}</p>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
