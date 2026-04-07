
import React from 'react';
import BlogHero from '../Components/Blogpage/BlogHero';
import BlogGrid from '../Components/Blogpage/BlogGrid';
import BlogSidebar from '../Components/Blogpage/BlogSidebar';
import BlogCTA from '../Components/Blogpage/BlogCTA';


const Blog = () => {
  return (
    <div className="overflow-hidden">
      <BlogHero/>
      <div className="max-w-7xl mx-auto  py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <BlogGrid />
          </div>
          <div className="lg:w-1/3">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <BlogCTA />
    </div>
  );
};

export default Blog;