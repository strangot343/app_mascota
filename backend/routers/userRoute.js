import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controllers/usercontroller.js';

const router = express.Router();

router.post('/create', createUser);
router.get('/getall', getAllUsers);
router.get('/getone/:id', getUserById);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

export default router;