import createApp from './app';

const PORT = 3001;

(async () => {
  try {
    const app = await createApp();
    app.listen(PORT, () => {
      console.log(`App is listened at ${PORT}`);
    });
  } catch (e) {
    process.exit(1);
  }
})();
