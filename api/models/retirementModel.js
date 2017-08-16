import mongoose, {Schema} from 'mongoose';

const ruleSchema = new Schema({
    from: String,
    to: String,
    gender: String,

    spa: String,
    spa_years: Number,
    spa_months: Number
});

export default mongoose.model('rule', ruleSchema);