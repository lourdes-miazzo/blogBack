import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination(req, file, cb){
    
        cb(null, 'api/public/images')
    },
    filename(req, file, cb){
        cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})

export const uploader= multer({storage})