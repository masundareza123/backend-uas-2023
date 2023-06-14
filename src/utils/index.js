const requestResponse = {
    success: {
      code: 200,
      status: true,
      message: "Berhasil Memuat Permintaan",
    },
    incomplete_body: {
      code: 400,
      status: false,
      message: "Permintaan Gagal, Silakan periksa data permintaan Anda",
    },
    unauthorized: {
      code: 401,
      status: false,
      message:
        "Email atau Kata Sandi Tidak Cocok, atau Anda tidak diizinkan mengakses halaman ini",
    },
    not_found: {
      code: 404,
      status: false,
      message: "Gagal Memuat Permintaan",
    },
    unprocessable_entity: {
      code: 422,
      status: false,
      message: "Permintaan yang Anda kirim tidak dapat diproses",
    },
    server_error: {
      code: 500,
      status: false,
      message: "Kesalahan Pada Server, Silakan Hubungi Administrator",
    },
    failed: {
      code: 404,
      status: false,
      message: "Permintaan Gagal",
    },
    email_register: {
      code: 404,
      status: false,
      message: "Email Sudah Terdaftar",
    },
    contact_register: {
      code: 404,
      status: false,
      message: "Nomor Telepon Sudah Terdaftar",
    },
    invalid_email: {
      code: 404,
      status: false,
      message: "Email Tidak Terdaftar",
    },
    info_account: {
      code: 401,
      status: false,
      message: "Akun Belum Aktif",
    },
    invalid_emailotp: {
      code: 404,
      status: false,
      message: "Email atau kode OTP Salah",
    },
    success_response: {
      code: 200,
      status: true,
    },
    error_response: {
      code: 404,
      status: false,
    },
  };
  
  function getRndInteger() {
    return Math.floor(Math.random() * 1000000);
  }
  
  module.exports = {
    requestResponse,
    getRndInteger,
  };
  