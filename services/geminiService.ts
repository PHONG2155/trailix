import { GoogleGenAI, Type } from "@google/genai";
import { Roadmap, JobRole, ExperienceLevel } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateLearningRoadmap = async (role: JobRole, level: ExperienceLevel): Promise<Roadmap> => {
  try {
    const prompt = `
      Bạn là một chuyên gia tư vấn đào tạo nhân sự cấp cao tại TRAILIX Training Center.
      Hãy thiết kế một lộ trình học tập 4 tuần chuyên biệt về "Ứng Dụng AI Trong Công Việc" cho vị trí: "${role}" ở trình độ "${level}".

      Mục tiêu: Không học lý thuyết suông. Tập trung hoàn toàn vào kỹ thuật viết Prompt (Prompt Engineering) và các công cụ AI để giải quyết công việc thực tế của vị trí này.

      Hãy kết hợp các nội dung sau vào lộ trình nếu phù hợp: 
      [Viết Prompt, Phân tích dữ liệu, Tạo trợ lý ảo, Lập kế hoạch, Tạo Slide, Content, Kịch bản bán hàng, Sơ đồ, DeepSearch, Thiết kế, Video, Chatbot].

      Với mỗi tuần, hãy cung cấp:
      - Tiêu đề tuần (Ví dụ: "Tư duy Prompting căn bản")
      - Trọng tâm (Một câu tóm tắt mục tiêu)
      - 3 kỹ năng/chủ đề cụ thể cần thực hành.

      Trả về kết quả dưới dạng JSON.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            role: { type: Type.STRING },
            level: { type: Type.STRING },
            steps: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  week: { type: Type.NUMBER },
                  title: { type: Type.STRING },
                  focus: { type: Type.STRING },
                  topics: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING }
                  }
                },
                required: ['week', 'title', 'focus', 'topics']
              }
            }
          },
          required: ['role', 'level', 'steps']
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as Roadmap;
    }
    throw new Error("No response text generated");

  } catch (error) {
    console.error("Gemini API Error:", error);
    // Fallback data in Vietnamese
    return {
      role: role,
      level: level,
      steps: [
        {
          week: 1,
          title: "Tư duy Prompt Engineering",
          focus: "Làm chủ tư duy giao tiếp với AI và các cấu trúc lệnh cơ bản.",
          topics: ["Cấu trúc một Prompt chuẩn cho " + role, "Kỹ thuật Few-shot prompting", "Tối ưu hóa output đầu ra"]
        },
        {
          week: 2,
          title: "Tự động hóa quy trình",
          focus: "Ứng dụng AI vào các tác vụ lặp lại hàng ngày.",
          topics: ["Xử lý email và văn bản tự động", "Tóm tắt thông tin cuộc họp", "Tạo template báo cáo nhanh"]
        },
        {
          week: 3,
          title: "Phân tích & Sáng tạo nâng cao",
          focus: "Sử dụng các công cụ chuyên sâu để xử lý dữ liệu và nội dung.",
          topics: ["Phân tích số liệu với Code Interpreter", "Sáng tạo nội dung đa kênh", "Tạo slide thuyết trình tự động"]
        },
        {
          week: 4,
          title: "Xây dựng Trợ lý ảo (Agents)",
          focus: "Đóng gói quy trình thành các trợ lý AI riêng biệt.",
          topics: ["Tạo Custom GPTs cho team", "Xây dựng workflow phức tạp", "Bảo mật và đạo đức AI"]
        }
      ]
    };
  }
};