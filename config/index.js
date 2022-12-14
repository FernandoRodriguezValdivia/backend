require('dotenv').config();

const config = {
  database: {
    development: {
      url: process.env.MONGO_DB_URI_DEV,
    },
    test: {
      url: process.env.MONGO_DB_URI_TEST,
    },
    production: {
      url: process.env.MONGO_DB_URI_PROD,
    },
  },
  token: {
    secret: process.env.TOKEN_SECRET,
  },
  server: {
    port: process.env.SERVER_PORT,
  },
  nodEnv: process.env.NODE_ENV,
  cloudinary: {
    url: process.env.CLOUDINARY_URL,
    preset: process.env.CLOUDINARY_UPLOAD_PRESET,
  },
};

module.exports = config;
