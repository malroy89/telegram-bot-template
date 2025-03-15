import { Menu } from '@grammyjs/menu'
import Context from "@/models/Context";
import { readdirSync, readFileSync } from 'fs'
import { resolve } from 'path'
import { cwd } from 'process'
import { FluentBundle, FluentResource } from '@fluent/bundle'

const localeFilePaths = readdirSync(resolve(cwd(), 'locales'))

const localeFile = (path: string) => {
    const fileContent = readFileSync(resolve(cwd(), 'locales', path), 'utf8')
    const resource = new FluentResource(fileContent)
    const bundle = new FluentBundle(path.split('.')[0])

    const errors = bundle.addResource(resource);
    if (errors.length > 0) {
        throw new Error(`Failed to add resource: ${errors.join(', ')}`)
    }

    const name = bundle.getMessage('name')
    if (!name?.value) {
        throw new Error('Name message not found')
    }

    return bundle.formatPattern(name.value)
}

const setLanguage = (languageCode: string) => async (ctx: Context) => {
    ctx.i18n.setLocale(languageCode)

    await ctx.i18n.renegotiateLocale()
    
    return ctx.editMessageText(ctx.t('language_selected'), {
        parse_mode: 'HTML',
        reply_markup: undefined,
    })
}

const languageMenu = new Menu<Context>('language')

localeFilePaths.forEach((file, idx) => {
    const localeCode = file.split('.')[0]
    const localeName = localeFile(file)
    languageMenu.text(localeName, setLanguage(localeCode));
    if (idx % 2 != 0) {
        languageMenu.row()
    }
})

export default languageMenu
