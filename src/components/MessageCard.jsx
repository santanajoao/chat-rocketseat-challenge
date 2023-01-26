import React, { Component } from 'react';
import '../styles/MessageCard.css';

export default class MessageCard extends Component {
  render() {
    const { sender, time, message } = this.props;
    const className = (sender === 'Você' ? 'sender' : 'addressee');
    return (
      <div className={`MessageCard ${className}`}>
        <div className="msg-owner-and-time">
          {sender} - {time}
        </div>
        <span className="msg">
          {message}
        </span>
      </div>
    );
  }
}
