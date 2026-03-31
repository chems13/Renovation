import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
export default function Home() {
  return (
    <>
      <section className="container">
        <h3 className="bg-light fw-bold m-5 text-center justify-content-center">
          Transformez votre maison en toute sérénité
        </h3>
        <p className="text-center">
          Nous prenons le temps de comprendre vos besoins et de vous guider
          étape par étape. Inscrivez‑vous pour recevoir un devis gratuit, simple
          et sans pression.
        </p>

        {/* Carousel */}
        <div
          id="homeCarousel"
          className="carousel slide rounded-4 "
          data-bs-ride="carousel"
        >
          <div className="carousel-inner rounded-4 overflow-hidden">
            <div className="carousel-item active">
              <img src={img1} className="d-block w-100" alt="Rénovation 1" />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="Rénovation 2" />
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="Rénovation 3" />
            </div>
          </div>

          {/* Boutons précédent / suivant */}
          <button
            className="carousel-control-prev bg-info"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next bg-success"
            type="button"
            data-bs-target="#homeCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </section>
    </>
  );
}
