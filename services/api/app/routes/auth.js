const express = require('express'),
			router = express.Router(),
			models = require('@project/app/setup'),
			api = require('@project/app/controllers/auth');

router.get('/', (req, res) => {
  res.send('Birds home page');
});

router.post('/api/v1/auth', api.login(models.User));

module.exports = router