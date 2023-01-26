import React from "react";
import { screen, render } from "@testing-library/react";
import App from "../components/App";
import contactAvatar from '../assets/chat-contact-avatar.svg';
import closeChatIcon from '../assets/close-chat-icon.svg';

describe('ChatContactInfos', () => {
  it('deve possuir a imagem do contato', () => {
    render(<App />);
    const contactImg = screen.getByRole('img', {
      name: 'Foto de perfil do contato'
    });
    expect(contactImg).toHaveAttribute('src', contactAvatar);
  });

  it('deve possuir o nome do contato', () => {
    render(<App />);
    screen.getByText('Cecilia Sassaki');
  });

  it('deve possuir o status do contato', () => {
    render(<App />);
    screen.getByText('Online');
  })

  it('deve possuir o botão de fechar a conversa', () => {
    render(<App />);
    const closeBtn = screen.getByRole('button', { name: 'Ícone de fechar o chat' });
    expect(closeBtn).toHaveAttribute('name', 'close-chat-btn');

    const closeIcon = screen.getByRole('img', {
      name: 'Ícone de fechar o chat'
    });
    expect(closeIcon).toHaveAttribute('src', closeChatIcon);
  });
});
