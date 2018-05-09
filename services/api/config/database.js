module.exports = (mongoose, config) => {
  const database = mongoose.connection;
  mongoose.Promise = Promise;

  mongoose.connect(config.database, {
    promiseLibrary: global.Promise
  });

  database.on('error', error => console.log(`Connection to project database failed: ${error}`));
  database.on('connected', () => console.log('Connected to project database'));
  database.on('disconnected', () => console.log('Disconnected from project database'));

  process.on('SIGINT', () => {
    database.close(() => {
      console.log('project terminated, connection closed');
      process.exit(0);
    })
  });
};
