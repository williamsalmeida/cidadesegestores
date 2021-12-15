import React from 'react';
import OnepageMenu from '../components/OnepageMenu';
import EventBanner from "../components/Banner/EventBanner";
import NoticiasHome from "../components/Noticias/NoticiasHome";
import EventCount from "../components/Service/EventCount";
import CongressoAbout from "../components/About/CongressoAbout";
import Team from "../components/Team/Team";
import EventDetails from "../components/Features/EventDetails";
import FeiraAbout from "../components/About/FeiraAbout";
import ScheduleTab from "../components/scheduleTab";
import EventSponser from "../components/EventSponser";
import EventLocation from "../components/EventLocation";
import Footer from "../components/Footer/Footer";
import FooterData from "../components/Footer/FooterData";

export const Home = () => (
    <div className="body_wrapper">
      <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
      <EventBanner />
      <EventCount />
      <NoticiasHome />
      <CongressoAbout />
      <Team />
      <FeiraAbout />
      <ScheduleTab />
      <EventDetails />
      <EventSponser />
      <EventLocation /> 
      <Footer fClass="event_footer_area" FooterData={FooterData} />
    </div>
)