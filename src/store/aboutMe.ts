interface IEnRu {
  en: string;
  ru: string;
}
interface IContact {
  title: string;
  icon: string;
  url: string;
}

interface IiAm {
  city: IEnRu;
  address: IEnRu;
  name: IEnRu;
  position: IEnRu;
  contacts: {
    home: IContact;
    email: IContact;
    phone: IContact;
    telegram: IContact;
    linkedIn: IContact;
    github: IContact;
  };
  summary: IEnRu;
  skills: string[][];
  languages: IEnRu[];
  experience: {
    company: IEnRu;
    position: IEnRu;
    from: IEnRu;
    to: IEnRu;
    responsibilities: IEnRu[];
  }[];
}

export const iAm: IiAm = {
  city: {
    en: `Simferopol`,
    ru: `Симферополь`,
  },
  address: {
    en: `Crimea, Russia`,
    ru: `Россия, Крым`,
  },
  name: {
    en: `Andrew Butov`,
    ru: `Бутов Андрей`,
  },
  position: {
    en: `Certified Full Stack Web Developer`,
    ru: `Certified Full Stack Web Developer`,
  },
  summary: {
    en: `Passionate full-stack engineer with over 20 years of hands-on experience in developing scalable websites/applications using wide range of FE and BE skills.
    Experienced in software architecture, business process optimization, finding solutions and resolve issues.
    Trying to use best practices in my daily work`,
    ru: `A senior engineer with over 20 years experience in software development.
    Experienced in software architecture, business process optimization, finding solutions and resolve issues.
    Trying to use best practices in my daily work`,
  },
  contacts: {
    home: {
      title: "www.butov.online",
      icon: "home-6.svg",
      url: "https://www.butov.online",
    },
    email: {
      title: "andrew@butov.online",
      icon: "email.svg",
      url: "mailto:andrew@butov.online",
    },
    phone: {
      title: "+7(978) 706-94-28",
      icon: "",
      url: "tel:+79787069428",
    },
    telegram: {
      title: "telegram.me/andrewb76",
      icon: "",
      url: "https://telegram.me/andrewb76",
    },
    linkedIn: {
      title: "linkedin.com/in/andrew-butov-80b70534",
      icon: "",
      url: "https://linkedin.com/in/andrew-butov-80b70534",
    },
    github: {
      title: "github.com/andrewb76",
      icon: "",
      url: "https://github.com/andrewb76",
    },
  },
  skills: [
    ["mysql", "postgres", "mongodb", "couchdb", "redis", "hasura"],
    ["waterline", "knex", "objection", "sequelize", "mongoose"],
    ["js", "ts", "php", "python", "bash", "ruby"],
    ["nodejs", "express", "koa", "actionhero", "socket.io"],
    ["ror", "django", "flask", "laravel", "code-igniter", "yii", "slim"],
    ["jquery", "d3", "angular", "react", "vue"],
    ["html", "svg", "css", "less", "scss", "style"],
    ["smarty", "twig", "pug", "mustache", "EJS", "nunjucks", "hbs"],
    ["tdd", "bdd", "mocha", "jest", "protractor", "cypress", "cucumber"],
    ["docker", "k8s", "helm"],
    ["AWS", "google cloud", "yandex cloud"],
    ["scrum", "agile", "kanban"],
    ["gitlab", "jenkins", "vercel", "graylog", "grafana", "prometheus", "etc."],
    ["rxjs", "ramda"],
    ["bunch of third party API like payments, social networks, and so on..."],
  ],
  languages: [
    { ru: "Русский: Родной", en: "Russian: Native" },
    {
      ru: "Английский: UpperIntermediate",
      en: "English: UpperIntermediate",
    },
  ],
  experience: [
    {
      company: { en: "Potok-Digital ltd.", ru: "ООО Поток-Диджитал" },
      position: { en: "Senior Full Stack Developer", ru: "Инженер" },
      from: { en: "November 2021", ru: "Ноябрь 2022" },
      to: { en: "September 2022", ru: "Сентябрь 2022" },
      responsibilities: [
        {
          en: "Refactoring old JS legacy code on TS",
          ru: "Переписывал старый JS код на TS",
        },
      ],
    },
    {
      company: { en: "Sollers Technology ltd.", ru: "ООО Соллерс-Технологии" },
      position: { en: "Senior Full Stack Developer", ru: "Инженер" },
      from: { en: "August 2020", ru: "Август 2020" },
      to: { en: "November 2021", ru: "Ноябрь 2021" },
      responsibilities: [
        {
          en: "Refactoring old JS legacy code on TS",
          ru: "Переписывал старый JS код на TS",
        },
      ],
    },
    {
      company: { en: "BlackHoarseTeam", ru: "BlackHoarseTeam" },
      position: { en: "Senior Full Stack Developer", ru: "Инженер" },
      from: { en: "August 2020", ru: "Август 2020" },
      to: { en: "November 2021", ru: "Ноябрь 2021" },
      responsibilities: [
        {
          en: "Completed all phases of planning, developing, and debugging web applications and software accurately.",
          ru: "Переписывал старый JS код на TS",
        },
      ],
    },
    {
      company: { en: "SpeedAndFunctions", ru: "SpeedAndFunctions" },
      position: { en: "Senior Full Stack Developer", ru: "Инженер" },
      from: { en: "August 2020", ru: "Август 2020" },
      to: { en: "November 2021", ru: "Ноябрь 2021" },
      responsibilities: [
        {
          en: "Create and deliver highly efficient application-based solutions to optimize the company’s complaints handling process.",
          ru: "Переписывал старый JS код на TS",
        },
      ],
    },
    {
      company: { en: "Ameria GmbH ", ru: "Ameria GmbH" },
      position: { en: "Full Stack Developer", ru: "Инженер" },
      from: { en: "September 2011", ru: "Сентябрь 2011" },
      to: { en: "January 2013", ru: "Январь 2013" },
      responsibilities: [
        {
          en: "Refactoring old JS legacy code on TS",
          ru: "Переписывал старый JS код на TS",
        },
      ],
    },
    {
      company: { en: "NewVision ", ru: "NewVision" },
      position: { en: "Full Stack Developer", ru: "Инженер" },
      from: { en: "October 2008", ru: "Октябрь 2008" },
      to: { en: "September 2011", ru: "Сентябрь 2011" },
      responsibilities: [
        {
          en: "Managed time-sensitive updates, such as changing content and upgrading databases.",
          ru: "to do",
        },
      ],
    },
    {
      company: { en: "Before web development", ru: "До вэб разработки" },
      position: { en: "Developer", ru: "Инженер" },
      to: { en: "October 2008", ru: "Октябрь 2008" },
      from: { en: "1995", ru: "2001" },
      responsibilities: [
        {
          en: "Refactoring old JS legacy code on TS",
          ru: "Переписывал старый JS код на TS",
        },
      ],
    },
  ],
};

export const aboutMe = {
  short: {
    ru: `Свободное время провожу по настроению.`,
    en: ``,
  },
  expanded: {
    ru: `Свободное время провожу по настроению.`,
    en: ``,
  },
};
