import { modelOptions, prop, getModelForClass } from '@typegoose/typegoose'

@modelOptions({
    schemaOptions: {
        timestamps: true,
    }
})
export class User {
    @prop({ 
        required: true, 
        unique: true, 
        index: true, 
    })
    telegramId!: number
}

const UserModel = getModelForClass(User)

export function findOrCreateUser(id: number) {
    return UserModel.findOneAndUpdate(
        { telegramId: id }, 
        {},
        { 
            upsert: true, 
            new: true,
        }
    )
}
