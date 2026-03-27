import React from "react";
// import page from "../page"
import BlogSection from "@/components/home/BlogSection";

const blogPosts = [
  {
    id: "1",
    title: "Best Website Design and Development Cost in India",
    excerpt:
      "You must be wondering what may be the cost of Website design. Website development in India especially the business owners and entrepreneurs...",
    date: "Jun 12, 2024",
    imageUrl: "/blog11.webp",
    slug: "website-design-development-cost-India",
  },
  {
    id: "2",
    title: "Best IT Company in India 2024",
    excerpt:
      "The number of IT companies found in every corner of India has been living proof that India has over 500+ IT companies in India and...",
    date: "Jun 12, 2024",
    imageUrl: "/blog22.avif",
    slug: "best-it-company-India-2024",
  },
];

function index() {
  return (
    <div className="mt-12">
      <BlogSection blogPosts={blogPosts} />
    </div>
  );
}

export default index;
