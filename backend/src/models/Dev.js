const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: {
        type: String,
        min: [3,'nome precisa ter mais 3 caracteres'],
        max:[100,'nome pode ter no máximo 100 caracteres'],
        required: true
    },
    github_name: {
        type: String,
        required: true,
        unique: true
    },
    bio:String,
    avatar_url:String,
    techs: [{
        type:String,
        required: true
    }],
    location: {
        type: PointSchema,
        index: '2dsphere'
    }
});

module.exports = mongoose.model('Dev',DevSchema);