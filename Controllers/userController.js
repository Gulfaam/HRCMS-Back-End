import UserService from "../Services/userService.js";

const controller = {
  getAll: async (req, res) => {
    try {
      const data = await UserService.getAll();
      res.json(data);
    } catch (error) {
      res.json({ message: error });
    }
  },

  add: async (req, res) => {
    try {
      const addResponse = await UserService.add(req.body);
      res.json(addResponse);
    } catch (error) {
      res.json({ message: error });
    }
  },
};

export default controller;
