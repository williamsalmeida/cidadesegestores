import React from 'react';
import Sectitle from '../Title/Sectitle';
import Teamitem from '../Team/Teamitem';
const Team =()=>{
    return(
        <section className="experts_team_area mb_70 mt_100">
            <div className="container">
                <Sectitle Title="Palestrantes" sClass="hosting_title text-center"/>
                <div className="row team_content">
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_01.jpg" memberN="Nome" memberd="Atuação"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_02.jpg" memberN="Nome" memberd="Atuação"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_03.jpg" memberN="Nome" memberd="Atuação"/>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <Teamitem teamImage="team_04.jpg" memberN="Nome" memberd="Atuação"/>
                    </div>
                    <div className="col-lg-12 text-center" id="programacao">
                        <a href=".#" className="learn_btn">Veja todos <i className="ti-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default Team;