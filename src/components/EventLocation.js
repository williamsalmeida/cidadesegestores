import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import Map from "./Map";
const EventLocation = () => {
  return (
    <section className="event_location_area" id="contato">
      <Map />
      <div className="container">
        <div className="event_location">
          <div className="contact_info_item">
            <h6>Onde será?</h6>
            <p>
              Centro Cultural e De Exposições Ruth Cardoso<br />
              Rua Celso Piatti - Jaraguá, Maceió - AL, 57022-210
            </p>
          </div>
          <div className="contact_info_item">
            <h6>Contato</h6>
            <p>
              <a href="mailto:saasland@gmail.com">ama@ama.al.org.br</a>
            </p>
            <p>
              <a href="tel:3024437488">(82) 2122-7300</a>
            </p>
          </div>
          <div className="f_social_icon_two">
            <a href="https://www.instagram.com/amaalagoas/">
              <FaInstagramSquare />
            </a>
            <a href="https://www.facebook.com/AssociacaoDosMunicipiosAlagoanos/">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/amaalagoas">
              <FaTwitter />
            </a>
            <a href="https://www.youtube.com/user/AMAalagoas">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventLocation;
