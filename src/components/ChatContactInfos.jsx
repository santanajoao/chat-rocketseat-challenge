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
            alt="Foto de perfil do contato"
          />
          <span className="name-status-container">
            <div className="contact-name">Cecilia Sassaki</div>
            <div className="contact-status">
              <span className="contact-status-decoration" />
              <span className="contact-status-text">Online</span>
            </div>
          </span>
        </span>
        <button type="button" name="close-chat-btn" className="close-chat-btn">
          <img src={closeChatIcon} className="close-chat-icon" alt="Ícone de fechar o chat" />
        </button>
      </div>
    );
  }
}
