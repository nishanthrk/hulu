import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import requests from "../utility/requests";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Results({ genre }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  console.log("genre", genre);

  const getMorePost = async (page) => {
    const res = await fetch(
      `https://api.themoviedb.org/3${
        requests[genre]?.url || requests.fetchTrending.url
      }&page=${page}`
    ).then((res) => res.json());
    setPage(res.page);
    setHasMore(res.page <= res.total_pages);
    setPosts([...posts, ...res?.results]);
  };
  return (
    <div>
      <InfiniteScroll
        dataLength={posts.length}
        next={getMorePost(page + 1)}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 3xl:flex flex-wrap justify-center">
          {posts?.map((result) => (
            <Thumbnail key={result.id} result={result} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}
