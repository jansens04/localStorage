const judul = document.querySelector('#judul');

let nama = localStorage.getItem('nama');

if (!nama) {
  nama = prompt('masukkan nama!!');
  localStorage.setItem('nama', nama);
}

const gantiNama = (e) => {
  nama = prompt('masukkan nama!!');
  localStorage.setItem('nama', nama);

  e.preventDefault();
};

const hapusNama = (e) => {
  localStorage.removeItem('nama');
  e.preventDefault();
};

judul.innerHTML = `Hallo ${nama}`;

// ! Toggle DarkMode

const toggle = document.querySelector('.toggle');

let tema = localStorage.getItem('tema');

if (!tema) {
  localStorage.setItem('tema', 'light');
}

const darkMode = () => {
  document.body.classList.add('dark-mode');
  localStorage.setItem('tema', 'darkMode');
  toggle.innerHTML = 'lightMode';
};

const lightMode = () => {
  document.body.classList.remove('dark-mode');
  localStorage.setItem('tema', 'lightMode');
  toggle.innerHTML = 'darkMode';
};

if (tema == 'darkMode') {
  darkMode();
}

toggle.addEventListener('click', (e) => {
  tema = localStorage.getItem('tema');
  if (tema === 'lightMode') {
    darkMode();
  } else {
    lightMode();
  }
  e.preventDefault();
});
