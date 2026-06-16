/**
 * Complaint List Component
 */

'use client';

import React, { useState } from 'react';
import { Card, CardBody, Badge, Pagination } from '@/shared/ui';
import { Keluhan } from '@/shared/types';

interface ComplaintListProps {
  keluhan?: Keluhan[];
  onSelect?: (keluhan: Keluhan) => void;
}

export const ComplaintList: React.FC<ComplaintListProps> = ({ keluhan = [], onSelect }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(keluhan.length / itemsPerPage);

  const paginatedKeluhan = keluhan.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'closed':
        return 'success';
      case 'resolved':
        return 'success';
      case 'in_progress':
        return 'warning';
      case 'open':
        return 'error';
      default:
        return 'info';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'closed':
        return 'Ditutup';
      case 'resolved':
        return 'Selesai';
      case 'in_progress':
        return 'Proses';
      case 'open':
        return 'Baru';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-4">
      {paginatedKeluhan.length > 0 ? (
        <>
          {paginatedKeluhan.map((item) => (
            <Card
              key={item.id}
              hoverable
              onClick={() => onSelect?.(item)}
            >
              <CardBody className="p-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.judul}</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant={getStatusColor(item.status) as any}>
                          {getStatusLabel(item.status)}
                        </Badge>
                        <Badge
                          variant={
                            item.prioritas === 'high'
                              ? 'error'
                              : item.prioritas === 'medium'
                              ? 'warning'
                              : 'info'
                          }
                        >
                          {item.prioritas === 'high'
                            ? 'Tinggi'
                            : item.prioritas === 'medium'
                            ? 'Sedang'
                            : 'Rendah'}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-3 line-clamp-2">{item.deskripsi}</p>

                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>📌 {item.kategori}</span>
                      <span>📅 {item.tanggalBuat?.toLocaleDateString('id-ID')}</span>
                      {item.tanggalSelesai && (
                        <span>✓ Selesai: {item.tanggalSelesai?.toLocaleDateString('id-ID')}</span>
                      )}
                    </div>
                  </div>
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
            <p className="text-gray-500">Tidak ada pengaduan</p>
          </CardBody>
        </Card>
      )}
    </div>
  );
};
