import React from "react";
import "./TodoCard.scss";
import { useNavigate } from "react-router-dom";
const TodoCard = ({ post, remove }) => {
  const router = useNavigate();
  console.log(router);

  console.log(router);
  return (
    <div className="list_item">
      <div className="list_item_content">
        <h2>
          {post.id}.{post.title}
        </h2>
        <div className="description">{post.body}</div>
      </div>

      <button className="btn" onClick={() => remove(post)}>
        Remove
      </button>
    </div>
  );
};

export default TodoCard;
