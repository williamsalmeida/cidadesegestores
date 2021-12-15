import React from 'react';
import Sectitle from '../Title/Sectitle';
import HostingBlogItems from '../Blog/HostingBlogItems';
const HostingBlog =()=> {
    return(
        <section className="h_blog_area sec_pad">
            <div className="container">
                <Sectitle Title="Notícias" sClass="hosting_title text-center"/>
                <div className="row">
                    <HostingBlogItems />
                </div>
            </div>
        </section>
    )
}

export default HostingBlog;