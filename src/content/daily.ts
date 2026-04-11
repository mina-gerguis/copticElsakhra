export type DailyContent = {
  title: string;
  description?: string;
  images: string[];
  video?: string;
};

export const dailyContent: Record<string, DailyContent> = {
  "Jan 12": {
    title: "استشهاد القديس باخوم",
    images: ["/images/jan12/1.jpg", "/images/jan12/2.jpg"],
    video: "https://www.youtube.com/embed/xxxx",
  },

  "Jun 7": {
    title: "البابا شنودة الثالث",
    images: ["/images/jun7/1.jpg"],
    video: "https://www.youtube.com/embed/yyyy",
  },

    "apr-11": {
    title: "البابا شنودة الثالث",
    images: [
      "/assets/Hero/1.jpg",
      "/assets/Hero/2.jpg",
      "/assets/Hero/3.jpg",
    ],
    video: "https://www.youtube.com/embed/zzzz",
      description: "هذا هو وصف المحتوى اليومي لليوم 11 أبريل. يمكن أن يتضمن هذا الوصف معلومات إضافية حول الحدث أو الشخص الذي يتم تسليط الضوء عليه في هذا اليوم."
    },

    "apr-12": {
    title: "البابا شنودة الثالث",
    images: [ "/assets/Hero/5.jpg", "/assets/Hero/6.jpg", "/assets/Hero/7.jpg"],
    video: "https://www.youtube.com/embed/zzzz",
      description: "هذا هو وصف المحتوى اليومي لليوم 12 أبريل. يمكن أن يتضمن هذا الوصف معلومات إضافية حول الحدث أو الشخص الذي يتم تسليط الضوء عليه في هذا اليوم."
    }
};
