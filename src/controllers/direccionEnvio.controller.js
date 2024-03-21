import { getConnection, querysDireccionEnvio, sql } from "../database";

export const addNewDireccion = async (req, res) => {
  const { ID_usuario, nombre, apellidos, pais, direccion, ciudad, estado, codigoPostal, telefono, correoElectronico, referencias } = req.body;

  try {
    const pool = await getConnection();

    await pool
      .request()
      .input("ID_usuario", sql.Int, ID_usuario)
      .input("nombre", sql.NVarChar, nombre)
      .input("apellidos", sql.NVarChar, apellidos)
      .input("pais", sql.NVarChar, pais)
      .input("direccion", sql.NVarChar, direccion)
      .input("ciudad", sql.NVarChar, ciudad)
      .input("estado", sql.NVarChar, estado)
      .input("codigoPostal", sql.NVarChar, codigoPostal)
      .input("telefono", sql.Int, telefono)
      .input("correoElectronico", sql.NVarChar, correoElectronico)
      .input("referencias", sql.NVarChar, referencias)
      .query(querysDireccionEnvio.addNewDireccion);

    res.json({ msg: "Dirección añadida correctamente" });
  } catch (error) {
    console.error("Error al añadir la dirección:", error.message);
    res.status(500).json({ msg: "Error al añadir la dirección" });
  }
};

export const getDireccionByID = async (req, res) => {
  const { ID_direccion } = req.params;

  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("ID_direccion", sql.Int, ID_direccion)
      .query(querysDireccionEnvio.getDireccionByID);

    if (result.recordset.length === 0) {
      return res.status(404).json({ msg: "Dirección no encontrada" });
    }

    res.json(result.recordset[0]);
  } catch (error) {
    console.error("Error al obtener la dirección:", error.message);
    res.status(500).json({ msg: "Error al obtener la dirección" });
  }
};

export const updateDireccionByID = async (req, res) => {
  const { ID_direccion } = req.params;
  const { ID_usuario, nombre, apellidos, pais, direccion, ciudad, estado, codigoPostal, telefono, correoElectronico, referencias } = req.body;

  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("ID_direccion", sql.Int, ID_direccion)
      .input("ID_usuario", sql.Int, ID_usuario)
      .input("nombre", sql.NVarChar, nombre)
      .input("apellidos", sql.NVarChar, apellidos)
      .input("pais", sql.NVarChar, pais)
      .input("direccion", sql.NVarChar, direccion)
      .input("ciudad", sql.NVarChar, ciudad)
      .input("estado", sql.NVarChar, estado)
      .input("codigoPostal", sql.NVarChar, codigoPostal)
      .input("telefono", sql.Int, telefono)
      .input("correoElectronico", sql.NVarChar, correoElectronico)
      .input("referencias", sql.NVarChar, referencias)
      .query(querysDireccionEnvio.updateDireccionByID);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ msg: "Dirección no encontrada" });
    }

    res.json({ msg: "Dirección actualizada correctamente" });
  } catch (error) {
    console.error("Error al actualizar la dirección:", error.message);
    res.status(500).json({ msg: "Error al actualizar la dirección" });
  }
};

export const deleteDireccionByID = async (req, res) => {
  const { ID_direccion } = req.params;

  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("ID_direccion", sql.Int, ID_direccion)
      .query(querysDireccionEnvio.deleteDireccionByID);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ msg: "Dirección no encontrada" });
    }

    res.json({ msg: "Dirección eliminada correctamente" });
  } catch (error) {
    console.error("Error al eliminar la dirección:", error.message);
    res.status(500).json({ msg: "Error al eliminar la dirección" });
  }
};
