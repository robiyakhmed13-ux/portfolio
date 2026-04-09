export type Lang = "en" | "uz" | "ru";

export const langLabels: Record<Lang, string> = { en: "EN", uz: "UZ", ru: "RU" };

export const translations: Record<Lang, any> = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      greeting: "Hello, I'm",
      name: "Robiyakhon Akhmedova",
      title: "Machine Learning Engineer · Python Developer · Data Engineer",
      tagline: "Building intelligent systems at the intersection of ML, fintech, and behavioral data — turning raw data into actionable intelligence.",
      cta1: "View ML Projects",
      cta2: "Download CV",
      cta3: "Contact Me",
    },
    about: {
      heading: "About Me",
      p1: "I'm an ML Engineer with a strong foundation in Python, data engineering, and production system design. My work focuses on applying machine learning to real-world problems in fintech and behavioral analysis.",
      p2: "I began my career building data infrastructure and backend systems at the Central Bank of Uzbekistan, where I developed AI-powered tools serving thousands of users. This experience gave me deep expertise in the full data lifecycle — from collection and ETL to feature engineering and model-assisted decision systems.",
      p3: "I'm currently deepening my ML skills through hands-on projects in expense classification, anomaly detection, NLP-based sentiment analysis, and building intelligent conversational systems.",
      interests: "ML Focus Areas",
      interestList: [
        "Classification & regression models",
        "NLP & sentiment analysis",
        "Anomaly detection in financial data",
        "Feature engineering & data pipelines",
        "Behavioral data analysis",
      ],
      location: "Tashkent, Uzbekistan",
      availability: "Open to remote & international ML opportunities",
    },
    philosophy: {
      heading: "Engineering Philosophy",
      intro: "I believe ML models are only as good as the data infrastructure and engineering behind them.",
      items: [
        "Production-first: every model should be deployable",
        "Data quality over model complexity",
        "Iterative experimentation with measurable outcomes",
        "Scalable pipelines that feed reliable ML workflows",
        "Human-centered AI that solves real problems",
      ],
    },
    experience: {
      heading: "Professional Experience",
      jobs: [
        {
          company: "Central Bank of Uzbekistan",
          role: "Software & Data Engineer",
          period: "2024 — Present",
          location: "Tashkent",
          bullets: [
            "Designed and deployed AI-powered Telegram bots and Mini Apps processing behavioral data from thousands of users for financial literacy and SME programs",
            "Built end-to-end data pipelines — collection, validation, transformation, analytics — handling large-scale survey and behavioral datasets",
            "Developed Budget Simulation AI Bot using rule-based + ML-assisted logic for personalized financial recommendations",
            "Engineered backend systems with PostgreSQL, automated workflows, and Google Sheets API for real-time reporting dashboards",
            "Created KPI models and portfolio analytics used by field agents and decision-makers across regions",
            "Collaborated cross-functionally with policy, analytics, and IT teams to deliver production-grade intelligent systems",
          ],
        },
        {
          company: "MAAB Innovation LLC",
          role: "Business Intelligence Developer",
          period: "July 2024 – May 2025",
          location: "",
          bullets: [
            "Built and maintained ETL pipelines using SQL Server and SSIS for large-scale data migration and transformation",
            "Performed data cleaning, validation, and feature preparation across CRM systems — skills directly applicable to ML preprocessing",
            "Created analytical datasets and automated reporting workflows supporting business decisions",
          ],
        },
      ],
      education: "Education",
      edu: [
        { degree: "MSc in Software Engineering", school: "Arizona State University ‖ ATU University", status: "(ongoing)" },
        { degree: "Bachelor of Engineering — Software Engineering", school: "Tashkent Chemical-Technological Institute", status: "" },
      ],
      achievements: "Achievements",
      achList: ["Arizona State University – AI Challenge — Honorable Participant"],
    },
    projects: {
      heading: "ML & AI Projects",
      items: [
        {
          name: "Mylo",
          subtitle: "AI Personal Finance App",
          desc: "AI-powered personal finance platform that analyzes spending patterns, predicts budget overflows, and delivers behavioral insights. Uses classification models for expense categorization and anomaly detection for unusual spending alerts.",
          features: ["Classification models for expense categorization", "Anomaly detection for spending alerts", "Behavioral financial pattern analysis", "Data-driven budget optimization", "Mobile-first Android experience"],
          tech: ["Python", "Scikit-learn", "Pandas", "PostgreSQL", "Supabase", "React", "TypeScript"],
        },
        {
          name: "Empathy AI",
          subtitle: "Human-Centered NLP System",
          desc: "Experimental AI system exploring context-aware response generation using NLP techniques and behavioral signal analysis. Implements sentiment classification, intent recognition, and adaptive conversation flow.",
          features: ["NLP-based sentiment classification", "Intent recognition pipeline", "Context-aware response generation", "Adaptive conversation flow engine"],
          tech: ["Python", "NLP", "Sentiment Analysis", "Prompt Engineering", "Behavioral Analysis"],
        },
        {
          name: "Budget Simulation AI Bot",
          subtitle: "Central Bank Production System",
          desc: "Production Telegram bot serving thousands of users with ML-assisted budget planning. Applies rule-based + data-driven logic to generate personalized financial simulations integrated with real-time analytics.",
          features: ["ML-assisted personalized recommendations", "Real-time data processing pipeline", "PostgreSQL + Google Sheets analytics", "Multi-language support (UZ/RU/EN)", "Scalable async architecture"],
          tech: ["Python", "Data Analysis", "Telegram Bot API", "PostgreSQL", "Railway"],
        },
        {
          name: "FinLit Network",
          subtitle: "Financial Literacy Platform",
          desc: "Digital financial education platform with gamification, multilingual support, and data-driven user engagement analytics. Collects behavioral data to optimize learning pathways.",
          features: ["Data-driven learning path optimization", "User engagement analytics", "XP & achievement gamification system", "Multilingual accessible design"],
          tech: ["React", "TypeScript", "Telegram Mini App", "PostgreSQL", "Gamification"],
        },
      ],
    },
    skills: {
      heading: "Skills & Technologies",
      categories: [
        { name: "Machine Learning", items: ["Scikit-learn", "Pandas", "NumPy", "NLP", "Classification", "Regression", "Feature Engineering", "Anomaly Detection", "Sentiment Analysis", "Prompt Engineering"] },
        { name: "Languages", items: ["Python", "SQL", "Golang", "TypeScript", "C/C++", "JavaScript"] },
        { name: "Data & Infrastructure", items: ["PostgreSQL", "SQL Server", "ETL / SSIS", "Airflow", "Supabase", "Data Pipelines", "Data Validation", "Power BI", "Jupyter"] },
        { name: "Backend & Platforms", items: ["REST APIs", "Async Workflows", "Telegram Bot API", "Railway", "Vercel", "Git/GitHub", "Linux", "Docker"] },
        { name: "Frontend", items: ["React", "Tailwind CSS", "Modern Responsive UI", "Framer Motion"] },
        { name: "Spoken Languages", items: ["Uzbek (Native)", "Russian (Professional)", "English (Professional)"] },
      ],
    },
    contact: {
      heading: "Let's Connect",
      subtitle: "Open to ML engineering roles, collaboration, and interesting data challenges.",
      based: "Based in Tashkent, working globally.",
    },
  },
  uz: {
    nav: { about: "Men haqimda", experience: "Tajriba", projects: "Loyihalar", skills: "Ko'nikmalar", contact: "Aloqa" },
    hero: {
      greeting: "Salom, men",
      name: "Robiyaxon Axmedova",
      title: "ML-muhandis · Python-dasturchi · Data muhandis",
      tagline: "ML, fintech va xulq-atvor ma'lumotlari kesishmasida aqlli tizimlar qurib, xom ma'lumotlarni foydali intellektga aylantiryapman.",
      cta1: "ML Loyihalarni ko'rish",
      cta2: "CV yuklab olish",
      cta3: "Bog'lanish",
    },
    about: {
      heading: "Men haqimda",
      p1: "Men Python, data-muhandislik va production tizimlar loyihalash bo'yicha kuchli bazaga ega ML-muhandisiman. Ishim mashinali o'rganishni fintech va xulq-atvor tahlili sohasidagi real muammolarga qo'llashga fokuslanadi.",
      p2: "Karyeramni O'zbekiston Markaziy bankida data infratuzilmasi va backend tizimlar qurishdan boshlaganman, u yerda minglab foydalanuvchiga xizmat ko'rsatuvchi AI-vositalar ishlab chiqqanman.",
      p3: "Hozirda xarajatlar klassifikatsiyasi, anomaliya aniqlash, NLP-asosli sentiment tahlili va aqlli suhbat tizimlari bo'yicha amaliy loyihalar orqali ML ko'nikmalarimni chuqurlashtiryapman.",
      interests: "ML Yo'nalishlari",
      interestList: [
        "Klassifikatsiya va regressiya modellari",
        "NLP va sentiment tahlili",
        "Moliyaviy ma'lumotlarda anomaliya aniqlash",
        "Feature engineering va data pipeline'lar",
        "Xulq-atvor data tahlili",
      ],
      location: "Toshkent, O'zbekiston",
      availability: "Masofaviy va xalqaro ML imkoniyatlarga ochiq",
    },
    philosophy: {
      heading: "Muhandislik falsafasi",
      intro: "ML modellari faqat ularning ortidagi data infratuzilma va muhandislik sifatida yaxshi deb ishonaman.",
      items: [
        "Production-first: har bir model deploy qilinadigan bo'lishi kerak",
        "Model murakkabligidan ko'ra data sifati muhimroq",
        "O'lchanadigan natijalar bilan iterativ eksperiment",
        "Ishonchli ML workflow'larga oziqlantiruvchi kengaytiriluvchan pipeline'lar",
        "Real muammolarni hal qiluvchi inson markazli AI",
      ],
    },
    experience: {
      heading: "Ish tajribasi",
      jobs: [
        {
          company: "O'zbekiston Respublikasi Markaziy banki",
          role: "Software & Data Engineer",
          period: "2024 — Hozir",
          location: "Toshkent",
          bullets: [
            "Moliyaviy savodxonlik va KO'B dasturlari uchun minglab foydalanuvchidan xulq-atvor ma'lumotlarini qayta ishlovchi AI Telegram bot va Mini App'lar loyihalash va deploy qilish",
            "Skvozli data pipeline'lar qurish — yig'ish, validatsiya, transformatsiya va tahlil",
            "Shaxsiylashtirilgan moliyaviy tavsiyalar uchun ML-mantiqli Budget Simulation AI Bot ishlab chiqish",
            "PostgreSQL, avtomatlashtirilgan workflow va Google Sheets API bilan backend tizimlar yaratish",
            "KPI modellari va portfel tahlili — dala agentlari va qaror qabul qiluvchilar uchun",
            "Siyosat, tahlil va IT bo'limlari bilan kross-funktsional hamkorlik",
          ],
        },
        {
          company: "MAAB Innovation LLC",
          role: "Business Intelligence Developer",
          period: "July 2025 – May 2025",
          location: "",
          bullets: [
            "Keng ko'lamli data migratsiya va transformatsiya uchun ETL pipeline'lar qurish (SQL Server, SSIS)",
            "CRM tizimlaridan data tozalash, validatsiya va feature tayyorlash",
            "Analitik datasetlar yaratish va hisobot avtomatlashtiruvi",
          ],
        },
      ],
      education: "Ta'lim",
      edu: [
        { degree: "Dasturiy ta'minot muhandisligi magistri", school: "ASU ‖ ATU University", status: "(davom etmoqda)" },
        { degree: "Muhandislik bakalavri — Dasturiy ta'minot", school: "Toshkent kimyo-texnologiya instituti", status: "" },
      ],
      achievements: "Yutuqlar",
      achList: ["Arizona State University – AI Challenge — Honorable Participant"],
    },
    projects: {
      heading: "ML & AI Loyihalar",
      items: [
        {
          name: "Mylo",
          subtitle: "AI Shaxsiy Moliya Ilovasi",
          desc: "Xarajat patternlarini tahlil qiluvchi, byudjet oshishini prognozlovchi va xulq-atvor insaytlari beruvchi AI-platforma.",
          features: ["Xarajatlarni klassifikatsiya qilish modellari", "Anomaliya aniqlash", "Xulq-atvor moliyaviy pattern tahlili", "Data-asosli byudjet optimallashtirish", "Android uchun mobil tajriba"],
          tech: ["Python", "Scikit-learn", "Pandas", "PostgreSQL", "Supabase", "React", "TypeScript"],
        },
        {
          name: "Empathy AI",
          subtitle: "Inson Markazli NLP Tizimi",
          desc: "NLP texnikalari va xulq-atvor signallari tahlili asosida kontekstga mos javob yaratuvchi eksperimental AI tizim.",
          features: ["NLP-asosli sentiment klassifikatsiyasi", "Intent tanish pipeline", "Kontekstga mos javob yaratish", "Adaptiv dialog oqimi"],
          tech: ["Python", "NLP", "Sentiment Analysis", "Prompt Engineering", "Xulq-atvor tahlili"],
        },
        {
          name: "Budget Simulation AI Bot",
          subtitle: "Markaziy Bank Production Tizimi",
          desc: "Minglab foydalanuvchiga xizmat ko'rsatuvchi production Telegram bot. ML-yordamida byudjet rejalashtirish.",
          features: ["ML-yordamida shaxsiylashtirilgan tavsiyalar", "Real-time data processing pipeline", "PostgreSQL + Google Sheets tahlili", "Ko'p tilli qo'llab-quvvatlash", "Kengaytiriluvchan async arxitektura"],
          tech: ["Python", "Data Analysis", "Telegram Bot API", "PostgreSQL", "Railway"],
        },
        {
          name: "FinLit Network",
          subtitle: "Moliyaviy Savodxonlik Platformasi",
          desc: "Gamifikatsiya, ko'p tilli qo'llab-quvvatlash va data-asosli foydalanuvchi engagement tahlili bilan raqamli moliyaviy ta'lim platformasi.",
          features: ["Data-asosli ta'lim yo'l optimallashtirish", "Foydalanuvchi engagement tahlili", "XP va yutuq gamifikatsiya tizimi", "Ko'p tilli qulay dizayn"],
          tech: ["React", "TypeScript", "Telegram Mini App", "PostgreSQL", "Gamifikatsiya"],
        },
      ],
    },
    skills: {
      heading: "Ko'nikmalar va Texnologiyalar",
      categories: [
        { name: "Machine Learning", items: ["Scikit-learn", "Pandas", "NumPy", "NLP", "Klassifikatsiya", "Regressiya", "Feature Engineering", "Anomaliya aniqlash", "Sentiment Analysis", "Prompt Engineering"] },
        { name: "Dasturlash tillari", items: ["Python", "SQL", "Golang", "TypeScript", "C/C++", "JavaScript"] },
        { name: "Data va infratuzilma", items: ["PostgreSQL", "SQL Server", "ETL / SSIS", "Airflow", "Supabase", "Data Pipelines", "Data Validation", "Power BI", "Jupyter"] },
        { name: "Backend va platformalar", items: ["REST APIs", "Async Workflows", "Telegram Bot API", "Railway", "Vercel", "Git/GitHub", "Linux", "Docker"] },
        { name: "Frontend", items: ["React", "Tailwind CSS", "Zamonaviy Responsive UI", "Framer Motion"] },
        { name: "Tillar", items: ["O'zbek (Ona tili)", "Rus (Professional)", "Ingliz (Professional)"] },
      ],
    },
    contact: {
      heading: "Bog'lanaylik",
      subtitle: "ML muhandislik rollari, hamkorlik va qiziqarli data muammolarga ochiqman.",
      based: "Toshkentda joylashgan, global miqyosda ishlayman.",
    },
  },
  ru: {
    nav: { about: "Обо мне", experience: "Опыт", projects: "Проекты", skills: "Навыки", contact: "Контакты" },
    hero: {
      greeting: "Привет, я",
      name: "Робияхон Ахмедова",
      title: "ML-инженер · Python-разработчик · Дата-инженер",
      tagline: "Строю интеллектуальные системы на стыке ML, финтеха и поведенческих данных — превращаю сырые данные в actionable intelligence.",
      cta1: "Смотреть ML проекты",
      cta2: "Скачать CV",
      cta3: "Связаться",
    },
    about: {
      heading: "Обо мне",
      p1: "Я ML-инженер с сильной базой в Python, дата-инженерии и проектировании production-систем. Мой фокус — применение машинного обучения к реальным задачам финтеха и поведенческого анализа.",
      p2: "Карьеру начала с построения data-инфраструктуры и backend-систем в Центральном банке Узбекистана, где разработала AI-инструменты для тысяч пользователей. Этот опыт дал глубокое понимание полного цикла работы с данными.",
      p3: "Сейчас углубляю ML-навыки через практические проекты: классификация расходов, обнаружение аномалий, NLP-анализ сентимента и создание интеллектуальных диалоговых систем.",
      interests: "Направления в ML",
      interestList: [
        "Модели классификации и регрессии",
        "NLP и анализ сентимента",
        "Обнаружение аномалий в финансовых данных",
        "Feature engineering и data pipelines",
        "Анализ поведенческих данных",
      ],
      location: "Ташкент, Узбекистан",
      availability: "Открыта для удалённых и международных ML-возможностей",
    },
    philosophy: {
      heading: "Инженерная философия",
      intro: "ML-модели хороши ровно настолько, насколько хороша data-инфраструктура и инженерия за ними.",
      items: [
        "Production-first: каждая модель должна быть деплоимой",
        "Качество данных важнее сложности модели",
        "Итеративные эксперименты с измеримыми результатами",
        "Масштабируемые пайплайны для надёжных ML-воркфлоу",
        "Человеко-ориентированный AI, решающий реальные проблемы",
      ],
    },
    experience: {
      heading: "Опыт работы",
      jobs: [
        {
          company: "Центральный банк Республики Узбекистан",
          role: "Software & Data Engineer",
          period: "2024 — настоящее время",
          location: "Ташкент",
          bullets: [
            "Спроектировала и задеплоила AI-ботов и Mini App в Telegram, обрабатывающих поведенческие данные тысяч пользователей для программ финграмотности и МСБ",
            "Построила сквозные data-пайплайны — сбор, валидация, трансформация и аналитика — для масштабных поведенческих и опросных датасетов",
            "Разработала Budget Simulation AI Bot с ML-логикой для персонализированных финансовых рекомендаций",
            "Создала backend-системы с PostgreSQL, автоматизированными воркфлоу и интеграцией Google Sheets API для real-time отчётности",
            "Разработала KPI-модели и портфельную аналитику для полевых агентов и руководства",
            "Работала кросс-функционально с отделами политики, аналитики и IT",
          ],
        },
        {
          company: "MAAB Innovation LLC",
          role: "Business Intelligence Developer",
          period: "Июль 2024 — Май 2025",
          location: "",
          bullets: [
            "Построение и поддержка ETL-пайплайнов (SQL Server, SSIS) для масштабной миграции и трансформации данных",
            "Очистка, валидация и подготовка фичей из CRM-систем — навыки, напрямую применимые к ML-препроцессингу",
            "Создание аналитических датасетов и автоматизация отчётности",
          ],
        },
      ],
      education: "Образование",
      edu: [
        { degree: "Магистр программной инженерии", school: "Arizona State University ‖ ATU", status: "(в процессе)" },
        { degree: "Бакалавр — Программная инженерия", school: "Ташкентский химико-технологический институт", status: "" },
      ],
      achievements: "Достижения",
      achList: ["Arizona State University – AI Challenge — Honorable Participant"],
    },
    projects: {
      heading: "ML & AI Проекты",
      items: [
        {
          name: "Mylo",
          subtitle: "AI приложение личных финансов",
          desc: "AI-платформа, анализирующая паттерны расходов, прогнозирующая превышение бюджета и предоставляющая поведенческие инсайты. Модели классификации и обнаружение аномалий.",
          features: ["Модели классификации расходов", "Обнаружение аномалий для алертов", "Анализ поведенческих финансовых паттернов", "Data-driven оптимизация бюджета", "Мобильный опыт для Android"],
          tech: ["Python", "Scikit-learn", "Pandas", "PostgreSQL", "Supabase", "React", "TypeScript"],
        },
        {
          name: "Empathy AI",
          subtitle: "Человеко-ориентированная NLP система",
          desc: "Экспериментальная AI-система с контекстно-зависимой генерацией ответов на базе NLP. Классификация сентимента, распознавание интентов, адаптивный диалоговый поток.",
          features: ["NLP-классификация сентимента", "Пайплайн распознавания интентов", "Контекстно-зависимая генерация ответов", "Адаптивный диалоговый движок"],
          tech: ["Python", "NLP", "Sentiment Analysis", "Prompt Engineering", "Поведенческий анализ"],
        },
        {
          name: "Budget Simulation AI Bot",
          subtitle: "Production-система Центрального Банка",
          desc: "Production Telegram-бот для тысяч пользователей с ML-ассистированным бюджетным планированием. Персонализированные финансовые симуляции с real-time аналитикой.",
          features: ["ML-ассистированные персонализированные рекомендации", "Real-time data processing pipeline", "PostgreSQL + Google Sheets аналитика", "Мультиязычная поддержка", "Масштабируемая async-архитектура"],
          tech: ["Python", "Data Analysis", "Telegram Bot API", "PostgreSQL", "Railway"],
        },
        {
          name: "FinLit Network",
          subtitle: "Платформа финансовой грамотности",
          desc: "Платформа цифрового финансового образования с геймификацией, мультиязычной поддержкой и data-driven аналитикой вовлечённости пользователей.",
          features: ["Data-driven оптимизация учебных путей", "Аналитика вовлечённости пользователей", "Геймификация с XP и достижениями", "Мультиязычный доступный дизайн"],
          tech: ["React", "TypeScript", "Telegram Mini App", "PostgreSQL", "Геймификация"],
        },
      ],
    },
    skills: {
      heading: "Навыки и Технологии",
      categories: [
        { name: "Machine Learning", items: ["Scikit-learn", "Pandas", "NumPy", "NLP", "Классификация", "Регрессия", "Feature Engineering", "Обнаружение аномалий", "Sentiment Analysis", "Prompt Engineering"] },
        { name: "Языки программирования", items: ["Python", "SQL", "Golang", "TypeScript", "C/C++", "JavaScript"] },
        { name: "Данные и инфраструктура", items: ["PostgreSQL", "SQL Server", "ETL / SSIS", "Airflow", "Supabase", "Data Pipelines", "Data Validation", "Power BI", "Jupyter"] },
        { name: "Backend и платформы", items: ["REST APIs", "Async Workflows", "Telegram Bot API", "Railway", "Vercel", "Git/GitHub", "Linux", "Docker"] },
        { name: "Frontend", items: ["React", "Tailwind CSS", "Современный отзывчивый UI", "Framer Motion"] },
        { name: "Языки", items: ["Узбекский (Родной)", "Русский (Профессиональный)", "Английский (Профессиональный)"] },
      ],
    },
    contact: {
      heading: "Давайте свяжемся",
      subtitle: "Открыта для ML-инженерных ролей, сотрудничества и интересных data-задач.",
      based: "Нахожусь в Ташкенте, работаю глобально.",
    },
  },
};

export const cvFiles: Record<Lang, string> = {
  en: "/cv/ROBIYAKHON_AKHMEDOVA.pdf",
  uz: "/cv/ROBIYAXON_AXMEDOVA.pdf",
  ru: "/cv/Робияхон_Ахмедова.pdf",
};

export const projectIcons = ["💰", "🧠", "🤖", "📚"];
