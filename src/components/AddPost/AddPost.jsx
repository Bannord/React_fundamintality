import React from "react";
import styles from "./AddPost.module.css";

const AddPost = ({ create }) => {
  const [postForm, setPostForm] = React.useState({
    title: "",
    body: "",
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...postForm,
      id: Date.now(),
    };

    if (postForm.title.length === 0 || postForm.body.length === 0) {
      alert("Please fill input");
    } else {
      create(newPost);
      setPostForm({ title: "", body: "" });
    }
  };

  return (
    <div className={styles.background_shadow}>
      <div className="add_post_wrapper">
        <form action="add_post">
          <input
            type="text"
            placeholder="title"
            value={postForm.title}
            onChange={(e) =>
              setPostForm({ ...postForm, title: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="description"
            value={postForm.body}
            onChange={(e) => setPostForm({ ...postForm, body: e.target.value })}
          />
        </form>
        <button onClick={addNewPost}>Add post</button>
      </div>
    </div>
  );
};

export default AddPost;
