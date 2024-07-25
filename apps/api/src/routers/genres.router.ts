import { Router } from 'express';
import { getGenres } from '@/controllers/genres.controller';
const router = Router();

router.get('/', getGenres); // Fetch all genres
// router.get('/:id', getGenreById); // Fetch a specific genre by ID
// router.post('/', createGenre); // Create a new genre
// router.put('/:id', updateGenre); // Update a specific genre by ID
// router.delete('/:id', deleteGenre); // Delete a specific genre by ID

export default router;
