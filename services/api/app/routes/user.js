const passport = require('passport'),
      config = require('@config'),
      express = require('express'),
      router = express.Router(),
      api = require('@project/app/controllers/user');
      models = require('@project/app/setup');


router.get('/users', passport.authenticate('jwt', config.session), api.index(models.User, router.get('secret')));

router.post('/setup', api.setup(models.User));

router.post('/signup', api.signup(models.User));

module.exports = router
