import React, {Component} from "react";
import "../styles/App.css";

class GetImageButton extends Component {
  render() {
    return(
      <button onClick={this.props.handleClick}>"Click here!!"</button>
    )
  }
}

export default GetImageButton
