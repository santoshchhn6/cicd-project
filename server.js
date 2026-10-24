
const app = require('./app');
const PORT = process.env.PORT || 3000;

const server = app.listen(PORT,()=>{
	console.log(`server listening on port ${PORT}`);
});

function gracefulShutdown(signal) {
  console.log(`Received ${signal}`);
  server.close(() => {
    console.log('HTTP server closed.');
    process.exit(0);
  });

  setTimeout(() => {
    console.error('Forcing shutdown due to timeout...');
    process.exit(1);
  }, 10000);
}

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);