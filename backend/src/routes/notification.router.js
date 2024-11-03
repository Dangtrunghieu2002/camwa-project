import express from 'express';
import notificationController from '../controllers/notificationManagement.controller.js';
import { verifyTokenAndRole } from '../middleware/authMiddleware.js';

const notificationRouter = express.Router();

// Create notification (for Admin or Faculty Assistant)
notificationRouter.post('/create', verifyTokenAndRole(['admin', 'faculty_assistant']), notificationController.createNotification);

// Retrieve notifications by user role
notificationRouter.get('/student/:userId', verifyTokenAndRole(['student', 'admin', 'faculty_assistant']), notificationController.viewNotifications);
notificationRouter.get('/lecturer/:userId', verifyTokenAndRole(['lecturer', 'admin', 'faculty_assistant']), notificationController.viewNotifications);

// Mark a notification as read
notificationRouter.put('/:userRole/:notificationId/read', verifyTokenAndRole(['admin', 'faculty_assistant', 'student', 'lecturer']), notificationController.markAsRead);

// Update a notification (Admin and Faculty Assistant)
notificationRouter.put('/:userRole/:notificationId', verifyTokenAndRole(['admin', 'faculty_assistant']), notificationController.updateNotification);

// Delete a notification (Admin and Faculty Assistant)
notificationRouter.delete('/:userRole/:notificationId', verifyTokenAndRole(['admin', 'faculty_assistant']), notificationController.deleteNotification); 

export default notificationRouter;
