import {useEffect,useState} from 'react'
import NewsCard from './component/newsCard';
import {useRouter} from 'next/router'
import api from './api/api.json'
import getNewsbySearch from './getNewsbySearch'
import Posts from './component/Posts';
import Pagination from './component/Pagination';

export default function readmore({ articles }) {
  console.log(articles);
  const router =useRouter();
  const {search}=router.query;

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  useEffect(() => {
    setPosts(articles);
    
  }, []);

   // Get current posts
   const indexOfLastPost = currentPage * postsPerPage;
   const indexOfFirstPost = indexOfLastPost - postsPerPage;
   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
 
   // Change page
   const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
        <h1 className='text-center m-3'>{search}</h1>
        <Posts posts={currentPosts} />
      <div className='ms-5'><Pagination 
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      /></div>
      </div>
  )
}
readmore.getInitialProps = async ({ query }) => {
  const { search } = query;
  const data = await getNewsbySearch(search);
  const articles=data.articles
  // if(data.status!='ok')
  // {
  //   return {msg:"Not found"}
  // }
  return { articles };
};