import * as dotenv from 'dotenv'
import { cleanEnv, str } from 'envalid'
import { cwd } from 'process'
import { resolve } from 'path'

dotenv.config({ path: resolve(cwd(), '.env') })

export default cleanEnv(process.env, {
  TOKEN: str(),
  MONGO: str(),
})
