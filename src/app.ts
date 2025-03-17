import bot from '@/helpers/bot'
import handleStart from '@/commands/handleStart'
import i18n from '@/helpers/i18n'
import handleLanguage from '@/commands/handleLanguage'
import languageMenu from '@/menus/language'
import { connectDb, storageAdapter } from '@/helpers/database'
import attachUser from '@/middlewares/attachUser'
import { session } from 'grammy'
import { SessionData } from './models/Context'
import { ignoreOld } from 'grammy-middlewares'

async function runApp() {
  console.log('Starting bot...')

  console.log('Connecting DB...')
  await connectDb()

  bot
    .use(ignoreOld())
    .use(
      session({
        storage: storageAdapter(),
        initial: (): SessionData => ({
          language: 'en',
        }),
      })
    )
    .use(attachUser)
    .use(i18n.middleware())
    .use(languageMenu)

  bot.command('start', handleStart)
  bot.command('language', handleLanguage)

  bot.catch(console.error)

  bot.start()

  console.log('Bot is running, handling updates...')
}

void runApp()
