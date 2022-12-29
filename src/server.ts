import express, { Request, Response } from "express";
import cors from "cors";
import messageRouter from "./routes/message.route";


const mensajes: Array<string> = [];
const app = express();
app.use(cors());
app.use(express.json());
app.use(messageRouter);


// app.get("/", (request: Request, response: Response) => {
//     response.json({ message: mensajes })
// })

app.post("/", (req: Request, res: Response) => {
    const mensaje = req.body.message
    console.log(mensaje)
    mensajes.push(mensaje)
    res.json({ message: "recibido" });
})

// //mostrar mensajes con paranmetros de id
// app.get("/message/:id", (req: Request, res: Response) => {
//     const id = parseInt(req.params.id);
//     res.json({ message: mensajes[id] });
// })

// app.put('/message/:id', (req: Request, res: Response) => {
//     const mensaje = req.body.message;
//     const id = parseInt(req.params.id);
//     mensajes[id] = mensaje;
//     res.json({message: mensajes[id]})
// })

// app.delete('/message/:id', (req: Request, res: Response) => {
//     const id = parseInt(req.params.id);
//     mensajes.splice(id,1);
//     res.json({message: `delete array ${id}`})

// })  

app.listen(3002, () => console.log("server listening on  port 3002"));
