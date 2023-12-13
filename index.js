import app from "./app.js"
import { connectDB } from "./db.js"
import dotenv from 'dotenv'
dotenv.config()

import userRoute from "./presentation/routes/userRoute.js"
import categoryRoute from "./presentation/routes/categoryRoute.js"
import postRoute from "./presentation/routes/postRoute.js"
import authRoute from "./presentation/routes/authRoute.js"

connectDB()

app.use("/user", userRoute)
app.use("/category", categoryRoute)
app.use("/post", postRoute)
app.use("/auth", authRoute)

app.listen(process.env.Node_Port, ()=>{
    console.log(`listening on port ${process.env.Node_Port}`)
})