import axios from "axios";

const api = axios.create({
    baseURL: '/api',
})

//categorias
export const getCategorias = () => api.get('/categoria');
export const createCategorias = (data) => api.post('/categoria', data);

//tarefas
export const  getTarefas = () => api.get(`/tarefa/${idUser}`);
export const createTarefas = (data) => api.post('/tarefa', data, {
    headers: {
        'Content-Type': 'application/json'
    },
});
export const deletarTarefa = () => api.delete(`/tarefa/${idTarefa}`);
export const updateTarefa = () => api.put(`/tarefa/${idTarefa}`);

//Usuarios
export const getUsuario = () => api.get('/usuarios'); 