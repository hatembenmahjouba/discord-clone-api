const express = require('express');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const auth = require('../middleware/auth');
const router = express.Router();
const friendInvitationContrellers = require('../controllers/friendInvitation/friendInvitationControllers');

const postFriendInvitationSchema = Joi.object({
  targetMailAddress: Joi.string().email(),
});

router.post(
  '/invite',
  auth,
  validator.body(postFriendInvitationSchema),
  friendInvitationContrellers.controllers.postInvite
);

module.exports = router;
