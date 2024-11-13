import PetImage from '/imagens-svg/aside-imagem.svg';
import Botao from '../Botao';
import './pet.css'

function criarTarefa () {
    alert('tarefa criada')
}
export default function Pet () {
    return (
        <div className='pet_container'>
            <img src={PetImage}/>
            <Botao onClick={criarTarefa} >Criar Tarefa</Botao>
        </div>
    )
}