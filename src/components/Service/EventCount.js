import React from 'react';
import EventTimer from './EventTimer';

const EventCount =()=> {
    return(
        <section className="event_counter_area" id="acompanhe">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4">
                        <div className="event_text wow fadeInLeft">
                            <h3>Fique ligado na <span>contagem regressiva!</span></h3>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="event_countdown wow fadeInRight">
                            <div className="event_counter"><EventTimer/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default EventCount;