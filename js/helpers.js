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
export const toggleActiveClass = (elements) => {
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
export const removeActiveClass = (elements) => {
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
export const toggleModal = (openButtons, modal, closeButton) => {
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
