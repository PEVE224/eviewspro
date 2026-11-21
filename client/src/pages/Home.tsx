import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Database,
  FileSpreadsheet,
  LineChart,
  Menu,
  MousePointerClick,
  Play,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";

const modules = [
  {
    number: "01",
    tag: "Fondations",
    title: "Prise en main d’EViews",
    text: "Installez votre environnement, naviguez dans l’interface et construisez vos premiers workfiles sans perdre de temps.",
    icon: MousePointerClick,
    accent: "coral",
  },
  {
    number: "02",
    tag: "Méthode",
    title: "Préparer des données fiables",
    text: "Import, nettoyage, transformations et tests de stationnarité : la base d’une analyse qui tient la route.",
    icon: Database,
    accent: "blue",
  },
  {
    number: "03",
    tag: "Analyse",
    title: "Modéliser et estimer",
    text: "Régression, séries temporelles, ARDL et diagnostics pour passer de la question économique au modèle pertinent.",
    icon: LineChart,
    accent: "coral",
  },
  {
    number: "04",
    tag: "Décision",
    title: "Lire les résultats",
    text: "Interprétez les coefficients, vérifiez la robustesse et racontez vos résultats avec des graphiques clairs.",
    icon: BarChart3,
    accent: "blue",
  },
];

const benefits = [
  "Une méthode reproductible, de la donnée brute au résultat final",
  "Des exercices construits à partir de cas économiques réalistes",
  "Les bons réflexes pour éviter les erreurs d’interprétation",
  "Un support de cours réutilisable pour vos prochains projets",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#accueil" onClick={closeMenu} aria-label="EViews Pro, accueil">
            <span className="brand-mark" aria-hidden="true"><span /></span>
            <span className="brand-wordmark">EViews<span>Pro</span></span>
          </a>

          <button className="mobile-menu-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Navigation principale">
            <a href="#programme" onClick={closeMenu}>Le programme</a>
            <a href="#methode" onClick={closeMenu}>La méthode</a>
            <a href="#public" onClick={closeMenu}>Pour qui ?</a>
            <a href="#inscription" className="nav-cta" onClick={closeMenu}>Réserver ma place <ArrowUpRight size={16} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="accueil">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> Formation intensive · 100% pratique</div>
              <h1>Transformez vos données en <em>décisions</em> éclairées.</h1>
              <p className="hero-lede">Maîtrisez EViews pour analyser, modéliser et expliquer les phénomènes économiques avec méthode — sans vous perdre dans la technique.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#inscription">Découvrir la formation <ArrowUpRight size={18} /></a>
                <a className="text-link" href="#programme"><span className="play-icon"><Play size={13} fill="currentColor" /></span> Voir le programme</a>
              </div>
              <div className="hero-proof">
                <div className="avatar-stack" aria-hidden="true"><span>AK</span><span>MD</span><span>SL</span><span>+</span></div>
                <div><strong>Déjà choisie par 120+ analystes</strong><small>Étudiants · Chercheurs · Professionnels</small></div>
              </div>
            </div>

            <div className="hero-visual" aria-label="Aperçu d'un tableau de bord d'analyse économétrique">
              <div className="visual-caption"><span><span className="live-dot" /> Modèle en cours</span><span className="caption-code">ARDL_03</span></div>
              <div className="model-card">
                <div className="model-card-head"><div><span className="mini-label">RÉSULTAT DU MODÈLE</span><strong>PIB réel · prévision 2025</strong></div><span className="trend-pill">+4,8% <ArrowUpRight size={13} /></span></div>
                <div className="chart-area">
                  <div className="chart-y-labels"><span>120</span><span>100</span><span>80</span><span>60</span><span>40</span></div>
                  <div className="chart-grid-lines"><i /><i /><i /><i /><i /></div>
                  <svg className="chart-line" viewBox="0 0 440 180" preserveAspectRatio="none" role="img" aria-label="Courbe de prévision ascendante">
                    <defs><linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#ff765f" stopOpacity=".28" /><stop offset="100%" stopColor="#ff765f" stopOpacity="0" /></linearGradient></defs>
                    <path d="M0,145 C28,138 33,125 62,130 S92,118 114,121 S145,112 164,118 S191,92 215,101 S246,79 270,87 S300,72 323,79 S347,53 370,61 S395,34 440,22 L440,180 L0,180 Z" fill="url(#areaFill)" />
                    <path d="M0,145 C28,138 33,125 62,130 S92,118 114,121 S145,112 164,118 S191,92 215,101 S246,79 270,87 S300,72 323,79 S347,53 370,61 S395,34 440,22" fill="none" stroke="#ff765f" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="370" cy="61" r="5" fill="#fff" stroke="#ff765f" strokeWidth="3" />
                  </svg>
                  <div className="chart-x-labels"><span>2020</span><span>2021</span><span>2022</span><span>2023</span><span>2024</span><span>2025</span></div>
                </div>
                <div className="model-stats"><div><span>R² ajusté</span><strong>0,94</strong></div><div><span>Prob. F-stat</span><strong>0,001</strong></div><div><span>Observations</span><strong>48</strong></div></div>
              </div>
              <div className="floating-note note-top"><span className="note-icon"><Check size={14} /></span><span><strong>Diagnostic validé</strong><small>Résidus stationnaires</small></span></div>
              <div className="floating-note note-bottom"><span className="note-icon blue-note"><FileSpreadsheet size={14} /></span><span><strong>Cas pratique #04</strong><small>Commerce extérieur</small></span><ChevronRight size={15} /></div>
            </div>
          </div>
          <a className="scroll-cue" href="#programme" aria-label="Descendre vers le programme"><ArrowDown size={16} /><span>Explorer</span></a>
        </section>

        <section className="intro-strip" id="methode">
          <div className="container intro-grid">
            <div className="section-kicker">01 <span /> L’approche</div>
            <div className="intro-statement"><h2>Pas de théorie en apesanteur.<br /><span>Des modèles qui servent vraiment.</span></h2></div>
            <div className="intro-text"><p>Vous n’apprenez pas seulement à cliquer dans EViews. Vous apprenez à poser la bonne question, choisir le bon modèle et défendre vos conclusions.</p><a href="#programme" className="arrow-link">Notre méthode en détail <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="program-section" id="programme">
          <div className="container">
            <div className="section-heading-row"><div><div className="section-kicker coral-kicker">02 <span /> Le parcours</div><h2>Un chemin clair vers<br /><em>l’autonomie analytique.</em></h2></div><p className="heading-aside">4 modules · 12 heures de pratique<br />à votre rythme, avec un fil conducteur.</p></div>
            <div className="modules-list">{modules.map((module) => { const Icon = module.icon; return <article className="module-card" key={module.number}><div className={`module-number ${module.accent}`}>{module.number}</div><div className="module-icon"><Icon size={22} strokeWidth={1.7} /></div><div className="module-copy"><span className="module-tag">{module.tag}</span><h3>{module.title}</h3><p>{module.text}</p></div><ArrowUpRight className="module-arrow" size={21} /></article>; })}</div>
            <div className="program-footer"><div className="program-meta"><Clock3 size={17} /><span>Accès pendant 6 mois</span><span className="meta-divider" /><BookOpen size={17} /><span>Support PDF inclus</span></div><a className="button button-dark" href="#inscription">Voir le détail des modules <ArrowUpRight size={17} /></a></div>
          </div>
        </section>

        <section className="benefits-section">
          <div className="container benefits-layout">
            <div className="benefit-visual"><div className="visual-scribble" aria-hidden="true">↗</div><div className="benefit-stamp"><Sparkles size={16} /><span>Focus<br /><strong>impact</strong></span></div><div className="benefit-quote">“Comprendre les chiffres<br />pour mieux <em>agir.</em>”</div><div className="benefit-axis axis-x" /><div className="benefit-axis axis-y" /><div className="benefit-bars"><i /><i /><i /><i /><i /></div><span className="axis-label label-x">complexité</span><span className="axis-label label-y">confiance</span></div>
            <div className="benefit-copy"><div className="section-kicker">03 <span /> Les bénéfices</div><h2>Ce que vous saurez<br /><em>faire concrètement.</em></h2><p>Une formation utile se mesure à ce que vous pouvez produire dès le lendemain. Chaque étape est pensée pour vous rendre plus confiant face à vos données.</p><ul className="benefit-list">{benefits.map((benefit) => <li key={benefit}><CheckCircle2 size={19} /><span>{benefit}</span></li>)}</ul><a className="arrow-link" href="#inscription">Voir les objectifs pédagogiques <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="audience-section" id="public">
          <div className="container audience-layout"><div><div className="section-kicker coral-kicker">04 <span /> Le bon point de départ</div><h2>EViews vous attend.<br /><em>Quel est votre projet ?</em></h2></div><div className="audience-cards"><div className="audience-card"><div className="audience-icon"><Target size={20} /></div><div><h3>Vous étudiez</h3><p>Donnez de la profondeur à vos mémoires et travaux de recherche.</p></div></div><div className="audience-card"><div className="audience-icon"><BookOpen size={20} /></div><div><h3>Vous cherchez</h3><p>Structurez une analyse solide, de l’hypothèse à la conclusion.</p></div></div><div className="audience-card"><div className="audience-icon"><Users size={20} /></div><div><h3>Vous décidez</h3><p>Appuyez vos recommandations sur des résultats lisibles et robustes.</p></div></div></div></div>
        </section>

        <section className="signup-section" id="inscription">
          <div className="container signup-layout"><div className="signup-copy"><div className="section-kicker light-kicker">05 <span /> Passer à l’action</div><h2>Votre prochain modèle<br /><em>commence ici.</em></h2><p>Recevez le programme complet et les prochaines dates de session directement dans votre boîte mail.</p><div className="signup-assurance"><Check size={15} /> Sans engagement · Réponse sous 24h</div></div><div className="signup-form-wrap">{submitted ? <div className="success-message"><div className="success-icon"><CheckCircle2 size={28} /></div><h3>Demande bien reçue.</h3><p>Merci pour votre intérêt. Nous vous envoyons le programme complet très vite.</p><button className="button button-light" type="button" onClick={() => setSubmitted(false)}>Envoyer une autre demande</button></div> : <form className="signup-form" onSubmit={handleSubmit}><div className="form-heading"><span>INSCRIPTION</span><strong>Parlons de votre projet.</strong></div><label>Votre prénom<input type="text" name="firstName" placeholder="Ex. Amina" required /></label><label>Votre adresse email<input type="email" name="email" placeholder="amina@exemple.com" required /></label><label>Je suis…<select name="profile" defaultValue=""><option value="" disabled>Sélectionnez votre profil</option><option>Étudiant·e</option><option>Chercheur·se</option><option>Analyste / professionnel·le</option></select></label><button className="button button-coral" type="submit">Recevoir le programme <ArrowUpRight size={17} /></button><small>En envoyant ce formulaire, vous acceptez d’être recontacté au sujet de la formation.</small></form>}</div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-row"><a className="brand footer-brand" href="#accueil"><span className="brand-mark" aria-hidden="true"><span /></span><span className="brand-wordmark">EViews<span>Pro</span></span></a><p>Apprendre. Modéliser. Décider.</p><div className="footer-links"><a href="#programme">Programme</a><a href="#methode">Méthode</a><a href="#inscription">Contact</a></div><span className="footer-copy">© 2026 EViews Pro</span></div></footer>
    </div>
  );
}
