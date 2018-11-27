import React, {Component} from 'react';

import frenchiejpg from '../assets/frenchie_900x600.jpg';
import frenchiegif from '../assets/frenchie.gif';

// import(/* webpackMode: "lazy" */ `assets/images/${fileName}.${ext}`);
// import(/* webpackMode: "lazy" */ `assets/images/${frenchie}.gif`);

// import(/* webpackMode: "lazy" */ `assets/images/${frenchie_900x600}.jpg`);
// import(/* webpackMode: "lazy" */ `assets/images/${frenchie}.gif`);

class UserMessage extends Component {

  // https://www.sciencedaily.com/images/2018/05/180502220025_1_900x600.jpg

  render() {
    console.log('Rendering <UserMessage/>');
    let content = this.props.message.content;
    if (content === 'Frenchie') {
      let key = 'img-' + this.props.message.id;
      console.log('key:', key);
      console.log('src:', frenchiejpg);
      content = (
        <div>
          {this.props.message.content}
          <hr/>
          <img className="message-image" key={key} src={frenchiejpg}/>
          <hr/>
        </div>
      )
    } else if (content === 'frenchie') {
      let key = 'img-' + this.props.message.id;
      console.log('key:', key);
      console.log('src:', frenchiegif);
      content = (
        <div>
          {this.props.message.content}
          <hr/>
          <img className="message-image" key={key} src={frenchiegif}/>
          <hr/>
        </div>
      )
      return (
        <div className="message">
          <span className="message-username" style={{color: this.props.message.color}}>{this.props.message.username}</span>
          <span className="message-content">{content}</span>
        </div>
      );
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
