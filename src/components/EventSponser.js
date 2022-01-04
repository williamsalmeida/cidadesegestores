import React from "react";
import EventSponserLogo from "./EventSponserLogo";

const EventSponser = () => {
  return (
    <section className="event_sponser_area sec_pad" id="parceiros">
      <div className="container">
        <div className="hosting_title security_title text-center">
          <h2>
            <span>Parceiros</span>Oficiais
          </h2>
        </div>
        <div className="event_sponser_inner">
          <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Patrocínio</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row partner_logo-gov">
                  <EventSponserLogo url=".#" image="logo-gov_alagoas.png" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
          <div className="event_sponser_item">
            <div className="row">
              <div className="col-lg-3 col-md-4">
                <h4 className="h_head sponser_title">Apoio</h4>
              </div>
              <div className="col-lg-9 col-md-8">
                <div className="row">
                  <EventSponserLogo url=".#" image="Logo-CNM.png" loading="lazy" />
                  <EventSponserLogo url=".#" image="logo-AlfaCon.png" loading="lazy" />
                  <EventSponserLogo url=".#" image="logo-abrasel.png" loading="lazy" />
                  <EventSponserLogo url=".#" image="logo-unicafes.png" loading="lazy" />
                  <EventSponserLogo url=".#" image="logo-abenepi.png" loading="lazy" />
                  <EventSponserLogo url=".#" image="logo-congemas.png" loading="lazy" />
                  <EventSponserLogo url=".#" image="logo-escola_contas.png" loading="lazy" />
                  <EventSponserLogo url=".#" image="logo-sebrae.png" loading="lazy" />
                  <EventSponserLogo url=".#" image="logo-tceal.png" loading="lazy" />
                  <EventSponserLogo url=".#" image="logo-sesi_senai.png" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventSponser;
