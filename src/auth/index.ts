export * from "./oauth"
export * from "./token"

import type Koa from "koa"
import { middleware_auth_token, middleware_auth_jwt } from "./token"

/**
 * 基于 `query.auth` 进行 auth 认证选择
 * @param ctx
 * @param next
 * @returns
 */
export const middleware_auth_by_query = (ctx: Koa.Context, next: Koa.Next) => {
    const { auth } = ctx.query

    if (!auth) {
        ctx.status = 401
        ctx.body = { error: "Query.auth missing!" }
        return
    }

    if (auth === "token") return middleware_auth_token(ctx, next)

    if (auth === "jwt") return middleware_auth_jwt(ctx, next)
}
