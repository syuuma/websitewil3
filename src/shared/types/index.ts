/**
 * Shared Types & Interfaces
 */

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  nik: string;
  status: 'active' | 'inactive' | 'pending';
  role: 'peserta' | 'keluarga' | 'admin';
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

// Peserta (Member) Types
export interface Peserta {
  id: string;
  nik: string;
  nama: string;
  status: 'aktif' | 'non-aktif' | 'suspend';
  tanggalDaftar: Date;
  faskesPertama: string;
  iuranBulan: number;
  tagihan: Tagihan[];
}

export interface Tagihan {
  id: string;
  pesertaId: string;
  bulan: number;
  tahun: number;
  nominal: number;
  status: 'belum_bayar' | 'lunas' | 'overdue';
  tanggalJatuhTempo: Date;
  metodeBayar?: PaymentMethod;
}

// Payment Types
export type PaymentMethod = 'transfer_bank' | 'e_wallet' | 'debit_otomatis';

export interface PaymentTransaction {
  id: string;
  pesertaId: string;
  tagihanId: string;
  nominal: number;
  metode: PaymentMethod;
  status: 'pending' | 'success' | 'failed' | 'cancelled';
  referensi?: string;
  tanggal: Date;
}

// Healthcare Facility Types
export interface FaskesType {
  id: string;
  nama: string;
  tipe: 'FKTP' | 'FKRTL'; // FKTP = Primary Health Center, FKRTL = Referral Health Center
  alamat: string;
  kota: string;
  provinsi: string;
  latitude: number;
  longitude: number;
  noTelepon: string;
  jamBuka: string;
  spesialis: string[];
  rating?: number;
  jumlahReview?: number;
}

export interface FaskesFilter {
  tipe?: 'FKTP' | 'FKRTL';
  kota?: string;
  provinsi?: string;
  spesialis?: string;
  radius?: number; // dalam km
}

// Complaint & Support Types
export interface Keluhan {
  id: string;
  pesertaId: string;
  judul: string;
  deskripsi: string;
  kategori: 'pembayaran' | 'faskes' | 'layanan' | 'lainnya';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  prioritas: 'low' | 'medium' | 'high';
  tanggalBuat: Date;
  tanggalUpdate: Date;
  tanggalSelesai?: Date;
}

export interface TicketReply {
  id: string;
  keluhanId: string;
  from: 'peserta' | 'admin';
  pesan: string;
  tanggal: Date;
}

// Notification Types
export type NotificationChannel = 'email' | 'whatsapp' | 'push';

export interface Notification {
  id: string;
  pesertaId: string;
  judul: string;
  pesan: string;
  tipe: 'reminder' | 'alert' | 'info';
  channel: NotificationChannel[];
  isRead: boolean;
  tanggal: Date;
}

// Queue (Antrian) Types
export interface Antrian {
  id: string;
  pesertaId: string;
  fasksesId: string;
  tanggal: Date;
  noAntrian: number;
  estimasiWaktu: number; // dalam menit
  status: 'pending' | 'active' | 'completed' | 'cancelled';
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
