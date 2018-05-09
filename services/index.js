require('module-alias/register');

const http = require('http'),
      projectAPI = require('@projectAPI'),
      projectServer = http.Server(projectAPI),
      projectPORT = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';

projectServer.listen(projectPORT, LOCAL, () => console.log(`API running on ${projectPORT}`));
