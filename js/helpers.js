/**
 * toggleActiveClass
 *
 * Fungsi untuk menambahkan event listener `onclick` pada beberapa tombol yang
 * akan menambah atau menghapus kelas 'active' dari elemen-elemen yang ditentukan.
 * Fungsi callback opsional juga bisa dipanggil setelah toggle selesai.
 *
 * @param {Array<Object>} elements - Array yang berisi objek-objek dengan tombol
 *                                   dan elemen target yang terkait.
 * @param {HTMLElement} elements[].button - Elemen tombol yang akan memicu event `onclick`.
 * @param {HTMLElement} elements[].element - Elemen yang kelas 'active'-nya akan di-toggle.
 * @param {Function} [elements[].callback] - Fungsi opsional yang akan dipanggil setelah toggle selesai.
 *
 * @example
 * const navbarNav = document.querySelector('.navbar-nav');
 * const hamburgerButton = document.querySelector('#hamburger-menu');
 * const searchForm = document.querySelector('.search-form');
 * const searchButton = document.querySelector('#search-button');
 *
 * toggleActiveClass([
 *   { button: hamburgerButton, element: navbarNav },
 *   { button: searchButton, element: searchForm, callback: () => searchInput.focus() }
 * ]);
 */
const toggleActiveClass = (elements) => {
  elements.forEach(({ button, element, callback }) => {
    button.onclick = () => {
      element.classList.toggle('active')
      if (callback) callback()
    }
  })
}

/**
 * removeActiveClass
 *
 * Fungsi ini secara otomatis menambahkan event listener `onclick` pada dokumen
 * untuk memantau klik di luar beberapa elemen. Jika pengguna mengklik di luar
 * elemen atau tombol terkait, kelas 'active' akan dihapus dari elemen tersebut.
 *
 * @param {Array<Object>} elements - Array yang berisi objek-objek dengan tombol
 *                                   dan elemen target yang terkait.
 * @param {HTMLElement} elements[].button - Elemen tombol yang mengontrol elemen target.
 * @param {HTMLElement} elements[].element - Elemen target yang kelas 'active'-nya
 *                                           akan dihapus jika klik terjadi di luar.
 *
 * @example
 * const navbarNav = document.querySelector('.navbar-nav');
 * const hamburgerButton = document.querySelector('#hamburger-menu');
 * const searchForm = document.querySelector('.search-form');
 * const searchButton = document.querySelector('#search-button');
 *
 * removeActiveClass([
 *   { button: hamburgerButton, element: navbarNav },
 *   { button: searchButton, element: searchForm }
 * ]);
 */
const removeActiveClass = (elements) => {
  document.onclick = (e) => {
    elements.forEach(({ button, element }) => {
      if (!button.contains(e.target) && !element.contains(e.target)) {
        element.classList.remove('active')
      }
    })
  }
}

/**
 * toggleModal
 *
 * Fungsi untuk menampilkan atau menyembunyikan modal. Modal akan ditampilkan
 * saat tombol `openButton` diklik dan disembunyikan saat tombol `closeButton`
 * atau area di luar modal diklik.
 *
 * @param {HTMLElement[]} openButtons - Array elemen tombol yang akan membuka modal.
 * @param {HTMLElement} modal - Elemen modal yang akan ditampilkan atau disembunyikan.
 * @param {HTMLElement} closeButton - Tombol yang akan menutup modal.
 */
const toggleModal = (openButtons, modal, closeButton) => {
  // Set onclick untuk semua tombol buka
  openButtons.forEach((btn) => {
    btn.onclick = () => {
      modal.style.display = 'flex'
    }
  })

  // Set onclick untuk tombol tutup
  closeButton.onclick = () => {
    modal.style.display = 'none'
  }

  // Set onclick untuk menutup modal jika klik di luar modal
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = 'none'
    }
  }
}

/**
 * Mengonversi nilai harga menjadi format mata uang Rupiah (IDR).
 *
 * @param {number} price - Nilai harga yang ingin diformat.
 * @returns {string} - Harga yang diformat dalam bentuk string dengan format mata uang Rupiah.
 */
const formatRupiah = (price) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price)
}

/**
 * Fungsi untuk mengaktifkan atau menonaktifkan tombol berdasarkan
 * apakah semua input di dalam form sudah terisi.
 *
 * @param {HTMLFormElement} form - Form yang berisi elemen input untuk divalidasi.
 * @param {HTMLElement} button - Tombol yang akan diaktifkan atau dinonaktifkan.
 * @param {string} disabledClass - Kelas CSS yang digunakan untuk menonaktifkan tombol.
 *
 * @example
 * // Ambil elemen form dan button
 * const formElement = document.getElementById('some-form');
 * const submitButton = document.getElementById('submit-button');
 *
 * // Panggil fungsi untuk mengaktifkan/menonaktifkan tombol submit
 * toggleButtonOnFormInput(formElement, submitButton, 'disabled');
 */
function toggleButtonOnFormInput(form, button, disabledClass) {
  // Set awal tombol menjadi disable
  button.disabled = true

  form.addEventListener('keyup', () => {
    // Cek apakah semua elemen input terisi
    const allFilled = Array.from(form.elements)
      .filter((element) => element.tagName === 'INPUT') // Hanya ambil elemen input
      .every((element) => element.value.trim() !== '')

    // Mengatur status tombol
    button.disabled = !allFilled
    button.classList.toggle(disabledClass, !allFilled) // Tambah atau hapus kelas disabled
  })
}
