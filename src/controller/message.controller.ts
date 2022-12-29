import { mensajeModel } from "../model/message.model";
import { Request, Response } from "express";
import { myjson } from "../model/message.model";


export const databaseCtrl = {
        getMybase: (request: Request, response: Response) => {
                const resultado = myjson.getAlldata();
                response.json({ mensaje: resultado })
        },
}

export const mensajeCtrl = {
        //para mostrar el contenido
        getMensaje: (request: Request, response: Response) => {
                const result = mensajeModel.getMensajes();
                response.json({ mensaje: result })
        },
        //para subir y crear 
        postMensaje: (req: Request, res: Response) => {
                const mensaje = req.body
                const result = mensajeModel.saveMensaje(mensaje);

                res.json({ message: `se agrega ${mensaje} con id ${result}` })

        },
        //para modificar
        putMensaje: (req: Request, res: Response) => {
                const mensaje = req.body
                const id = parseInt(req.params.id);
                //mensajes[id] = mensaje;
                const result = mensajeModel.changeMensaje(id, mensaje);

                res.json({ message: `Se modifica array ${id} con ${mensaje}` })
        },
        //para borrar 
        deleteMensaje: (req: Request, res: Response) => {
                const mensaje = req.body
                const id = parseInt(req.params.id);
                const result = mensajeModel.deleteMensaje(id, mensaje);

                res.json({ message: `Se borra el array ${id}` })
        }
}
