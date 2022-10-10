import app from './app';
import { config } from './config/config';
app.listen(5555, () => {
  console.log(`App is running on port ${config.port}`);
});
