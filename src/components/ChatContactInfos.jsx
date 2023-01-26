import React, { Component } from 'react';
import chatContactAvatar from '../assets/chat-contact-avatar.svg';
import closeChatIcon from '../assets/close-chat-icon.svg';
import '../styles/ChatContactInfos.css';

export default class ChatContactInfos extends Component {
  render() {
    return (
      <div className="ChatContactInfos">
        <span className="contact-infos">
          <img
            src={chatContactAvatar}
            className="contact-picture"
            alt="Foto deperfil do contato"
          />
          <span className="name-status-container">
            <div className="contact-name">Cecilia Sassaki</div>
            <div className="contact-status">
              <span className="contact-status-decoration" />
              <span className="contact-status-text">Online</span>
            </div>
          </span>
        </span>
        <button type="button" className="close-chat-btn">
          <img src={closeChatIcon} className="close-chat-icon" alt="Ícone de fechar o chat" />
        </button>
      </div>
    );
  }
}
