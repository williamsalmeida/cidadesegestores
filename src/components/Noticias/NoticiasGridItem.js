import React, {Component} from 'react';
import api_news from '../Service/api-news';

class NoticiasGridItem extends Component{

    state= {
        noticias: [],
    }

    async componentDidMount() {
        const response = await api_news.get('/noticias/categorias/31');

        console.log(response.data);

        this.setState({ noticias: response.data })
    }

    render(){        
        const { noticias } = this.state;

        return(      
            <>          
                {noticias.map(noticia => (
                    <div className="col-lg-4" key={noticia.id}>
                        <div className="blog_list_item blog_list_item_two">
                            <a href="/#" className="post_date">
                                <h2>{noticia.data}</h2>
                            </a>
                            <a href="blog-single.html">
                                <img className="img-fluid" src={noticia.foto} alt=""/>
                            </a>
                            <div className="blog_content">
                                <a href="/#">
                                    <h5 className="blog_title">{noticia.titulo}</h5>
                                </a>
                                <div className="post-info-bottom">
                                    <a href=".#" className="learn_btn_two">Read More <i className="ti-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        )
    }
}
export default NoticiasGridItem;