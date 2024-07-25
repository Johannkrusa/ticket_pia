import { Router } from 'express';
import { getRegions } from '@/controllers/regions.controller';

const router = Router();

router.get('/', getRegions); // Fetch all regions
// router.get('/:id', getRegionById); // Fetch a specific region by ID
// router.post('/', createRegion); // Create a new region
// router.put('/:id', updateRegion); // Update a specific region by ID
// router.delete('/:id', deleteRegion); // Delete a specific region by ID

export default router;
