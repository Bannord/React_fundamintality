import { useMemo } from "react";

export const useSortedPosts = (array, sort) => {
    const sortedPosts = useMemo(() => {
        console.log("OTRABOTAL");
        if (sort) {
          return [...array].sort((a, b) =>
            a[sort].localeCompare(b[sort])
          );
        }
        return array;
      }, [sort, array]);

      return sortedPosts
}

export const usePosts = (array, sort, query) => {
    const sortedPosts = useSortedPosts(array, sort)

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase())
        );
      }, [query, sortedPosts]);

      return sortedAndSearchedPosts
}