const mongoose = require('mongoose');
const mongooseAutoInc = require('mongoose-auto-increment');

mongooseAutoInc.initialize(mongoose.connection);

const questSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    bloodType: {
        type: String,
        required: true,
    },
    selected: {
        type: Boolean,
        required: true,
        default : false
    }
});

questSchema.plugin(mongooseAutoInc.plugin, 'quest');
module.exports = mongoose.model('quest', questSchema);
//questSchema.plugin(mongooseAutoInc.plugin, 'quest');