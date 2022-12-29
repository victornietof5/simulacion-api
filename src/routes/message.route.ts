import { Router } from "express";
import { mensajeCtrl } from "../controller/message.controller";
import {databaseCtrl} from "../controller/message.controller"


const router = Router();


router.get("/portfoliojson", databaseCtrl.getMybase);

router.get("/portfolio", mensajeCtrl.getMensaje);

router.post("/portfolio", mensajeCtrl.postMensaje);
router.put("/portfolio/message/:id", mensajeCtrl.putMensaje)
router.delete("/portfolio/message/:id",mensajeCtrl.deleteMensaje )

export default router;
