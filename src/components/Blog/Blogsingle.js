import React from 'react';
import Blogrightsidebar from './Blogrightsidebar';
import ServiceData from '../Service/ServiceData';
const Bloglists =()=>{
    return(
        <section className="blog_area sec_pad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 blog_sidebar_left">
                        <div className="blog_single mb_50">
                            <img className="img-fluid" src={require('../../img/blog-grid/blog_single.png')} alt=""/>
                            <div className="blog_content">
                                <div className="post_date">
                                    <h2>14 <span>March</span></h2>
                                </div>
                                
                                <h5 className="f_p f_size_20 f_500 t_color mb-30">Bloke cracking goal the full monty get stuffed mate posh.</h5>
                                
                                <p className="f_400 mb-30">Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. Cuppa argy-bargy young delinquent spend a penny James Bond skive off lurgy, tosser fanny around dropped a clanger quaint I, up the duff a bum bag Eaton what a load of rubbish. Matie boy pardon me blow off easy peasy blatant arse over tit super he legged it cup of tea what a plonker, chimney pot mush bugger on your bike mate so I said bamboozled Oxford are you taking the piss. Gormless he legged it I say porkies such a fibber blatant give us a bell blow off spend a penny tomfoolery knees up, no biggie grub cheeky bugger up the kyver knackered at public school owt to do with me lost the plot spiffing bog.</p>
                                
                                <div className="post_share">
                                    <div className="post-nam"> Compartilhe: </div>
                                    <div className="flex">
                                        <a href=".#"><i className="ti-facebook"></i>Facebook</a>
                                        <a href=".#"><i className="ti-twitter"></i>Twitter</a>
                                        <a href=".#"><i className="ti-pinterest"></i>Pinterest</a>
                                    </div>
                                </div>
                                
                            </div>
                        </div>


                        {/* <div className="blog_post">
                            <div className="widget_title">
                                <h3 className="f_p f_size_20 t_color3">Related Post</h3>
                                <div className="border_bottom"></div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-sm-6">
                                    <div className="blog_post_item">
                                        <div className="blog_img">
                                            <img src={require('../../img/blog-grid/post_img_1.png')} alt=""/>
                                        </div>
                                        <div className="blog_content">
                                            <div className="entry_post_info">
                                                <a href=".#">March 14, 2018</a>
                                            </div>
                                            <a href=".#">
                                                <h5 className="f_p f_size_16 f_500 t_color">Why I say old chap that.</h5>
                                            </a>
                                            <p className="f_400 mb-0">Harry bits and bleeding crikey argy-bargy...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="blog_post_item">
                                        <div className="blog_img">
                                            <img src={require('../../img/blog-grid/post_img_2.png')} alt=""/>
                                        </div>
                                        <div className="blog_content">
                                            <div className="entry_post_info">
                                                <a href=".#">April 14, 2017</a>
                                            </div>
                                            <a href=".#">
                                                <h5 className="f_p f_size_16 f_500 t_color">Bloke cracking goal the.</h5>
                                            </a>
                                            <p className="f_400 mb-0">Harry bits and bleeding crikey argy-bargy...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-sm-6">
                                    <div className="blog_post_item">
                                        <div className="blog_img">
                                            <img src={require('../../img/blog-grid/post_img_3.png')} alt=""/>
                                        </div>
                                        <div className="blog_content">
                                            <div className="entry_post_info">
                                                <a href=".#">March 15, 2016</a>
                                            </div>
                                            <a href=".#">
                                                <h5 className="f_p f_size_16 f_500 t_color">Oxford james bond.</h5>
                                            </a>
                                            <p className="f_400 mb-0">Harry bits and bleeding crikey argy-bargy...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        
                    </div>
                    <div className="col-lg-4">
                        <Blogrightsidebar ServiceData={ServiceData}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Bloglists;