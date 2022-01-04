import React from 'react';
import OnepageMenu from '../components/OnepageMenu';
import Breadcrumb from '../components/Breadcrumb';
import Noticiasingle from '../components/Noticias/Noticiasingle'

const NoticiaSingle = () => {
    return(
        <div className="body_wrapper">
            <OnepageMenu slogo="sticky_logo" mClass="menu_four" nClass="w_menu" hbtnClass="btn_get_radious menu_custfive"/>
            <Breadcrumb breadcrumbClass="breadcrumb_area" imgName="breadcrumb/banner_bg.png"/>
            <Noticiasingle />
            {/* <FooterTwo FooterData={FooterData}/> */}
        </div>
    )
}
export default NoticiaSingle;