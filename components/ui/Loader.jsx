// src/components/ui/Loader.jsx
import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      {/* Container chứa hiệu ứng */}
      <div className="loader-content">
        <div className="container">
          <div className="dot dot-1" />
          <div className="dot dot-2" />
          <div className="dot dot-3" />
        </div>

        {/* SVG Filter (ẩn đi để không chiếm chỗ) */}
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="0" height="0">
          <defs>
            <filter id="goo">
              <feGaussianBlur result="blur" stdDeviation={10} in="SourceGraphic" />
              <feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7" mode="matrix" in="blur" />
            </filter>
          </defs>
        </svg>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  /* Setup khung bao để căn giữa hiệu ứng tuyệt đối bên trong */
  width: 100%;
  height: 100%;
  min-height: 200px; /* Đảm bảo đủ chiều cao để không bị cắt */
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;

  .loader-content {
    position: relative;
    width: 200px;
    height: 200px;
  }

  .container {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    filter: url("#goo");
    animation: rotate-move 2s ease-in-out infinite;
  }

  .dot {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #000;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .dot-3 {
    background-color: #ff1717;
    animation: dot-3-move 2s ease infinite, index 6s ease infinite;
  }

  .dot-2 {
    background-color: #0051ff;
    animation: dot-2-move 2s ease infinite, index 6s -4s ease infinite;
  }

  .dot-1 {
    background-color: #ffc400;
    animation: dot-1-move 2s ease infinite, index 6s -2s ease infinite;
  }

  @keyframes dot-3-move {
    20% { transform: scale(1); }
    45% { transform: translateY(-18px) scale(0.45); }
    60% { transform: translateY(-90px) scale(0.45); }
    80% { transform: translateY(-90px) scale(0.45); }
    100% { transform: translateY(0px) scale(1); }
  }

  @keyframes dot-2-move {
    20% { transform: scale(1); }
    45% { transform: translate(-16px, 12px) scale(0.45); }
    60% { transform: translate(-80px, 60px) scale(0.45); }
    80% { transform: translate(-80px, 60px) scale(0.45); }
    100% { transform: translateY(0px) scale(1); }
  }

  @keyframes dot-1-move {
    20% { transform: scale(1); }
    45% { transform: translate(16px, 12px) scale(0.45); }
    60% { transform: translate(80px, 60px) scale(0.45); }
    80% { transform: translate(80px, 60px) scale(0.45); }
    100% { transform: translateY(0px) scale(1); }
  }

  @keyframes rotate-move {
    55% { transform: translate(-50%, -50%) rotate(0deg); }
    80% { transform: translate(-50%, -50%) rotate(360deg); }
    100% { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes index {
    0%, 100% { z-index: 3; }
    33.3% { z-index: 2; }
    66.6% { z-index: 1; }
  }
`;

export default Loader;