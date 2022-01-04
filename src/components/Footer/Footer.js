import React, {Component} from 'react';
import logoJp from '../Footer/logoJp.svg';

class Footer extends Component {
    render(){
        let FooterData = this.props.FooterData;
        return(
            <footer className="new_footer_area bg_color" id="contato">
                <div className="footer_bottom">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-sm-7">
                                <p className="mb-0 f_400">{FooterData.copywrite}</p>
                            </div>
                            <div className="col-lg-6 col-sm-5 text-right">
                                <img src={logoJp} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;