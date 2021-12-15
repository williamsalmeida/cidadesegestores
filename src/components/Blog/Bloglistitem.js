import React, {Component} from 'react';
import api_news from '../Service/api-news';


class Bloglistitem extends Component{

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
                <div className="blog_list_item mb_50"  key={noticia.id}>
                    <img className="img-fluid" src={noticia.foto} alt=""/>
                    <div className="blog_content">
                        <div className="post_date">
                            <h2>{noticia.data}</h2>
                        </div>
                        <a href=".#">
                            <h5 className="f_p f_size_20 f_500 t_color mb_20">{noticia.titulo}</h5>
                        </a>
                        <p className="f_400 mb_20">{noticia.texto_sem_html}</p>
                        <a href=".#" className="learn_btn_two">Read More <i className="ti-arrow-right"></i></a>
                    </div>
                </div>
              ))}
            </>
        )
    }
}
export default Bloglistitem;