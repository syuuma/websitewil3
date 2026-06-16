/**
 * Status Card Component
 */

'use client';

import React from 'react';
import { Card, CardBody, Badge } from '@/shared/ui';
import { Tagihan } from '@/shared/types';

interface StatusCardProps {
  tagihan?: Tagihan[];
}

export const StatusCard: React.FC<StatusCardProps> = ({ tagihan = [] }) => {
  const totalBelumBayar = tagihan?.filter((t) => t.status === 'belum_bayar').length || 0;
  const totalOverdue = tagihan?.filter((t) => t.status === 'overdue').length || 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      {/* Pending Payments */}
      <Card>
        <CardBody className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tagihan Belum Dibayar</p>
              <h3 className="text-3xl font-bold text-blue-600">{totalBelumBayar}</h3>
            </div>
            <div className="text-4xl">📋</div>
          </div>
        </CardBody>
      </Card>

      {/* Overdue Payments */}
      <Card>
        <CardBody className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Tagihan Jatuh Tempo</p>
              <h3 className="text-3xl font-bold text-red-600">{totalOverdue}</h3>
            </div>
            <div className="text-4xl">⚠️</div>
          </div>
        </CardBody>
      </Card>

      {/* Recent Transactions */}
      <Card className="md:col-span-2">
        <CardBody className="p-4">
          <h3 className="font-semibold text-gray-900 mb-4">Tagihan Terbaru</h3>
          {tagihan && tagihan.length > 0 ? (
            <div className="space-y-3">
              {tagihan.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-2 bg-gray-50 rounded"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {item.bulan}/{item.tahun}
                    </p>
                    <p className="text-xs text-gray-500">
                      Jatuh tempo: {item.tanggalJatuhTempo?.toLocaleDateString('id-ID')}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">
                      Rp {item.nominal.toLocaleString('id-ID')}
                    </p>
                    <Badge
                      variant={
                        item.status === 'lunas'
                          ? 'success'
                          : item.status === 'belum_bayar'
                          ? 'warning'
                          : 'error'
                      }
                      size="sm"
                    >
                      {item.status === 'lunas'
                        ? 'Lunas'
                        : item.status === 'belum_bayar'
                        ? 'Belum Bayar'
                        : 'Jatuh Tempo'}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-500">Tidak ada tagihan</p>
          )}
        </CardBody>
      </Card>
    </div>
  );
};
