import React, { Component } from "react";

class ScheduleTab extends Component {
  render() {
    return (
      <section className="event_schedule_area sec_pad" id="programacao">
        <div className="container">
          <div className="hosting_title security_title text-center">
            <h2>
              <span>Confira</span>Nossa Programação
            </h2>
          </div>
          <div className="event_schedule_inner">
            <ul className="nav nav-tabs event_tab" role="tablist">
              <li className="nav-item wow fadeInUp" data-wow-delay="0.4s">
                <a
                  className="nav-link active"
                  id="one-tab"
                  data-toggle="tab"
                  href="#one"
                  role="tab"
                  aria-controls="one"
                  aria-selected="true"
                >
                  <h5>
                    Dia 1<span>24 de Janeiro de 2022</span>
                  </h5>
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay="0.6s">
                <a
                  className="nav-link"
                  id="two-tab"
                  data-toggle="tab"
                  href="#two"
                  role="tab"
                  aria-controls="two"
                  aria-selected="false"
                >
                  <h5>
                    Dia 2<span>25 de Janeiro de 2022</span>
                  </h5>
                </a>
              </li>
              <li className="nav-item wow fadeInUp" data-wow-delay="0.8s">
                <a
                  className="nav-link"
                  id="three-tab"
                  data-toggle="tab"
                  href="#three"
                  role="tab"
                  aria-controls="three"
                  aria-selected="false"
                >
                  <h5>
                    Dia 6<span>26 de Janeiro de 2022</span>
                  </h5>
                </a>
              </li>
            </ul>
            <div className="tab-content event_tab_content">
              <div
                className="tab-pane fade show active"
                id="one"
                role="tabpanel"
                aria-labelledby="one-tab"
              >
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Arrecadação</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/digital.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Nova Lei de Licitações</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/marketing.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Transparência</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Turismo</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="two"
                role="tabpanel"
                aria-labelledby="two-tab"
              >
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Arrecadação</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/digital.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Nova Lei de Licitações</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/marketing.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Workshop</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Inovação</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="three"
                role="tabpanel"
                aria-labelledby="three-tab"
              >
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/marketing.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Cidade Digital</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Inovação</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/conference.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Arrecadação</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
                <div className="media">
                  <div className="media-left">
                    <img
                      src={require("../img/home-event/digital.jpg")}
                      alt=""
                    />
                    <a href="/#">
                      <i className="icon_clock_alt"></i>10:30 - 12:30
                    </a>
                    <a href="/#">
                      <i className="icon_pin_alt"></i>Palco Principal
                    </a>
                  </div>
                  <div className="media-body">
                    <h3 className="h_head">Nova Lei de Licitações</h3>
                    <span>
                      por <a href="/#">Nome do palestrante</a>
                    </span>
                    <p>
                      Breve descrição da palestra/workshop/aprensentação.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default ScheduleTab;
