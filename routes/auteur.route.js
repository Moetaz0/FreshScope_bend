import express from 'express';
const router = express.Router();

import { getAuteurs, getAuteurByID, createAuteur, updateAuteur, deleteAuteur } from '../controllers/Article.controller.js';
import { createNews, deleteNews, getNews } from '../controllers/News.controller.js';


/**
 * @route   GET /api/auteurs
 * @desc    Get All auteurs
 * @access  Public
 */
router.get('/', getAuteurs);

router.get('/news', getNews);

/**
 * @route   POST /api/auteurs
 * @desc    Ajouter un auteur
 * @access  Public
 */
router.post('/', createAuteur);
router.post('/news', createNews);

/**
 * @route   GET /api/auteurs/:id
 * @desc    Renvoyer un auteur
 * @access  Public
 */
router.get('/:id', getAuteurByID);



/**
 * @route   PUT /api/auteurs/:id
 * @desc    Modifier un auteur
 * @access  Public
 */
router.put('/:id', updateAuteur);


/**
 * @route  DELETE /api/auteurs/:id
 * @desc    Supprimer un auteur
 * @access  Public
 */
router.delete('/:id', deleteAuteur);
router.delete('/news/:id', deleteNews);

export default router;

