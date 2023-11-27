import jwt from "jsonwebtoken"
import type Koa from "koa"

/**
 * jwt 认证中间件
 * @param ctx 中间件上下文
 * @param next 下一步函数
 * @returns
 */
export const middleware_auth_jwt = (ctx: Koa.Context, next: Koa.Next) => {
    const header = ctx.request.header.authorization
    if (!header) {
        ctx.status = 401
        ctx.body = { error: "Authorization header missing" }
        return
    }

    const [type, token] = header.split(" ")
    if (type !== "Bearer" || !token) {
        ctx.status = 401
        ctx.body = { error: "Invalid token" }
        return
    }

    try {
        // 服务器没设置密钥直接报错
        if (!process.env.JWT_SECRET) {
            ctx.status = 502
            return
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        ctx.user = decoded

        return next()
    } catch (err) {
        ctx.status = 401
        ctx.body = { error: "Invalid token" }
        return
    }
}
