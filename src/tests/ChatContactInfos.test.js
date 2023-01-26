import React from "react";
import { screen, render } from "@testing-library/react";
import ChatContactInfos from "../components/ChatContactInfos";
import contactAvatar from '../assets/chat-contact-avatar.svg';
import closeChatIcon from '../assets/close-chat-icon.svg';

describe('ChatContactInfos', () => {
  it('deve possuir a imagem do contato', () => {
    render(<ChatContactInfos />);
    const contactImg = screen.getByRole('img', {
      name: 'Foto de perfil do contato'
    });
    expect(contactImg).toHaveAttribute('src', contactAvatar);
  });

  it('deve possuir o nome do contato', () => {
    render(<ChatContactInfos />);
    screen.getByText('Cecilia Sassaki');
  });

  it('deve possuir o status do contato', () => {
    render(<ChatContactInfos />);
    screen.getByText('Online');
  })

  it('deve possuir o botão de fechar a conversa', () => {
    render(<ChatContactInfos />);
    const closeBtn = screen.getByRole('button');
    expect(closeBtn).toHaveAttribute('name', 'close-chat-btn');

    const closeIcon = screen.getByRole('img', {
      name: 'Ícone de fechar o chat'
    });
    expect(closeIcon).toHaveAttribute('src', closeChatIcon);
  });
});
