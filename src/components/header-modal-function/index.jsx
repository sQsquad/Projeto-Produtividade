import React from 'react';
import './modal.css';
import ModalSequencia from '../Modais/ModalSequencia';

export default function Modal({ iconName, closeModal }) {
    const getContent = () => {
        switch (iconName) {
            case 'task':
                return <p>Conteúdo do modal de tarefas</p>;
            case 'sequence':
                return <ModalSequencia />;
            case 'pet':
                return <p>Conteúdo do modal do pet</p>;
            case 'energy':
                return <p>Conteúdo do modal de energia</p>;
        }
    };

    return (
        <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content close" onClick={(evento) => evento.stopPropagation()}>
                {getContent()}
            </div>
        </div>
    );
}
