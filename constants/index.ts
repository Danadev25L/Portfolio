export const Skill_data = [
    {
      skill_name: "Html 5",
      Image: "/html.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Css",
      Image: "/css.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Java Script",
      Image: "/js.png",
      width: 65,
      height: 65,
    },
    {
      skill_name: "Tailwind Css",
      Image: "/tailwind.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "React",
      Image: "/react.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Redux",
      Image: "/redux.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "React Query",
      Image: "/reactquery.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Type Script",
      Image: "/ts.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Next js 13",
      Image: "/next.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Framer Motion",
      Image: "/framer.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Stripe Payment",
      Image: "/stripe.webp",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Node js",
      Image: "/node-js.png",
      width: 80,
      height: 80,
    },
    {
      skill_name: "Mongo db",
      Image: "/mongodb.png",
      width: 40,
      height: 40,
    },
  
  ];
  
  export const Socials = [
    {
      name: "Instagram",
      src: "/instagram.svg",
      url : "https://www.instagram.com/aelius_77/"
    },
    {
      name: "Facebook",
      src: "/facebook.svg",
        url : "https://www.facebook.com/profile.php?id=100080809302441"
      
    },
    {
      name: "Github",
      src: "/gitwhite.png",
         url : "https://github.com/Danadev25L"
    },
  ];
  
  
  export const AllSkills = [
    // Frontend Skills
    ...[
      {
        skill_name: "HTML 5",
        Image: "/html.png",
        width: 80,
        height: 80,
        category: "Frontend",
      },
      {
        skill_name: "CSS",
        Image: "/css.png",
        width: 80,
        height: 80,
        category: "Frontend",
      },
      {
        skill_name: "JavaScript",
        Image: "/js.png",
        width: 65,
        height: 65,
        category: "Frontend",
      },
      {
        skill_name: "Tailwind CSS",
        Image: "/tailwind.png",
        width: 80,
        height: 80,
        category: "Frontend",
      },
      {
        skill_name: "Material UI",
        Image: "/mui.png",
        width: 80,
        height: 80,
        category: "Frontend",
      },
      {
        skill_name: "React",
        Image: "/react.png",
        width: 80,
        height: 80,
        category: "Frontend",
      },
      {
        skill_name: "Redux",
        Image: "/redux.png",
        width: 80,
        height: 80,
        category: "Frontend",
      },
      {
        skill_name: "React Query",
        Image: "/reactquery.png",
        width: 80,
        height: 80,
        category: "Frontend",
      },
      {
        skill_name: "TypeScript",
        Image: "/ts.png",
        width: 80,
        height: 80,
        category: "Frontend",
      },
      {
        skill_name: "Next.js 13",
        Image: "/next.png",
        width: 80,
        height: 80,
        category: "Frontend",
      },
     
    ],
    // Backend Skills
    ...[
      {
        skill_name: "Node.js",
        Image: "/node-js.png",
        width: 80,
        height: 80,
        category: "Backend",
      },
      {
        skill_name: "Express.js",
        Image: "/express.png",
        width: 80,
        height: 80,
        category: "Backend",
      },   {
        skill_name: "Php",
        Image: "/Bun.png", // Replace with the correct image path
        width: 85,
        height: 80,
        category: "Backend",
      },
      {
        skill_name: "MongoDB",
        Image: "/mongodb.png",
        width: 40,
        height: 40,
        category: "Backend",
      },
      {
        skill_name: "PostgreSQL",
        Image: "/postger.png",
        width: 70,
        height: 70,
        category: "Backend",
      },
      {
        skill_name: "MySQL",
        Image: "/mysql.png",
        width: 70,
        height: 70,
        category: "Backend",
      },
      {
        skill_name: "Prisma",
        Image: "/prisma.webp",
        width: 70,
        height: 70,
        category: "Backend",
      },
   
    ],
    // Full Stack Skills
    ...[
     
      {
        skill_name: "Docker",
        Image: "/doker.png",
        width: 70,
        height: 70,
        category: "Full Stack",
      },
      {
        skill_name: "WordPress",
        Image: "/Wordpress.png", // Replace with the correct image path
        width: 80,
        height: 80,
        category: "Full Stack",
      },
    ],
  ].map((skill, index) => ({ ...skill, id: index + 1 }));
  
  
  
  