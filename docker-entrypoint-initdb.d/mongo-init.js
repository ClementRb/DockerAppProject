db.createUser({
  user: "api_user",
  pwd: "1234",
  roles: [
    {
      role: "readWrite",
      db: "demodb",
    },
  ],
});
