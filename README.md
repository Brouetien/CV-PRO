# Portfolio & CV Cinématographique — Brou Etien Jacques Ezechiel

> **Direction Artistique :** Preset D — *Aura Digitale* (Vide `#0A0A14`, Violet Néon `#7B61FF`, Cyan `#00F0FF`, Typographie Sora + Instrument Serif + Fira Code).

---

## 🌟 Aperçu du Projet

Ce projet est une vitrine personnelle et un CV en ligne de haute précision conçu selon les principes du **Vibe Coding** et du design cinématographique :
- **Grain & Texture :** Filtre SVG inline `<feTurbulence>` simulant un grain argentique haute fidélité (opacité 0.05).
- **Courbures Organiques :** Conteneurs fluides avec `rounded-[2.5rem]` et `rounded-[3rem]`.
- **Animations GSAP & ScrollTrigger :**
  - Entrée en cascade (stagger) du Hero.
  - Navbar dynamique flottante en pilule qui s'adapte au scroll (morphing avec flou d'arrière-plan `backdrop-blur-xl`).
  - Timeline vivante alternée pour les expériences avec points néon pulsants.
  - Dashboard de compétences avec jauges circulaires SVG animées et compteurs numériques.
  - Micro-interactions magnétiques sur les boutons et cartes.

---

## 🚀 2 Façons d'exécuter et prévisualiser

### Option 1 : Aperçu Immédiat (Zéro installation)
Ouvrez directement le fichier **`preview.html`** dans n'importe quel navigateur (Google Chrome, Microsoft Edge, Brave, Firefox) :
- Double-cliquez sur `preview.html` dans l'explorateur de fichiers.
- Vous bénéficierez immédiatement du rendu 100% interactif avec GSAP, Lucide icons, Tailwind et Google Fonts.

### Option 2 : Mode Développement Vite / React 19
Si vous avez Node.js installé sur votre machine :
```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur local
npm run dev

# 3. Compiler pour la production (build optimisé)
npm run build
```

---

## 📂 Architecture des Fichiers

```text
CV PRO/
├── preview.html                     # Fichier autonome exécutable directement sans installation
├── index.html                       # Point d'entrée de l'application Vite React
├── package.json                     # Dépendances (React 19, GSAP, Lucide, Tailwind v3)
├── vite.config.js                   # Configuration Vite
├── tailwind.config.js               # Tokens Aura Digitale (palette, polices, ombres néon)
├── postcss.config.js
├── public/
│   └── CV_Brou_Etien_Jacques_Ezechiel.pdf  # CV téléchargeable relié aux boutons CTA
└── src/
    ├── main.jsx                     # Montage React
    ├── App.jsx                      # Composant principal autonome haute fidélité
    └── index.css                    # Directives Tailwind, micro-interactions magnétiques
```

---

## 🎨 Spécifications du Profil

- **Nom complet :** Brou Etien Jacques Ezechiel
- **Titre :** Technicien NOC & Spécialiste Réseaux — Vibe Coder en Devenir
- **Parcours :** BTS Réseaux Informatiques et Télécommunications (RIT), 2 ans d'expérience terrain FTTH, formateur en informatique et passionné d'innovations propulsées par l'intelligence artificielle.
- **Expériences :**
  1. Technicien réseaux et télécommunications (FTTH)
  2. Formateur en informatique
  3. Créateur de solutions numériques (Vibe Coding)
- **Compétences clés :**
  1. Réseaux informatiques & télécommunications (92%)
  2. Maintenance informatique (88%)
  3. Support IT & Assistance (86%)
  4. Formation informatique & Pédagogie (90%)
  5. Création numérique & IA (85%)
