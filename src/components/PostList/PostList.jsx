import React from "react";
import TodoCard from "../TodoCard/TodoCard";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const PostList = ({ posts, remove }) => {
  if (!posts.length) {
    return <h1>Посты не найдены</h1>;
  }
  return (
    <div className="list_toDo">
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <TodoCard remove={remove} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
