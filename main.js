document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const menuLinks = document.querySelectorAll(".menu a");

  // toggle hamburger
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
  });

  // klik menu → scroll + tutup menu
  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");

      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();

        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });
        }
      }

      // tutup menu
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    });
  });
});

const students = [
  { name: "Arif Parulian Efrianto T",
    role: "Ketua Kelas",
    photo:"asset/arif.jpg" },
  { name: "Sita Khairu Amalina",
    role: "Wakil Ketua",
    photo: "asset/sita.jpg"},
  { name: "Agni Ainur Rohmah",
    role: "Sekretaris",
    photo: "asset/agni.jpg"},
  { name: "Abel Unique Larrysa Mamengko",
    role: "Sekretaris",
    photo: "asset/abel.jpg"},
  { name: "Aulira Guselma",
    role: "Bendahara",
    photo: "asset/aulira.jpg"},
  { name: "Putri Patricia Ragea Simbolon",
    role: "Bendahara",
    photo: "asset/patricia.jpg"},
  { name: "Muammar Fajri Akbar",
    role: "Humas",
    photo: "asset/fajri.jpg"},
  { name: "Haifa Nafisah",
    role: "Humas",
    photo: "asset/haifa.jpg"},
  { name: "Jauza Salsabil Syarif",
    role: "Kebersihan",
    photo: "asset/jauza.jpg"},
  { name: "Berli Zania Nazarudin",
    role: "Kebersihan",
    photo: "asset/berli.jpg"},
  { name: "Kezia Sevilia",
    role: "Kebersihan",
    photo: "asset/kezia.jpg"},
  { name: "Rubi Dwi Pratama",
    role: "Keamanan",
    photo: "asset/kezia.jpg"},
  { name: "Muhammad Fauzi",
    role: "PJ Bahasa Indonesia",
    photo: "asset/fauzi.jpg"},
  { name: "Marveliano Glorios Glory Rohani",
    role: "Pj Bahasa Inggris",
    photo: "asset/marvel.jpg"},
  { name: "Putri Kusuma Rahayu",
    role: "PJ Matematika Wajib",
    photo: "asset/putri.jpg"},
    { name: "Syifa Maudy Bastian",
    role: "PJ Matematika Tingkat Lanjut",
    photo: "asset/syifa.jpg"},
  { name: "Fiqri Afrizal",
    role: "PJ PKN",
    photo: "asset/fiqri.jpg"},
  { name: "GALUH Aurellia Fadila",
    role: "PJ Informatika",
    photo: "asset/galuh.jpg"},
  { name: "Alesha Aurora Thalita",
    role: "PJ Kimia",
    photo: "asset/alesha.jpg"},
  { name: "Anggun Rosanda Dewi",
    role: "PJ Sejarah",
    photo: "asset/anggun.jpg"},
  { name: "Naomi Arnita Restiana",
    role: "PJ BK",
    photo: "asset/naomi.jpg"},
  { name: "Cahya lestari Haristawati",
    role: "PJ Fisika",
    photo: "asset/cahya.jpg"},
  { name: "Nazwa Septi Ramadani",
    role: "PJ Biologi",
    photo: "asset/nazwa.jpg"},
  { name: "Deswita Pratiwi", 
    role: "PJ Agama",
    photo: "asset/deswita.jpg"},
  { name: "Christine Mery Indah Putri Br Simarmata",
    role: "PJ Seni",
    photo: "asset/christine.jpg"},
  { name: "Tedi Deniswara",
    role: "PJ PJOK",
    photo: "asset/tedi.jpg"},
  { name: "Ara Okycitra",
    role: "Anggota",
    photo: "asset/ara.jpg"},
  { name: "Finzha Aulia Febriansyah",
    role: "Anggota",
    photo: "asset/finzha.jpg"},
  { name: "Firanisa Ulya", 
    role: "Anggota",
    photo: "asset/firanisa.jpg"},
  { name: "Syafa Maudy Bastian",
    role: "Anggota",
    photo: "asset/maudy.jpg"},
  { name: "Tisya Hani Hafsary", 
    role: "Anggota",
    photo: "asset/tisya.jpg"},
];

for (let i = 12; i <= 11; i++) {
  students.push({
    name: "Nama Siswa " + i,
    role: "Siswa"
  });
}

const grid = document.getElementById("studentGrid");

const style = document.createElement("style");
style.innerHTML = `
  body {
    background: #111;
    margin: 0;
    padding: 15px;
    font-family: Arial;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  .card {
    background: black;
    border-radius: 8px;
    overflow: hidden;
  }

  .photo-box {
    position: relative;
    height: 220px;
    overflow: hidden;
  }

  .photo-box img.photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  .photo-box img.frame {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .info {
    background: #5ee7e7;
    text-align: center;
    padding: 6px;
  }

  .info h4 {
    margin: 0;
    font-size: 14px;
  }

  .info p {
    margin: 0;
    font-size: 12px;
  }
`;
document.head.appendChild(style);

students.forEach(siswa => {
  grid.innerHTML += `
  <div class="student-card">
      <div class="photo-box">
          <img class="photo"
       src="${siswa.photo || 'asset/nomuka.jpg'}"
       alt="${siswa.name}">
</div>
      <div class="student-info">
        <h4>${siswa.name}</h4>
        <p>${siswa.role}</p>
      </div>
    </div>
`;

const cards = document.querySelectorAll('.student-card');

cards.forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});
});
  const cards = document.querySelectorAll('.student-card');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          // ⬅️ INI PENTING (RESET)
          entry.target.classList.remove('show');
        }
      });
    },
    {
      threshold: 0.2
    }
  );
  cards.forEach(card => observer.observe(card));
  
(function () {
  // ambil semua elemen utama (card + gallery)
  const targets = document.querySelectorAll(
    "section, .gallery-row, .photo-grid, .text-content, .card, .content"
  );

  // set style awal (tanpa CSS file)
  targets.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(-60px)";
    
  });

  function animateOnScroll() {
    const windowHeight = window.innerHeight;

    targets.forEach(el => {
      const top = el.getBoundingClientRect().top;

      if (top < windowHeight - 120) {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      } else {
        el.style.opacity = "0";
        el.style.transform = "translateY(-60px)";
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  window.addEventListener("load", animateOnScroll);
})();