import { Context as BaseContext, SessionFlavor } from 'grammy'
import { I18nFlavor } from '@grammyjs/i18n'
import { MenuFlavor } from '@grammyjs/menu'
import { User } from './User'
import { DocumentType } from '@typegoose/typegoose'

interface ContextData {
  dbUser: DocumentType<User>
}

interface SessionData {
  language?: string
}

type Context = BaseContext & I18nFlavor & MenuFlavor & ContextData & SessionFlavor<SessionData>

export default Context
export type { SessionData }
