import User1 from "@/public/assets/User1.jpg";
import User2 from "@/public/assets/User2.jpg";
import User3 from "@/public/assets/User3.jpg";
import User4 from "@/public/assets/User4.jpg";

export const Socials = [
  {
    name: "Facebook",
    icon: "",
    url: "https://www.facebook.com/musfikurrahman002",
  },
  {
    name: "GitHub",
    icon: "",
    url: "",
  },
  {
    name: "LinkedIn",
    icon: "",
    url: "",
  },
];

export const Reviews = [
  {
    id: "p1",
    userName: "MMR Masum",
    userImage: User1,
    userProfession: "Web Developer",
    userWorkPlace: "Google",
    aboutUS:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quibusdam sed magni laborum dolorem voluptatum vero harum pariatur dolor laudantium accusantium necessitatibus tenetur, illum cupiditate eius perferendis quis deserunt cumque",
  },
  {
    id: "p2",
    userName: "Jone Doe",
    userImage: User2,
    userProfession: "Software Developer",
    userWorkPlace: "Microsoft",
    aboutUS:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quibusdam sed magni laborum dolorem voluptatum vero harum pariatur dolor laudantium accusantium necessitatibus tenetur, illum cupiditate eius perferendis quis deserunt cumque",
  },
  {
    id: "p3",
    userName: "Mark",
    userImage: User3,
    userProfession: "CEO",
    userWorkPlace: "Fusion IT",
    aboutUS:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quibusdam sed magni laborum dolorem voluptatum vero harum pariatur dolor laudantium accusantium necessitatibus tenetur, illum cupiditate eius perferendis quis deserunt cumque",
  },
  {
    id: "p4",
    userName: "Jone ",
    userImage: User4,
    userProfession: "Software Developer",
    userWorkPlace: "Microsoft",
    aboutUS:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores quibusdam sed magni laborum dolorem voluptatum vero harum pariatur dolor laudantium accusantium necessitatibus tenetur, illum cupiditate eius perferendis quis deserunt cumque",
  },
];

