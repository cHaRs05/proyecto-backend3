class AdopcionDaoMock {
    constructor() {
        this.adopciones = [];
    }

    async obtenerTodos() {
        return this.adopciones;
    }

    async obtenerPorId(id) {
        return this.adopciones.find(a => a._id === id) || null;
    }

    async crear(datosAdopcion) {
        const nuevaAdopcion = {
            _id: String(this.adopciones.length + 1),
            ...datosAdopcion,
            fechaCreacion: new Date()
        };
        this.adopciones.push(nuevaAdopcion);
        return nuevaAdopcion;
    }
}

export const adoptionDao = new AdopcionDaoMock();