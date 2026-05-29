import { adoptionDao } from '../dao/adoption.dao.js';

export const getAdoptions = async (req, res) => {
    try {
        const adopciones = await adoptionDao.obtenerTodos();
        res.status(200).json({ estatus: "success", resultado: adopciones });
    } catch (error) {
        res.status(500).json({ estatus: "error", error: error.message });
    }
};

export const getAdoptionById = async (req, res) => {
    try {
        const { aid } = req.params;
        const adopcion = await adoptionDao.obtenerPorId(aid);
        if (!adopcion) {
            return res.status(404).json({ estatus: "error", error: "Solicitud de adopcion no encontrada" });
        }
        res.status(200).json({ estatus: "success", resultado: adopcion });
    } catch (error) {
        res.status(500).json({ estatus: "error", error: error.message });
    }
};

export const createAdoption = async (req, res) => {
    try {
        const { idUsuario, idMascota } = req.body;
        if (!idUsuario || !idMascota) {
            return res.status(400).json({ estatus: "error", error: "Valores incompletos. idUsuario e idMascota son requeridos" });
        }

        const nuevaAdopcion = await adoptionDao.crear({ idUsuario, idMascota });
        res.status(201).json({ estatus: "success", resultado: nuevaAdopcion });
    } catch (error) {
        res.status(500).json({ estatus: "error", error: error.message });
    }
};