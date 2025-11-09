import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ModalPortal from '../components/ModalPortal';

const posts = [
  { id: 1, title: "A gentle intro to React", content: "React is a JavaScript library for building user interfaces. It uses components, JSX, and an efficient update model", date: "Oct 20, 2025" },
  { id: 2, title: "State vs Props in 5 minutes", content: "Props are read-only inputs to components while state is managed internally. Use props to configure components.", date: "Sep 10, 2025" },
  { id: 3, title: "Making your app responsive", content: "Design responsively using media queries, flexible grids, percentage widths, and rem units.", date: "Aug 02, 2025" },
  { id: 4, title: "Portals and modals", content: "Portals let you render children into a DOM node outside the parent hierarchy — perfect for modals and overlays.", date: "Jul 15, 2025" },
  { id: 5, title: "Error boundaries explained", content: "Error boundaries are React components that catch JavaScript errors anywhere in their child component tree.", date: "Jun 05, 2025" },
  { id: 6, title: "React Router quickstart", content: "React Router provides a collection of navigational components for SPA routing.", date: "May 21, 2025" }
];

export default function PostPage(){
  const { id } = useParams();
  const post = posts.find(p => p.id === Number(id));

  if(!post){
    // Throwing inside rendering to demonstrate ErrorBoundary usage
    throw new Error('Post not found');
  }

  return (
    <div className="container">
      <article className="post">
        <h2>{post.title}</h2>
        <small style={{color:'#9b8c92'}}>{post.date}</small>
        <p style={{marginTop:12, lineHeight:1.6}}>{post.content}</p>

        <div style={{marginTop:18}}>
          <Link to="/" className="btn">← Back to Home</Link>
        </div>
      </article>

      <ModalPortal>
        <div className="portal-popup">Tip: press ← to go back</div>
      </ModalPortal>
    </div>
  );
}
