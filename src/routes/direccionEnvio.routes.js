import { Router } from "express";
import {
  addNewDireccion,
  getDireccionByID,
  updateDireccionByID,
  deleteDireccionByID
} from "../controllers/direccionEnvio.controller";

const router = Router();

router.post("/direccion-envio", addNewDireccion);
router.get("/direccion-envio/:ID_direccion", getDireccionByID);
router.put("/direccion-envio/:ID_direccion", updateDireccionByID);
router.delete("/direccion-envio/:ID_direccion", deleteDireccionByID);

export default router;
