import gambar1 from "../assets/images/css-9.svg";
import gambar2 from "../assets/images/coding-3-12.svg";
import gambar3 from "../assets/images/marketing-campaign-55.svg";

import "./style/servicespages.css";
const ServicesPages = () => {
  return (
    <section className="service">
      <div className="service-content">
        <div className="service-title">
          <p>SERVICE</p>
          <h1>Desain inovatif, pengalaman pengguna terbaik.</h1>
          <h3>
            Dukungan pelanggan yang responsif, solusi cepat, kepuasan klien
            terjamin.
          </h3>
        </div>
        <div className="service-list">
          <div className="service-link">
            <div className="service-img">
              <img src={gambar1} alt="service porfolio faldo" />
            </div>
            <h1>Pengembangan Situs Web Statis</h1>
            <p>
              Pembuatan situs web sederhana yang kontennya tetap atau jarang
              berubah dan statis.
            </p>
          </div>
          <div className="service-link">
            <div className="service-img">
              <img src={gambar2} alt="service porfolio faldo" />
            </div>
            <h1>Pengembangan Situs Web dinamis</h1>
            <p>
              Situs web yang menggunakan teknologi backend untuk menghasilkan
              konten secara dinamis.
            </p>
          </div>
          <div className="service-link">
            <div className="service-img">
              <img src={gambar3} alt="service porfolio faldo" />
            </div>
            <h1>Pengembangan Aplikasi Web</h1>
            <p>
              Pembuatan aplikasi yang berjalan di web, mirip dengan aplikasi
              android tetapi diakses melalui browser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPages;
