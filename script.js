// File script.js
// Untuk saat ini, file ini bisa Anda gunakan untuk efek interaktif sederhana,
// misalnya alert sambutan, animasi, atau validasi form nantinya.

console.log("Website Edukasi Hipertensi aktif!");

// Contoh: pesan selamat datang saat halaman dimuat
window.addEventListener("load", () => {
  console.log("Selamat datang di Website Edukasi Hipertensi!");
});

// kalkulator.js
document.addEventListener("DOMContentLoaded", function() {
  const hitungBtn = document.getElementById("hitungBtn");
  const hasil = document.getElementById("hasil");

  hitungBtn.addEventListener("click", function() {
    const s = parseInt(document.getElementById("sistolik").value);
    const d = parseInt(document.getElementById("diastolik").value);

    let status = "";

    if (isNaN(s) || isNaN(d)) {
      status = "⚠️ Harap isi nilai sistolik dan diastolik dengan benar.";
      hasil.style.color = "#d9534f";
    } 
    else if (s < 120 && d < 80) {
      status = "✅ Tekanan darah Anda NORMAL.";
      hasil.style.color = "green";
    } 
    else if ((s >= 120 && s <= 139) || (d >= 80 && d <= 89)) {
      status = "⚠️ Anda berada pada kategori PRAHIPERTENSI. Perhatikan pola hidup sehat.";
      hasil.style.color = "#e6b800";
    } 
    else if (s >= 140 || d >= 90) {
      status = "❌ Anda termasuk kategori HIPERTENSI. Disarankan konsultasi ke dokter.";
      hasil.style.color = "#d9534f";
    } 
    else {
      status = "Nilai tidak dikenali. Silakan cek kembali input Anda.";
      hasil.style.color = "#333";
    }

    hasil.textContent = status;
  });
});
