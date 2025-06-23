const multer = require("multer");

// storage config for user images
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./useruploads")
    },
    filename: (req, file, callback) => {
        const filename = `image-${Date.now()},${file.originalname}`
        callback(null, filename)
    }
})

// filter function for user images according to file type
const filefilter = (req, file, callback) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
        callback(null, true)
    } else {
        callback(null, false)
        return callback(new Error("Only Jpg,Png,and Jpeg formate allowed"))
    }
}

// multer config for user images
const userUpload = multer({
    storage: storage,
    fileFilter: filefilter
});

// export multer config
module.exports = userUpload;