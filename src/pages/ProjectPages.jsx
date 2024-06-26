import "./style/projectpages.css";

import project1 from "../assets/images/project.png";
import project2 from "../assets/images/project 2.jpg";
import project3 from "../assets/images/Group 1.png";

const ProjectPages = () => {
  return (
    <section className="project">
      <div className="project-content">
        <div
          className="project-tittle"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="project-text-left">
            <h1>
              <strong>Proyek</strong> luar biasa
            </h1>
            <h1>
              yang terakhir saya kerjakan<strong>.</strong>
            </h1>
          </div>
          <div className="project-text-right">
            <h3>
              Tersedia untuk dijelajahi : <strong>Proyek</strong> web
              development terbaru saya. Mari temukan{" "}
              <strong>kreativitas</strong>, <strong>fungsionalitas</strong>, dan{" "}
              <strong>keindahan</strong> yang tersembunyi di dalamnya.
            </h3>
          </div>
        </div>
        <div className="project-list">
          <div className="project-link">
            <div
              className="project-link-text"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h1>
                Pembuatan situs <br /> web perusahaan
              </h1>
              <h3>
                situs web untuk perusahaan dengan tujuan memperkenalkan produk,
                layanan, dan informasi perusahaan kepada pengguna.
              </h3>
              <ul>
                <li>
                  <i className="bx bxs-check-square"></i> Aksesibilitas Global
                </li>
                <li>
                  <i className="bx bxs-check-square"></i> Interaksi dan
                  Keterlibatan
                </li>
                <li>
                  <i className="bx bxs-check-square"></i> Pengelolaan Konten
                  yang Mudah
                </li>
                <li>
                  <i className="bx bxs-check-square"></i> Analisis dan Pelacakan
                </li>
              </ul>
            </div>
            <div
              className="project-img"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <img src={project1} alt="project from faldo portfolio" />
            </div>
          </div>
          <div className="project-link">
            <div
              className="project-img"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <img src={project2} alt="project from faldo portfolio" />
            </div>
            <div
              className="project-link-text"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <h1>
                Toko Online <br /> atau E-commerce
              </h1>
              <h3>
                Pengembang web membangun platform e-commerce yang memungkinkan
                penjualan produk secara online.
              </h3>
              <ul>
                <li>
                  <i className="bx bxs-check-square"></i> Aksesibilitas Global
                </li>
                <li>
                  <i className="bx bxs-check-square"></i> Interaksi dan
                  Keterlibatan
                </li>
                <li>
                  <i className="bx bxs-check-square"></i> Pengelolaan Konten
                  yang Mudah
                </li>
                <li>
                  <i className="bx bxs-check-square"></i> Analisis dan Pelacakan
                </li>
              </ul>
            </div>
          </div>
          <div className="project-link">
            <div
              className="project-link-text"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
            >
              <h1>
                Situs Web E-learning <br /> atau Kursus Online
              </h1>
              <h3>
                Pembuatan platform untuk pendidikan jarak jauh, yang
                memungkinkan pengguna untuk mengakses materi belajar.
              </h3>
              <ul>
                <li>
                  <i className="bx bxs-check-square"></i> Aksesibilitas Global
                </li>
                <li>
                  <i className="bx bxs-check-square"></i> Interaksi dan
                  Keterlibatan
                </li>
                <li>
                  <i className="bx bxs-check-square"></i> Pengelolaan Konten
                  yang Mudah
                </li>
                <li>
                  <i className="bx bxs-check-square"></i> Analisis dan Pelacakan
                </li>
              </ul>
            </div>
            <div
              className="project-img"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <img src={project3} alt="project from faldo portfolio" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectPages;
