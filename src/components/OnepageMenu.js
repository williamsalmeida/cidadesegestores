import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-scroll';
import Sticky from 'react-stickynode';

class OnepageMenu extends Component {
    render() {
        var {mClass, nClass, cClass, slogo} =this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <NavLink className={`navbar-brand ${slogo}`} to="/">
                            <img src={require("../img/logo-ama-branco.png")} alt=""/>
                            <img src={require("../img/logo-ama.png")} alt="logo"/>
                        </NavLink>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="acompanhe" spy={true} smooth={true} offset={0} duration={1000}>Acompanhe</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="congresso" spy={true} smooth={true} offset={0} duration={1000}>Congresso</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="feira" spy={true} smooth={true} offset={-90} duration={1000}>Feira</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="aulao" spy={true} smooth={true} offset={-90} duration={1000}>Aulão</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="parceiros" spy={true} smooth={true} offset={0} duration={1000}>Parceiros</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" activeClass="active" to="contato" spy={true} smooth={true} offset={0} duration={1000}>Contato</Link>
                                </li>
                            </ul>
                            {/* <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">Inscrições</a> */}
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

export default OnepageMenu;