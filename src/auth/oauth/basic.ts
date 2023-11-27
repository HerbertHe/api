import crypto from "crypto"

/**
 * 生成客户端 id 和 secret
 * @returns 
 */
export const generateClient_ID_Secret = () => {
    const id = crypto.randomBytes(16).toString("hex")
    const secret = crypto.randomBytes(32).toString("hex")

    return [id, secret]
}
