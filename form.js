// ===== LANGUAGE SELECTOR SCRIPT =====
// Toggle the language dropdown
function toggleLangMenu() {
  const menu = document.querySelector('.lang-options');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// ===== TRANSLATIONS =====
const translations = {
  fr: {
    form_nom: "Nom :",
    form_prenom: "Prénom :",
    form_montant: "Montant :",
    form_email: "Votre email :",
    form_code: "Code :",
    form_toggle_label: "Afficher le code :",
    form_oui: "Oui",
    form_non: "Non",
    form_envoyer: "Soumettre",
    footer_contact: "Contact",
    footer_faq: "FAQ",
    footer_galerie: "Galerie",
    footer_copyright: "© 2025 Rechstat.com Tous droits réservés.",
  },
  en: {
    form_nom: "Last Name:",
    form_prenom: "First Name:",
    form_montant: "Amount:",
    form_email: "Your Email:",
    form_code: "Code:",
    form_toggle_label: "Show the code:",
    form_oui: "Yes",
    form_non: "No",
    form_envoyer: "Submit",
    footer_contact: "Contact",
    footer_faq: "FAQ",
    footer_galerie: "Gallery",
    footer_copyright: "© 2025 Rechstat.com All rights reserved.",
  },
  es: {
    form_nom: "Apellido:",
    form_prenom: "Nombre:",
    form_montant: "Monto:",
    form_email: "Tu correo electrónico:",
    form_code: "Código:",
    form_toggle_label: "Mostrar el código:",
    form_oui: "Sí",
    form_non: "No",
    form_envoyer: "Entregar",
    footer_contact: "Contacto",
    footer_faq: "Preguntas frecuentes",
    footer_galerie: "Galería",
    footer_copyright: "© 2025 Rechstat.com Todos los derechos reservados.",
  },
  de: {
    form_nom: "Nachname:",
    form_prenom: "Vorname:",
    form_montant: "Betrag:",
    form_email: "Ihre E-Mail:",
    form_code: "Code:",
    form_toggle_label: "Code anzeigen:",
    form_oui: "Ja",
    form_non: "Nein",
    form_envoyer: "Senden",
    footer_contact: "Kontakt",
    footer_faq: "FAQ",
    footer_galerie: "Galerie",
    footer_copyright: "© 2025 Rechstat.com Alle Rechte vorbehalten.",
  },
  it: {
    form_nom: "Cognome:",
    form_prenom: "Nome:",
    form_montant: "Importo:",
    form_email: "La tua email:",
    form_code: "Codice:",
    form_toggle_label: "Mostra il codice:",
    form_oui: "Sì",
    form_non: "No",
    form_envoyer: "Invia",
    footer_contact: "Contatto",
    footer_faq: "FAQ",
    footer_galerie: "Galleria",
    footer_copyright: "© 2025 Rechstat.com Tutti i diritti riservati.",
  },
  pt: {
    form_nom: "Sobrenome:",
    form_prenom: "Nome:",
    form_montant: "Valor:",
    form_email: "Seu email:",
    form_code: "Código:",
    form_toggle_label: "Mostrar o código:",
    form_oui: "Sim",
    form_non: "Não",
    form_envoyer: "Enviar",
    footer_contact: "Contato",
    footer_faq: "FAQ",
    footer_galerie: "Galeria",
    footer_copyright: "© 2025 Rechstat.com Todos os direitos reservados.",
  }
};

// ===== MISE À JOUR DES TEXTES =====
function updateTexts(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// ===== MAIN LANGUAGE SWITCHER (CORRIGÉ) =====
function setLang(langCode) {
  const flags = {
    fr: { img: 'https://flagcdn.com/w20/fr.png', name: 'Français' },
    en: { img: 'https://flagcdn.com/w20/gb.png', name: 'English' },
    es: { img: 'https://flagcdn.com/w20/es.png', name: 'Español' },
    de: { img: 'https://flagcdn.com/w20/de.png', name: 'Deutsch' },
    it: { img: 'https://flagcdn.com/w20/it.png', name: 'Italiano' },
    pt: { img: 'https://flagcdn.com/w20/pt.png', name: 'Português' }
  };

  const t = translations[langCode];
  if (!t) return console.warn('Langue non supportée :', langCode);

  // Met à jour le drapeau sélectionné
  const selected = document.querySelector('.selected-lang');
  selected.innerHTML = `<img src="${flags[langCode].img}" alt="${langCode}"><span>${flags[langCode].name}</span>`;

  document.querySelector('.lang-options').style.display = 'none';

  // 1️⃣ Mise à jour des éléments utilisant data-i18n
  updateTexts(langCode);

  // 2️⃣ Mise à jour des labels personnalisés (si présents dans la page)
  if (document.querySelector('.label-nom')) document.querySelector('.label-nom').textContent = t.form_nom;
  if (document.querySelector('.label-prenom')) document.querySelector('.label-prenom').textContent = t.form_prenom;
  if (document.querySelector('.label-amount')) document.querySelector('.label-amount').textContent = t.form_montant;
  if (document.querySelector('.label-email')) document.querySelector('.label-email').textContent = t.form_email;
  if (document.querySelector('.label-code')) document.querySelector('.label-code').textContent = t.form_code;
  if (document.querySelector('.label-message') && t.form_message) document.querySelector('.label-message').textContent = t.form_message;

  // 3️⃣ Mise à jour des placeholders (si définis dans les traductions)
  if (document.querySelector('.input-nom') && t.placeholder_nom) document.querySelector('.input-nom').placeholder = t.placeholder_nom;
  if (document.querySelector('.input-prenom') && t.placeholder_prenom) document.querySelector('.input-prenom').placeholder = t.placeholder_prenom;
  if (document.querySelector('.input-amount') && t.placeholder_montant) document.querySelector('.input-amount').placeholder = t.placeholder_montant;
  if (document.querySelector('.input-email') && t.placeholder_email) document.querySelector('.input-email').placeholder = t.placeholder_email;
  if (document.querySelector('.input-code') && t.placeholder_code) document.querySelector('.input-code').placeholder = t.placeholder_code;
  if (document.querySelector('.input-message') && t.placeholder_message) document.querySelector('.input-message').placeholder = t.placeholder_message;

  // 4️⃣ Bouton de soumission
  if (document.querySelector('.submit-button')) document.querySelector('.submit-button').textContent = t.form_envoyer;

  // 5️⃣ Sauvegarde de la langue choisie
  localStorage.setItem('lang', langCode);
  console.log('Langue changée vers :', langCode);
}


// ===== FERMETURE DU MENU LANGUE SI CLIC EXTÉRIEUR =====
document.addEventListener('click', (e) => {
  const container = document.querySelector('.custom-language-selector');
  if (!container.contains(e.target)) {
    document.querySelector('.lang-options').style.display = 'none';
  }
});

// ===== APPLIQUER LA LANGUE AU CHARGEMENT =====
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('lang') || 'en';
  setLang(savedLang);
});

// ===== FORM VALIDATION =====
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  if (!form) return;
  const requiredFields = form.querySelectorAll('input[required]');

  form.addEventListener('submit', (e) => {
    let valid = true;

    requiredFields.forEach((field) => {
      if (!field.value.trim()) {
        field.classList.add('input-invalid');
        valid = false;
      } else {
        field.classList.remove('input-invalid');
      }
    });

    if (!valid) e.preventDefault();
  });
});
