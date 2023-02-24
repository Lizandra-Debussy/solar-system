import React from 'react';
import Slider from 'react-slick';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

class SolarSystem extends React.Component {
  render() {
    const set = {
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };

    return (
      <div data-testid="solar-system" className="solar-system">
        <div className="title-planets">
          <Title headline="Planetas" />
        </div>
        <Slider { ...set }>
          {planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />))}
        </Slider>
      </div>
    );
  }
}

export default SolarSystem;
