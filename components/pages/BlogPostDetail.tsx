import React, { useEffect, useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../SEO/seo';

// Định nghĩa kiểu dữ liệu bài viết
interface BlogPost {
  id: string | number;
  title: string;
  slug: string;
  content: string;
  thumbnail: string;
  image_urls: string; // Chuỗi URL ảnh ngăn cách bằng dấu phẩy
  created_at: string;
  description?: string;
}

export const BlogPostDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch dữ liệu
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    // Thêm timestamp ?t=... để tránh cache trình duyệt khi test
    fetch(`https://trailix.ai/api.php?slug=${slug}&t=${Date.now()}`)
      .then(res => {
        if (!res.ok) throw new Error('Lỗi kết nối server');
        return res.json();
      })
      .then(data => {
        if (!data || data.status === 'error') {
          setError('Bài viết không tồn tại');
        } else {
          setPost(data);
        }
      })
      .catch((err) => {
        console.error(err);
        setError('Lỗi tải bài viết');
      })
      .finally(() => setLoading(false));
  }, [slug]);

  // ==========================================
  // XỬ LÝ NỘI DUNG: Ghép ảnh & Chặn trùng lặp
  // ==========================================
  const contentWithImages = useMemo(() => {
    if (!post?.content) return '';

    let processedContent = post.content;
    
    // Nếu có danh sách ảnh
    if (post.image_urls) {
        // Tách chuỗi thành mảng url sạch
        const urls = post.image_urls.split(',').map(url => url.trim()).filter(Boolean);
        
        // Lấy url của thumbnail để so sánh (tránh in lại)
        const thumbnailSrc = post.thumbnail ? post.thumbnail.trim() : '';

        // Regex tìm thẻ img placeholder (data-image-index)
        processedContent = processedContent.replace(
            /<img\s+([^>]*?)data-image-index=["'](\d+)["']([^>]*?)>/gi, 
            (match, p1, indexStr, p3) => {
                const index = parseInt(indexStr, 10);
                
                // Lấy ảnh tương ứng (n8n index từ 1, mảng từ 0)
                const imageUrl = urls[index - 1] || urls[0]; 

                if (imageUrl) {
                    // 🔥 LOGIC CHẶN TRÙNG ẢNH BÌA:
                    // Nếu ảnh sắp chèn GIỐNG HỆT ảnh bìa -> Xóa luôn thẻ img đó
                    if (thumbnailSrc && imageUrl === thumbnailSrc) {
                        return ''; 
                    }

                    // Nếu không trùng, render ảnh với style đẹp
                    return `<img src="${imageUrl}" data-image-index="${indexStr}" ${p1} ${p3} style="width: 100%; height: auto; border-radius: 8px; margin: 2rem auto; box-shadow: 0 4px 6px rgba(0,0,0,0.1); display: block;">`;
                }
                
                // Không có link ảnh thì xóa placeholder
                return ''; 
            }
        );
    }

    return processedContent;
  }, [post]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center pt-20">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-600"></div>
      </div>
    );
  }

  // Error state
  if (error || !post) {
    return (
      <div className="min-h-screen pt-32 text-center px-4">
        <h2 className="text-2xl font-bold mb-4">😕 {error}</h2>
        <Link to="/blog" className="text-red-600 hover:underline">
          Quay lại trang Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post.title}
        description={post.description || post.title}
        url={`https://trailix.ai/blog/${slug}`}
        image={post.thumbnail}
      />

      <article className="max-w-4xl mx-auto px-4 py-12 pt-28 animate-fade-in-up">
        {/* Style CSS riêng cho nội dung bài viết */}
        <style>{`
          .blog-content-body { font-family: 'Inter', sans-serif; color: #374151; }
          .blog-content-body p { margin-bottom: 1.5em; line-height: 1.8; font-size: 1.1rem; text-align: justify; }
          .blog-content-body h2 { font-size: 1.8rem; font-weight: 800; margin-top: 3rem; margin-bottom: 1.5rem; color: #111827; }
          .blog-content-body h3 { font-size: 1.4rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: #1F2937; }
          .blog-content-body ul, .blog-content-body ol { padding-left: 1.5rem; margin-bottom: 1.5rem; list-style-position: outside; }
          .blog-content-body ul { list-style-type: disc; }
          .blog-content-body ol { list-style-type: decimal; }
          .blog-content-body li { margin-bottom: 0.5rem; }
          .blog-content-body strong { color: #000; font-weight: 700; }
        `}</style>

        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            {post.title}
          </h1>
        </header>

        {/* Thumbnail chính (Chỉ hiện 1 lần ở đây) */}
        {post.thumbnail && (
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-12">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        )}

        {/* Nội dung bài viết (Đã lọc bỏ ảnh trùng thumbnail) */}
        <div
          className="blog-content-body"
          dangerouslySetInnerHTML={{ __html: contentWithImages }}
        />
      </article>
    </>
  );
};