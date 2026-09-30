export interface CourseModule {
  id: number;
  title: string;
  duration: string;
  description?: string;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  instructor: string;
  instructorRole?: string;
  instructorAvatar: string;
  instructorBio?: string;
  rating: number;
  reviewCount: number;
  studentCount: number;
  price: number;
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  thumbnail: string;
  description?: string[];
  keyPoints?: string[];
  modules?: CourseModule[];
  reviews?: Review[];
  featured?: boolean;
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    subtitle: "Master Interface Design, Components, and Auto Layout with Hands-on Projects",
    instructor: "purepearl studio",
    instructorRole: "UI/UX Designer",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
    reviewCount: 128,
    studentCount: 240,
    price: 25,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    category: "UI/UX Design",
    thumbnail: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Build Digital Asset: A Comprehensive Guide",
    subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
    instructor: "purepearl studio",
    instructorRole: "Professional Creator",
    instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    instructorBio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story.",
    rating: 4.8,
    reviewCount: 172,
    studentCount: 199,
    price: 25,
    lessonsCount: 112,
    duration: "24 hours",
    commentsCount: 64,
    level: "Intermediate",
    category: "UI/UX Design",
    thumbnail: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80",
    featured: true,
    description: [
      "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, 'Build Digital Assets: A Comprehensive Guide.' This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios."
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio"
    ],
    modules: [
      {
        id: 1,
        title: "Module 1: Introduction to Digital Assets",
        duration: "12 mins",
        description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation."
      },
      {
        id: 2,
        title: "Module 2: Design Principles for Impact",
        duration: "21 mins",
        description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills."
      },
      {
        id: 3,
        title: "Module 3: Advanced Techniques in Digital Creation",
        duration: "16 mins",
        description: "Explore 3D compositions, vector animations, and interactive design components used in modern high-performance web applications."
      },
      {
        id: 4,
        title: "Module 4: User-Centric Design Strategies",
        duration: "28 mins",
        description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design."
      },
      {
        id: 5,
        title: "Module 5: Interactive Media and Engagement",
        duration: "34 mins",
        description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences."
      },
      {
        id: 6,
        title: "Module 6: Project Showcase and Critique",
        duration: "45 mins",
        description: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence."
      },
      {
        id: 7,
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        duration: "30 mins",
        description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes."
      }
    ],
    reviews: [
      {
        id: "r1",
        author: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "a year ago",
        content: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"
      },
      {
        id: "r2",
        author: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "a year ago",
        content: "The course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!"
      },
      {
        id: "r3",
        author: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "a year ago",
        content: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."
      },
      {
        id: "r4",
        author: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
        rating: 5,
        date: "a year ago",
        content: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."
      }
    ]
  },
  {
    id: "3",
    title: "the Power of Big Data",
    subtitle: "Harness Data Intelligence, Analytics, and Modern Warehouse Architectures",
    instructor: "purepearl studio",
    instructorRole: "Data Architect",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
    reviewCount: 95,
    studentCount: 310,
    price: 25,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    category: "Data Science",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    id: "4",
    title: "Balancing Productivity and Wellness",
    subtitle: "Achieve Peak Output Without Burnout Through Sustainable Work Habits",
    instructor: "purepearl studio",
    instructorRole: "Productivity Coach",
    instructorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
    reviewCount: 68,
    studentCount: 180,
    price: 25,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    category: "Productivity",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    id: "5",
    title: "Mastering Money Management",
    subtitle: "Smart Budgeting, Wealth Allocation, and Practical Investment Strategies",
    instructor: "purepearl studio",
    instructorRole: "Financial Analyst",
    instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
    reviewCount: 110,
    studentCount: 420,
    price: 25,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    category: "Business",
    thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    id: "6",
    title: "From Idea to Startup Success",
    subtitle: "Validate Ideas, Build MVPs, and Secure Early Adopters Quickly",
    instructor: "purepearl studio",
    instructorRole: "Startup Founder",
    instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 4.5,
    reviewCount: 84,
    studentCount: 260,
    price: 25,
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    level: "Beginner",
    category: "Business",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    featured: true,
  },
  {
    id: "7",
    title: "Modern Web Development with Next.js",
    subtitle: "Full-stack React, Server Components, and Tailwind CSS Mastery",
    instructor: "Alex Rivera",
    instructorRole: "Lead Frontend Engineer",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 4.9,
    reviewCount: 215,
    studentCount: 890,
    price: 35,
    lessonsCount: 42,
    duration: "18 hours 30 mins",
    commentsCount: 120,
    level: "Intermediate",
    category: "Web Development",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "8",
    title: "Graphic Design Fundamentals & Branding",
    subtitle: "Color Psychology, Logo Systems, and Print/Digital Brand Guides",
    instructor: "Elena Rostova",
    instructorRole: "Art Director",
    instructorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    rating: 4.7,
    reviewCount: 94,
    studentCount: 350,
    price: 28,
    lessonsCount: 24,
    duration: "6 hours 45 mins",
    commentsCount: 45,
    level: "Beginner",
    category: "Drawing & Painting",
    thumbnail: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "9",
    title: "Social Media Growth & Viral Content",
    subtitle: "Hook Audiences, Algorithmic Positioning, and Organic Distribution",
    instructor: "Marcus Chen",
    instructorRole: "Growth Strategist",
    instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 4.6,
    reviewCount: 160,
    studentCount: 520,
    price: 20,
    lessonsCount: 19,
    duration: "4 hours 10 mins",
    commentsCount: 78,
    level: "Beginner",
    category: "Social Media",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "10",
    title: "3D Animation & Motion Design in Blender",
    subtitle: "From Zero to Cinema Quality Renders and Character Rigging",
    instructor: "PurePearl Studio",
    instructorRole: "Motion Designer",
    instructorAvatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    rating: 4.8,
    reviewCount: 130,
    studentCount: 380,
    price: 30,
    lessonsCount: 35,
    duration: "14 hours 20 mins",
    commentsCount: 92,
    level: "Intermediate",
    category: "Animation",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "11",
    title: "Culinary Arts & Gourmet Cooking",
    subtitle: "Chef Techniques, Knife Skills, and Flavor Layering for Beginners",
    instructor: "Chef Antoine",
    instructorRole: "Executive Chef",
    instructorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 4.9,
    reviewCount: 88,
    studentCount: 290,
    price: 25,
    lessonsCount: 15,
    duration: "5 hours 30 mins",
    commentsCount: 34,
    level: "Beginner",
    category: "Cooking",
    thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "12",
    title: "Music Production & Sound Synthesis",
    subtitle: "Beats, Melodies, Mixing, and Mastering with Modern DAWs",
    instructor: "Kaelen Voss",
    instructorRole: "Music Producer",
    instructorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 4.7,
    reviewCount: 104,
    studentCount: 310,
    price: 30,
    lessonsCount: 28,
    duration: "9 hours 40 mins",
    commentsCount: 56,
    level: "Intermediate",
    category: "Music",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80",
  }
];

export const categoriesList = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];
