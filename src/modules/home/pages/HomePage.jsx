import { createElement } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  FileSearch,
  HeartHandshake,
  Home,
  Landmark,
  MessageSquareText,
  Scale,
  SearchCheck,
  ShieldCheck,
  Users
} from "lucide-react";
import { templateConfig as site } from "../../../config/template.config";

const serviceIcons = [Landmark, Building2, Scale, Users, HeartHandshake];

const process = [
  {
    icon: MessageSquareText,
    title: "Você apresenta sua situação",
    text: "A conversa inicial ajuda a compreender o contexto familiar, patrimonial e pessoal."
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
          <h1>Vai se divorciar e existe <em>patrimônio envolvido?</em></h1>
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

      <section className="opening" id="escritorio">
        <div className="container opening-grid">
          <div className="opening-copy">
            <span className="eyebrow">Antes de decidir</span>
            <h2>Quando uma questão familiar envolve patrimônio, <em>cada detalhe importa.</em></h2>
            <p>Imóveis, empresas, investimentos, contas e contratos podem produzir efeitos importantes durante uma separação. A análise precisa considerar o conjunto da situação — não apenas um documento isolado.</p>
            <a className="button button-dark" href="#atendimento">Quero analisar meu caso <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="opening-visual" role="img" aria-label="Pessoa retirando uma aliança durante uma conversa reservada">
            <div className="visual-caption">
              <ShieldCheck aria-hidden="true" />
              <span><strong>Orientação individualizada</strong> para decisões pessoais e patrimoniais.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="atuacao">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow eyebrow-light">Como podemos orientar</span>
              <h2>Questões familiares com <em>reflexos patrimoniais.</em></h2>
            </div>
            <p>Atuação jurídica voltada à compreensão do cenário, organização das informações e definição dos caminhos possíveis.</p>
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
          <div className="institutional-photo" role="img" aria-label="Atendimento jurídico em ambiente profissional" />
          <div className="institutional-copy">
            <span className="eyebrow">Pesseghini & Doniani Advocacia</span>
            <h2>Estratégia jurídica, proximidade e clareza para decisões que impactam sua vida e seu patrimônio.</h2>
            <p>O escritório nasceu da união de duas advogadas com trajetórias complementares e da convicção de que nenhum caso é apenas um número.</p>
            <p>Antes de definir uma estratégia, buscamos compreender o contexto, os documentos, os riscos e as possibilidades. A atuação é conduzida com transparência, proximidade e responsabilidade.</p>
            <p>Em questões familiares que envolvem patrimônio, empresas, imóveis ou filhos, conhecimento jurídico, estratégia e sensibilidade precisam caminhar juntos.</p>
            <div className="signature-line">Advocacia próxima no atendimento. Estratégica nas decisões. Responsável na condução.</div>
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
            <p>O primeiro passo é entender sua realidade. A orientação parte das particularidades da sua família e do seu patrimônio.</p>
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
          <a className="button button-gold process-cta" href="#atendimento">Agendar atendimento <ArrowRight aria-hidden="true" /></a>
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
            <li><Check aria-hidden="true" /><span><strong>Escuta e clareza</strong> para compreender prioridades e possibilidades.</span></li>
            <li><Check aria-hidden="true" /><span><strong>Comunicação transparente</strong> sobre riscos e próximos passos.</span></li>
            <li><Check aria-hidden="true" /><span><strong>Visão integrada</strong> de patrimônio, imóveis, empresas, investimentos e filhos.</span></li>
          </ul>
        </div>
      </section>

      <section className="faq-section" id="duvidas">
        <div className="container faq-grid">
          <div className="faq-intro">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2>Informação clara antes de tomar decisões.</h2>
            <p>Reunimos respostas iniciais para questões comuns. A orientação adequada depende da análise de cada situação.</p>
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

      <section className="final-cta" id="atendimento">
        <div className="container final-cta-grid">
          <div>
            <span className="eyebrow eyebrow-light">Próximo passo</span>
            <h2>Sua situação envolve família, patrimônio ou filhos?</h2>
            <p>Compreender os aspectos jurídicos antes de decidir pode ajudar você a agir com mais clareza e segurança.</p>
          </div>
          <div className="contact-card">
            <Home aria-hidden="true" />
            <span>Canal de atendimento</span>
            <h3>Dados de contato em configuração.</h3>
            <p>O WhatsApp e os demais canais serão inseridos antes da publicação. Enquanto isso, nenhum link externo ou telefone inválido será exibido.</p>
            <span className="pending-badge">Enviar depois</span>
          </div>
        </div>
        <div className="container legal-note">Conteúdo de caráter informativo. A análise jurídica depende das particularidades de cada caso. Não há promessa ou garantia de resultado.</div>
      </section>
    </>
  );
}
