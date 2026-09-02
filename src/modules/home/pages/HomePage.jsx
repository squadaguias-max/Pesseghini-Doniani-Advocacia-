import { createElement } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  FileSearch,
  HandCoins,
  HeartHandshake,
  Landmark,
  MessageCircle,
  MessageSquareText,
  Scale,
  SearchCheck,
  ShieldCheck,
  Users
} from "lucide-react";
import { templateConfig as site } from "../../../config/template.config";
import { ContactForm } from "../components/ContactForm";

const serviceIcons = [Scale, Building2, Users, HandCoins, Landmark, HeartHandshake];

const process = [
  {
    icon: MessageSquareText,
    title: "Você apresenta sua situação",
    text: "Na conversa inicial, buscamos compreender o que está acontecendo, suas principais dúvidas e o que precisa ser resolvido."
  },
  {
    icon: FileSearch,
    title: "O caso é analisado",
    text: "Documentos, riscos e possibilidades são avaliados de forma individualizada."
  },
  {
    icon: SearchCheck,
    title: "Você recebe orientação",
    text: "Os próximos passos são explicados com clareza, responsabilidade e transparência."
  }
];

export function HomePage() {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="hero-shade" />
        <div className="container hero-content">
          <span className="eyebrow eyebrow-light">Direito de família e patrimônio</span>
          <h1>Quando família, filhos e patrimônio estão envolvidos, <em>não é fácil saber o que fazer.</em></h1>
          <p>{site.hero.description}</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#atendimento">
              {site.hero.cta} <ArrowRight aria-hidden="true" />
            </a>
            <a className="text-link light-link" href="#atuacao">Entenda como podemos orientar</a>
          </div>
          <p className="hero-note">Cada caso depende de análise individual.</p>
        </div>
      </section>

      <section className="hero-form-section" id="atendimento">
        <div className="container hero-form-grid">
          <div className="hero-form-intro">
            <span className="eyebrow eyebrow-light">Próximo passo</span>
            <h2>Você não precisa tomar uma decisão<br />sem antes entender seus direitos.</h2>
            <p>Conte-nos o que está acontecendo. Vamos compreender sua situação e orientar os próximos passos com clareza e estratégia.</p>
            <div className="hero-form-assurance">
              <ShieldCheck aria-hidden="true" />
              <span>Seus dados serão tratados com confidencialidade e usados apenas para o atendimento.</span>
            </div>
          </div>
          <div className="contact-card">
            <MessageCircle aria-hidden="true" />
            <span>Canal de atendimento</span>
            <h3>Conte como podemos ajudar</h3>
            <p>Preencha os dados abaixo. Nossa equipe entrará em contato após receber sua solicitação.</p>
            <ContactForm />
          </div>
        </div>
        <div className="container legal-note">Conteúdo de caráter informativo. A análise jurídica depende das particularidades de cada caso. Não há promessa ou garantia de resultado.</div>
      </section>

      <section className="opening" id="escritorio">
        <div className="container opening-grid">
          <div className="opening-copy">
            <span className="eyebrow">Antes de decidir</span>
            <h2>Em questões de família, uma decisão tomada hoje <em>pode ter efeitos por muito tempo.</em></h2>
            <p>Filhos, patrimônio, alimentos, moradia e relações construídas ao longo dos anos podem estar envolvidos em uma mesma situação. Por isso, antes de agir, é importante compreender seus direitos, os riscos e os caminhos jurídicos possíveis.</p>
            <a className="button button-dark" href="#atendimento">Quero analisar meu caso <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="opening-visual" role="img" aria-label="Pessoa organizando documentos com calma em um ambiente profissional">
            <div className="visual-caption">
              <ShieldCheck aria-hidden="true" />
              <span><strong>Orientação individualizada</strong> para decisões familiares e patrimoniais.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="atuacao">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow eyebrow-light">Como podemos orientar</span>
              <h2>Questões familiares exigem <em>orientação jurídica em cada etapa.</em></h2>
            </div>
            <p>Atuação jurídica voltada à compreensão do cenário, organização das informações e definição dos caminhos possíveis para cada situação familiar e patrimonial.</p>
          </div>
          <div className="service-grid">
            {site.services.map((service, index) => (
              <article key={service.title}>
                <span className="service-icon">{createElement(serviceIcons[index] || Scale)}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#atendimento" aria-label={`Solicitar análise sobre ${service.title}`}>Solicitar análise <ArrowRight aria-hidden="true" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="institutional">
        <div className="container institutional-grid">
          <div className="institutional-photo" role="img" aria-label="Adriana Pesseghini e Maura Priscila Philippo Doniani juntas" />
          <div className="institutional-copy">
            <span className="eyebrow">Pesseghini & Doniani Advocacia</span>
            <h2>Duas trajetórias, uma mesma forma de entender a advocacia.</h2>
            <p>A Pesseghini & Doniani nasceu da união das advogadas Adriana Pesseghini e Maura Priscila Philippo Doniani, que compartilham uma mesma convicção: questões jurídicas que envolvem família não podem ser tratadas apenas como números ou processos.</p>
            <p>Por trás de cada caso existem pessoas, relações, histórias, filhos, patrimônio e decisões que podem produzir efeitos por muitos anos.</p>
            <p>Por isso, nossa atuação une estratégia jurídica, proximidade e clareza. Antes de definir um caminho, buscamos compreender o contexto, ouvir o cliente e analisar os riscos e as possibilidades de cada situação.</p>
            <p>Acreditamos em uma advocacia tecnicamente responsável, mas também acessível e humana — na qual o cliente compreenda o que está acontecendo, quais são suas opções e participe das decisões sobre o próprio caso.</p>
            <div className="signature-line">Próximas no atendimento. Estratégicas nas decisões. Responsáveis na condução.</div>
          </div>
        </div>
      </section>

      <section className="process-section" id="processo">
        <div className="container">
          <div className="section-heading dark-heading">
            <div>
              <span className="eyebrow">Como funciona</span>
              <h2>Um atendimento construído com <em>escuta e clareza.</em></h2>
            </div>
            <p>O primeiro passo é compreender sua situação. A partir dela, analisamos o contexto, os riscos e as possibilidades para definir a orientação jurídica mais adequada ao seu caso.</p>
          </div>
          <div className="process-grid">
            {process.map((item) => (
              <article key={item.title}>
                <item.icon aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <a className="button button-gold process-cta" href="#atendimento">Quero analisar meu caso <ArrowRight aria-hidden="true" /></a>
        </div>
      </section>

      <section className="care-section">
        <div className="container care-grid">
          <div>
            <span className="eyebrow">Sobre o atendimento</span>
            <h2>Cada família tem uma história. <em>A estratégia jurídica parte dela.</em></h2>
          </div>
          <ul>
            <li><Check aria-hidden="true" /><span><strong>Análise individual do caso</strong> e dos documentos relevantes.</span></li>
            <li><Check aria-hidden="true" /><span><strong>Compreensão do contexto familiar</strong> para identificar prioridades e possibilidades.</span></li>
            <li><Check aria-hidden="true" /><span><strong>Comunicação transparente</strong> sobre riscos e próximos passos.</span></li>
            <li><Check aria-hidden="true" /><span><strong>Visão integrada</strong> das questões familiares, patrimoniais e sucessórias envolvidas no caso.</span></li>
          </ul>
        </div>
      </section>

      <section className="faq-section" id="duvidas">
        <div className="container faq-grid">
          <div className="faq-intro">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2>Informação clara antes de tomar decisões.</h2>
            <p>Reunimos respostas iniciais para algumas das dúvidas mais comuns. Cada situação exige análise individualizada.</p>
          </div>
          <div className="faq-list">
            {site.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}<i aria-hidden="true">+</i></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
