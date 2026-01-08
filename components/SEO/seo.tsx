import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  url: string;
  image?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, url, image }) => {
  // Config URL chuẩn (Hardcode domain của bro vào đây để tránh lỗi)
  const siteUrl = "https://trailix.ai";
  
  // Xử lý URL canonical: đảm bảo luôn là full link (https://...)
  const canonicalUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;

  // Xử lý Description: Nếu rỗng thì lấy Title làm tạm
  const finalDescription = description || title || "Blog chia sẻ kiến thức công nghệ và AI từ Trailix.";

  return (
    <Helmet>
      {/* ==========================
          1. THẺ CƠ BẢN (Fix lỗi Missing Description)
         ========================== */}
      <title>{title}</title>
      <meta name="description" content={finalDescription} />

      {/* ==========================
          2. THẺ CANONICAL (Fix lỗi Missing Canonical)
         ========================== */}
      <link rel="canonical" href={canonicalUrl} />

      {/* ==========================
          3. OPEN GRAPH (Cho Facebook/Zalo đẹp)
         ========================== */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      {image && <meta property="og:image" content={image} />}

      {/* ==========================
          4. TWITTER CARD
         ========================== */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={finalDescription} />
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};

export default SEO;