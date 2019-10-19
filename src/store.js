import { createStore } from 'redux';

const initialState = {
    jugadores: [{
        id: 1,
        nombre: 'Juan',
        foto: "https://api.ed.team/files/avatars/001803a2-cf00-4a26-8bac-c77c15dcb1d2.jpg"
    },
    {
        id: 2,
        nombre: 'Daniel',
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 3,
        nombre: 'Garcia',
        foto: "https://api.ed.team/files/avatars/e58f3a64-aa51-4582-80fa-9bf31c1208b9.jpg"
    },
    {
        id: 4,
        nombre: 'Vargas',
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 5,
        nombre: 'Espinoza',
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 6,
        nombre: 'Rodriguez',
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 7,
        nombre: 'Suarez',
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 8,
        nombre: 'Abreu',
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 9,
        nombre: 'Lemina',
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 10,
        nombre: 'Anders',
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    },
    {
        id: 11,
        nombre: 'Septia',
        foto: "https://api.ed.team/files/avatars/38118146-4b4a-4844-8959-157614e04cd1.jpg"
    }],
    titulares: [],
    suplentes: []
}

const reducerEntrenador = (state = initialState, action) => {

    if(action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if ( action.type === "AGREGAR_SUPLENTE" ){
        return{
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === "QUITAR_TITULAR"){
        return{
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    if (action.type === "QUITAR_SUPLENTE"){
        return{
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state
}

export default createStore(reducerEntrenador)