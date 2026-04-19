// ===== GESTION DU SÉLECTEUR DE LANGUE =====
function toggleLangMenu() {
  const menu = document.querySelector('.lang-options');
  if (menu) {
    const isVisible = menu.style.display === 'block';
    menu.style.display = isVisible ? 'none' : 'block';
  }
}

// ===== DICTIONNAIRE COMPLET DES TRADUCTIONS =====
const translations = {
  fr: {
    contact_title: "Vérification de Ticket",
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
    footer_copyright: "© 2025 Rechstat.com Tous droits réservés.",
  },
  en: {
    contact_title: "Ticket Verification",
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
    footer_copyright: "© 2025 Rechstat.com All rights reserved.",
  },
  es: {
    contact_title: "Verificación de Ticket",
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
    footer_copyright: "© 2025 Rechstat.com Todos los derechos reservados.",
  },
  de: {
    contact_title: "Ticket-Überprüfung",
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
    footer_copyright: "© 2025 Rechstat.com Alle Rechte vorbehalten.",
  },
  it: {
    contact_title: "Verifica del Biglietto",
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
    footer_copyright: "© 2025 Rechstat.com Tutti i diritti riservati.",
  },
  pt: {
    contact_title: "Verificação de Bilhete",
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
    footer_copyright: "© 2025 Rechstat.com Todos os direitos reservados.",
  }
};

// ===== APPLICATION DES TEXTES =====
function updateTexts(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// ===== CHANGEMENT DE LANGUE =====
function setLang(langCode) {
  const flags = {
    fr: { img: 'https://flagcdn.com/w20/fr.png', name: 'Français' },
    en: { img: 'https://flagcdn.com/w20/gb.png', name: 'English' },
    es: { img: 'https://flagcdn.com/w20/es.png', name: 'Español' },
    de: { img: 'https://flagcdn.com/w20/de.png', name: 'Deutsch' },
    it: { img: 'https://flagcdn.com/w20/it.png', name: 'Italiano' },
    pt: { img: 'https://flagcdn.com/w20/pt.png', name: 'Português' }
  };

  if (!translations[langCode]) return;

  // Mise à jour visuelle du bouton sélectionné
  const selected = document.querySelector('.selected-lang');
  if (selected) {
    selected.innerHTML = `<img src="${flags[langCode].img}" alt="${langCode}"><span>${flags[langCode].name}</span>`;
  }

  // Fermer le menu déroulant
  const menu = document.querySelector('.lang-options');
  if (menu) menu.style.display = 'none';

  // Appliquer les traductions
  updateTexts(langCode);

  // Sauvegarder le choix
  localStorage.setItem('lang', langCode);
}

// ===== FERMETURE AU CLIC EXTÉRIEUR =====
document.addEventListener('click', (e) => {
  const container = document.querySelector('.custom-language-selector');
  if (container && !container.contains(e.target)) {
    const menu = document.querySelector('.lang-options');
    if (menu) menu.style.display = 'none';
  }
});

// ===== INITIALISATION AU CHARGEMENT =====
document.addEventListener('DOMContentLoaded', () => {
  // 1. Charger la langue préférée ou français par défaut
  const savedLang = localStorage.getItem('lang') || 'fr';
  setLang(savedLang);

  // 2. Horodatage pour le champ caché
  const timestampField = document.getElementById('submitted_at');
  if (timestampField) {
    timestampField.value = new Date().toLocaleString();
  }

  // 3. Validation simple du formulaire
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', (e) => {
      const inputs = form.querySelectorAll('input[required]');
      let valid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = "#ff4d4d";
          valid = false;
        } else {
          input.style.borderColor = "#e2e8f0";
        }
      });

      if (!valid) {
        e.preventDefault();
        alert("Veuillez remplir tous les champs obligatoires.");
      }
    });
  }
});
