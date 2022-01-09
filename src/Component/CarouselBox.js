import React, { Component } from "react";
import Carousel  from 'react-bootstrap/Carousel';
import pesaj6Img from '../assets/pesaj6.jpg';
import pesaj4Img from '../assets/pesaj4.jpg';
import pesaj5Img from '../assets/pesaj5.jpg';


export default class CarouselBox extends Component {
    render(){
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ pesaj6Img }
                        alt="Pesaj1"
                    />
                    <Carousel.Caption>
                        <h3>Pesaj1 image</h3>
                        <p>Проверка текста на уникальность онлайн, точная и быстрая проверка.</p>
                    </Carousel.Caption>
                </Carousel.Item>  
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ pesaj4Img }
                        alt="Pesaj"
                    />
                    <Carousel.Caption>
                        <h3>Pesaj image</h3>
                        <p>Проверка текста на уникальность онлайн, точная и быстрая проверка.</p>
                    </Carousel.Caption>
                </Carousel.Item>  
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ pesaj5Img }
                        alt="Pesaj"
                    />
                    <Carousel.Caption>
                        <h3>Pesaj image</h3>
                        <p>Проверка текста на уникальность онлайн, точная и быстрая проверка.</p>
                    </Carousel.Caption>
                </Carousel.Item>             
            </Carousel>      
        );
    }
}


