import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Noticiascolsidebar from './Noticiascolsidebar';
import ServiceData from '../Service/ServiceData';
import api_news from '../Service/api-news';

const Noticiasingle =()=>{
    const { slug } = useParams();
    const [data, setData] = useState({noticias: []});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api_news.get(`/noticias/${slug}`);
                setData({noticias: [response.data]});
            }
            catch(error) {
                console.log(error);
            }
        }
        fetchData();
    }, [slug]);
    
    return(
        <React.Fragment>
            <section className="blog_area sec_pad">            
            {data.noticias[0] && (
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 blog_sidebar_left">
                                <div className="blog_single mb_50">
                                    <img className="img-fluid" src={data.noticias[0].foto} alt=""/>
                                    <div className="blog_content">
                                        <div className="entry_post_info">
                                            {new Intl.DateTimeFormat('pt-BR', {
                                                day: 'numeric',
                                                month: 'long',
                                                year: 'numeric',
                                            }).format(
                                                new Date(data.noticias[0].data)
                                            )}
                                        </div>
                                        
                                        <h5 className="f_p f_size_20 f_500 mb-30">{data.noticias[0].titulo}</h5>
                                        
                                        <div dangerouslySetInnerHTML={{ __html: (data.noticias[0].texto) }} />
                                        
                                        <div className="post_share mt-4">
                                            <div className="post-nam"> Compartilhe: </div>
                                            <div className="flex">
                                                <a href=".#"><i className="ti-twitter"></i>Twitter</a>
                                                <a href=".#"><i className="ti-facebook"></i>Facebook</a>
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