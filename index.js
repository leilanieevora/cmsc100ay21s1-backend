import { server } from './src/app.js';

// Run the server!
const start = async () => {
  try {
    const app = await server();
    await app.listen(8080)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start();
