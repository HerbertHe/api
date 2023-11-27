import "dotenv"

import Koa from "koa"
import bodyParser from "koa-bodyparser"
import Router from "koa-router"
import { registerRouter } from "./controllers"

const app = new Koa()
const router = new Router()

app.use(bodyParser())

// 注册监听服务
registerRouter(router)

app.use(router.routes())
app.use(router.allowedMethods())

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
