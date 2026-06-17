/**
 * Payment List Component
 */

'use client';

import React, { useState } from 'react';
import { Card, CardBody, Badge, Pagination } from '@/shared/ui';
import { Tagihan } from '@/shared/types';

interface PaymentListProps {
  tagihan?: Tagihan[];
  onPayment?: (tagihan: Tagihan) => void;
}

export const PaymentList: React.FC<PaymentListProps> = ({ tagihan = [], onPayment }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(tagihan.length / itemsPerPage);

  const paginatedTagihan = tagihan.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'lunas':
        return 'success';
      case 'belum_bayar':
        return 'warning';
      case 'overdue':
        return 'error';
      default:
        return 'info';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'lunas':
        return 'Lunas';
      case 'belum_bayar':
        return 'Belum Bayar';
      case 'overdue':
        return 'Jatuh Tempo';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-4">
      {paginatedTagihan.length > 0 ? (
        <>
          {paginatedTagihan.map((item) => (
            <Card key={item.id} hoverable>
              <CardBody className="p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Tagihan {item.bulan}/{item.tahun}
                      </h3>
                      <Badge variant={getStatusColor(item.status) as any}>
                        {getStatusLabel(item.status)}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600">Nominal</p>
                        <p className="font-semibold">Rp {item.nominal.toLocaleString('id-ID')}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Jatuh Tempo</p>
                        <p className="font-semibold">
                          {item.tanggalJatuhTempo?.toLocaleDateString('id-ID')}
                        </p>
                      </div>
                    </div>
                  </div>
                  {item.status === 'belum_bayar' || item.status === 'overdue' ? (
                    <button
                      onClick={() => onPayment?.(item)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                      Bayar Sekarang
                    </button>
                  ) : null}
                </div>
              </CardBody>
            </Card>
          ))}

          {totalPages > 1 && (
            <div className="mt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </>
      ) : (
        <Card>
          <CardBody className="p-8 text-center">
            <p className="text-gray-500">Tidak ada tagihan</p>
          </CardBody>
        </Card>
      )}
    </div>
  );
};
