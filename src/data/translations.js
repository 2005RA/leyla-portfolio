export const translations = {
  en: {
    nav: {
      about: "About",
      design: "Design",
      webdev: "Web Dev",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      title1: "Designer &",
      title2: "Frontend Developer",
      subtitle: "I combine technical programming skills with graphic design and AI-driven automation to build efficient, user-centered digital solutions. Based in Baku, Azerbaijan.",
      cta: "View Selected Work",
    },
    about: {
  label: "01 — About",
  title: "A multidisciplinary approach",
  lead: "I blend technical expertise with creative vision to deliver exceptional digital experiences.",
  keyPoints: [
    "Strong communication and organizational skills with experience in administrative coordination",
    "Frontend development expertise with modern frameworks and AI-powered workflows",
    "Proven ability to streamline processes and deliver results in fast-paced environments"
  ],
  skills: [
    { name: "Frontend Development", level: 85, color: "bg-clay" },
    { name: "Graphic & UI Design", level: 90, color: "bg-sage" },
    { name: "SMM & Content Strategy", level: 95, color: "bg-ochre" },
    { name: "AI Automation", level: 80, color: "bg-slate" },
  ],
      education: {
        title: "Education",
        items: [
          { degree: "Information Technology", year: "2025 — 2029", school: "Azerbaijan Technology University" },
          { degree: "Computer Systems Software", year: "2022 — 2025", school: "Baku Technical College" },
          { degree: "Frontend Programming", year: "Platinum Cert.", school: "Evo Academy" },
          { degree: "English Language", year: "CEFR B1", school: "LIB School" },
        ]
      },
      languages: {
        title: "Languages",
        items: [
          { name: "Azerbaijani", level: "Native", dots: 5 },
          { name: "Turkish", level: "C1", dots: 4 },
          { name: "English", level: "B1-B2", dots: 3 },
          { name: "Russian", level: "A2", dots: 2 },
        ]
      }
    },
    experience: {
      label: "02 — Experience",
      title: "Work history",
      items: [
        {
          date: "APR 2026 — NOW",
          isCurrent: true,
          role: "SMM & Content Creator",
          company: "Impuls Academy",
          details: [
            "Created 20+ original social media contents monthly, significantly increasing user engagement.",
            "Reduced content creation time by 50% by integrating AI-based automation tools into the workflow.",
            "Collaborated across departments to align content with brand and marketing goals."
          ]
        },
        {
          date: "MAR 2025 — OCT 2025",
          isCurrent: false,
          role: "Manager",
          company: "LIB School",
          details: [
            "Managed daily administrative and operational functions, improving process efficiency by 30%.",
            "Coordinated team schedules and workflows, improving program delivery timing by 60%.",
            "Acted as the primary point of contact for parents, students, and staff, resolving issues promptly."
          ]
        },
        {
          date: "NOV 2024 — JAN 2025",
          isCurrent: false,
          role: "SMM Marketing Intern",
          company: "Hoffman Co. — Amazon Baku School",
          details: [
            "Helped run targeted campaigns that grew audience engagement by 30%.",
            "Produced 60+ content pieces using design and video editing tools.",
            "Named Employee of the Month for outstanding performance and initiative."
          ]
        }
      ]
    },
    projects: {
      label: "03 — Design Portfolio",
      title: "Graphic & Visual Work",
      subtitle: "Selected projects showcasing brand identity, social media campaigns, and visual storytelling.",
      viewMoreTitle: "Want to see more?",
      viewMoreDesc: "Explore the complete collection of design projects in the full gallery.",
      viewMoreBtn: "View All Projects",
      items: [
        { id: 1, category: "Branding", title: "Reflection", image: "/images/design-1.png", link: "#" },
        { id: 2, category: "Social Media", title: "Porche", image: "/images/design-2.png", link: "#" },
        { id: 3, category: "Print Design", title: "Jump", image: "/images/design-3.png", link: "#" },
        { id: 4, category: "UI/UX", title: "Nike", image: "/images/design-4.png", link: "#" },
        { id: 5, category: "UI/UX", title: "Travel to Rotterdam", image: "/images/design-5.png", link: "#" },
        { id: 6, category: "UI/UX", title: "Nike", image: "/images/design-6.png", link: "#" },
        { id: 7, category: "UI/UX", title: "CupCake", image: "/images/design-7.png", link: "#" },
        { id: 8, category: "Instagram Post", title: "German Language", image: "/images/design-8.png", link: "#" },
        { id: 9, category: "Instagram Post", title: "IELTS", image: "/images/design-9.png", link: "#" },
        { id: 10, category: "Instagram Post", title: "IELTS", image: "/images/design-10.png", link: "#" },
        { id: 11, category: "Instagram Post", title: "Discount", image: "/images/design-11.png", link: "#" },
        { id: 12, category: "Instagram Post", title: "Russian Language", image: "/images/design-12.png", link: "#" },
        { id: 13, category: "Instagram Post", title: "Corporate Trainings", image: "/images/design-13.png", link: "#" },
        { id: 14, category: "Instagram Post", title: "English for Students", image: "/images/design-14.png", link: "#" },
        { id: 15, category: "Instagram Post", title: "Time to learn Russian!", image: "/images/design-15.png", link: "#" },
        { id: 16, category: "Instagram Post", title: "Register for September Groups", image: "/images/design-16.png", link: "#" },
        { id: 17, category: "Instagram Post", title: "English for Students", image: "/images/design-17.png", link: "#" },
        { id: 18, category: "Instagram Post", title: "English for Kids", image: "/images/design-18.png", link: "#" },
        { id: 19, category: "Instagram Post", title: "English for Kids", image: "/images/design-19.png", link: "#" }
      ]
    },
    webdev: {
      label: "04 — Web Development",
      title: "Coding Projects",
      subtitle: "Interactive web applications built with modern frameworks. Check out the live demos.",
      items: [
        {
          id: 1,
          title: "LIB Calculator",
          description: "A pricing calculation and registration system designed for a language course. Users can instantly calculate the total payment by selecting the course, teacher, lesson format, and schedule.",
          tags: ["React", "Next.js", "Sass"],
          screenshot: "/images/web-1.png",
          demoLink: "https://calculator-phi-taupe.vercel.app/"
        },
        {
          id: 2,
          title: "ATU Innovation Center",
          description: "A platform developed for the Innovation Center of Azerbaijan Technology University. It combines startup incubation, mentors, events, and a management dashboard.",
          tags: ["JavaScript", "HTML/CSS", "Chart.js"],
          screenshot: "/images/web-2.png",
          demoLink: "https://atu-innov.vercel.app/"
        },
        {
          id: 3,
          title: "HR-AI",
          description: "An AI-based human resources platform. It offers modern, interactive, and user-oriented solutions for candidate evaluation and HR process management.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-3.png",
          demoLink: "https://hr-ai-ruby.vercel.app/"
        },
        {
          id: 4,
          title: "Volunteer Hub",
          description: "A management system designed to simplify volunteer registration, coordination, and administration.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-4.png",
          demoLink: "https://volunteer-hub-gamma.vercel.app/"
        },
        {
          id: 5,
          title: "RekrutAZ",
          description: "An AI-assisted recruitment system. It covers CV uploading, AI-based candidate evaluation, interview scheduling, and email template management.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-5.png",
          demoLink: "https://rekurt-az.vercel.app/"
        },
        {
          id: 6,
          title: "Cafe Aroma Menu",
          description: "A digital QR menu system designed for restaurants and cafes. It ensures menus are presented online and conveniently.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-6.png",
          demoLink: "https://cafe-aroma-menu.vercel.app/az"
        },
        {
          id: 7,
          title: "Personal Portfolio",
          description: "A personal portfolio website showcasing my projects, technical skills, and professional experience.",
          tags: ["React", "Tailwind", "Framer Motion"],
          screenshot: "/images/web-7.png",
          demoLink: "https://portfolio-phi-one-64.vercel.app/"
        },
        {
          id: 8,
          title: "LIORA E-commerce",
          description: "An e-commerce platform designed for selling jewelry and accessories. It combines a product catalog, categories, and cart functionality.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-8.png",
          demoLink: "https://ecom-app-main.vercel.app/"
        },
        {
          id: 9,
          title: "Z-House Engineering",
          description: "A corporate website presenting modern architecture and engineering projects with a premium and minimalist design.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-9.png",
          demoLink: "https://my-portfolio-ochre-alpha-29.vercel.app/"
        },
        {
          id: 10,
          title: "Reshape Engineer Project",
          description: "An interactive corporate platform presenting construction and engineering services through a user-friendly interface, high performance, and modern design.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-10.png",
          demoLink: "https://second-project-sooty.vercel.app/"
        }
      ]
    },
    contact: {
      label: "05 — Contact",
      title: "Let's create something meaningful.",
      email: "agatalibovaleyla@gmail.com",
      phone: "+994 51 886 78 95",
      location: "Baku, Azerbaijan",
      socials: [
        { name: "GitHub", link: "https://github.com" },
        { name: "LinkedIn", link: "https://linkedin.com" },
        { name: "Instagram", link: "https://instagram.com" }
      ]
    }
  },
  az: {
    nav: {
      about: "Haqqımda",
      design: "Dizayn",
      webdev: "Veb İnkişaf",
      contact: "Əlaqə",
    },
    hero: {
      greeting: "Salam, mən",
      title1: "Dizayner &",
      title2: "Frontend Proqramçı",
      subtitle: "Texniki proqramlaşdırma bacarıqlarımı qrafik dizayn və süni intellekt əsaslı avtomatlaşdırma ilə birləşdirərək səmərəli, istifadəçi mərkəzli rəqəmsal həllər yaradıram. Bakı, Azərbaycan.",
      cta: "Seçilmiş İşlərə Bax",
    },
    about: {
  label: "01 — Haqqımda",
  title: "Çoxşaxəli yanaşma",
  lead: "Mən texniki bilikləri və yaradıcılıq qabiliyyətləri birləşdirərək məhsuldar rəqəmsal təcrübələr yaradıram.",
  keyPoints: [
    "İnzibati koordinasiya və təşkilatçılıq sahəsində güclü ünsiyyət bacarıqları ilə təcrübəm var",
    "Müasir freymvorklar və süni intellekt əsaslı iş axınları ilə frontend inkişafı bacarıqlarım",
    "Sürətli mühitdə prosesləri optimallaşdırmaq və nəticə əldə etmək üçün sübut olunmuş qabiliyyətim var"
  ],
  skills: [
    { name: "Frontend İnkişafı", level: 85, color: "bg-clay" },
    { name: "Qrafik & UI Dizayn", level: 90, color: "bg-sage" },
    { name: "SMM & Kontent Strategiyası", level: 95, color: "bg-ochre" },
    { name: "Süni İntellekt Avtomatlaşdırması", level: 80, color: "bg-slate" },
  ],
      education: {
        title: "Təhsil",
        items: [
          { degree: "İnformasiya Texnologiyaları", year: "2025 — 2029", school: "Azərbaycan Texnologiya Universiteti" },
          { degree: "Kompüter Sistemlərində Proqram Təminatı", year: "2022 — 2025", school: "Bakı Texniki Kolleci" },
          { degree: "Frontend Proqramlaşdırma", year: "Platinum Sertifikat", school: "Evo Academy" },
          { degree: "İngilis Dili", year: "CEFR B1", school: "LIB School" },
        ]
      },
      languages: {
        title: "Dillər",
        items: [
          { name: "Azərbaycan dili", level: "Ana dili", dots: 5 },
          { name: "Türk dili", level: "C1", dots: 4 },
          { name: "İngilis dili", level: "B1-B2", dots: 3 },
          { name: "Rus dili", level: "A2", dots: 2 },
        ]
      }
    },
    experience: {
      label: "02 — Təcrübə",
      title: "İş təcrübəsi",
      items: [
        {
          date: "APR 2026 — İNDİ",
          isCurrent: true,
          role: "SMM və Kontent Yaradıcısı",
          company: "Impuls Academy",
          details: [
            "Ay ərzində 20+ orijinal sosial media məzmunu hazırlayaraq istifadəçi aktivliyini artırmışdır.",
            "Süni intellekt əsaslı alətlərdən istifadə edərək məzmun hazırlanması müddətini 50% azaltmışdır.",
            "Kontentin brend məqsədlərinə uyğunlaşdırılması üçün müxtəlif şöbələrlə əməkdaşlıq etmişdir."
          ]
        },
        {
          date: "MAR 2025 — OKT 2025",
          isCurrent: false,
          role: "Menecer",
          company: "LIB School",
          details: [
            "Gündəlik inzibati və əməliyyat funksiyalarını idarə edərək proses səmərəliliyini 30% artırmışdır.",
            "Komanda qrafikini təşkil edərək proqramların icra müddətini 60% yaxşılaşdırmışdır.",
            "Valideynlər, tələbələr və müəllimlər üçün əsas əlaqə nöqtəsi kimi məsələləri operativ həll etmişdir."
          ]
        },
        {
          date: "NOV 2024 — YAN 2025",
          isCurrent: false,
          role: "SMM Marketinq Təcrübəçisi",
          company: "Hoffman Co. — Amazon Bakı Məktəbi",
          details: [
            "Auditoriya aktivliyini 30% artıran kampaniyaların planlaşdırılmasında iştirak etmişdir.",
            "Dizayn və montaj proqramları istifadə edərək 60+ məzmun hazırlamışdır.",
            "Yüksək performansına görə Ayın Əməkdaşı seçilmişdir."
          ]
        }
      ]
    },
    projects: {
      label: "03 — Dizayn Portfolio",
      title: "Qrafik və Vizual İşlər",
      subtitle: "Brend identikliyi, sosial media kampaniyaları və vizual hekayəçiliyi əks etdirən seçilmiş layihələr.",
      viewMoreTitle: "Daha çox görmək istəyirsiniz?",
      viewMoreDesc: "Dizayn layihələrinin tam kolleksiyasını qalereyada kəşf edin.",
      viewMoreBtn: "Bütün Layihələrə Bax",
      items: [
        { id: 1, category: "Brending", title: "Reflection", image: "/images/design-1.png", link: "#" },
        { id: 2, category: "Sosial Media", title: "Porche", image: "/images/design-2.png", link: "#" },
        { id: 3, category: "Çap Dizaynı", title: "Jump", image: "/images/design-3.png", link: "#" },
        { id: 4, category: "UI/UX", title: "Nike", image: "/images/design-4.png", link: "#" },
        { id: 5, category: "UI/UX", title: "Travel to Roterdam", image: "/images/design-5.png", link: "#" },
        { id: 6, category: "UI/UX", title: "Nike", image: "/images/design-6.png", link: "#" },
        { id: 7, category: "UI/UX", title: "CupCake", image: "/images/design-7.png", link: "#" },
        { id: 8, category: "Instagram Post", title: "Alman Dili", image: "/images/design-8.png", link: "#" },
        { id: 9, category: "Instagram Post", title: "IELTS", image: "/images/design-9.png", link: "#" },
        { id: 10, category: "Instagram Post", title: "IELTS", image: "/images/design-10.png", link: "#" },
        { id: 11, category: "Instagram Post", title: "Endirim", image: "/images/design-11.png", link: "#" },
        { id: 12, category: "Instagram Post", title: "Rus Dili", image: "/images/design-12.png", link: "#" },
        { id: 13, category: "Instagram Post", title: "Korporativ Təlimlər", image: "/images/design-13.png", link: "#" },
        { id: 14, category: "Instagram Post", title: "Məktəblilər üçün İngilis Dili", image: "/images/design-14.png", link: "#" },
        { id: 15, category: "Instagram Post", title: "Rus Dilini Öyrənməyin Əsl Zamanıdır!", image: "/images/design-15.png", link: "#" },
        { id: 16, category: "Instagram Post", title: "Qeydiyyat Başladı!", image: "/images/design-16.png", link: "#" },
        { id: 17, category: "Instagram Post", title: "Abituriyentlər üçün İngilis Dili Proqramı", image: "/images/design-17.png", link: "#" },
        { id: 18, category: "Instagram Post", title: "Uşaqlar üçün ingilis Dili Proqramı", image: "/images/design-18.png", link: "#" },
        { id: 19, category: "Instagram Post", title: "Uşaqlar üçün ingilis Dili Proqramı", image: "/images/design-19.png", link: "#" }
      ]
    },
    webdev: {
      label: "04 — Veb İnkişaf",
      title: "Proqramlaşdırma Layihələri",
      subtitle: "Müasir freymvorklar istifadə edilərək hazırlanmış interaktiv veb tətbiqlər. Canlı demoları yoxlayın.",
      items: [
        {
          id: 1,
          title: "LİB Kalkulyator",
          description: "Dil kursu üçün hazırlanmış qiymət hesablama və qeydiyyat sistemi. İstifadəçilər kursu, müəllimi, dərs formatını və cədvəli seçərək ümumi ödənişi anında hesablaya bilirlər.",
          tags: ["React", "Next.js", "Sass"],
          screenshot: "/images/web-1.png",
          demoLink: "https://calculator-phi-taupe.vercel.app/"
        },
        {
          id: 2,
          title: "ATU İnnovasiya Mərkəzi",
          description: "Azərbaycan Texnologiya Universitetinin İnnovasiya Mərkəzi üçün hazırlanmış platforma. Startap inkubasiyası, mentorlar, tədbirlər və idarəetmə panelini özündə birləşdirir.",
          tags: ["JavaScript", "HTML/CSS", "Chart.js"],
          screenshot: "/images/web-2.png",
          demoLink: "https://atu-innov.vercel.app/"
        },
        {
          id: 3,
          title: "HR-Aİ",
          description: "Süni intellekt əsaslı insan resursları platforması. Namizədlərin qiymətləndirilməsi və HR proseslərinin idarə olunması üçün müasir, interaktiv və istifadəçi yönümlü həllər təqdim edir.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-3.png",
          demoLink: "https://hr-ai-ruby.vercel.app/"
        },
        {
          id: 4,
          title: "Volunteer Hub",
          description: "Könüllülərin qeydiyyatı, koordinasiyası və idarə olunmasını asanlaşdırmaq üçün hazırlanmış idarəetmə sistemi.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-4.png",
          demoLink: "https://volunteer-hub-gamma.vercel.app/"
        },
        {
          id: 5,
          title: "RekrutAZ",
          description: "Süni intellekt dəstəkli işə qəbul sistemi. CV yükləmə, AI ilə namizədlərin qiymətləndirilməsi, müsahibələrin planlaşdırılması və e-poçt şablonlarının idarə olunması funksiyalarını əhatə edir.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-5.png",
          demoLink: "https://rekurt-az.vercel.app/"
        },
        {
          id: 6,
          title: "Cafe Aroma Menu",
          description: "Restoran və kafelər üçün hazırlanmış rəqəmsal QR menyu sistemi. Menyuların onlayn və rahat şəkildə təqdim edilməsini təmin edir.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-6.png",
          demoLink: "https://cafe-aroma-menu.vercel.app/az"
        },
        {
          id: 7,
          title: "Portfolio",
          description: "Hazırladığım layihələri, texniki bacarıqlarımı və peşəkar təcrübəmi təqdim edən şəxsi portfolio veb-saytı.",
          tags: ["React", "Tailwind", "Framer Motion"],
          screenshot: "/images/web-7.png",
          demoLink: "https://portfolio-phi-one-64.vercel.app/"
        },
        {
          id: 8,
          title: "LIORA E-commerce",
          description: "Zinət əşyaları və aksesuarların satışı üçün hazırlanmış e-ticarət platforması. Məhsul kataloqu, kateqoriyalar və səbət funksiyalarını özündə birləşdirir.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-8.png",
          demoLink: "https://ecom-app-main.vercel.app/"
        },
        {
          id: 9,
          title: "Z-House Engineering",
          description: "Müasir memarlıq və mühəndislik layihələrini premium və minimalist dizaynla təqdim edən korporativ veb-sayt.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-9.png",
          demoLink: "https://my-portfolio-ochre-alpha-29.vercel.app/"
        },
        {
          id: 10,
          title: "Reshape Engineer Project",
          description: "İnşaat və mühəndislik xidmətlərini istifadəçi dostu interfeys, yüksək performans və müasir dizayn vasitəsilə təqdim edən interaktiv korporativ platforma.",
          tags: ["React", "API", "CSS Modules"],
          screenshot: "/images/web-10.png",
          demoLink: "https://second-project-sooty.vercel.app/"
        }
      ]
    },
    contact: {
      label: "05 — Əlaqə",
      title: "Gəlin birlikdə mənalı bir şey yaradaq.",
      email: "agatalibovaleyla@gmail.com",
      phone: "+994 51 886 78 95",
      location: "Bakı, Azərbaycan",
      socials: [
        { name: "GitHub", link: "https://github.com" },
        { name: "LinkedIn", link: "https://linkedin.com" },
        { name: "Instagram", link: "https://instagram.com" }
      ]
    }
  }
};