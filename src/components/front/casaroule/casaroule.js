import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";

const casaroule = () => (
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={img1} />
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={img2} />
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src={img3} />
      </Carousel.Item>
    </Carousel>
);

export default casaroule;
