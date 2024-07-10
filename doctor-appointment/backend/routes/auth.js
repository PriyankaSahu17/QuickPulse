import express from "express";
import { login, registerUser } from "./../controllers/authController.js";
import { getNotifications } from "./../controllers/authController.js";
import { getNotificationVs } from "./../controllers/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);

router.get('/:userId/notifications',getNotifications);
router.get('/:userId/notificationvs',getNotificationVs);
// router.patch('/notifications/:notificationId', markAsRead);
export default router;
