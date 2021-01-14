import React, { Component } from 'react';
import slide1 from "./asset/slide1.jpg"
import slide2 from "./asset/slide2.jpg"
import slide3 from "./asset/slide3.jpg"

class slider extends Component {
    render() {
        return (
            // <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            //     <ol class="carousel-indicators">
            //         <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
            //         <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
            //         <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
            //     </ol>
            //     <div class="carousel-inner">
            //         <div class="carousel-item active">
            //             <img src={slide1} class="d-block w-100" alt="..."/>
            //             <div class="carousel-caption d-none d-md-block">
            //                 <h1>Second slide label</h1>
            //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            //             </div>
            //         </div>
            //         <div class="carousel-item">
            //         <img src={slide2} class="d-block w-100" alt="..."/>
            //         </div>
            //         <div class="carousel-item">
            //         <img src={slide3} class="d-block w-100" alt="..."/>
            //         </div>
            //     </div>
            //     <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
            //         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            //         <span class="visually-hidden">Previous</span>
            //     </a>
            //     <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
            //         <span class="carousel-control-next-icon" aria-hidden="true"></span>
            //         <span class="visually-hidden">Next</span>
            //     </a>
            // </div>
            <header style={{ backgroundImage: `url("https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1092&q=80")` }}>
                <div className="text">
                    <h1>Mau cetak Pollaroid??</h1>
                    <p>Buat Foto-mu Tercetak dalam Bentuk Square, Gak Pake Ribet!!</p>
                </div>
                <h5>Bisa juga membuat : <span id="typed"></span></h5>
                <div id="parallax_container" class="parallaxie" >
                    <div id="parallax" class="parallaxie" data-parallaxie='{"size": "auto", "pos_x":"90%", "speed":0.5, "offset":100}' style={{ backgroundImage: `url("https://static.theultrasoft.com/parallaxie/demo/shoe-02.png")` }}></div>
                </div>
            </header>
        );
        
    }
}

export default slider;