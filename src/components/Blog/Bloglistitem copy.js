import React, {Component} from 'react';
import api_news from '../Service/api-news';


class Noticiaslistitem extends Component{

    state= {
        noticias: [],
    }

    async componentDidMount() {
        const response = await api_news.get('/noticias/categorias/1');

        console.log(response.data);

        this.setState({ noticias: response.data })
    }

    render(){

        const { noticias } = this.state;

        return(
            <div>
              <h1>Listar noticias</h1>
              {noticias.map(noticia => (
                <div key={noticia.id}>
                  <p>
                    {noticia.titulo}
                  </p>
      
                </div>
              ))}
            </div>

        )
    }
}
export default Noticiaslistitem;