/**
 * toggleActiveClass
 *
 * Fungsi untuk menambahkan event listener `onclick` pada sebuah tombol untuk menambah
 * atau menghapus kelas 'active' dari elemen yang ditentukan. Fungsi tambahan (callback)
 * juga dapat dieksekusi setelah toggle selesai.
 *
 * @param {HTMLElement} button - Elemen tombol yang akan memicu event `onclick`.
 * @param {HTMLElement} element - Elemen yang kelas 'active'-nya akan di-toggle.
 * @param {Function} [callback] - Fungsi opsional yang akan dipanggil setelah toggle selesai.
 */
export const toggleActiveClass = (button, element, callback) => {
  button.onclick = () => {
    element.classList.toggle('active')
    if (callback) callback()
  }
}

/**
 * removeActiveClass
 *
 * Fungsi untuk menghapus kelas 'active' dari sebuah elemen jika pengguna
 * mengklik di luar elemen tersebut atau tombol yang terkait.
 *
 * @param {Event} e - Objek event dari klik yang terjadi.
 * @param {HTMLElement} button - Elemen tombol yang mengontrol elemen target.
 * @param {HTMLElement} element - Elemen yang kelas 'active'-nya akan dihapus jika klik di luar.
 */
export const removeActiveClass = (e, button, element) => {
  if (!button.contains(e.target) && !element.contains(e.target))
    element.classList.remove('active')
}
