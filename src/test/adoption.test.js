import { expect } from 'chai';
import supertest from 'supertest';
import app from '../app.js';

const requester = supertest(app);

describe('Pruebas Funcionales - Router de Adopciones', () => {
    
    describe('GET /api/adoptions', () => {
        it('Debería retornar un estatus 200 y un arreglo vacío de adopciones al inicio', async () => {
            const respuesta = await requester.get('/api/adoptions');
            
            expect(respuesta.status).to.equal(200);
            expect(respuesta.body).to.have.property('estatus', 'success');
            expect(respuesta.body.resultado).to.be.an('array');
            expect(respuesta.body.resultado).to.have.lengthOf(0);
        });
    });

    describe('POST /api/adoptions', () => {
        it('Debería crear una adopción exitosamente con datos válidos (Estatus 201)', async () => {
            const nuevaAdopcion = {
                idUsuario: "652f1abcb9e312001c8a1111",
                idMascota: "652f1abcb9e312001c8a2222"
            };

            const respuesta = await requester.post('/api/adoptions').send(nuevaAdopcion);

            expect(respuesta.status).to.equal(201);
            expect(respuesta.body).to.have.property('estatus', 'success');
            expect(respuesta.body.resultado).to.have.property('_id');
            expect(respuesta.body.resultado.idUsuario).to.equal(nuevaAdopcion.idUsuario);
            expect(respuesta.body.resultado.idMascota).to.equal(nuevaAdopcion.idMascota);
        });

        it('Debería fallar con estatus 400 si faltan campos obligatorios (Validación)', async () => {
            const adopcionIncompleta = {
                idUsuario: "652f1abcb9e312001c8a1111"
            };

            const respuesta = await requester.post('/api/adoptions').send(adopcionIncompleta);

            expect(respuesta.status).to.equal(400);
            expect(respuesta.body).to.have.property('estatus', 'error');
            expect(respuesta.body.error).to.include('Valores incompletos');
        });
    });

    describe('GET /api/adoptions/:aid', () => {
        it('Debería retornar una adopción específica si el ID existe', async () => {
            const respuesta = await requester.get('/api/adoptions/1');

            expect(respuesta.status).to.equal(200);
            expect(respuesta.body).to.have.property('estatus', 'success');
            expect(respuesta.body.resultado).to.be.an('object');
            expect(respuesta.body.resultado._id).to.equal('1');
        });

        it('Debería retornar un estatus 404 si el ID de adopción no existe (Error)', async () => {
            const respuesta = await requester.get('/api/adoptions/999');

            expect(respuesta.status).to.equal(404);
            expect(respuesta.body).to.have.property('estatus', 'error');
            expect(respuesta.body.error).to.equal('Solicitud de adopcion no encontrada');
        });
    });
});