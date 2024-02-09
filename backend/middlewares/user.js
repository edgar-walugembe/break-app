const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (res, file, cb) => {
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: (res, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// auth a user
async function authUser(req, res, next) {
  next();
}

module.exports = {
  upload,
  authUser,
};
