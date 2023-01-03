import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/sharenergy');
mongoose.Promise = global.Promise;

export default mongoose;