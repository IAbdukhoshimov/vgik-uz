import mongoose, {Schema,Document} from "mongoose"

export interface ICategory extends Document{
    id:string
    name:string
    photo:string
    tag:string
    comments:string
}

let categorySchema = new mongoose.Schema({
    name:{
        type:String,
    },
    photo:{
        type:{
            data:Buffer,
            contentType:String
        }
    },
    tag:{
        type:String
    },
    comments:{
        type:String
    }
    
})


export default mongoose.model<ICategory>("Category",categorySchema)
