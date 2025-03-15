import sendStart from "../helpers/sendStart"
import Context from "@/models/Context"

export default async function handleStart(ctx: Context) {
    return sendStart(ctx)
}