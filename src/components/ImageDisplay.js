import React, {Component} from "react";

class ImageDisplay extends Component{
  render() {
    let images = this.props.images
    let MarsImages = images.map((images)=>{
      return(
        <ul key ={images.id}>
          <li>
            <img src={images.img_src} alt='images from mars'/>
          </li>
        </ul>
      )
    })
return(
  <div>
  {MarsImages}
  </div>
)
  }
}

export default ImageDisplay;
