import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types'; 
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Import icon cho nút phân trang

export const BlogList = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  // 1. THÊM STATE CHO PHÂN TRANG
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12; // Số bài mỗi trang

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // Gọi API lấy toàn bộ bài viết
        const response = await fetch('https://trailix.ai/api.php');
        const data = await response.json();
        
        setPosts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Lỗi tải bài viết:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 2. TÍNH TOÁN CẮT MẢNG DỮ LIỆU
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // Chỉ lấy ra 12 bài cho trang hiện tại
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // 3. HÀM CHUYỂN TRANG
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll lên đầu trang cho mượt
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div className="container mx-auto px-4 py-12 pt-24 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">Kiến thức & Tin tức</h1>
      
      {/* 4. RENDER DANH SÁCH BÀI VIẾT (Dùng currentPosts thay vì posts) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col">
             <Link to={`/blog/${post.slug}`}>
               <img 
                 src={post.thumbnail} 
                 alt={post.title} 
                 className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                 onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/400x250?text=No+Image')}
               />
             </Link>
             <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-3 line-clamp-2 text-gray-900">
                    <Link to={`/blog/${post.slug}`} className="hover:text-brand-red transition-colors">
                        {post.title}
                    </Link>
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow">
                    {post.description}
                </p>
                <Link to={`/blog/${post.slug}`} className="text-brand-red font-semibold hover:underline mt-auto inline-block">
                    Đọc tiếp →
                </Link>
             </div>
          </div>
        ))}
      </div>

      {/* 5. GIAO DIỆN PHÂN TRANG (PAGINATION) */}
      {totalPages > 1 && (
        <div className="mt-16 flex justify-center items-center gap-2">
          
          {/* Nút Previous */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Danh sách số trang */}
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
              // Logic ẩn bớt số trang nếu quá nhiều (Chỉ hiện trang đầu, cuối, và trang hiện tại +/- 1)
              if (
                pageNum === 1 ||
                pageNum === totalPages ||
                (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
              ) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-lg font-bold text-sm transition-all duration-200 border
                      ${currentPage === pageNum
                        ? 'bg-brand-red text-white border-brand-red shadow-md'
                        : 'bg-white text-gray-600 hover:bg-gray-50 border-gray-200'
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              } else if (
                pageNum === currentPage - 2 ||
                pageNum === currentPage + 2
              ) {
                return <span key={pageNum} className="w-10 h-10 flex items-center justify-center text-gray-400">...</span>;
              }
              return null;
            })}
          </div>

          {/* Nút Next */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

        </div>
      )}
    </div>
  );
};