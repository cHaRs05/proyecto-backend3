import { Router } from 'express';
import { getAdoptions, getAdoptionById, createAdoption } from '../controllers/adoption.controller.js';

const router = Router();

router.get('/', getAdoptions);
router.get('/:aid', getAdoptionById);
router.post('/', createAdoption);

export default router;