import React from "react";
import { screen, render } from "@testing-library/react";
import ChatContactInfos from "../components/ChatContactInfos";
import contactAvatar from '../assets/chat-contact-avatar.svg';

describe('ChatContactInfos', () => {
  it('deve possuir a imagem do contato', () => {
    render(<ChatContactInfos />);
    const contactImg = screen.getByRole('img', {
      name: 'Foto de perfil do contato'
    });
    expect(contactImg).toHaveAttribute('src', contactAvatar);
  });
});
