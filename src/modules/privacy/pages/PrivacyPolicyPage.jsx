import { useEffect } from "react";

export function PrivacyPolicyPage() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Política de Privacidade | Pesseghini & Doniani Advocacia";
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <section className="privacy-page">
      <article className="container privacy-content">
        <a className="privacy-back" href="/">← Voltar ao site</a>
        <span className="eyebrow">Privacidade e proteção de dados</span>
        <h1>Política de Privacidade</h1>
        <p className="privacy-updated">Última atualização: 2 de setembro de 2026.</p>

        <p>A Pesseghini & Doniani Advocacia respeita a sua privacidade e trata dados pessoais de acordo com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD). Esta política explica como os dados enviados pelo formulário deste site são utilizados.</p>

        <h2>1. Quem controla os dados</h2>
        <p>A Pesseghini & Doniani Advocacia é responsável pelas decisões sobre o tratamento dos dados coletados neste site. Solicitações relacionadas à privacidade podem ser feitas pelo <a href="/#atendimento">formulário de contato</a>.</p>

        <h2>2. Dados coletados</h2>
        <p>Ao enviar o formulário, coletamos nome completo, telefone/WhatsApp e o assunto selecionado. Também registramos automaticamente, quando disponíveis, os identificadores de campanha gclid, gbraid e wbraid, a URL da página e a data e hora do envio. Os identificadores de campanha podem ser guardados no navegador para preservar a atribuição até o envio.</p>
        <p>O formulário não solicita texto livre, CPF, renda ou endereço.</p>

        <h2>3. Finalidades e bases legais</h2>
        <p>Os dados são usados para receber o pedido de contato, identificar o tema do atendimento, retornar a solicitação, organizar o relacionamento inicial e avaliar a origem das campanhas do site. O tratamento ocorre com base no consentimento manifestado no formulário e, quando aplicável, em procedimentos preliminares solicitados pelo titular, cumprimento de obrigações legais ou regulatórias e exercício regular de direitos.</p>

        <h2>4. Compartilhamento e serviços externos</h2>
        <p>Os dados podem ser processados por fornecedores necessários à hospedagem, segurança, funcionamento e mensuração do site, sempre de acordo com a finalidade informada e com medidas de proteção adequadas. Não comercializamos dados pessoais.</p>
        <p>Após a confirmação do envio, o site direciona você ao WhatsApp. A partir desse momento, o uso do serviço também fica sujeito aos termos e à política de privacidade do WhatsApp.</p>

        <h2>5. Armazenamento e segurança</h2>
        <p>Os dados são mantidos pelo período necessário para responder à solicitação, conduzir o relacionamento decorrente do contato, cumprir obrigações legais e resguardar direitos. Depois disso, podem ser eliminados ou anonimizados, quando permitido. Adotamos medidas técnicas e administrativas razoáveis para prevenir acessos não autorizados, perda, alteração ou divulgação indevida.</p>

        <h2>6. Seus direitos</h2>
        <p>Nos termos da LGPD, você pode solicitar, conforme aplicável, confirmação e acesso aos dados, correção, anonimização, bloqueio ou eliminação, informação sobre compartilhamentos, portabilidade, oposição ao tratamento, revogação do consentimento e revisão de decisões automatizadas. O atendimento da solicitação é gratuito e pode exigir a confirmação da identidade do titular.</p>

        <h2>7. Atualizações desta política</h2>
        <p>Esta política pode ser atualizada para refletir mudanças no site, no tratamento de dados ou na legislação. A versão vigente estará sempre disponível nesta página, com a data da última atualização.</p>
      </article>
    </section>
  );
}
