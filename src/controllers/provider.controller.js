const ProviderModel = require('../models/provider.model.js');

const serviceSingle = async (req, res) => {
  const postId = req.params.id;
  console.log('====================================');
  console.log(`| [${req.method}] ${req.originalUrl}`);
  console.log('| ----------------------------------');
  try {
    const result = await ProviderModel.findOne({category_id: postId});
    return res.status(200).json({
      msg: 'Success.',
      reponse: result.service_single,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json(false);
  }
};
const serviceChild = async (req, res) => {
  const postId = req.params.id;
  console.log('====================================');
  console.log(`| [${req.method}] ${req.originalUrl}`);
  console.log('| ----------------------------------');
  try {
    const result = await ProviderModel.findOne({category_id: postId});
    return res.status(200).json({
      msg: 'Success.',
      reponse: result.service_child,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json(false);
  }
};
const serviceForm = async (req, res) => {
  const postId = req.params.id;
  console.log('====================================');
  console.log(`| [${req.method}] ${req.originalUrl}`);
  console.log('| ----------------------------------');
  try {
    const result = await ProviderModel.findOne({category_id: postId});
    return res.status(200).json({
      msg: 'Success.',
      category_response: result.category_response,
      reponse: result.service_form,
      status: 200,
    });
  } catch (error) {
    return res.status(400).json(false);
  }
};

module.exports = {
  serviceSingle,
  serviceChild,
  serviceForm,
};
