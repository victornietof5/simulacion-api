import {cv} from "./datos.json"

export const myjson = {
    getAlldata: ()=>{
        return cv;
    },
}

const mensajes: Array<string> = [];

export const mensajeModel = {
    getMensajes: () => {
        return mensajes;
    },
    saveMensaje: (mensaje: string) => {
        console.log(mensaje)
        mensajes.push(mensaje)
        const id = mensajes.findIndex(element => element === mensaje);
        return id;
    },

    changeMensaje : (id:number, mensaje: string) => {
        console.log (mensaje)
        mensajes[id] = mensaje;
        return mensaje;
    },

    deleteMensaje: (id:number, mensaje: string) =>{
        console.log (mensaje);
        mensajes.splice(id,1);
        return mensaje;

    }

}