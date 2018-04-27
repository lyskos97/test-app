import * as React from 'react';
import Slider from 'react-slick';

export default class ImageSlider extends React.Component {
  constructor() {
    super();
    this.state = { minified: false };
  }

  onResize = () => {
    if (window.innerWidth <= 768) {
      this.setState({ minified: true });
    } else {
      this.setState({ minified: false });
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  render() {
    const { minified } = this.state;
    const slidesToShow = minified ? 1 : 3;
    const src = minified
      ? 'https://placekitten.com/700/400'
      : 'https://placekitten.com/300/200';

    const opts = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow
    };

    const imgOpts = {
      style: {
        margin: '5px',
        maxWidth: '100%'
      },
      alt: 'Kinda cool',
      src
    };

    return (
      <Slider {...opts}>
        <div>
          <img {...imgOpts} />
        </div>
        <div>
          <img {...imgOpts} />
        </div>
        <div>
          <img {...imgOpts} />
        </div>
        <div>
          <img {...imgOpts} />
        </div>
        <div>
          <img {...imgOpts} />
        </div>
        <div>
          <img {...imgOpts} />
        </div>
        <div>
          <img {...imgOpts} />
        </div>
      </Slider>
    );
  }
}
