import React from "react";
import "./Pagina.css";
import imagen1 from "../../../assets/hotel1.jpg";
import imagen2 from "../../../assets/hotel2.jpg";
import imagen3 from "../../../assets/hotel3.jpg";
import imagen4 from "../../../assets/hotel4.jpg";
import imagen5 from "../../../assets/hotel5.jpg";
import imagen6 from "../../../assets/hotel6.jpg";
import imagen7 from "../../../assets/hotel7.jpg";
import imagen8 from "../../../assets/hotel8.jpg";
import imagen9 from "../../../assets/hotel9.jpg";
import imagen10 from "../../../assets/hotel10.jpg";

const Pagina = () => {
  return (
    <div className="contenedorprincipal">
      <div className="encabezado">
        <h1>En NOS FUIMOS!! creemos que cada viaje es una oportunidad única para crear recuerdos inolvidables.</h1>
        
      </div>
      <div className="contenedorhoteles">
        <div className="contenedorhotel1">
          <div className="hotel"><img src={imagen1} alt="imagen"  /> <p className ="texto-hotel"alt="text1"><h3>Oasis</h3>Este hotel de 4 estrellas ofrece a sus huéspedes una experiencia única de lujo y tranquilidad. Ubicado en una ubicación privilegiada, el hotel cuenta con unas vistas impresionantes al mar y una piscina privada para que pueda relajarse y disfrutar del sol.</p></div>
          <div className="hotel"><img src={imagen2} alt="imagen" /><p className="texto-hotel" alt= "text1"><h3>Hotel Buena Vista</h3>El Hotel Buena vista es un oasis de paz y tranquilidad ubicado en la costa del mar. Este hotel de 4 estrellas ofrece a sus huéspedes una experiencia única de lujo y relajación.</p></div>
          <div className="hotel"><img src={imagen3} alt="imagen" /><p className="texto-hotel" alt= "text1"><h3>Hotel Alma del Mar</h3>El hotel se encuentra en una ubicación privilegiada, rodeado de exuberantes paisajes y con vistas impresionantes al mar cristalino. Déjate llevar por la brisa marina y el sonido de las olas mientras te relajas en la playa o en la piscina infinita del hotel.</p> </div>
          <div className="hotel"><img src={imagen4} alt="imagen" /><p className="texto-hotel" alt= "text1"><h3>Hotel Paraíso Tropical</h3>El Hotel Paraíso Tropical es un oasis de lujo y serenidad en el corazón del Caribe. Este hotel de 4 estrellas te ofrece una experiencia única de relajación y confort, rodeado de las paradisíacas playas de arena blanca y las aguas turquesas del mar.</p></div>
          <div className="hotel"><img src={imagen5} alt="imagen" /><p className="texto-hotel" alt= "text1"><h3>Hotel lujo y relax</h3>Te ofrece una experiencia única de relajación y confort, rodeado de la exuberante naturaleza del Caribe. Disfruta de habitaciones espaciosas y luminosas, decoradas con estilo caribeño y equipadas con todas las comodidades.</p></div>
        </div>
        <div className="contenedorhotel2">
          <div className="hotel"><img src={imagen6} alt="imagen" /><p className="texto-hotel" alt= "text1"><h3>Hotel Sol Dorado</h3>Ubicado frente a las cristalinas aguas del mar Caribe, este hotel de 4 estrellas te invita a sumergirte en un oasis de paz y tranquilidad. Déjate envolver por la calidez del sol tropical mientras te relajas en la playa o en la piscina infinita del hotel.</p></div>
          <div className="hotel"><img src={imagen7} alt="imagen" /><p className="texto-hotel" alt= "text1"><h3>Hotel Brisas del Mar</h3>Ubicado en una tranquila bahía bañada por las aguas cristalinas del mar Mediterráneo, este hotel de 4 estrellas te invita a sumergirte en un oasis de paz y tranquilidad. Déjate envolver por la suave brisa marina mientras te relajas en la playa o en la piscina infinita del hotel.</p></div>
          <div className="hotel"><img src={imagen8} alt="imagen" /><p className="texto-hotel" alt= "text1"><h3>Hotel Perlatto</h3>Ubicado en una zona tranquila de la ciudad, este hotel de 3 estrellas te ofrece un refugio perfecto para escapar del ajetreo urbano. Relájate en sus habitaciones sencillas y funcionales, decoradas con un estilo acogedor y equipadas con todo lo necesario para una estancia agradable.</p></div>
          <div className="hotel"><img src={imagen9} alt="imagen" /><p className="texto-hotel" alt= "text1"><h3>Hotel Prada</h3>Este hotel te ofrece habitaciones modestas pero acogedoras, decoradas con un estilo tradicional y equipadas con las comodidades básicas para una estancia confortable. Disfruta de un ambiente tranquilo y familiar en este hotel que te hará sentir como en casa.</p></div>
          <div className="hotel"><img src={imagen10} alt="imagen" /><p className="texto-hotel" alt= "text1"><h3>Hotel Vista Azul</h3>Ubicado en una paradisíaca playa de arena blanca, este hotel de 5 estrellas te invita a sumergirte en un mundo de paz y tranquilidad. Déjate envolver por la suave brisa marina mientras te relajas en la playa o en la piscina infinita del hotel, con impresionantes vistas al mar.</p></div>
        </div>
      </div>
    </div>
  );
};

export default Pagina;
