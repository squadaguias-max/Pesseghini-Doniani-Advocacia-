import logo from "../../assets/logo.png";

export function Footer() {
  return (
    <footer>
      <div className="container footer-main">
        <div className="footer-brand">
          <img className="footer-brand-logo" src={logo} alt="Pesseghini & Doniani Advocacia" />
          <span>Direito de Família e Patrimônio</span>
        </div>
        <p>Estratégia jurídica, proximidade e clareza para decisões que impactam sua vida e seu patrimônio.</p>
        <nav aria-label="Navegação do rodapé">
          <a href="#inicio">Início</a>
          <a href="#atuacao">Áreas de atuação</a>
          <a href="#duvidas">Dúvidas frequentes</a>
          <a href="#atendimento">Atendimento</a>
        </nav>
      </div>
      <div className="container footer-registration">
        <span>OAB: <strong>Enviar depois</strong></span>
        <span>Contato e regiões atendidas: <strong>Enviar depois</strong></span>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Pesseghini & Doniani Advocacia.</span>
        <span>Este material tem caráter meramente informativo e não constitui publicidade profissional nos termos do Provimento nº 205/2021 do CFOAB. As informações aqui veiculadas não garantem resultados específicos.</span>
      </div>
      <a className="developed-by" href="https://somos4juris.com.br/" target="_blank" rel="noopener noreferrer">Desenvolvido por 4Juris</a>
    </footer>
  );
}
