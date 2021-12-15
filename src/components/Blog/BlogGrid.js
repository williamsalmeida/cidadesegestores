import React from 'react';
import BlogGridItem from './BlogGridItem';
const BlogGrid =()=>{
    return(
        <section className="blog_area_two sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 blog_grid_info">
                        <div className="row">
                            <BlogGridItem />
                        </div>
                        <ul className="list-unstyled page-numbers shop_page_number text-left mt_30">
                            <li><span aria-current="page" className="page-numbers current">1</span></li>
                            <li><a className="page-numbers" href=".#">2</a></li>
                            <li><a className="next page-numbers" href=".#"><i className="ti-arrow-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BlogGrid;