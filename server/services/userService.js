let users = [];

function getAllUsers() {
  return users;
}

function createUser(user) {
  const newUser = { id: Date.now(), ...user };
  users.push(newUser);
  return newUser;
}

function updateUser(id, updateUser) {
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    users[index] = { id, ...updateUser };
    return users[index];
  }
  return null;
}

function deleteUser(id) {
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    const deletedUser = users[index];
    users.splice(index, 1);
    return deletedUser;
  }
  return null;
}

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
