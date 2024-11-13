import PetImage from '/imagens-svg/aside-imagem.svg';
import Botao from '../Botao';
import './pet.css'
import { createTarefas } from '../Services/api';


function criarTarefa () {
    const novaTarefa = { nome: "abubaba" };
    createTarefas(novaTarefa)
        .then(resposta => {
            console.log("Sucesso", resposta.data);
            
        })
        .catch(erro => {
            console.log("erro ao criar a tarefa:", erro);
            
        });
}
export default function Pet () {

    return (
        <div className='pet_container'>
            <img src={PetImage}/>
            <Botao onClick={criarTarefa}>Criar Tarefa</Botao>
        </div>
    )
}