// ===== LANGUAGE SELECTOR SCRIPT =====
function toggleLangMenu() {
  const menu = document.querySelector('.lang-options');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

// ===== TRANSLATIONS =====
// script.js

// Objet de traduction fourni
const translations = {
  fr: {
    title: "Rechargecardstatus.fr",
    nav_home: "Accueil",
    lang_en: "English",
    hero_title: "Bienvenue sur Rechargecardstatus.fr",
    hero_subtitle: "Vérifiez rapidement l’authenticité de vos tickets, cartes ou codes d’achat.",
    btn_explore: "Découvrir nos offres",
    transcash: "Transcash",
    pcs: "PCS",
    neosurf: "Neosurf",
    steam: "Steam",
    google_play: "Google Play",
    paysafecard: "Paysafe Card",
    amazon: "Amazon",
    playstation_store: "Playstation Store",
    itunes: "iTunes",
    faq_title: "FAQ",
    faq1_q: "Qu'est-ce qu’un ticket de recharge ou un ticket prépayé ?",
    faq1_a: "C’est un code prépayé utilisé comme moyen de paiement. Il fonctionne sans compte bancaire. Pratique pour les achats en ligne sécurisés.",
    faq2_q: "Est-ce que ce service est gratuit ?",
    faq2_a: "Oui, la vérification est totalement gratuite.",
    faq3_q: "Quels types de cartes puis-je vérifier ?",
    faq3_a: "Vous pouvez vérifier des cartes Transcash, PCS, Neosurf, Steam, Google Play, Amazon et bien d'autres.",
    faq4_q: "Comment recevoir un email de confirmation ?",
    faq4_a: "Indiquez une adresse email valide lors de la vérification. Vous recevrez automatiquement un message. Il vous informe du statut de votre ticket.",
    footer_gallery: "Galerie",
    footer_faq: "FAQ",
    footer_contact: "Contact",
    footer_copyright: "© 2025 Rechargecardstatus.fr Tous droits réservés."
  },
  en: {
    title: "Rechargecardstatus.fr",
    nav_home: "Home",
    lang_en: "English",
    hero_title: "Welcome to Rechargecardstatus.fr",
    hero_subtitle: "Quickly check the authenticity of your tickets, cards, or purchase codes.",
    btn_explore: "Discover our offers",
    transcash: "Transcash",
    pcs: "PCS",
    neosurf: "Neosurf",
    steam: "Steam",
    google_play: "Google Play",
    paysafecard: "Paysafe Card",
    amazon: "Amazon",
    playstation_store: "Playstation Store",
    itunes: "iTunes",
    faq_title: "FAQ",
    faq1_q: "What is a recharge ticket or prepaid ticket?",
    faq1_a: "It is a prepaid code used as a means of payment. It works without a bank account. Convenient for secure online purchases.",
    faq2_q: "Is this service free?",
    faq2_a: "Yes, the verification is completely free.",
    faq3_q: "What types of cards can I verify?",
    faq3_a: "You can verify Transcash, PCS, Neosurf, Steam, Google Play, Amazon, and many others.",
    faq4_q: "How do I receive a confirmation email?",
    faq4_a: "Provide a valid email address during verification. You will automatically receive a message informing you of your ticket's status.",
    footer_gallery: "Gallery",
    footer_faq: "FAQ",
    footer_contact: "Contact",
    footer_copyright: "© 2025 Rechargecardstatus.fr All rights reserved."
  },
  es: {
    title: "Rechargecardstatus.fr",
    nav_home: "Inicio",
    lang_en: "Inglés",
    hero_title: "Bienvenido a Rechargecardstatus.fr",
    hero_subtitle: "Verifique rápidamente la autenticidad de sus boletos, tarjetas o códigos de compra.",
    btn_explore: "Descubra nuestras ofertas",
    transcash: "Transcash",
    pcs: "PCS",
    neosurf: "Neosurf",
    steam: "Steam",
    google_play: "Google Play",
    paysafecard: "Paysafe Card",
    amazon: "Amazon",
    playstation_store: "Playstation Store",
    itunes: "iTunes",
    faq_title: "Preguntas Frecuentes",
    faq1_q: "¿Qué es un ticket de recarga o ticket prepago?",
    faq1_a: "Es un código prepago usado como medio de pago. Funciona sin cuenta bancaria. Práctico para compras en línea seguras.",
    faq2_q: "¿Este servicio es gratuito?",
    faq2_a: "Sí, la verificación es totalmente gratuita.",
    faq3_q: "¿Qué tipos de tarjetas puedo verificar?",
    faq3_a: "Puedes verificar tarjetas Transcash, PCS, Neosurf, Steam, Google Play, Amazon y muchas más.",
    faq4_q: "¿Cómo recibir un correo de confirmación?",
    faq4_a: "Indica una dirección de correo válida durante la verificación. Recibirás un mensaje automático con el estado de tu ticket.",
    footer_gallery: "Galería",
    footer_faq: "Preguntas",
    footer_contact: "Contacto",
    footer_copyright: "© 2025 Rechargecardstatus.fr Todos los derechos reservados."
  },
  de: {
    title: "Rechargecardstatus.fr",
    nav_home: "Startseite",
    lang_en: "Englisch",
    hero_title: "Willkommen bei Rechargecardstatus.fr",
    hero_subtitle: "Überprüfen Sie schnell die Echtheit Ihrer Tickets, Karten oder Einkaufscodes.",
    btn_explore: "Entdecken Sie unsere Angebote",
    transcash: "Transcash",
    pcs: "PCS",
    neosurf: "Neosurf",
    steam: "Steam",
    google_play: "Google Play",
    paysafecard: "Paysafe Card",
    amazon: "Amazon",
    playstation_store: "Playstation Store",
    itunes: "iTunes",
    faq_title: "FAQ",
    faq1_q: "Was ist ein Auflade- oder Prepaid-Ticket?",
    faq1_a: "Es ist ein Prepaid-Code, der als Zahlungsmittel verwendet wird. Funktioniert ohne Bankkonto. Praktisch für sichere Online-Einkäufe.",
    faq2_q: "Ist dieser Service kostenlos?",
    faq2_a: "Ja, die Überprüfung ist völlig kostenlos.",
    faq3_q: "Welche Kartenarten kann ich überprüfen?",
    faq3_a: "Sie können Transcash-, PCS-, Neosurf-, Steam-, Google Play-, Amazon-Karten und viele mehr überprüfen.",
    faq4_q: "Wie erhalte ich eine Bestätigungs-E-Mail?",
    faq4_a: "Geben Sie bei der Überprüfung eine gültige E-Mail-Adresse an. Sie erhalten automatisch eine Nachricht mit dem Status Ihres Tickets.",
    footer_gallery: "Galerie",
    footer_faq: "FAQ",
    footer_contact: "Kontakt",
    footer_copyright: "© 2025 Rechargecardstatus.fr Alle Rechte vorbehalten."
  },
  it: {
    title: "Rechargecardstatus.fr",
    nav_home: "Home",
    lang_en: "Inglese",
    hero_title: "Benvenuto su Rechargecardstatus.fr",
    hero_subtitle: "Verifica rapidamente l'autenticità dei tuoi biglietti, carte o codici di acquisto.",
    btn_explore: "Scopri le nostre offerte",
    transcash: "Transcash",
    pcs: "PCS",
    neosurf: "Neosurf",
    steam: "Steam",
    google_play: "Google Play",
    paysafecard: "Paysafe Card",
    amazon: "Amazon",
    playstation_store: "Playstation Store",
    itunes: "iTunes",
    faq_title: "FAQ",
    faq1_q: "Cos’è un ticket di ricarica o un ticket prepagato?",
    faq1_a: "È un codice prepagato usato come metodo di pagamento. Funziona senza conto bancario. Pratico per acquisti online sicuri.",
    faq2_q: "Questo servizio è gratuito?",
    faq2_a: "Sì, la verifica è completamente gratuita.",
    faq3_q: "Quali tipi di carte posso verificare?",
    faq3_a: "Puoi verificare carte Transcash, PCS, Neosurf, Steam, Google Play, Amazon e molte altre.",
    faq4_q: "Come ricevo una email di conferma?",
    faq4_a: "Indica un indirizzo email valido durante la verifica. Riceverai automaticamente un messaggio con lo stato del tuo ticket.",
    footer_gallery: "Galleria",
    footer_faq: "FAQ",
    footer_contact: "Contatto",
    footer_copyright: "© 2025 Rechargecardstatus.fr Tutti i diritti riservati."
  },
  pt: {
    title: "Rechargecardstatus.fr",
    nav_home: "Início",
    lang_en: "Inglês",
    hero_title: "Bem-vindo ao Rechargecardstatus.fr",
    hero_subtitle: "Verifique rapidamente a autenticidade dos seus bilhetes, cartões ou códigos de compra.",
    btn_explore: "Descubra nossas ofertas",
    transcash: "Transcash",
    pcs: "PCS",
    neosurf: "Neosurf",
    steam: "Steam",
    google_play: "Google Play",
    paysafecard: "Paysafe Card",
    amazon: "Amazon",
    playstation_store: "Playstation Store",
    itunes: "iTunes",
    faq_title: "FAQ",
    faq1_q: "O que é um bilhete de recarga ou bilhete pré-pago?",
    faq1_a: "É um código pré-pago usado como meio de pagamento. Funciona sem conta bancária. Prático para compras online seguras.",
    faq2_q: "Este serviço é gratuito?",
    faq2_a: "Sim, a verificação é totalmente gratuita.",
    faq3_q: "Que tipos de cartões posso verificar?",
    faq3_a: "Você pode verificar cartões Transcash, PCS, Neosurf, Steam, Google Play, Amazon e muitos outros.",
    faq4_q: "Como recebo um e-mail de confirmação?",
    faq4_a: "Informe um endereço de e-mail válido durante a verificação. Você receberá automaticamente uma mensagem com o status do seu bilhete.",
    footer_gallery: "Galeria",
    footer_faq: "FAQ",
    footer_contact: "Contato",
    footer_copyright: "© 2025 Rechargecardstatus.fr Todos os direitos reservados."
  }
};



// ====== DÉCLENCHEMENT AUTOMATIQUE À L’ARRIVÉE ======
  document.addEventListener('DOMContentLoaded', () => {
    let lang = localStorage.getItem('lang');
    if (!lang) {
      const browserLang = navigator.language.slice(0, 2);
      const supportedLangs = ['fr', 'en', 'es', 'de', 'it', 'pt'];
      lang = supportedLangs.includes(browserLang) ? browserLang : 'fr';
      localStorage.setItem('lang', lang);
    }
    applyTranslations(lang);
    updateSelectedLangDisplay(lang);
  });
  
  // ====== FONCTIONS ======
  
  function toggleLangMenu() {
    const menu = document.querySelector('.lang-options');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
  
  function setLang(lang) {
    localStorage.setItem('lang', lang);
    applyTranslations(lang);
    updateSelectedLangDisplay(lang);
    document.querySelector('.lang-options').style.display = 'none';
  }
  
  function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
  
  function updateSelectedLangDisplay(lang) {
    const selectedLangEl = document.querySelector('.selected-lang');
    const flags = {
      en: 'gb', fr: 'fr', es: 'es', de: 'de', it: 'it', pt: 'pt'
    };
    const names = {
      en: 'English', fr: 'Français', es: 'Español',
      de: 'Deutsch', it: 'Italiano', pt: 'Português'
    };
    selectedLangEl.innerHTML = `
      <img src="https://flagcdn.com/w20/${flags[lang]}.png" alt="${lang}">
      <span class="ms-2">${names[lang]}</span>
    `;
  }