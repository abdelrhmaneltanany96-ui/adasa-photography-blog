import { useState } from "react";
import blogsData from "../data/blogs.json";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  const posts = blogsData.posts;

  // Search State
  const [searchTerm, setSearchTerm] = useState("");

  // Category State
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  // View Mode State
  const [viewMode, setViewMode] = useState("grid");

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);

  // Number of posts per page
  const postsPerPage = 6;

  // Get unique categories
  const categories = [
    "الكل",
    ...new Set(posts.map((post) => post.category)),
  ];

  // Filter posts
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "الكل" ||
      post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Calculate total pages
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Calculate start and end indexes
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  // Get posts for the current page
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <main className="blogs-page container">
      <h1>Our Blogs</h1>

      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="ابحث عن تدوينة..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="search-input"
          dir="rtl"
        />
      </div>

      {/* Category Filter */}
      <div className="categories">
        {categories.map((category) => {
          return (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentPage(1);
              }}
              className={
                selectedCategory === category
                  ? "category-btn active"
                  : "category-btn"
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* View Controls */}
      <div className="view-controls">
        <p>
          Showing {filteredPosts.length} blogs
        </p>

        <div className="view-buttons">
          <button
            type="button"
            onClick={() => setViewMode("grid")}
            className={viewMode === "grid" ? "active" : ""}
            aria-pressed={viewMode === "grid"}
          >
            🔲 Grid
          </button>

          <button
            type="button"
            onClick={() => setViewMode("list")}
            className={viewMode === "list" ? "active" : ""}
            aria-pressed={viewMode === "list"}
          >
            ☰ List
          </button>
        </div>
      </div>

      {/* Blogs */}
      {filteredPosts.length > 0 ? (
        <div
          className={
            viewMode === "grid"
              ? "blogs-grid"
              : "blogs-grid list-view"
          }
        >
          {currentPosts.map((post) => {
            return <BlogCard key={post.id} post={post} />;
          })}
        </div>
      ) : (
        <p className="no-results">
          لا توجد تدوينات تطابق بحثك 🔍
        </p>
      )}
      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;

            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={currentPage === pageNumber ? "active" : ""}
              >
                {pageNumber}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}









