const express = require("express");
const userService = require("./userService");
const {
  storeUserValidation,
  handleValidattionErrors,
} = require("./userValidator");

const router = express.Router();
router.get("/", (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
});

router.post("/", storeUserValidation, handleValidattionErrors, (req, res) => {
  const user = userService.createUser(req.body);
  res.status(201).json(user);
});
router.put("/:id", storeUserValidation, handleValidattionErrors, (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = userService.updateUser(id, req.body);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(400).json({ error: "User not found" });
  }
});

router.delete(
  "/:id",
  storeUserValidation,
  handleValidattionErrors,
  (req, res) => {
    const id = parseInt(req.params.id);
    const deletedUser = userService.deleteUser(id);
    if (deletedUser) {
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(400).json({ error: "User not found" });
    }
  }
);

module.exports = router;
