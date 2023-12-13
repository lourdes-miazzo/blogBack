import express  from "express";
import morgan from "morgan";
import cors from "cors"


const app= express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
//este de abajo es la forma que me funciona a mi para renderizar imagenes guardadas, que en realidad la img
//se guarda en server y solo el nombre de archivo en db, entonces acá le indico el camino para llegar a 
//la carpeta imagenes. donde quiero renderizar la imagen hago así: 
// <img src={`http://localhost:8080/images/${photo}`} className='img' alt="Post"/>
app.use(express.static('api/public'))
app.use(cors())
app.use(morgan('dev'))



export default app