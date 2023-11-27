import type Koa from "koa"

/**
 * 基础 token 验证中间件
 * @param ctx 上下文
 * @param next
 * @returns
 */
export const middleware_auth_token = (ctx: Koa.Context, next: Koa.Next) => {
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
        // TODO 数据库查询 token 的信息
        return next()
    } catch (err) {
        ctx.status = 401
        ctx.body = { error: "Invalid token" }
        return
    }
}
