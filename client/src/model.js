const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema( {
    //id: Schema.Types.Objectid,
    url: String,
    title: String,
    published_at: Date,
    number_of_words: Number,
    article_type: String,
    created_at: Date,
    updated_at: Date,
    vetting_bonus: Number,
    primary_channel_objective_score: Number,
    primary_channel_objective_score_decayed: Number,
    objective_score_updated_at: Date,
    //primary_channel_id: Schema.Types.Objectid,
    heavy: Boolean,
});

// const banan = mongoose.model('Article', ArticleSchema);

// module.exports = banan;

