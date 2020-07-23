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
          <div className="carousel-item">
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

          <div className="carousel-item active">
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
            <img src={slide3} className="carousel-img"  alt="Third slide" />
            <Carousel.Caption className="carousel_caption"> <h3>Our purpose is to simplify and enable smarter living</h3></Carousel.Caption>

          </div>
        </div>



        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default SimpleSlider