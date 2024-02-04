const getUsers = (req: any, res: any) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
};

export default getUsers;
