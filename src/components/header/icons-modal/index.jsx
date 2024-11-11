import { useState } from 'react';
import task from '/imagens-svg/task.svg';
import sequence from '/imagens-svg/sequencia.svg';
import pet from '/imagens-svg/pet.svg';
import energy from '/imagens-svg/energy.svg';
import Modal from '../../header-modal-function';
import './icons.css'


export default function Icons() {
    
    const [activeModal, setActiveModal] = useState(null);

    const handleClick = (iconName) => {
        setActiveModal(iconName);
    }

    const closeModal = () => {
        setActiveModal(null);
    }

    return (
        <div className="icones">
            <img src={task} alt= "icone de tarefas" onClick={() =>handleClick('task')}/>
            <img src={sequence} alt="icone de sequencia" onClick={() => handleClick('sequence')}/>
            <img src={pet} alt="icone do pet" onClick={() => handleClick('pet')}/>
            <img src={energy} alt="icone de energia" onClick={() => handleClick('energy')}/>
        

            {activeModal && (
                <Modal iconName={activeModal} closeModal={closeModal} />
            )}
        </div>
    );
}
