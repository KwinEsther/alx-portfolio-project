/**
 * Habit Routes
 * Defines the API endpoints for habit-related operations in the application.
 */

const express = require('express');
const router = express.Router();
const habitController = require('../controllers/habitController');
const authMiddleware = require('../middleware/auth');

// Create a Habit Route
/**
 * @route POST /api/habits
 * @description Creates a new habit for the authenticated user.
 * @access Private
 */
router.post('/', authMiddleware.verifyToken, habitController.createHabit);

// Get All Habits Route
/**
 * @route GET /api/habits
 * @description Retrieves all habits for the authenticated user.
 * @access Private
 */
router.get('/', authMiddleware.verifyToken, habitController.getHabits);

// Update a Habit Route
/**
 * @route PUT /api/habits/:id
 * @description Updates a habit by ID for the authenticated user.
 * @access Private
 */
router.put('/:id', authMiddleware.verifyToken, habitController.updateHabit);

// Delete a Habit Route
/**
 * @route DELETE /api/habits/:id
 * @description Deletes a habit by ID for the authenticated user.
 * @access Private
 */
router.delete('/:id', authMiddleware.verifyToken, habitController.deleteHabit);

module.exports = router;
