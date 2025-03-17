import { Bot } from 'grammy'
import env from './env'
import Context from '@/models/Context'

const bot = new Bot<Context>(env.TOKEN)

export default bot
