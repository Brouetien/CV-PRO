const fs = require('fs');
const path = require('path');

// Image JPEG de Brou Ezechiel
const imgBytes = fs.readFileSync(path.join(__dirname, 'brou-ezechiel.jpg'));
const imgW = 682;
const imgH = 1024;

// Construction du PDF binaire structuré conforme à la norme PDF 1.4
function buildPDF() {
  const objects = [];
  const addObj = (content) => {
    objects.push(content);
    return objects.length; // 1-based index
  };

  // Obj 1: Catalog
  const catalogIdx = addObj(`<< /Type /Catalog /Pages 2 0 R >>`);

  // Obj 2: Pages (forward ref, updated later)
  const pagesIdx = addObj(null);

  // Obj 3: Page (forward ref, updated later)
  const pageIdx = addObj(null);

  // Obj 4: Fonts
  const fHelveticaBold = addObj(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>`);
  const fHelvetica = addObj(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`);
  const fHelveticaOblique = addObj(`<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>`);

  // Obj 7: Image XObject (JPEG)
  const imgIdx = objects.length + 1;
  const imgHeader = Buffer.from(
    `<< /Type /XObject /Subtype /Image /Width ${imgW} /Height ${imgH} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imgBytes.length} >>\nstream\n`
  );
  const imgFooter = Buffer.from(`\nendstream`);
  const fullImgObj = Buffer.concat([imgHeader, imgBytes, imgFooter]);
  objects.push(fullImgObj);

  // Stream de dessin graphique et textuel vectoriel
  // Dimensions A4 : 595.28 x 841.89 points
  let s = '';

  // 1. Fond blanc général
  s += `1 1 1 rg 0 0 595.28 841.89 re f\n`;

  // 2. Grand bandeau d'en-tête Violet Royal (#7C3AED = 0.486 0.227 0.929)
  s += `0.486 0.227 0.929 rg 0 710 595.28 132 re f\n`;

  // Ligne de séparation accent doux
  s += `0.427 0.157 0.851 rg 0 706 595.28 4 re f\n`;

  // 3. Photo de Brou Ezechiel (carrée/arrondie en haut à droite)
  // Position : x=475, y=722, largeur=85, hauteur=105
  s += `q\n`;
  // Bordure blanche pour la photo
  s += `1 1 1 rg 468 718 94 114 re f\n`;
  s += `0.95 0.93 1 rg 470 720 90 110 re f\n`;
  // Affichage de l'image
  s += `q 90 0 0 110 470 720 cm /Im1 Do Q\n`;
  s += `Q\n`;

  // Badge "EN LIGNE / DISPONIBLE" sous la photo
  s += `0.063 0.725 0.506 rg 470 708 90 14 re f\n`;
  s += `BT /F1 7 Tf 1 1 1 rg 480 712 Td (DISPONIBLE IMMEDIATEMENT) Tj ET\n`;

  // Textes de l'en-tête (Nom, Titre, Badges)
  s += `BT\n`;
  s += `/F1 20 Tf 1 1 1 rg 35 795 Td (BROU ETIEN JACQUES EZECHIEL) Tj\n`;
  s += `/F3 11 Tf 0.92 0.88 1 rg 0 -17 Td (Technicien NOC - Specialiste Reseaux FTTH - Vibe Coding) Tj\n`;
  s += `ET\n`;

  // Bandeau des contacts réels dans le header (avec icônes/labels clairs)
  s += `BT /F1 8.5 Tf 1 1 1 rg 35 745 Td (WhatsApp: ) Tj /F2 8.5 Tf (wa.me/message/WQGRH5MF27PPI1) Tj ET\n`;
  s += `BT /F1 8.5 Tf 1 1 1 rg 35 730 Td (Email: ) Tj /F2 8.5 Tf (etienezechiel09@gmail.com) Tj ET\n`;
  s += `BT /F1 8.5 Tf 1 1 1 rg 35 715 Td (LinkedIn: ) Tj /F2 8.5 Tf (linkedin.com/in/ezechiel-etien-4b61ab287) Tj ET\n`;

  // 4. Colonne de gauche (Largeur: 340pt) vs Colonne de droite (Largeur: 175pt)
  // Ligne verticale séparatrice subtile
  s += `0.9 0.9 0.95 RG 375 50 1 635 re S\n`;

  // ==========================================
  // COLONNE GAUCHE (Expériences & Profil)
  // ==========================================

  // Section : PROFIL PROFESSIONNEL
  s += `0.486 0.227 0.929 rg 35 680 150 20 re f\n`;
  s += `BT /F1 9 Tf 1 1 1 rg 42 686 Td (PROFIL & MANIFESTE) Tj ET\n`;

  s += `BT /F2 8.5 Tf 0.2 0.23 0.3 rg 35 660 Td\n`;
  s += `(Titulaire d'un BTS en Reseaux Informatiques et Telecommunications \(RIT\), avec 2 ans) Tj\n`;
  s += `0 -12 Td (d'experience dans le deploiement, la maintenance et le depannage des reseaux FTTH.) Tj\n`;
  s += `0 -12 Td (Formateur en informatique, passionne par le Vibe Coding et les applications IA.) Tj\n`;
  s += `ET\n`;

  // Section : EXPERIENCES PROFESSIONNELLES
  s += `0.486 0.227 0.929 rg 35 605 180 20 re f\n`;
  s += `BT /F1 9 Tf 1 1 1 rg 42 611 Td (EXPERIENCES PROFESSIONNELLES) Tj ET\n`;

  // Exp 1: Technicien FTTH
  s += `0.95 0.95 0.98 rg 35 500 325 85 re f\n`;
  s += `0.88 0.85 0.95 RG 35 500 325 85 re S\n`;
  s += `BT\n`;
  s += `/F1 9.5 Tf 0.1 0.1 0.15 rg 45 565 Td (Technicien Reseaux et Telecoms \(FTTH\)) Tj\n`;
  s += `/F1 8 Tf 0.486 0.227 0.929 rg 0 -13 Td (2024 - PRESENT \(2 ANS\)  |  Infrastructures Telecoms) Tj\n`;
  s += `/F2 8 Tf 0.25 0.28 0.35 rg 0 -13 Td (- Maintenance preventive et corrective sur reseaux de fibre optique.) Tj\n`;
  s += `0 -11 Td (- Deploiement, jarretierage, raccordement optique et soudures de precision.) Tj\n`;
  s += `0 -11 Td (- Diagnostic et reflectometrie optique \(OTDR\) pour continuite de service.) Tj\n`;
  s += `ET\n`;

  // Exp 2: Formateur IT
  s += `0.95 0.95 0.98 rg 35 400 325 85 re f\n`;
  s += `0.88 0.85 0.95 RG 35 400 325 85 re S\n`;
  s += `BT\n`;
  s += `/F1 9.5 Tf 0.1 0.1 0.15 rg 45 465 Td (Formateur en Informatique & Numerique) Tj\n`;
  s += `/F1 8 Tf 0.486 0.227 0.929 rg 0 -13 Td (2023 - 2024  |  Pedagogie & Accompagnement) Tj\n`;
  s += `/F2 8 Tf 0.25 0.28 0.35 rg 0 -13 Td (- Transmission pedagogique des fondamentaux de l'informatique moderne.) Tj\n`;
  s += `0 -11 Td (- Initiation aux outils digitaux, bureautique et maintenance de base.) Tj\n`;
  s += `0 -11 Td (- Accompagnement methodologique individualise des apprenants.) Tj\n`;
  s += `ET\n`;

  // Exp 3: Vibe Coding & Solutions IA
  s += `0.95 0.95 0.98 rg 35 300 325 85 re f\n`;
  s += `0.88 0.85 0.95 RG 35 300 325 85 re S\n`;
  s += `BT\n`;
  s += `/F1 9.5 Tf 0.1 0.1 0.15 rg 45 365 Td (Createur de Solutions Numeriques \(Vibe Coding\)) Tj\n`;
  s += `/F1 8 Tf 0.486 0.227 0.929 rg 0 -13 Td (2025 - EN COURS  |  Innovation Web & IA) Tj\n`;
  s += `/F2 8 Tf 0.25 0.28 0.35 rg 0 -13 Td (- Conception de sites web et applications interactives assistees par IA.) Tj\n`;
  s += `0 -11 Td (- Pratique avancee du prompt engineering, frontend React & Tailwind.) Tj\n`;
  s += `0 -11 Td (- Prototypage rapide de solutions digitales a forte valeur ajoutee.) Tj\n`;
  s += `ET\n`;

  // Section : FORMATION & DIPLOMES
  s += `0.486 0.227 0.929 rg 35 255 160 20 re f\n`;
  s += `BT /F1 9 Tf 1 1 1 rg 42 261 Td (DIPLOMES & FORMATION) Tj ET\n`;

  s += `0.98 0.98 1 rg 35 175 325 65 re f\n`;
  s += `0.88 0.85 0.95 RG 35 175 325 65 re S\n`;
  s += `BT\n`;
  s += `/F1 9 Tf 0.1 0.1 0.15 rg 45 223 Td (BTS en Reseaux Informatiques & Telecoms \(RIT\)) Tj\n`;
  s += `/F1 8 Tf 0.486 0.227 0.929 rg 0 -13 Td (2022 - 2024  |  Enseignement Superieur Technique) Tj\n`;
  s += `/F2 7.5 Tf 0.3 0.35 0.4 rg 0 -12 Td (Architecture reseaux LAN/WAN, protocoles TCP/IP, liaisons optiques & systemes.) Tj\n`;
  s += `ET\n`;

  s += `0.98 0.98 1 rg 35 95 325 65 re f\n`;
  s += `0.88 0.85 0.95 RG 35 95 325 65 re S\n`;
  s += `BT\n`;
  s += `/F1 9 Tf 0.1 0.1 0.15 rg 45 143 Td (Specialisation Vibe Coding & Conception Web par IA) Tj\n`;
  s += `/F1 8 Tf 0.486 0.227 0.929 rg 0 -13 Td (2025 - 2026  |  Parcours Pratique Continu) Tj\n`;
  s += `/F2 7.5 Tf 0.3 0.35 0.4 rg 0 -12 Td (Creation web moderne React/Tailwind, automatisation et workflows assistes par IA.) Tj\n`;
  s += `ET\n`;

  // ==========================================
  // COLONNE DROITE (Compétences & Jauges)
  // ==========================================

  // Titre Compétences
  s += `0.486 0.227 0.929 rg 395 680 165 20 re f\n`;
  s += `BT /F1 9 Tf 1 1 1 rg 403 686 Td (TABLEAU DE MAITRISE) Tj ET\n`;

  const skills = [
    { name: '1. Reseaux FTTH & Telecoms', pct: 92, note: 'Fibre, soudure, reflectometrie' },
    { name: '2. Maintenance Informatique', pct: 88, note: 'Diagnostic materiel & logiciel' },
    { name: '3. Support IT & Helpdesk', pct: 86, note: 'Resolution incidents, assistance' },
    { name: '4. Formation & Pedagogie', pct: 90, note: 'Transmission, vulgarisation' },
    { name: '5. Vibe Coding & IA', pct: 85, note: 'Prompts, dev web React & IA' }
  ];

  let curY = 645;
  skills.forEach((sk) => {
    // Nom & pourcentage
    s += `BT /F1 8.5 Tf 0.1 0.1 0.2 rg 395 ${curY} Td (${sk.name}) Tj ET\n`;
    s += `BT /F1 8.5 Tf 0.486 0.227 0.929 rg 540 ${curY} Td (${sk.pct}%) Tj ET\n`;

    // Note sous le titre
    curY -= 11;
    s += `BT /F2 7 Tf 0.5 0.55 0.6 rg 395 ${curY} Td (${sk.note}) Tj ET\n`;

    // Barre de fond
    curY -= 9;
    s += `0.88 0.88 0.92 rg 395 ${curY} 165 6 re f\n`;
    // Barre remplie (#7C3AED)
    const fillW = Math.round(165 * (sk.pct / 100));
    s += `0.486 0.227 0.929 rg 395 ${curY} ${fillW} 6 re f\n`;

    curY -= 22;
  });

  // Bloc Outils & Technologies
  curY -= 10;
  s += `0.486 0.227 0.929 rg 395 ${curY} 165 20 re f\n`;
  s += `BT /F1 9 Tf 1 1 1 rg 403 ${curY + 6} Td (STACK & OUTILS) Tj ET\n`;

  curY -= 20;
  const tools = [
    'Fibre Optique FTTH',
    'Reflectometre OTDR',
    'Supervision NOC',
    'Diagnostic Hardware',
    'Windows & Linux',
    'Vibe Coding & LLM',
    'React 19 & Tailwind',
    'Pedagogie & Coaching'
  ];

  tools.forEach((t) => {
    s += `0.94 0.92 1 rg 395 ${curY} 165 16 re f\n`;
    s += `0.85 0.8 0.95 RG 395 ${curY} 165 16 re S\n`;
    s += `BT /F1 7.5 Tf 0.3 0.2 0.5 rg 405 ${curY + 4} Td (v  ${t}) Tj ET\n`;
    curY -= 21;
  });

  // Footer A4
  s += `0.95 0.95 0.98 rg 0 0 595.28 35 re f\n`;
  s += `0.88 0.85 0.95 RG 0 35 595.28 1 re S\n`;
  s += `BT /F1 8 Tf 0.486 0.227 0.929 rg 35 15 Td (BROU ETIEN JACQUES EZECHIEL) Tj /F2 8 Tf 0.4 0.4 0.5 rg (  |  CV Professionnel Verifie 2026  |  Fait avec le Vibe Coding) Tj ET\n`;

  // Object Stream Textuel
  const streamBuf = Buffer.from(s, 'utf-8');
  const contentStreamIdx = addObj(
    `<< /Length ${streamBuf.length} >>\nstream\n${s}\nendstream`
  );

  // Obj: Annotations de liens cliquables réels dans le PDF !
  // WhatsApp: x=35, y=740, w=220, h=12
  const linkWhatsApp = addObj(
    `<< /Type /Annot /Subtype /Link /Rect [35 740 260 754] /Border [0 0 0] /A << /S /URI /URI (https://wa.me/message/WQGRH5MF27PPI1) >> >>`
  );
  // Email: x=35, y=725, w=220, h=12
  const linkEmail = addObj(
    `<< /Type /Annot /Subtype /Link /Rect [35 725 260 739] /Border [0 0 0] /A << /S /URI /URI (mailto:etienezechiel09@gmail.com) >> >>`
  );
  // LinkedIn: x=35, y=710, w=220, h=12
  const linkLinkedIn = addObj(
    `<< /Type /Annot /Subtype /Link /Rect [35 710 260 724] /Border [0 0 0] /A << /S /URI /URI (https://www.linkedin.com/in/ezechiel-etien-4b61ab287) >> >>`
  );

  // Mettre à jour l'Obj Page (Obj 3)
  objects[pageIdx - 1] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Contents ${contentStreamIdx} 0 R /Annots [${linkWhatsApp} 0 R ${linkEmail} 0 R ${linkLinkedIn} 0 R] /Resources << /Font << /F1 ${fHelveticaBold} 0 R /F2 ${fHelvetica} 0 R /F3 ${fHelveticaOblique} 0 R >> /XObject << /Im1 ${imgIdx} 0 R >> >> >>`;

  // Mettre à jour l'Obj Pages (Obj 2)
  objects[pagesIdx - 1] = `<< /Type /Pages /Kids [${pageIdx} 0 R] /Count 1 >>`;

  // Assemblage du fichier PDF final avec table xref
  let pdfBuffer = Buffer.from('%PDF-1.4\n%\xE2\xE3\xCF\xD3\n');
  const offsets = [];

  for (let i = 0; i < objects.length; i++) {
    offsets.push(pdfBuffer.length);
    const objNum = i + 1;
    pdfBuffer = Buffer.concat([pdfBuffer, Buffer.from(`${objNum} 0 obj\n`)]);
    if (Buffer.isBuffer(objects[i])) {
      pdfBuffer = Buffer.concat([pdfBuffer, objects[i], Buffer.from('\nendobj\n')]);
    } else {
      pdfBuffer = Buffer.concat([pdfBuffer, Buffer.from(`${objects[i]}\nendobj\n`)]);
    }
  }

  const startXref = pdfBuffer.length;
  let xref = `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 0; i < offsets.length; i++) {
    const offStr = String(offsets[i]).padStart(10, '0');
    xref += `${offStr} 00000 n \n`;
  }
  xref += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${startXref}\n%%EOF\n`;

  pdfBuffer = Buffer.concat([pdfBuffer, Buffer.from(xref)]);
  return pdfBuffer;
}

const pdfData = buildPDF();
const dest1 = path.join(__dirname, 'public', 'CV_Brou_Etien_Jacques_Ezechiel.pdf');
const dest2 = path.join(__dirname, 'CV_Brou_Etien_Jacques_Ezechiel.pdf');

fs.writeFileSync(dest1, pdfData);
fs.writeFileSync(dest2, pdfData);

console.log('PDF genere avec succes ! Taille :', pdfData.length, 'octets');
