import type Router from "koa-router"

import { sendMail } from "./func"
import type { IEmailSender } from "./func"
import { middleware_auth_by_query } from "../../auth"

/**
 * 注册邮箱发送路由
 * @param router
 */
export const register_email_router = (router: Router<any, {}>) => {
    router.post("/email/send", middleware_auth_by_query, async (ctx) => {
        const { from, to, subject, text, html } = ctx.request
            .body as IEmailSender

        try {
            const info = await sendMail({ from, to, subject, text, html })
            ctx.status = 200
            ctx.body = {
                info,
            }
            return
        } catch (err) {
            ctx.status = 500
            ctx.body = {
                error: err.message,
            }
            return
        }
    })
}