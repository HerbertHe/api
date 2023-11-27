import type Router from "koa-router"

import { register_email_router } from "./email"
// TODO 注册服务
export const registerRouter = (router: Router<any, {}>) => {
    register_email_router(router)
}
