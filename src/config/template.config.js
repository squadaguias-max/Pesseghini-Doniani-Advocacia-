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
      question: "Meu divórcio envolve imóveis e outros bens. Posso buscar orientação?",
      answer: "Sim. A análise considera a situação patrimonial, os documentos disponíveis, o regime de bens e as particularidades da família para indicar os caminhos juridicamente possíveis."
    },
    {
      question: "E se houver uma empresa envolvida?",
      answer: "Empresas e participações societárias exigem análise específica. É importante compreender a estrutura do negócio, a documentação e a relação entre patrimônio pessoal e empresarial."
    },
    {
      question: "Preciso estar decidido a me divorciar para buscar orientação?",
      answer: "Não. A orientação jurídica pode ajudar a compreender direitos, riscos e possibilidades antes de qualquer decisão."
    },
    {
      question: "O atendimento também pode envolver questões relacionadas aos filhos?",
      answer: "Sim. Guarda, convivência, responsabilidades parentais e pensão podem ser analisadas em conjunto com os demais aspectos da separação."
    },
    {
      question: "Existe garantia de resultado?",
      answer: "Não. Cada caso depende de suas circunstâncias, dos documentos, da legislação aplicável e das decisões das autoridades competentes."
    }
  ]
};

export function whatsappUrl(message = projectData.contact.whatsappMessage) {
  return projectWhatsappUrl(message);
}
