const Locations = require('../models/locations');

exports.getProvinces = async (req, res) => {
  try {
    const provinces = await Locations.findAll({
      attributes: ['province'],
      group: ['province']
    });
    res.json(provinces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getDepartments = async (req, res) => {
  try {
    const departments = await Locations.findAll({
      attributes: ['department'],
      group: ['department']
    });
    res.json(departments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCities = async (req, res) => {
  try {
    const cities = await Locations.findAll({
      attributes: ['city'],
      group: ['city']
    });
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};