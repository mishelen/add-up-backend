import config from 'config';

import createApp from './app';

const PORT = config.get('PORT');

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
