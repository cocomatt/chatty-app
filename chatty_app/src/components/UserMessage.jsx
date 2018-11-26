import React, {Component} from 'react';

// import frenchie from './assets/frenchie.jpg_900x600.jpg';

// console.log('frenchie:', frenchie);

class UserMessage extends Component {

  // https://www.sciencedaily.com/images/2018/05/180502220025_1_900x600.jpg
  // {<img className="message-image" key={key} src={{frenchie}}/>}
  // {this.props.message.content}


  render() {
    console.log('Rendering <UserMessage/>');
    let content = this.props.message.content;
    if (content === 'Frenchie') {
      // let key = 'img-' + this.props.message.id;
      // console.log('key:', key);
      // console.log('src:', {frenchie});
      content = (
          <hr/>
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
