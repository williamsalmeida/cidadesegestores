import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import Sticky from 'react-stickynode';

class CustomNavbar extends Component {
    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass} =this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <NavLink className={`navbar-brand ${slogo}`} to="./">
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
                                    <NavLink title="Home" className="nav-link" to="./">Home</NavLink>
                                </li>                            
                                <li className="nav-item">
                                    <NavLink title="Sobre" className="nav-link" to="./">Sobre</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink title="Programação" className="nav-link" to="./">Programação</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink title="Parceiros" className="nav-link" to="./">Parceiros</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink title="Contato" className="nav-link" to="./">Contato</NavLink>
                                </li>
                            </ul>
                            <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">Inscrições</a>
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar;