import React, { useState } from 'react';
import userAvatar from '/imagens-svg/user.svg';
import styled from 'styled-components';

export default function User() {
  const [activeModal, setActiveModal] = useState(null);

  const handleClick = (iconName) => {
    setActiveModal(iconName);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <UserContainer>
      <UserCircleAnimated>
        <UserPhoto>
          <img src={userAvatar} alt="imagem do usuário" onClick={() => handleClick('user')} />
          {activeModal && (
            <>
              <ModalUser>
                <ModalUserList>
                  <span>Perfil</span>
                  <span>Histórco</span>
                  <span>Tema</span>
                  <span>Sobre</span>
                  <span>Sair</span>
                </ModalUserList>
              </ModalUser>

              <Close onClick={closeModal}></Close>
            </>
          )}
        </UserPhoto>
      </UserCircleAnimated>
    </UserContainer>
  );
}

const UserContainer = styled.div`
  width: 4.7rem;
  height: 4.7rem;
  padding: 0.5rem;
`;

const UserCircleAnimated = styled.div`
  border-radius: 50%;
`;

const UserPhoto = styled.div`
  object-fit: contain;
`;

const ModalUser = styled.div`
  position: relative;
  background-color: #e4e4e4;
  border-radius: 0.25rem;
  width: 120px;
  height: 200px;
  top: 0.5rem;
  right: 3rem;
  z-index: 2;
`;

const ModalUserList = styled.ul`
  font-size: 1.2rem;
  display: grid;
  grid-column: 1fr;
  justify-content: center;
  padding: 0.5em;
  font-family: var(--fonte);
`;

const ModalUserListItem = styled.span`
  cursor: pointer;
`;

const Close = styled.span`
  position: absolute;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
`