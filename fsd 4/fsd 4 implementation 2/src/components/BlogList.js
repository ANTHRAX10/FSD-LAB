import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogList({posts}){
  return (
    <ul style={{listStyle:'none', padding:0, margin:0}}>
      {posts.map(post => (
        <li key={post.id} className="card" aria-label={`post-${post.id}`}>
          <div>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
          <div className="meta">
            <small style={{color:'#9b8c92'}}>{post.date}</small>
            <Link to={`/post/${post.id}`} className="btn">Read</Link>
          </div>
        </li>
      ))}
    </ul>
  );
}
