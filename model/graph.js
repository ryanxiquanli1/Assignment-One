var mongoose = require('mongoose');
var graphSchema = new mongoose.Schema({
  _id: String,
  value: Number,
},
{
    collection: 'death_counts'
});
mongoose.model('graph', graphSchema);
