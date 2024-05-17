import home from "../assets/images/css-79.svg";
import "./style/HomePages.css";
const HomePages = () => {
  return (
    <section className="homePage">
      <div className="home-content">
        <div className="home-text">
          <div className="home-title">
            <h1>
              Di dunia online setiap <strong>website</strong> adalah cerita yang
              menunggu untuk diceritakan.
            </h1>
          </div>
          <div className="home-img">
            <img src={home} alt="This Code website" />
          </div>
        </div>

        <div className="home-bottom">
          <div className="home-text-bottom">
            <h1>
              Di sini, kami percaya bahwa setiap garis kode adalah potensi baru
              untuk menciptakan sesuatu yang luar biasa. Saya seorang{" "}
              <strong>web developer</strong> dengan semangat yang tak terbatas
              untuk menciptakan pengalaman <strong>digital</strong> yang luar
              biasa.
            </h1>
          </div>
          <div className="home-btn-bottom">
            <a href="">Lihat Portfolio</a>
            <a href="">Kontak kami</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePages;
