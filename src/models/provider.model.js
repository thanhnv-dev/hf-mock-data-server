const mongoose = require('mongoose');

const {Schema} = mongoose;

const ProviderSchema = new Schema(
  {
    category_id: {type: Number},
    category_name: {type: String},
    category_data: {type: Object},
    price_and_duration: {type: Array},
  },
  {timestamps: true, versionKey: false},
);

const ProviderModel = mongoose.model('Provider', ProviderSchema, 'providers');

module.exports = ProviderModel;
