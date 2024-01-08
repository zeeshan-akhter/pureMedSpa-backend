const allowedOrigins = [
  "http://localhost:3000",
  "https://pure-medical-spa.vercel.app/",
  "https://pure-medical-spa.vercel.app",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

module.exports = { corsOptions };
