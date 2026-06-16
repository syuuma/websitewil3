'use client';

import Link from 'next/link';
import { Layout } from '@/widgets/Layout';
import { Card, CardBody, Button, Badge } from '@/shared/ui';

export default function Home() {
  const features = [
    {
      id: 1,
      icon: '📋',
      title: 'Daftar BPJS',
      description: 'Proses pendaftaran mudah hanya dalam 4 langkah',
      href: '/auth/register',
    },
    {
      id: 2,
      icon: '💳',
      title: 'Bayar Iuran',
      description: 'Berbagai pilihan metode pembayaran yang aman',
      href: '/payment',
    },
    {
      id: 3,
      icon: '🏥',
      title: 'Cari Faskes',
      description: 'Temukan fasilitas kesehatan terdekat Anda',
      href: '/healthcare',
    },
    {
      id: 4,
      icon: '📞',
      title: 'Bantuan 24/7',
      description: 'Hubungi kami kapan saja untuk pertanyaan Anda',
      href: '/help',
    },
  ];

  const benefits = [
    'Perlindungan kesehatan untuk seluruh keluarga',
    'Akses mudah ke lebih dari 20.000 fasilitas kesehatan',
    'Proses klaim yang cepat dan transparan',
    'Iuran terjangkau dengan manfaat maksimal',
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge variant="primary" className="mb-4">
              Kesehatan untuk Semua
            </Badge>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Layanan Kesehatan Terpadu BPJS
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Kami memudahkan Anda mengakses layanan kesehatan berkualitas dengan harga terjangkau untuk semua masyarakat Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/auth/register">
                <Button size="lg">Daftar Sekarang</Button>
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" size="lg">Login</Button>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-lg p-8 min-h-80 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl mb-4">🏥</div>
              <p className="text-gray-600">Kesehatan adalah investasi terbaik</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Layanan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Link key={feature.id} href={feature.href}>
              <Card hoverable className="h-full">
                <CardBody className="p-6 text-center">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </CardBody>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16 bg-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Keuntungan Menjadi Peserta BPJS Kesehatan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="text-2xl">✓</div>
              <div>
                <p className="text-gray-900 font-semibold">{benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Siap Melindungi Kesehatan Keluarga Anda?
        </h2>
        <p className="text-xl mb-6 opacity-90">
          Daftarkan diri Anda sekarang dan dapatkan perlindungan kesehatan komprehensif
        </p>
        <Link href="/auth/register">
          <Button className="bg-white text-blue-600 hover:bg-gray-100" size="lg">
            Mulai Daftar
          </Button>
        </Link>
      </section>

      {/* Stats Section */}
      <section className="mt-16">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold text-blue-600">200M+</p>
            <p className="text-gray-600">Peserta Aktif</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-green-600">20K+</p>
            <p className="text-gray-600">Fasilitas Kesehatan</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-blue-600">99%</p>
            <p className="text-gray-600">Kepuasan Pelanggan</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