export const Projects = [
  {
    id: "car_hub",
    name: "Car Hub",
    projectURL: "https://cars-shows.vercel.app",
    introHead:
      "Unlock Effortless Car Rentals: Find, Book, and Drive Away with Ease!",
    intro:
      "Revolutionize your car rental experience with our state-of-the-art website. Discover and rent the perfect car swiftly and securely, all while enjoying a user-friendly journey. Our platform is built on Next.js, TypeScript, and Tailwind CSS for optimal performance and responsiveness.",
    introEnd: "Explore the world of hassle-free car rentals today!",
    descHead: "Introducing the Future of Car Rentals",
    desc: `Welcome to our cutting-edge car rental website, where we've redefined the way you rent cars. Our mission is to make finding, booking, and driving away with your dream car a breeze. With the tagline "Find, Book, and Drive Away with Ease," we're committed to delivering an effortless and enjoyable car rental experience.`,
    keyFeatures: [
      {
        icon: "🚗",
        heading: "Effortless Booking",
        feature:
          "Our intuitive booking process ensures you're on the road in no time.",
      },
      {
        icon: "🔍",
        heading: "Advanced Search",
        feature:
          "Find your ideal car by brand, model, fuel type, or build year.",
      },
      {
        icon: "🔒",
        heading: "Secure Sign-up",
        feature: "Create an account securely and unlock personalized features.",
      },
      {
        icon: "📱",
        heading: "Responsive Design",
        feature: "Enjoy a seamless experience on any device.",
      },
    ],
    challenges: [
      {
        icon: "🧩",
        heading: "TypeScript Mastery",
        feature: "We conquered type errors and ensured top-notch type safety.",
      },
      {
        icon: "🛡️",
        heading: "Robust Form Validation",
        feature: "Your data's security and integrity are our top priorities.",
      },
      {
        icon: "🔐",
        heading: "Fortified Authentication",
        feature:
          "We've implemented a robust authentication system for your peace of mind.",
      },
    ],

    gettingStarted: [
      "Experience the future of car rentals",
      "1. Clone this repository.",
      `2. Install dependencies with 'npm install'`,
      "3. Configure your environment variables.",
      `4. Launch the development server using 'npm run dev'.`,
      `For a live demo, visit: [https://cars-shows.vercel.app]`,
    ],
    techs: [
      { id: "", name: "Next JS", icon: "", URL: "" },
      { id: "", name: "TypeScript", icon: "", URL: "" },
      { id: "", name: "Tailwind CSS", icon: "", URL: "" },
    ],
  },
  {
    id: "golds_gym",
    name: "Gold's Gym",
    projectURL: "https://golds-gyms.vercel.app",
    introHead:
      "Elevate Your Fitness Journey with Gold's Gym: Your Ultimate Exercise Resource",
    intro:
      "Transform your fitness experience with our cutting-edge Gold's Gym website. Explore a world of exercises designed to target different muscle groups, find your ideal workouts easily, and embark on a journey to a healthier, stronger you. We've harnessed the power of React, Material-UI (MUI), and APIs to bring you a modern, user-friendly, and SEO-friendly platform.",
    introEnd: "Discover the path to your fitness goals today!",
    descHead: "Revolutionising Fitness Exploration",
    desc: `Welcome to Gold's Gym, where we've reimagined how you access exercise information. Our mission is to empower you to discover, learn, and achieve your fitness goals effortlessly. With the mantra "Unlock Your Potential," we are dedicated to providing a seamless and enriching fitness exploration experience.`,
    keyFeatures: [
      {
        icon: "🏋️‍♂️",
        heading: "Comprehensive Exercise Library",
        feature:
          "Explore a vast collection of exercises categorized by muscle groups, making it easy to find the perfect workout.",
      },
      {
        icon: "🔍",
        heading: "Effortless Search",
        feature:
          "Quickly locate exercises by name, equipment, or muscle group, ensuring you can tailor your fitness routine precisely.",
      },
      {
        icon: "📝",
        heading: "Detailed Exercise Profiles",
        feature:
          "Access step-by-step instructions, high-quality images, and video demonstrations for each exercise, enabling you to perform them correctly.",
      },
      {
        icon: "🧘‍♀️",
        heading: "Personalised Workouts",
        feature:
          "Create and save customised workouts, designed to align with your fitness aspirations and schedule.",
      },
      {
        icon: "📱",
        heading: "Responsive Design",
        feature:
          "Enjoy a seamless experience across all your devices, from desktop to mobile, as you explore our fitness world.",
      },
    ],
    challenges: [
      {
        icon: "📚",
        heading: "Content Curation",
        feature:
          "Managing and organising a vast library of exercises while maintaining content quality standards was an ongoing endeavour.",
      },
      {
        icon: "🔄 ",
        heading: "API Integration Mastery",
        feature:
          "We seamlessly integrated APIs to provide real-time exercise data for a dynamic user experience.",
      },
      {
        icon: "🎨",
        heading: "Modern UI/UX Design",
        feature:
          "Crafting an intuitive and visually appealing user interface was a top priority, ensuring user-friendliness and modern aesthetics. ",
      },
      {
        icon: "⚙️",
        heading: "Performance Excellence",
        feature:
          "Optimising loading times and navigation was crucial to delivering a smooth user experience for content-rich exercise profiles.",
      },
    ],

    gettingStarted: [
      "Experience the future of car rentals",
      "1. Clone this repository.",
      `2. Install dependencies with 'npm install'`,
      "3. Configure your environment variables.",
      `4. Launch the development server using 'npm run dev'.`,
      `For a live demo, visit: [https://cars-shows.vercel.app]`,
    ],
    techs: [
      { id: "", name: "Next JS", icon: "", URL: "" },
      { id: "", name: "TypeScript", icon: "", URL: "" },
      { id: "", name: "Tailwind CSS", icon: "", URL: "" },
    ],
  },
  {
    id: "tshirt_design",
    name: "T-Shirt Design",
    projectURL: "https://tshirt-design.vercel.app",
    introHead:
      "Custom T-Shirt Design Studio: Unleash Your Creativity with React, Tailwind CSS, Three.js, Framer Motion, and AI",
    intro:
      "Elevate your fashion game to new heights with our cutting-edge Custom T-Shirt Design Studio. Create personalised t-shirt designs effortlessly, and unleash your artistic side with customizable colours, logos, and AI-generated masterpieces. We've harnessed the power of React, Tailwind CSS, Three.js, Framer Motion, and AI technology to bring you a modern, user-friendly, and SEO-friendly platform.",
    introEnd: "Express yourself through fashion today!",
    descHead: "Revolutionise T-Shirt Design",
    desc: `Welcome to the future of custom t-shirt design, where your imagination knows no bounds. Our mission is to empower you to transform your wardrobe with unique creations. With the mantra "Design Beyond Limits," we are dedicated to providing an intuitive and enriching t-shirt design experience.`,
    keyFeatures: [
      {
        icon: "🎨",
        heading: "Customizable Colour Palette",
        feature:
          "Explore a spectrum of colors and pick the perfect shade to match your style.",
      },
      {
        icon: "🖼️",
        heading: "Logo and Design Upload",
        feature:
          "Add your own logos or create from scratch for a truly unique t-shirt design.",
      },
      {
        icon: "🤖",
        heading: "AI-Powered Design Assistance",
        feature:
          "Let our AI generate stunning design ideas based on your preferences.",
      },
      {
        icon: "✨",
        heading: "Interactive 3D Preview",
        feature:
          "Visualize your t-shirt design in a 3D environment, seeing every detail before you order.",
      },
      {
        icon: "📱",
        heading: "Responsive and Seamless",
        feature:
          "Enjoy a smooth experience on all devices, from desktop to mobile, as you craft your fashion statement.",
      },
    ],
    challenges: [
      {
        icon: "🔄",
        heading: "Complex Integration",
        feature:
          "Seamlessly integrating React, Tailwind CSS, Three.js, Framer Motion, and AI technologies for a cohesive user experience.",
      },
      {
        icon: "🎨",
        heading: "Modern and Intuitive UI/UX",
        feature:
          "Crafting a visually appealing and easy-to-navigate interface to ensure user-friendliness and modern aesthetics.",
      },
      {
        icon: "⚙️",
        heading: "Optimized Performance",
        feature:
          "Enhancing loading times and user interaction for a fluid design process.",
      },
      {
        icon: "📚",
        heading: "Content Management",
        feature:
          "Managing a vast library of design options while maintaining high-quality standards for user-generated content.",
      },
    ],
    gettingStarted: [
      "Experience the future of car rentals",
      "1. Clone this repository.",
      `2. Install dependencies with 'npm install'`,
      "3. Configure your environment variables.",
      `4. Launch the development server using 'npm run dev'.`,
      `For a live demo, visit: [https://cars-shows.vercel.app]`,
    ],
    techs: [
      { id: "", name: "Next JS", icon: "", URL: "" },
      { id: "", name: "TypeScript", icon: "", URL: "" },
      { id: "", name: "Tailwind CSS", icon: "", URL: "" },
    ],
  },
  {
    id: "summarizers",
    name: "Summarizer",
    projectURL: "https://summarizers.vercel.app",
    introHead:
      "Streamline Your Reading with Summarizer: Your Ultimate Article Summarizer",
    intro:
      "Simplify your reading experience with SummarizeIt, the premier online article summarizer. Dive into a world where lengthy articles are transformed into concise summaries, making information absorption effortless. Our platform, built with cutting-edge technologies like React, Tailwind CSS, and AI, offers a modern, user-friendly, and SEO-friendly solution for simplifying complex content. ",
    introEnd: "Uncover the art of efficient reading today!",
    descHead: "Reinventing Reading for the Digital Age",
    desc: `Welcome to SummarizeIt, where we've redefined how you consume information. Our mission is to empower you to digest, understand, and utilise content more efficiently. With the goal of "Simplify, Understand, Act," we are committed to providing a seamless and enriching reading experience.`,

    keyFeatures: [
      {
        icon: "📚",
        heading: "Effortless Summaries",
        feature:
          "Transform long articles into concise summaries with a single click, saving you time and effort.",
      },
      {
        icon: "🔍",
        heading: "Customizable Summaries",
        feature:
          "Fine-tune summaries to match your preferences, whether you need a brief overview or an in-depth breakdown.",
      },
      {
        icon: "📊",
        heading: "AI-Powered Summarization",
        feature:
          "Harness the power of artificial intelligence to generate accurate and coherent summaries.",
      },
      {
        icon: "🔗",
        heading: "URL Integration",
        feature:
          "Summarize articles directly from web links, eliminating the need for manual copying and pasting.",
      },
      {
        icon: "📱",
        heading: "Responsive Design",
        feature:
          "Enjoy an optimal reading experience on any device, from desktops to mobile phones, with our responsive design.",
      },
    ],
    challenges: [
      {
        icon: "🤖",
        heading: "AI Precision",
        feature:
          "Achieving high accuracy in AI-generated summaries while maintaining readability presented a significant challenge.",
      },
      {
        icon: "🎨",
        heading: "User-Centric Design",
        feature:
          "Crafting an intuitive and visually appealing user interface was essential for enhancing user engagement and ease of use.",
      },
      {
        icon: "🚀",
        heading: "Optimized Performance",
        feature:
          "Ensuring fast summary generation and seamless navigation was crucial for delivering an efficient user experience.",
      },
      {
        icon: "📰",
        heading: "Content Diversity",
        feature:
          "Handling a wide range of article types, from news to technical documents, required continuous refinement of our summarization algorithms.",
      },
    ],
    gettingStarted: [
      "Experience the future of car rentals",
      "1. Clone this repository.",
      `2. Install dependencies with 'npm install'`,
      "3. Configure your environment variables.",
      `4. Launch the development server using 'npm run dev'.`,
      `For a live demo, visit: [https://cars-shows.vercel.app]`,
    ],
    techs: [
      { id: "", name: "Next JS", icon: "", URL: "" },
      { id: "", name: "TypeScript", icon: "", URL: "" },
      { id: "", name: "Tailwind CSS", icon: "", URL: "" },
    ],
  },
];
