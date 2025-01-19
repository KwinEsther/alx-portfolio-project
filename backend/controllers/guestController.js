// Provide a warning about data loss for guest users
exports.guestWarning = (req, res) => {
    res.status(200).json({
	warning: "You’ll lose your habit data if you leave the page. To save it, please sign up.",
    });
};
