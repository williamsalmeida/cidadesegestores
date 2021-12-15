import React from 'react';
import Sectitle from '../Title/Sectitle';
import NoticiasItems from '../Noticias/NoticiasItems';
const NoticiasHome =()=> {
    return(
        <section className="h_blog_area sec_pad">
            <div className="container">
                <Sectitle Title="Notícias" sClass="hosting_title text-center"/>
                <div className="row">
                    <NoticiasItems />
                </div>
            </div>
        </section>
    )
}

export default NoticiasHome;