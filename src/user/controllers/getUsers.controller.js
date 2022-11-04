const User = require("../../models/User.model");


const getUsers = async (req, res, next) => {
  const data = req.body;
  try {
		let users = await User.find({});
		users = users.map( item => ({id: item._id, email: item.email}))
    res.status(201).json({ users });
  } catch (e) {
    next({ msg: e.message });
  }
};

module.exports = getUsers;