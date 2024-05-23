const {
  login,
  register,
  getAllUsers,
  setAvatar,
  logOut,
} = require('../controllers/userController');

const router = require('express').Router();

router.post('/login', (req, res, next) => {
  console.log("Login request received");
  next();
}, login);

router.post('/register', (req, res, next) => {
  console.log("Register request received");
  next();
}, register);

router.get('/allusers/:id', (req, res, next) => {
  console.log(`Get all users request received for user ID: ${req.params.id}`);
  next();
}, getAllUsers);

router.post('/setavatar/:id', (req, res, next) => {
  console.log(`Set avatar request received for user ID: ${req.params.id}`);
  next();
}, setAvatar);

router.get('/logout/:id', (req, res, next) => {
  console.log(`Logout request received for user ID: ${req.params.id}`);
  next();
}, logOut);

module.exports = router;
