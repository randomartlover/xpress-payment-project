import React from "react";
import slide2 from './Images/slide2.jpg';
import slide3 from './Images/slide3.jpg';
import { Carousel } from 'react-bootstrap';



class SimpleSlider extends React.Component {
  render() {

    return (

      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide3} className="carousel-img" alt="First slide" />
            <div className="carousel-caption d-block d-md-block">
              <h3 className="text-center font-weight-bold">By 2020, 1 in 2 ePayment transactions will be made on our platforms</h3>
            </div>
          </div>

          <div className="carousel-item">
            <img className="carousel-img" src={slide2} alt="Second slide" />
            <div className="carousel-caption d-block d-md-block">
              <h2 className="Slide-4-caption"><span>Easy. </span>
                <span>Fast. </span>
                <span>Secure. </span></h2>
            </div>
          </div>

          <div className="carousel-item">
            <img className="carousel-img" src={slide3} alt="Second slide" />
            <div className="carousel-caption d-block d-md-block">

              <div>
                <h1 className="font-weight-bold">Xpress Payments</h1>
                <div className="row">

                  <div className="col-md-2 col-sm-2 col-xs-2"></div>
                  <button className="box1 col-md-4 col-sm-4 col-xs-4 m-2 font-weight-bold">
                    LEARN MORE
                    </button>
                  <button className="box2 col-md-4 col-sm-4 col-xs-4 m-2 font-weight-bold">
                    CONTACT US
                    </button>
                  <div className="col-md-2 col-sm-2 col-xs-2"></div>
                </div>
              </div>

            </div>
          </div>


          <div className="carousel-item">
            <img src={slide3} className="carousel-img" alt="Third slide" />
            <Carousel.Caption className="carousel_caption"> <h3>Our purpose is to simplify and enable smarter living</h3></Carousel.Caption>

          </div>
        </div>


        <div className="carousel-action-container"><a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <svg className="carousel-action-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.378906 0-132.667969-26.628906-181.019531-74.980469-48.351563-48.351562-74.980469-112.640625-74.980469-181.019531s26.628906-132.667969 74.980469-181.019531c48.351562-48.351563 112.640625-74.980469 181.019531-74.980469s132.667969 26.628906 181.019531 74.980469c48.351563 48.351562 74.980469 112.640625 74.980469 181.019531s-26.628906 132.667969-74.980469 181.019531c-48.351562 48.351563-112.640625 74.980469-181.019531 74.980469zm0-472c-119.101562 0-216 96.898438-216 216s96.898438 216 216 216 216-96.898438 216-216-96.898438-216-216-216zm62.285156 326-110-110 110-110-28.285156-28.285156-138.285156 138.285156 138.285156 138.285156zm0 0" /></svg>
        </a>


          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <svg className="carousel-action-icon" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m256 512c-68.378906 0-132.667969-26.628906-181.019531-74.980469-48.351563-48.351562-74.980469-112.640625-74.980469-181.019531s26.628906-132.667969 74.980469-181.019531c48.351562-48.351563 112.640625-74.980469 181.019531-74.980469s132.667969 26.628906 181.019531 74.980469c48.351563 48.351562 74.980469 112.640625 74.980469 181.019531s-26.628906 132.667969-74.980469 181.019531c-48.351562 48.351563-112.640625 74.980469-181.019531 74.980469zm0-472c-119.101562 0-216 96.898438-216 216s96.898438 216 216 216 216-96.898438 216-216-96.898438-216-216-216zm104.285156 216-138.285156-138.285156-28.285156 28.285156 110 110-110 110 28.285156 28.285156zm0 0" /></svg>
            {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span> */}
          </a>
        </div></div>
    );
  }
}

export default SimpleSlider