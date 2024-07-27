import React, { useEffect, useMemo, useState } from "react";
import "../App.scss";
import axios from "axios";

import AddPost from "../components/AddPost/AddPost";
import PostList from "../components/PostList/PostList";
import PostFilter from "../components/PostFilter/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount, getPagesArray } from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
  const [array, setArray] = React.useState([]);
  const [filter, setFilter] = React.useState({ sort: "", query: "" });
  const [myModal, setMyModal] = React.useState(false);
  const sortedAndSearchedPosts = usePosts(array, filter.sort, filter.query);
  const [totalPages, setTotalPages] = React.useState(0);
  const [limit, setLimit] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const [fetchPosts, ispostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setArray(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const createPost = (newPost) => {
    setArray([...array, newPost]);
    setMyModal(false);
  };

  const removePost = (post) => {
    setArray(array.filter((el) => el.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  return (
    <div className="main_wrapper">
      <button onClick={() => setMyModal(true)}>Создать пользователя</button>
      <MyModal visible={myModal} setVisible={setMyModal}>
        <AddPost create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Error ${postError}</h1>}
      {ispostsLoading ? (
        <Loader />
      ) : (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
