import React from 'react';
import NewsCard from './newsCard';

const Posts = ({ posts}) => {
  return (
    <div>
    <div className="container">
          <div className="row">
        {posts.map(post =>(
            <div className="col-sm-4">
              <NewsCard key={post.id} post={post}/>
            </div>
         ))}
         </div>
       </div>
    </div>
    
  );
};

export default Posts;