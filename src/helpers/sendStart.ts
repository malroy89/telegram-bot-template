import Context from "@/models/Context"

export default async function sendStart(ctx: Context) {
    await ctx.reply(ctx.t("start"))
}