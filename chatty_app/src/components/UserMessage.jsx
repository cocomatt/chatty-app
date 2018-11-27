import React, {Component} from 'react';

class UserMessage extends Component {

  // https://www.sciencedaily.com/images/2018/05/180502220025_1_900x600.jpg
  // https://tenor.com/view/dog-huh-what-zoom-cute-gif-10479602
  // https://tenor.com/R8n0.gif

  render() {
    console.log('Rendering <UserMessage/>');
    let content = this.props.message.content;
    let image = content.trim().match(/\b\S+\.(?:gif|jpg|png)\b/gi);
    if (image) {
      let key = 'img-' + this.props.message.id;
      let src = image;
      console.log('key:', key);
      console.log('src:', src);
      content = (
        <div>
          {this.props.message.content}
          <hr/>
          <img className="message-image" key={key} src={src}/>
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

export default UserMessage;
