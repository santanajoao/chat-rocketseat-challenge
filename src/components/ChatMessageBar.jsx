import React, { Component } from 'react';
import sendMsgIcon from '../assets/send-msg-icon.svg';
import '../styles/ChatMessageBar.css';

export default class ChatMessageBar extends Component {
  render() {
    return (
      <form className="ChatMessageBar">
        <textarea
          type="text"
          placeholder="Digite sua mensagem"
          className="message-textarea"
          rows="1"
        />
        <button type="submit" className="send-msg-btn">
          <img
            src={sendMsgIcon}
            className="send-msg-icon"
            alt="Ícone mandar mensagem"
          />
        </button>
      </form>
    );
  }
}
