import React, {Component} from 'react';

import {frenchieImage} from '../images/frenchie.jpg_900x600.jpg';

class UserMessage extends Component {

  // https://en.wikipedia.org/wiki/French_Bulldog#/media/File:Anna-Maria-Sacher-1908.jpg
  // https://dogtime.com/assets/uploads/gallery/french-bulldog-dog-breed-pictures/1-puppy.jpg
  // https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12194929/French-Bulldog-on-White-12.jpg
  // https://www.sciencedaily.com/images/2018/05/180502220025_1_900x600.jpg
  render() {
    console.log('Rendering <UserMessage/>');
    let content = this.props.message.content;
    // const images = content.match(/\b\S+\.(?:gif|jpg|png)\b/gi);
    // const image = content.match(/\b\S+\.(?:gif|jpg|png)\b/gi);
    // let image = images[0];
    // console.log('image:', image)
    // const imageTrim = content.trim().match(/\b\S+\.(?:gif|jpg|png)\b/gi);
    // console.log('images with trim:', imageTrim);
    // if (images) {
    if (content === 'Frenchie') {
      let key = 'img-' + this.props.message.id;
      console.log('key:', key);
      console.log('src:', {frenchieImage});
      content = (
        <React.Fragment>
          {this.props.message.content}
          <hr/>
          {<img className="message-image" key={key} src={frenchieImage}/>}
        </React.Fragment>
      )
    }
    return (
      <div className="message">
        <span className="message-username" style={{color: this.props.message.color}}>{this.props.message.username}</span>
        <span className="message-content">{content}</span>
      </div>
    );
  }
}

// {images.map((image, index) => <img key={index} src={image}/>)}

export default UserMessage;
