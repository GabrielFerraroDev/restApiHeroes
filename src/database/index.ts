import mongoose from 'mongoose';

const initMongo = () => {
  mongoose.connect(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`);
};

export default {
  init: initMongo(),
};
