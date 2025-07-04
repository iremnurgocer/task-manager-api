import { Router, RequestHandler } from 'express';
import * as taskController from '../controllers/taskController';
import { authMiddleware } from '../middleware/authMiddleware';

const router: Router = Router();

router.use(authMiddleware as unknown as RequestHandler);

router.get('/', taskController.getAll);
router.post('/', taskController.create);
router.put('/:id', taskController.update);
router.delete('/:id', taskController.remove);

export default router;
