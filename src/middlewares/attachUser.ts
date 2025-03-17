import { findOrCreateUser } from '@/models/User'
import { NextFunction } from 'grammy'
import Context from '@/models/Context'

export default async function attachUser(ctx: Context, next: NextFunction) {
  if (!ctx.from) {
    throw new Error('No user found in context')
  }

  const user = await findOrCreateUser(ctx.from.id)
  if (!user) {
    throw new Error('Failed to find or create user')
  }

  ctx.dbUser = user

  return next()
}
