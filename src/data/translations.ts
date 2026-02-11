export type Lang = "en" | "uz" | "ru";

export const langLabels: Record<Lang, string> = { en: "EN", uz: "UZ", ru: "RU" };

export const translations: Record<Lang, any> = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      greeting: "Hello, I'm",
      name: "Robiyakhon Akhmedova",
      title: "Software Engineer | AI & ML Engineer | Full-Stack Developer",
      tagline: "Building intelligent, human-centered technology at the intersection of fintech, AI, and behavioral design.",
      cta1: "View Projects",
      cta2: "Download CV",
      cta3: "Contact Me",
    },
    about: {
      heading: "About Me",
      p1: "I am a Software Engineer and AI/ML-focused developer with a background in fintech innovation, intelligent product design, and scalable full-stack systems. My work combines modern engineering practices with behavioral insights to create tools that are technically strong and meaningful for real users.",
      p2: "I began my career with a foundation in engineering and transitioned into software development, building financial platforms, mobile applications, and AI-driven solutions aimed at improving financial decision-making and accessibility.",
      p3: "My professional experience includes designing applications used in financial literacy initiatives, intelligent personal finance systems, and AI-powered tools exploring empathy-driven interaction models.",
      interests: "Areas of Focus",
      interestList: [
        "AI-assisted decision systems",
        "Behavioral fintech & financial literacy",
        "Intelligent conversational interfaces",
        "Data-driven product design",
        "Human-centered AI",
      ],
      location: "Tashkent, Uzbekistan",
      availability: "Open to remote & international opportunities",
    },
    philosophy: {
      heading: "Development Philosophy",
      intro: "I believe technology should empower people rather than overwhelm them.",
      items: [
        "Building meaningful products that solve real problems",
        "Iterative development guided by user feedback",
        "Combining AI capabilities with intuitive UX design",
        "Writing scalable, maintainable, production-ready code",
        "Balancing automation with human control",
      ],
    },
    experience: {
      heading: "Professional Experience",
      jobs: [
        {
          company: "Central Bank of Uzbekistan",
          role: "Software / Data Engineer",
          period: "Current",
          location: "Tashkent",
          bullets: [
            "Designed and developed Telegram bots and Mini Apps for surveys, SME programs, public communication, and internal workflows",
            "Built backend logic, databases, and automation pipelines for large-scale data collection and analytics",
            "Developed Finlit Network Bot & Mini App and Budget Simulation AI Bot & Mini App",
            "Contributed to digital platform architecture supporting regional development and banking agents",
            "Developed KPI models, portfolio structures, and workflow logic for field agents and internal teams",
            "Worked cross-functionally with policy, analytics, and IT teams to deliver production-ready systems",
          ],
        },
        {
          company: "MAAB Innovation LLC",
          role: "Business Intelligence Developer",
          period: "Aug 2024 – May 2025",
          location: "",
          bullets: [
            "Developed and maintained ETL pipelines using SQL Server and SSIS",
            "Performed data migration, transformation, and validation across CRM systems",
            "Built analytical datasets and supported reporting workflows",
          ],
        },
      ],
      education: "Education",
      edu: [
        { degree: "MSc in Software Engineering", school: "ASU || ATU University", status: "(ongoing)" },
        { degree: "Bachelor of Engineering — Software Engineering", school: "Tashkent Chemical-Technological Institute", status: "" },
      ],
      achievements: "Achievements",
      achList: ["Arizona State University – AI Challenge — Honorable Participant"],
    },
    projects: {
      heading: "Projects",
      items: [
        {
          name: "Mylo",
          subtitle: "AI Personal Finance Mobile Application",
          desc: "AI-powered personal finance platform helping users track expenses, understand financial behavior, and make smarter decisions through intelligent insights.",
          features: ["AI-driven spending analysis", "Smart budgeting tools", "Behavioral financial insights", "Gamification & habit-building", "Mobile-first Android experience"],
          tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "AI Analytics"],
        },
        {
          name: "Empathy AI",
          subtitle: "Intelligent Human-Centered AI System",
          desc: "Exploring how AI can understand context, emotional patterns, and behavioral signals to provide supportive and adaptive interactions.",
          features: ["AI reasoning workflows", "Context-aware response generation", "Human-centered interaction design", "Experimental cognitive architecture"],
          tech: ["Python", "AI/ML Models", "Prompt Engineering", "Behavioral Analysis"],
        },
        {
          name: "Telegram Bots & Mini Apps",
          subtitle: "Central Bank Digital Solutions",
          desc: "Suite of production Telegram bots and Mini Apps built for the Central Bank of Uzbekistan — powering surveys, financial literacy, budget simulations, and SME programs at scale.",
          features: ["FinLit Network Bot & Mini App", "Budget Simulation AI Bot", "Nasiya Savdo Survey Bot", "Multi-language support (UZ/RU/EN)", "PostgreSQL + Google Sheets integration"],
          tech: ["Python", "Telegram Bot API", "PostgreSQL", "Railway", "Google Sheets API"],
        },
        {
          name: "FinLit Network",
          subtitle: "Financial Literacy Mobile Application",
          desc: "Digital financial education platform improving financial awareness through interactive learning experiences with gamification.",
          features: ["Interactive educational modules", "Financial simulations", "XP & achievement system", "Accessible multilingual design"],
          tech: ["React", "TypeScript", "Telegram Mini App", "Gamification"],
        },
        {
          name: "Virtual Video Chat",
          subtitle: "Web Development Assessment",
          desc: "Browser-based interactive application simulating video conversation using pre-recorded media and speech recognition.",
          features: ["Speech recognition integration", "Real-time interaction simulation", "Modern responsive UI/UX", "Performance-focused architecture"],
          tech: ["React", "TypeScript", "Browser APIs", "Speech Recognition"],
        },
      ],
    },
    skills: {
      heading: "Skills & Technologies",
      categories: [
        { name: "AI & Machine Learning", items: ["AI Application Design", "Prompt Engineering", "Human-Centered AI", "AI Workflow Orchestration", "Behavioral Data Analysis"] },
        { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Modern Responsive UI", "Framer Motion"] },
        { name: "Backend & Data", items: ["Python", "Node.js", "PostgreSQL", "Supabase", "REST APIs", "SQL Server", "ETL/SSIS"] },
        { name: "Mobile & Deployment", items: ["Android Apps", "Telegram Mini Apps", "Capacitor", "Vercel", "Railway"] },
        { name: "Data & BI", items: ["Power BI", "Airflow", "Data Validation", "Excel", "Data Pipelines"] },
        { name: "Languages", items: ["Uzbek (Native)", "Russian (Professional)", "English (Professional)"] },
      ],
    },
    contact: {
      heading: "Let's Connect",
      subtitle: "Open to collaboration, opportunities, and interesting conversations.",
      based: "Based in Tashkent, working globally.",
    },
  },
  uz: {
    nav: { about: "Men haqimda", experience: "Tajriba", projects: "Loyihalar", skills: "Ko'nikmalar", contact: "Aloqa" },
    hero: {
      greeting: "Salom, men",
      name: "Robiyaxon Axmedova",
      title: "Dasturiy ta'minot muhandisi | AI & ML muhandisi | Full-Stack dasturchi",
      tagline: "Fintech, sun'iy intellekt va xulq-atvor dizayni kesishmasida aqlli, inson markazli texnologiyalarni yarataman.",
      cta1: "Loyihalarni ko'rish",
      cta2: "CV yuklab olish",
      cta3: "Bog'lanish",
    },
    about: {
      heading: "Men haqimda",
      p1: "Men fintech innovatsiyalari, aqlli mahsulot dizayni va kengaytiriladigan full-stack tizimlari bo'yicha tajribaga ega dasturiy ta'minot muhandisi va AI/ML yo'nalishidagi dasturchiman. Ishim zamonaviy muhandislik amaliyotlarini xulq-atvor tushunchalari bilan birlashtiradi.",
      p2: "Karyeramni muhandislik asosida boshlaganman va dasturiy ta'minotni ishlab chiqishga o'tganman — moliyaviy platformalar, mobil ilovalar va moliyaviy qaror qabul qilishni yaxshilashga qaratilgan AI-asosli yechimlarni yaratganman.",
      p3: "Kasbiy tajribam moliyaviy savodxonlik tashabbuslarida, aqlli shaxsiy moliya tizimlarida va empatiyaga asoslangan AI vositalarini ishlab chiqishni o'z ichiga oladi.",
      interests: "Yo'nalishlar",
      interestList: [
        "AI-yordamida qaror qabul qilish tizimlari",
        "Xulq-atvorga asoslangan fintech",
        "Aqlli suhbat interfeyslari",
        "Ma'lumotlarga asoslangan mahsulot dizayni",
        "Inson markazli AI",
      ],
      location: "Toshkent, O'zbekiston",
      availability: "Masofaviy va xalqaro imkoniyatlarga ochiq",
    },
    philosophy: {
      heading: "Ishlab chiqish falsafasi",
      intro: "Men texnologiya odamlarni kuchaytirib, ularni bezovta qilmasligi kerak deb ishonaman.",
      items: [
        "Haqiqiy muammolarni hal qiladigan mahsulotlar yaratish",
        "Foydalanuvchi fikriga asoslangan iterativ ishlab chiqish",
        "AI imkoniyatlarini intuitiv UX dizayn bilan birlashtirish",
        "Kengaytiriladigan, ishonchli kod yozish",
        "Avtomatlashtirish va inson nazorati o'rtasida muvozanat",
      ],
    },
    experience: {
      heading: "Ish tajribasi",
      jobs: [
        {
          company: "O'zbekiston Respublikasi Markaziy banki",
          role: "Software / Data Engineer",
          period: "Hozirda",
          location: "Toshkent",
          bullets: [
            "So'rovnomalar, KOB dasturlari, jamoatchilik bilan aloqa va ichki jarayonlar uchun Telegram botlar va Mini App'larni loyihalash va ishlab chiqish",
            "Katta hajmdagi ma'lumotlarni yig'ish va tahlil qilish uchun backend mantiq, ma'lumotlar bazalari va avtomatlashtirilgan pipeline'larni yaratish",
            "Finlit Network Bot & Mini App va Budget Simulation AI Bot & Mini App ishlab chiqish",
            "Hududiy rivojlanish va bank agentlarini qo'llab-quvvatlovchi raqamli platforma arxitekturasini ishlab chiqish",
            "KPI modellari, portfel tuzilmalari va ish jarayoni mantiqini yaratish",
            "Siyosat, tahlil va IT bo'limlari bilan hamkorlikda production-darajadagi tizimlarni joriy etish",
          ],
        },
        {
          company: "MAAB Innovation LLC",
          role: "Business Intelligence Developer",
          period: "Avg 2024 – May 2025",
          location: "",
          bullets: [
            "SQL Server va SSIS yordamida ETL tizimlarini ishlab chiqish",
            "CRM tizimlari o'rtasida ma'lumotlar migratsiyasi",
            "BI va hisobot tizimlarini qo'llab-quvvatlash",
          ],
        },
      ],
      education: "Ta'lim",
      edu: [
        { degree: "Dasturiy injiniring magistri", school: "ASU || ATU University", status: "(davom etmoqda)" },
        { degree: "Dasturiy injiniring bakalavri", school: "TKTI", status: "" },
      ],
      achievements: "Yutuqlar",
      achList: ["Arizona State University – AI Challenge — Honorable Participant"],
    },
    projects: {
      heading: "Loyihalar",
      items: [
        {
          name: "Mylo",
          subtitle: "AI Shaxsiy Moliya Mobil Ilovasi",
          desc: "Foydalanuvchilarga xarajatlarni kuzatish, moliyaviy xulq-atvorni tushunish va aqlli qarorlar qabul qilishda yordam beradigan AI-asosli shaxsiy moliya platformasi.",
          features: ["AI-asosli xarajat tahlili", "Aqlli byudjetlash vositalari", "Xulq-atvor moliyaviy tushunchalari", "Gamifikatsiya va odat shakllantirish", "Android uchun mobil tajriba"],
          tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "AI Analytics"],
        },
        {
          name: "Empathy AI",
          subtitle: "Aqlli Inson Markazli AI Tizimi",
          desc: "Sun'iy intellekt kontekstni, hissiy naqshlarni va xulq-atvor signallarini qanday tushunishi mumkinligini o'rganish.",
          features: ["AI muhokama ish jarayonlari", "Kontekstga mos javob yaratish", "Inson markazli interaktiv dizayn", "Eksperimental kognitiv arxitektura"],
          tech: ["Python", "AI/ML Modellari", "Prompt Engineering", "Xulq-atvor tahlili"],
        },
        {
          name: "Telegram Botlar va Mini App'lar",
          subtitle: "Markaziy Bank Raqamli Yechimlari",
          desc: "O'zbekiston Markaziy banki uchun ishlab chiqilgan production Telegram botlar va Mini App'lar — so'rovnomalar, moliyaviy savodxonlik, byudjet simulyatsiyalari va KOB dasturlarini qamrab oladi.",
          features: ["FinLit Network Bot & Mini App", "Budget Simulation AI Bot", "Nasiya Savdo So'rovnoma Boti", "Ko'p tilli qo'llab-quvvatlash (UZ/RU/EN)", "PostgreSQL + Google Sheets integratsiyasi"],
          tech: ["Python", "Telegram Bot API", "PostgreSQL", "Railway", "Google Sheets API"],
        },
        {
          name: "FinLit Network",
          subtitle: "Moliyaviy Savodxonlik Mobil Ilovasi",
          desc: "Interaktiv ta'lim tajribalari orqali moliyaviy xabardorlikni oshirishga qaratilgan raqamli moliyaviy ta'lim platformasi.",
          features: ["Interaktiv ta'lim modullari", "Moliyaviy simulyatsiyalar", "XP va yutuq tizimi", "Qulay ko'p tilli dizayn"],
          tech: ["React", "TypeScript", "Telegram Mini App", "Gamifikatsiya"],
        },
        {
          name: "Virtual Video Chat",
          subtitle: "Web Dasturlash Baholovi",
          desc: "Oldindan yozilgan media va nutqni tanish yordamida video suhbatni simulyatsiya qiluvchi brauzerga asoslangan interaktiv ilova.",
          features: ["Nutqni tanish integratsiyasi", "Real-vaqt interaktiv simulyatsiya", "Zamonaviy responsive UI/UX", "Ishlashga yo'naltirilgan arxitektura"],
          tech: ["React", "TypeScript", "Browser API'lar", "Speech Recognition"],
        },
      ],
    },
    skills: {
      heading: "Ko'nikmalar va Texnologiyalar",
      categories: [
        { name: "AI va Machine Learning", items: ["AI Ilova Dizayni", "Prompt Engineering", "Inson Markazli AI", "AI Ish Jarayoni Boshqaruvi", "Xulq-atvor Ma'lumotlar Tahlili"] },
        { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Zamonaviy Responsive UI", "Framer Motion"] },
        { name: "Backend va Ma'lumotlar", items: ["Python", "Node.js", "PostgreSQL", "Supabase", "REST APIs", "SQL Server", "ETL/SSIS"] },
        { name: "Mobil va Deployment", items: ["Android Ilovalar", "Telegram Mini Apps", "Capacitor", "Vercel", "Railway"] },
        { name: "Data va BI", items: ["Power BI", "Airflow", "Data Validation", "Excel", "Data Pipelines"] },
        { name: "Tillar", items: ["O'zbek (Ona tili)", "Rus (Professional)", "Ingliz (Professional)"] },
      ],
    },
    contact: {
      heading: "Bog'lanaylik",
      subtitle: "Hamkorlik, imkoniyatlar va qiziqarli suhbatlarga ochiqman.",
      based: "Toshkentda joylashgan, global miqyosda ishlayman.",
    },
  },
  ru: {
    nav: { about: "Обо мне", experience: "Опыт", projects: "Проекты", skills: "Навыки", contact: "Контакты" },
    hero: {
      greeting: "Привет, я",
      name: "Робияхон Ахмедова",
      title: "Инженер-программист | AI & ML инженер | Full-Stack разработчик",
      tagline: "Создаю интеллектуальные, ориентированные на человека технологии на стыке финтеха, ИИ и поведенческого дизайна.",
      cta1: "Смотреть проекты",
      cta2: "Скачать CV",
      cta3: "Связаться",
    },
    about: {
      heading: "Обо мне",
      p1: "Я инженер-программист и разработчик с фокусом на AI/ML, имеющий опыт в финтех-инновациях, интеллектуальном дизайне продуктов и масштабируемых full-stack системах. Моя работа сочетает современные инженерные практики с поведенческими инсайтами.",
      p2: "Я начала карьеру с инженерного фундамента и перешла в разработку ПО — создавая финансовые платформы, мобильные приложения и AI-решения для улучшения финансового принятия решений.",
      p3: "Мой профессиональный опыт включает проектирование приложений для финансовой грамотности, интеллектуальных систем личных финансов и AI-инструментов на основе эмпатии.",
      interests: "Направления",
      interestList: [
        "AI-системы принятия решений",
        "Поведенческий финтех и финграмотность",
        "Интеллектуальные диалоговые интерфейсы",
        "Дизайн продуктов на основе данных",
        "Человеко-ориентированный AI",
      ],
      location: "Ташкент, Узбекистан",
      availability: "Открыта для удалённых и международных возможностей",
    },
    philosophy: {
      heading: "Философия разработки",
      intro: "Я верю, что технологии должны помогать людям, а не перегружать их.",
      items: [
        "Создание значимых продуктов, решающих реальные проблемы",
        "Итеративная разработка на основе обратной связи",
        "Сочетание AI-возможностей с интуитивным UX-дизайном",
        "Написание масштабируемого, надёжного кода",
        "Баланс между автоматизацией и человеческим контролем",
      ],
    },
    experience: {
      heading: "Опыт работы",
      jobs: [
        {
          company: "Центральный банк Республики Узбекистан",
          role: "Software / Data Engineer",
          period: "Настоящее время",
          location: "Ташкент",
          bullets: [
            "Проектирование и разработка Telegram-ботов и Mini App для опросов, SME-программ, коммуникации и внутренних процессов",
            "Построение backend-логики, баз данных и автоматизированных пайплайнов для сбора и аналитики данных",
            "Разработка Finlit Network Bot & Mini App и Budget Simulation AI Bot & Mini App",
            "Участие в архитектуре цифровых платформ для регионального развития и банковских агентов",
            "Создание KPI-моделей, портфельных структур и бизнес-логики для полевых агентов",
            "Кросс-функциональная работа с отделами политики, аналитики и IT",
          ],
        },
        {
          company: "MAAB Innovation LLC",
          role: "BI Developer",
          period: "Август 2024 – Май 2025",
          location: "",
          bullets: [
            "Разработка ETL-систем (SQL Server, SSIS)",
            "Миграция и трансформация данных между CRM-системами",
            "Поддержка BI-аналитики и отчётности",
          ],
        },
      ],
      education: "Образование",
      edu: [
        { degree: "Магистр программной инженерии", school: "ASU || ATU", status: "(в процессе)" },
        { degree: "Бакалавр программной инженерии", school: "ТКТИ", status: "" },
      ],
      achievements: "Достижения",
      achList: ["Arizona State University – AI Challenge — Honorable Participant"],
    },
    projects: {
      heading: "Проекты",
      items: [
        {
          name: "Mylo",
          subtitle: "AI Мобильное приложение личных финансов",
          desc: "AI-платформа личных финансов, помогающая пользователям отслеживать расходы, понимать финансовое поведение и принимать более умные решения.",
          features: ["AI-анализ расходов", "Умные инструменты бюджетирования", "Поведенческие финансовые инсайты", "Геймификация и формирование привычек", "Мобильный опыт для Android"],
          tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "AI Analytics"],
        },
        {
          name: "Empathy AI",
          subtitle: "Интеллектуальная человеко-ориентированная AI система",
          desc: "Исследование того, как AI может понимать контекст, эмоциональные паттерны и поведенческие сигналы для поддерживающего взаимодействия.",
          features: ["AI-рассуждения", "Контекстно-зависимая генерация ответов", "Человеко-ориентированный дизайн", "Экспериментальная когнитивная архитектура"],
          tech: ["Python", "AI/ML Модели", "Prompt Engineering", "Поведенческий анализ"],
        },
        {
          name: "Telegram Боты и Mini App",
          subtitle: "Цифровые решения Центрального Банка",
          desc: "Набор production Telegram-ботов и Mini App для ЦБ Узбекистана — опросы, финансовая грамотность, бюджетные симуляции и программы МСБ.",
          features: ["FinLit Network Bot & Mini App", "Budget Simulation AI Bot", "Бот опросов Nasiya Savdo", "Мультиязычная поддержка (UZ/RU/EN)", "PostgreSQL + Google Sheets"],
          tech: ["Python", "Telegram Bot API", "PostgreSQL", "Railway", "Google Sheets API"],
        },
        {
          name: "FinLit Network",
          subtitle: "Мобильное приложение финансовой грамотности",
          desc: "Платформа цифрового финансового образования с интерактивным обучением и геймификацией.",
          features: ["Интерактивные учебные модули", "Финансовые симуляции", "Система XP и достижений", "Мультиязычный дизайн"],
          tech: ["React", "TypeScript", "Telegram Mini App", "Геймификация"],
        },
        {
          name: "Virtual Video Chat",
          subtitle: "Оценка веб-разработки",
          desc: "Браузерное приложение, симулирующее видеобеседу с использованием предзаписанных медиа и распознавания речи.",
          features: ["Распознавание речи", "Симуляция в реальном времени", "Современный отзывчивый UI/UX", "Оптимизированная архитектура"],
          tech: ["React", "TypeScript", "Browser APIs", "Speech Recognition"],
        },
      ],
    },
    skills: {
      heading: "Навыки и Технологии",
      categories: [
        { name: "AI и Machine Learning", items: ["Дизайн AI-приложений", "Prompt Engineering", "Человеко-ориентированный AI", "Оркестрация AI", "Анализ поведенческих данных"] },
        { name: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Современный отзывчивый UI", "Framer Motion"] },
        { name: "Backend и Данные", items: ["Python", "Node.js", "PostgreSQL", "Supabase", "REST APIs", "SQL Server", "ETL/SSIS"] },
        { name: "Мобильная и Деплой", items: ["Android приложения", "Telegram Mini Apps", "Capacitor", "Vercel", "Railway"] },
        { name: "Data и BI", items: ["Power BI", "Airflow", "Data Validation", "Excel", "Data Pipelines"] },
        { name: "Языки", items: ["Узбекский (Родной)", "Русский (Профессиональный)", "Английский (Профессиональный)"] },
      ],
    },
    contact: {
      heading: "Давайте свяжемся",
      subtitle: "Открыта для сотрудничества, возможностей и интересных бесед.",
      based: "Нахожусь в Ташкенте, работаю глобально.",
    },
  },
};

export const cvFiles: Record<Lang, string> = {
  en: "/cv/ROBIYAKHON_AKHMEDOVA.pdf",
  uz: "/cv/ROBIYAXON_AXMEDOVA.pdf",
  ru: "/cv/Робияхон_Ахмедова.pdf",
};

export const cvFileNames: Record<Lang, string> = {
  en: "ROBIYAKHON_AKHMEDOVA.pdf",
  uz: "ROBIYAXON_AXMEDOVA.pdf",
  ru: "Робияхон_Ахмедова.pdf",
};

export const projectIcons = ["💰", "🧠", "🤖", "📚", "🎥"];
