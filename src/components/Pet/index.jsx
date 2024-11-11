import PetImage from '/imagens-svg/aside-imagem.svg';
import Botao from '../Botao';
import './pet.css'



export default function Pet () {
    return (
        <div className='pet_container'>
            <img src={PetImage}/>
            <Botao>Criar Tarefa</Botao>
        </div>
    )
}