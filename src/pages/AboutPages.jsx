import "./style/aboutpages.css";
import aboutImg from "../assets/images/clement-helardot-95YRwf6CNw8-unsplash (1).jpg";
const AboutPages = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="about-title">
          <p>About</p>
          <h1>
            Pengembang web berkualitas tinggi
          </h1>
          {/* <h3>
            Saya adalah web developer yang berdedikasi untuk mengubah ide-ide
            menjadi pengalaman online yang menakjubkan.
          </h3> */}
        </div>
        <div className="about-img">
          <img src={aboutImg} alt="about portfolio rifaldo" />
          <div className="about-text">
            <h1>
              Ayo jadikan <strong>website</strong> Anda yang terbaik!
            </h1>
            <p>
              Apakah Anda memiliki <strong>ide</strong> yang ingin diwujudkan? Saya siap membantu
              Anda menggapai mimpi digital Anda. Mari kita berkolaborasi untuk
              menciptakan solusi yang tidak hanya <strong>memukau</strong>, tetapi juga <strong>efektif</strong>.
              Mari kita mulai membangun masa depan <strong>digital</strong> yang cerah bersama!
            </p>
            <a href="">Explore Portfolio</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPages;
