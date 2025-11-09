import React from 'react';
import BlogList from '../components/BlogList';

const posts = [
  { id: 1, title: "A gentle intro to React", excerpt: "Components, JSX, and why React matters.", date: "Oct 20, 2025" },
  { id: 2, title: "State vs Props in 5 minutes", excerpt: "Clear differences and practical tips.", date: "Sep 10, 2025" },
  { id: 3, title: "Making your app responsive", excerpt: "Media queries, relative units, and flexible layouts.", date: "Aug 02, 2025" },
  { id: 4, title: "Portals and modals", excerpt: "Why portals are handy for overlays and tooltips.", date: "Jul 15, 2025" },
  { id: 5, title: "Error boundaries explained", excerpt: "Gracefully handle runtime errors in UI.", date: "Jun 05, 2025" },
  { id: 6, title: "React Router quickstart", excerpt: "Create SPA navigation using routes.", date: "May 21, 2025" }
];

export default function Home(){
  return (
    <div className="container">
      <section className="hero">
        <div>
          <h1>Welcome to My React Blog</h1>
          <p>A soft pastel, colorful blog that demonstrates core React concepts — responsive and polished for your assignment.</p>
        </div>
        <div style={{flex:1}} />
      </section>

      <div style={{marginTop:18}}>
        <h2>Latest posts</h2>
        <div className="grid">
          <BlogList posts={posts.slice(0,6)} />
        </div>
      </div>
    </div>
  );
}
