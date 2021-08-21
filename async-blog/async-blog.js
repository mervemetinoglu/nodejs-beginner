const blogPosts = [
  { post: "Post 1", author: "Author 1" },
  { post: "Post 2", author: "Author 2" },
  { post: "Post 3", author: "Author 3" },
  { post: "Post 4", author: "Author 4" },
  { post: "Post 5", author: "Author 5" },
];

const listPosts = () => {
  blogPosts.map((post) => console.log(`${post.post} - ${post.author}`));
};

const addPost = (post) => {
  const promise = new Promise((resolve, reject) => {
    blogPosts.push(post);
    resolve(blogPosts);
    reject("Error! The post couldn't be added.");
  });

  return promise;
};

const showPosts = async (post) => {
  await addPost(post);
  console.log("\n----Post added----\n");
  listPosts();
};

listPosts();

showPosts({ post: "Post 7", author: "Author 7" });
