import React from 'react'
import fetch from 'isomorphic-unfetch';
import Posts from './component/Posts';
import Pagination from './component/Pagination';
import api from './api/api.json'
import Error from './404'
import { useState, useEffect } from 'react';
import SearchBar from './component/SearchBar'

export default function index(props) {
  // try {
  //   if (props.data.status == "error") {
  //     return <div> <Error msg={props.data.message} /> </div>
  //   }
  // }
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  useEffect(() => {
    setPosts(props.articles);

  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);



  return (
    <div>
      <h1 className='text-center m-3'>News</h1>
      <Posts posts={currentPosts} />
      <div className='ms-5'><Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /></div>
    </div>
  );

}

export async function getStaticProps() {
  const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=382ef23b3b284c54ad2b65d15e6e2e1c");
  const data = await res.json();
  if (data.status == "error") {
    return {
      props: {
        data
      }
    }
  }
  const articles = data.articles;
  return {
    props: {
      articles
    }
  };
}

