import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="/" aria-label="Pesseghini & Doniani — início">
          <img className="brand-logo" src={logo} alt="Pesseghini & Doniani Advocacia" />
        </a>
        <button
          className="menu-button"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-principal"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav id="menu-principal" className={open ? "nav open" : "nav"} aria-label="Navegação principal">
          <a href="/#inicio" onClick={close}>Início</a>
          <a href="/#escritorio" onClick={close}>O escritório</a>
          <a href="/#atuacao" onClick={close}>Atuação</a>
          <a href="/#processo" onClick={close}>Como funciona</a>
          <a href="/#duvidas" onClick={close}>Dúvidas</a>
          <a className="nav-cta" href="/#atendimento" onClick={close}>Analisar meu caso <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
