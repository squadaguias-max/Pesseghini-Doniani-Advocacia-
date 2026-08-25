import { projectData, projectWhatsappUrl } from "./project.data";

export const templateConfig = {
  brand: {
    name: projectData.project.displayName,
    officeName: projectData.professional.officeName,
    descriptor: projectData.professional.area,
    oab: projectData.professional.oab
  },
  hero: projectData.hero,
  services: projectData.services,
  contact: projectData.contact,
  location: projectData.location,
  pending: projectData.pending,
  faqs: [
    {
      question: "Preciso estar decidido(a) a me divorciar para buscar orientação?",
      answer: "Não. A orientação jurídica pode ajudar a compreender seus direitos, os possíveis impactos da separação e os caminhos disponíveis antes de qualquer decisão."
    },
    {
      question: "Meu divórcio envolve imóveis, empresas ou outros bens. Como funciona a partilha?",
      answer: "A partilha depende, entre outros fatores, do regime de bens, da origem e da titularidade do patrimônio e das particularidades de cada situação. A análise prévia permite compreender o que pode integrar a divisão e quais caminhos jurídicos são possíveis."
    },
    {
      question: "Como ficam a guarda, a convivência e as decisões sobre os filhos após a separação?",
      answer: "Essas questões são analisadas considerando a realidade familiar e, sobretudo, o melhor interesse da criança ou do adolescente. Guarda, convivência e responsabilidades parentais podem ser definidas por acordo ou, quando necessário, judicialmente."
    },
    {
      question: "Posso pedir, revisar ou cobrar pensão alimentícia?",
      answer: "Sim. Dependendo da situação, é possível discutir a fixação, revisão, exoneração ou cobrança de alimentos. Cada medida exige a análise das circunstâncias e dos documentos do caso."
    },
    {
      question: "Como funciona o inventário e ele pode ser feito em cartório?",
      answer: "O inventário permite apurar os bens, direitos e obrigações deixados pela pessoa falecida e realizar a partilha e a transmissão aos herdeiros. Dependendo das circunstâncias do caso e do preenchimento dos requisitos legais, o procedimento poderá ser realizado judicialmente ou em cartório."
    },
    {
      question: "É possível resolver questões de família sem entrar com uma ação?",
      answer: "Em determinadas situações, sim. Acordos e procedimentos extrajudiciais podem ser alternativas mais adequadas. A possibilidade depende do caso e deve ser avaliada antes da definição da estratégia."
    }
  ]
};

export function whatsappUrl(message = projectData.contact.whatsappMessage) {
  return projectWhatsappUrl(message);
}
