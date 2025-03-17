import Context from '@/models/Context'
import languageMenu from '@/menus/language'

export default async function handleLanguage(ctx: Context) {
  await ctx.reply(ctx.t('language'), {
    parse_mode: 'HTML',
    reply_markup: languageMenu,
  })
}
