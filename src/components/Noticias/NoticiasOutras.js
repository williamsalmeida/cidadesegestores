import React, {Component} from 'react';
import api_news from '../Service/api-news';

class NoticiasOutras extends Component{

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

        return( <>
                {noticias.map(noticia => (
                        <div className="blog_post_item" key={noticia.id}>
                            <div className="blog_img">
                                <img src={require('../../img/blog-grid/post_img_1.png')} alt=""/>
                            </div>
                            <div className="blog_content">
                                <div className="entry_post_info">
                                    {new Intl.DateTimeFormat('pt-BR', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                    }).format(
                                        new Date(noticia.data)
                                    )}
                                </div>
                                <a href=".#">
                                    <h5 className="f_p f_size_16 f_500 t_color">{noticia.titulo}</h5>
                                </a>
                                <p className="f_400 mb-0">Harry bits and bleeding crikey argy-bargy...</p>
                            </div>
                        </div>
                ))}
                </>
        )
    }
}
export default NoticiasOutras;