import {model,Schema} from 'mongoose';

const userSchema = new Schema( {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    city: {
        type: String,
        default: '' ,
    },
    address: {
        type: String,
       deafult:''
    }
});

const User = model('User' , userSchema);

export default User;