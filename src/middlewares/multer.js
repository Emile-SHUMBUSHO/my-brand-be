const multer = require("multer");
const path = require("path");

//stotage engine
const storage = multer.diskStorage({
    destination: './uploads/images',
    filename:(req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
});

//upload image
const upload = multer({
  storage: storage,
});

module.exports = upload;
