import React, {Component} from 'react';

class Blogrightsidebar extends Component{
    render(){
        let ServiceData = this.props.ServiceData;
        return(
            <div className="blog-sidebar">
                <div className="widget sidebar_widget widget_recent_post">
                    <div className="widget_title">
                        <h3 className="f_p f_size_20 t_color3">Outras noticias</h3>
                        <div className="border_bottom"></div>
                    </div>
                    {
                        ServiceData.rpost.map(post=>{
                            return(
                                <div className="media post_item" key={post.id}>
                                    <img src={require('../../img/' + post.image)} alt=""/>
                                    <div className="media-body">
                                        <a href=".#">
                                            <h3 className="f_size_16 f_p f_400">{post.ptitle}</h3>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Blogrightsidebar;