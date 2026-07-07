export interface Project {
  title: string;
  description: {
    pt: string;
    en: string;
  };
  technologies: string[];
  link?: string;
  github?: string;
}

export interface Experience {
  company: string;
  location: string;
  role: {
    pt: string;
    en: string;
  };
  period: {
    pt: string;
    en: string;
  };
  points: {
    pt: string[];
    en: string[];
  };
}

export interface SkillGroup {
  title: {
    pt: string;
    en: string;
  };
  skills: string[];
  category: 'languages-frameworks' | 'frontend' | 'backend' | 'database' | 'devops-tools';
}

export interface EducationItem {
  degree: {
    pt: string;
    en: string;
  };
  institution: string;
  period: {
    pt: string;
    en: string;
  };
}

export interface CertificationItem {
  title: string;
  institution: string;
}

export interface PortfolioData {
  personalInfo: {
    name: string;
    role: {
      pt: string;
      en: string;
    };
    location: string;
    whatsapp: string;
    whatsappLink: string;
    email: string;
    github: string;
    linkedin: string;
    resumePath: string;
    tagline: {
      pt: string;
      en: string;
    };
    ctaProjects: {
      pt: string;
      en: string;
    };
    ctaContact: {
      pt: string;
      en: string;
    };
  };
  summary: {
    pt: string;
    en: string;
  };
  skills: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
  education: EducationItem[];
  certifications: CertificationItem[];
  languages: {
    title: {
      pt: string;
      en: string;
    };
    value: {
      pt: string;
      en: string;
    };
  };
  navigation: {
    about: { pt: string; en: string };
    skills: { pt: string; en: string };
    experience: { pt: string; en: string };
    projects: { pt: string; en: string };
    education: { pt: string; en: string };
    contact: { pt: string; en: string };
  };
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Gabriel Luis Parede Nunes",
    role: {
      pt: "Desenvolvedor Full Stack | Engenheiro de Software",
      en: "Full Stack Developer | Software Engineer"
    },
    location: "Foz do Iguaçu - PR",
    whatsapp: "+55 45 99133-9633",
    whatsappLink: "https://wa.me/5545991339633",
    email: "gabrielluisnunes@gmail.com",
    github: "https://github.com/gabrielluisnunes",
    linkedin: "https://www.linkedin.com/in/gabriel-luis-parede-nunes/",
    resumePath: "/Gabriel_Luis_Parede_Nunes_CV.pdf",
    tagline: {
      pt: "Transformando ideias em produtos digitais escaláveis e performáticos.",
      en: "Transforming ideas into scalable and high-performance digital products."
    },
    ctaProjects: {
      pt: "Ver Projetos",
      en: "View Projects"
    },
    ctaContact: {
      pt: "Fale Comigo",
      en: "Get In Touch"
    }
  },
  summary: {
    pt: "Sou Gabriel Nunes, desenvolvedor full stack de 23 anos, com experiência em Angular, C#, Node.js e React. Atuo no desenvolvimento de aplicações escaláveis e bem estruturadas, com foco em performance, organização de código e boas práticas. Estou sempre buscando evoluir tecnicamente e contribuir com soluções eficientes para problemas reais.",
    en: "I'm Gabriel Nunes, a 23-year-old full stack developer with experience in Angular, C#, Node.js, and React. I work on developing scalable and well-structured applications, focusing on performance, code organization, and best practices. I'm always seeking to grow technically and contribute efficient solutions to real problems."
  },
  skills: [
    {
      title: {
        pt: "Linguagens & Frameworks",
        en: "Languages & Frameworks"
      },
      category: "languages-frameworks",
      skills: ["Node.js", "TypeScript", "C# (.NET)", "Java (Spring Boot)"]
    },
    {
      title: {
        pt: "Front-end",
        en: "Front-end"
      },
      category: "frontend",
      skills: ["React.js", "Next.js (14/15)", "Angular", "Tailwind CSS", "ShadCN/UI"]
    },
    {
      title: {
        pt: "Back-end & Integrações",
        en: "Back-end & Integrations"
      },
      category: "backend",
      skills: ["APIs RESTful", "Prisma ORM", "Supabase", "Redis (Caching)"]
    },
    {
      title: {
        pt: "Bancos de Dados",
        en: "Databases"
      },
      category: "database",
      skills: ["PostgreSQL", "MySQL", "MariaDB", "SQL Server"]
    },
    {
      title: {
        pt: "Ferramentas & DevOps",
        en: "Tools & DevOps"
      },
      category: "devops-tools",
      skills: ["Git", "GitHub", "Vercel", "Docker", "Google Analytics", "Looker Studio"]
    }
  ],
  experiences: [
    {
      company: "Genius Web Solutions (LL Sistemas LTDA)",
      location: "Foz do Iguaçu, PR",
      role: {
        pt: "Estagiário Full Stack",
        en: "Full Stack Intern"
      },
      period: {
        pt: "Março 2026 – Presente",
        en: "March 2026 – Present"
      },
      points: {
        pt: [
          "Atuação no desenvolvimento e manutenção de sistemas B2B e B2C voltados ao setor turístico.",
          "Implementação de interfaces responsivas utilizando React e Angular, integradas a back-ends em C# e bancos de dados PostgreSQL.",
          "Otimização de rotas de API e refatoração de lógica de segurança, visando maior escalabilidade do sistema."
        ],
        en: [
          "Acting in the development and maintenance of B2B and B2C systems focused on the tourism sector.",
          "Implementing responsive interfaces using React and Angular, integrated with C# back-ends and PostgreSQL databases.",
          "Optimizing API routes and refactoring security logic to improve system scalability."
        ]
      }
    },
    {
      company: "MG Electric do Brasil",
      location: "Foz do Iguaçu, PR",
      role: {
        pt: "Analista de Dados / Desenvolvedor Web",
        en: "Data Analyst / Web Developer"
      },
      period: {
        pt: "Março 2025 – Novembro 2025",
        en: "March 2025 – November 2025"
      },
      points: {
        pt: [
          "Desenvolvimento e manutenção de plataformas de e-commerce e sites institucionais, com foco em performance e SEO.",
          "Integração de gateways de pagamento e soluções logísticas, elevando a taxa de conversão do canal digital.",
          "Criação de dashboards interativos no Power BI para suporte à tomada de decisão estratégica baseada em KPIs."
        ],
        en: [
          "Developing and maintaining e-commerce platforms and institutional sites, with a strong focus on performance and SEO.",
          "Integrating payment gateways and logistics solutions, increasing digital channel conversion rates.",
          "Creating interactive dashboards in Power BI to support strategic decision-making based on key KPIs."
        ]
      }
    },
    {
      company: "Mundo do Futsal",
      location: "Foz do Iguaçu, PR",
      role: {
        pt: "Desenvolvedor Web / Marketing Digital",
        en: "Web Developer / Digital Marketing"
      },
      period: {
        pt: "Março 2024 – Janeiro 2025",
        en: "March 2024 – January 2025"
      },
      points: {
        pt: [
          "Gerenciamento e evolução técnica do site de e-commerce, integrando fluxos de estoque e pagamento.",
          "Aplicação de melhorias contínuas em UX/UI e SEO, resultando em maior visibilidade e performance de vendas."
        ],
        en: [
          "Managing and driving technical updates to the e-commerce website, integrating inventory and payment workflows.",
          "Applying continuous UX/UI and SEO improvements, resulting in increased visibility and sales performance."
        ]
      }
    }
  ],
  projects: [
    {
      title: "Tatami",
      description: {
        pt: "Sistema de gestão para academias de Jiu Jitsu, com controle financeiro de mensalidades, upload e assinatura de contratos/termos, check-in de alunos de treinos com foto (reconhecimento facial), e controle e histórico de graduação de faixas.",
        en: "Management system for Jiu Jitsu academies featuring tuition financial control, contract/terms uploads and e-signatures, training check-in with photos (facial recognition), and graduation and belt history tracking."
      },
      technologies: ["Next.js 14", "Supabase", "Tailwind CSS", "Stripe", "face-api.js"],
      link: "https://www.gestaotatami.com.br/auth/login"
    },
    {
      title: "Propify",
      description: {
        pt: "Gestão e criação de propostas comerciais com IA, fluxo Kanban inteligente, agenda com Google Calendar integrado, autenticação via Supabase (OAuth) e infraestrutura na Vercel com políticas de segurança RLS no PostgreSQL.",
        en: "AI-powered creation and management of commercial proposals, including a smart Kanban workflow, Google Calendar integration, Supabase OAuth authentication, and Vercel infrastructure with PostgreSQL RLS security policies."
      },
      technologies: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Kiwify"],
      link: "https://usepropify.app/"
    },
    {
      title: "MFO (Gestão Financeira)",
      description: {
        pt: "Ferramenta de projeção patrimonial e alinhamento financeiro.",
        en: "Asset projection and financial alignment planning tool."
      },
      technologies: ["Next.js 14", "Prisma ORM"]
    },
    {
      title: "VendaFest",
      description: {
        pt: "Plataforma para gestão de vendas em eventos em tempo real.",
        en: "Real-time sales and transactions management platform for events."
      },
      technologies: ["Java Spring Boot", "Angular"]
    }
  ],
  education: [
    {
      degree: {
        pt: "Bacharelado em Engenharia de Software",
        en: "Bachelor's Degree in Software Engineering"
      },
      institution: "UniAmérica Descomplica",
      period: {
        pt: "Conclusão prevista: 2027",
        en: "Expected Completion: 2027"
      }
    },
    {
      degree: {
        pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        en: "Associate Degree in Systems Analysis and Development"
      },
      institution: "UniAmérica Descomplica",
      period: {
        pt: "Conclusão: 2025",
        en: "Completed: 2025"
      }
    }
  ],
  certifications: [
    {
      title: "React JS 19 & Next.js 15",
      institution: "Udemy"
    },
    {
      title: "Modelagem de Dados",
      institution: "Fundação Bradesco"
    },
    {
      title: "Jornada Python",
      institution: "Hashtag Treinamentos"
    }
  ],
  languages: {
    title: {
      pt: "Idiomas",
      en: "Languages"
    },
    value: {
      pt: "Inglês (Intermediário)",
      en: "English (Intermediate)"
    }
  },
  navigation: {
    about: { pt: "Sobre", en: "About" },
    skills: { pt: "Habilidades", en: "Skills" },
    experience: { pt: "Experiência", en: "Experience" },
    projects: { pt: "Projetos", en: "Projects" },
    education: { pt: "Formação", en: "Education" },
    contact: { pt: "Contato", en: "Contact" }
  }
};
