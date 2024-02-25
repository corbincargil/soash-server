const posts = [
  { id: "1234", title: "Post 1" },
  { id: "2432", title: "Post 2" },
  { id: "4232", title: "Post 3" },
];

const getPosts = async (req: any, res: any) => {
  const fetchPostsFromDb = async () =>
    setTimeout(() => {
      console.log("getting posts...");
      res.json({
        posts,
      });
    }, 1000);

  await fetchPostsFromDb();
};

const getPost = async (req: any, res: any) => {
  const id: string = req.params.id;
  if (!id)
    return res.status(400).json({ error: true, message: "missing post id" });

  const fetchPostFromDb = async () =>
    setTimeout(() => {
      console.log("finding post...");
      const post = posts.find((p) => {
        console.log("ID's: ", id, p.id);
        if (id === p.id) return p;
      });
      if (!post)
        return res
          .status(404)
          .json({ error: true, message: `Could not find post with id: ${id}` });
      res.json({ post, ok: true });
    }, 1000);

  await fetchPostFromDb();
};

export { getPosts, getPost };
