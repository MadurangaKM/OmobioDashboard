import React from 'react';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
  'http://misf.org/wp-content/uploads/2017/12/example-slide-350-3.jpg',
  'http://wowslider.com/sliders/demo-42/data1/images/lighthouse.jpg',
  'http://wowslider.com/sliders/demo-6/data/images/greenmountain.jpg'
];
 
const fadeProperties = {
  duration: 5000,
  transitionDuration: 200,
  infinite: true,
  indicators: true,
  arrows: false
}
 
const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade" >
        <div className="image-container" >
          <img src={fadeImages[0]} />
        </div>
        
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} />
        </div>
        
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
        </div>
       
      </div>
    </Fade>
  )

}
export default Slideshow;