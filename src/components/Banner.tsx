import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';


function Banner() {
    return (
        <Container fluid>
            <div className='carousel-custom my-5'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img className='slider-image' src='https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?auto=compress&cs=tinysrgb&w=800&h=600' alt='' />

                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className='slider-image' src='https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=800&h=600' alt='' />

                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className='slider-image' src='https://images.pexels.com/photos/33688/delicate-arch-night-stars-landscape.jpg?auto=compress&cs=tinysrgb&w=800&h=600' alt='' />

                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    )
}

export default Banner;