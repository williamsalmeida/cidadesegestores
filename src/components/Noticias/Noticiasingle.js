import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Noticiascolsidebar from './Noticiascolsidebar';
import ServiceData from '../Service/ServiceData';
import api_news from '../Service/api-news';

const Noticiasingle =()=>{
    const { id } = useParams();
    const [data, setData] = useState({noticias: []});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api_news.get(`/noticias/${id}`);
                setData(response.data);
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [id]);
    
    return(
        <React.Fragment>
            <section className="blog_area sec_pad">            
            {data.noticias[0] && (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 blog_sidebar_left">
                                <div className="blog_single mb_50">
                                    <img className="img-fluid" src={require('../../img/not_single.png')} alt=""/>
                                    <div className="blog_content">
                                        <div className="post_date">
                                            <h2>14<span>Dez</span></h2>
                                        </div>
                                        
                                        <h5 className="f_p f_size_20 f_500 t_color mb-30">{data.noticias[0].titulo}</h5>
                                        
                                        <p className="f_400 mb-30">
                                            {data.noticias[0].texto}
                                        </p>
                                        
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

                                
                            </div>
                            <div className="col-lg-4">
                                <Noticiascolsidebar ServiceData={ServiceData}/>
                            </div>
                        </div>
                    </div> 
            )}
            </section>
        </React.Fragment>
    )
}
export default Noticiasingle;