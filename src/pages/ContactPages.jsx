import "./style/contactpages.css";

const ContactPages = () => {
  return (
    <section className="contact">
      <div
        className="contact-content"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="contact-text-left">
          <h1>Apakah Anda Siap Untuk Membuat Webisite Impian Anda ?</h1>
          <p>
            Hubungi kami jika ingin bertanya seputar Website impian anda, kami
            siap 24/7
          </p>
        </div>
        <div className="contact-text-button">
          <a href="" className="contact-start">
            Mulai Sekarang
          </a>
          <a href="" className="contact-btn">
            Kontak Kami
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPages;
