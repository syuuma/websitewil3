/**
 * Layout Component
 */

'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showHeader = true,
  showFooter = true,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {showHeader && (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center text-white font-bold">
                  BK
                </div>
                <span className="font-bold text-gray-900 hidden sm:inline">
                  BPJS Kesehatan
                </span>
              </Link>

              {/* Menu Desktop */}
              <div className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">
                  Beranda
                </Link>
                <Link href="/auth/login" className="text-gray-600 hover:text-gray-900">
                  Pendaftaran
                </Link>
                <Link href="/healthcare" className="text-gray-600 hover:text-gray-900">
                  Cari Faskes
                </Link>
                <Link href="/help" className="text-gray-600 hover:text-gray-900">
                  Bantuan
                </Link>
              </div>

              {/* Login Button */}
              <div className="hidden md:flex gap-2">
                <Link
                  href="/auth/login"
                  className="px-4 py-2 text-blue-700 border border-blue-700 rounded-md hover:bg-blue-50"
                >
                  Login
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden pb-4">
                <Link href="/" className="block py-2 text-gray-600 hover:text-gray-900">
                  Beranda
                </Link>
                <Link href="/auth/login" className="block py-2 text-gray-600 hover:text-gray-900">
                  Pendaftaran
                </Link>
                <Link href="/healthcare" className="block py-2 text-gray-600 hover:text-gray-900">
                  Cari Faskes
                </Link>
                <Link href="/help" className="block py-2 text-gray-600 hover:text-gray-900">
                  Bantuan
                </Link>
                <Link
                  href="/auth/login"
                  className="block mt-4 px-4 py-2 text-blue-700 border border-blue-700 rounded-md hover:bg-blue-50"
                >
                  Login
                </Link>
              </div>
            )}
          </nav>
        </header>
      )}

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>

      {showFooter && (
        <footer className="bg-gray-900 text-gray-300 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold mb-4">BPJS Kesehatan</h3>
                <p className="text-sm">Komitmen kami adalah memberikan akses layanan kesehatan yang mudah dan terjangkau.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Layanan</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/auth/register" className="hover:text-white">Pendaftaran</Link></li>
                  <li><Link href="/healthcare" className="hover:text-white">Cari Fasilitas</Link></li>
                  <li><Link href="/help" className="hover:text-white">Bantuan & Pengaduan</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Informasi</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                  <li><a href="#" className="hover:text-white">Kebijakan Privasi</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Hubungi Kami</h4>
                <ul className="space-y-2 text-sm">
                  <li>Telepon: 1500400</li>
                  <li>Email: info@bpjs-kesehatan.go.id</li>
                  <li>Jam Operasional: 24/7</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 flex items-center justify-between text-sm">
              <p>&copy; 2026 BPJS Kesehatan. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};
