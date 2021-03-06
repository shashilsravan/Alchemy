import express from 'express';
import { authUser, getUserProfile, getIsAdminById,
    registerUser, updateUserProfile,
    getUsers, deleteUser, getUserById, updateUser, getDetailsByEmail, updateUserProfilePublic } from '../controllers/userController.js'
import { protect, admin } from '../middleware/AuthMiddleware.js';
const router = express.Router()



router.post('/login', authUser)
router.route('/getemaildetails/:email').get(getDetailsByEmail)
router.route('/profilee/:id').put(updateUserProfilePublic)
router.route('/').post(registerUser).get(protect, admin, getUsers)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.route('/isAdmin').get(protect, admin, getIsAdminById)
router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)
export default router