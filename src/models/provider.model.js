const mongoose = require('mongoose');

const {Schema} = mongoose;

const ProviderSchema = new Schema(
  {
    category_id: {type: Number},
    category_name: {type: String},
    service_single: {type: Object},
    service_child: {type: Array},
  },
  {timestamps: true, versionKey: false},
);

const ProviderModel = mongoose.model('Provider', ProviderSchema, 'providers');

module.exports = ProviderModel;
