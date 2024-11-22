import PetImage from '/imagens-svg/aside-imagem.svg';
import Botao from '../Botao';
import './pet.css'
import axios from 'axios';



function criarTarefa () {
        axios.post('http://localhost:5175/api/tarefa', {
            nome: "nome",
            tempo: 20,
            idUsuario: "e1b7f8a6-12e7-4a7e-b6d3-021d676d9a68",
            idCategoria: "861fd8de-416a-492f-b2fc-82b6bcef6991"
        },{
            headers: {
                'Content-Type':'application/json'
            }
        })
            .then((resposta) => {
                console.log(resposta);
            })
            .catch((erro) => {
                console.error('Erro ao criar tarefa:', erro.response?.data || erro.message);
                
            })
}

export default function Pet () {

    

    return (
        <div className='pet_container'>
            <img src={PetImage}/>
            <Botao onClick={criarTarefa} >Criar Tarefa</Botao>
        </div>
    )
}