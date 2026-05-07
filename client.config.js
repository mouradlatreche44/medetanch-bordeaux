/**
 * ============================================================
 *  FICHIER DE CONFIGURATION CLIENT — MEDETANCH
 *  Couvreur · Étanchéité · Paysage — Bordeaux & Gironde
 * ============================================================
 */

window.CLIENT = {

  // ── IDENTITÉ ─────────────────────────────────────────────
  nom:          "Medétanch",
  slogan:       "L'artisan toiture & étanchéité qui vous accompagne du diagnostic à la garantie",
  description:  "Medétanch : couvreur, étancheur et paysagiste à Bordeaux. Réfection de toiture, démoussage, isolation, recherche de fuite, terrasse bois, entretien d'extérieur. Devis gratuit, intervention 24/7 dans toute la Gironde.",
  baseline:     "Couvreur · Étanchéité · Paysage",

  // ── CONTACT ──────────────────────────────────────────────
  telephone:      "0755796718",
  telephoneAff:   "07 55 79 67 18",
  email:          "medetanch@gmail.com",
  adresse:        "Bordeaux, 33000",
  departement:    "Gironde (33)",

  // ── ZONE D'INTERVENTION ──────────────────────────────────
  zoneHero:       "Bordeaux Métropole et Gironde — 100 km",
  communes: [
    "Bordeaux", "Mérignac", "Pessac", "Talence", "Bègles",
    "Le Bouscat", "Villenave-d'Ornon", "Cenon", "Lormont", "Floirac",
    "Libourne", "Saint-André-de-Cubzac", "Blaye", "Arcachon", "La Teste-de-Buch",
    "Gujan-Mestras", "Andernos-les-Bains", "Langon", "Cadillac", "Créon",
  ],
  departementCode: "Gironde (33)",

  // ── DISPONIBILITÉ ────────────────────────────────────────
  horaires: [
    { jours: "Lundi — Vendredi", heures: "7h30 — 19h" },
    { jours: "Samedi",            heures: "8h — 17h" },
    { jours: "Dimanche & jours fériés", heures: "Urgences uniquement" },
  ],
  urgence24_7: true,
  devisGratuit: true,

  // ── COULEURS (dérivées du logo Medétanch) ────────────────
  couleurs: {
    primary:  "#E85D1A",  // orange brûlé du bandeau
    accent:   "#1976D2",  // bleu profond du soulignement
    flame:    "#D7281F",  // rouge chalumeau (urgence)
    sand:     "#FFF7F0",  // crème chaud
  },

  reseaux: {
    facebook:  "#",
    instagram: "#",
    google:    "#",
  },

  marques: [
    "Onduline", "IKO Polymeric", "Soprema", "Velux",
    "Imerys Toiture", "Sika Étanchéité", "Knauf", "Honeywell",
  ],

  // ── 3 UNIVERS MÉTIER ─────────────────────────────────────
  services: [
    {
      id:        "couverture",
      slug:      "couverture",
      titre:     "Couverture & toiture",
      label:     "Couverture",
      soustitre: "Réfection · Démoussage · Isolation",
      icone:     "home",
      description: "Refaire, entretenir et isoler votre toit avec les techniques traditionnelles que nous transmettons depuis des générations. Tuile canal, ardoise, zinc — chaque matériau a sa main.",
      prestations: [
        { titre: "Réfection complète de toiture", detail: "Dépose, charpente, écran sous-toiture, repose tuile/ardoise/zinc." },
        { titre: "Démoussage & traitement hydrofuge", detail: "Brossage manuel, traitement biocide, hydrofuge longue durée." },
        { titre: "Isolation des combles", detail: "Soufflage laine de roche, sarking, isolation par l'extérieur." },
        { titre: "Reprise de faîtage et solins", detail: "Étanchéité périphérique, mortier traditionnel ou bandes auto-adhésives." },
      ],
    },
    {
      id:        "etancheite",
      slug:      "etancheite",
      titre:     "Étanchéité toiture-terrasse",
      label:     "Étanchéité",
      soustitre: "Toiture-terrasse · Recherche de fuite · Bitume",
      icone:     "shield-check",
      description: "L'étanchéité au chalumeau gaz — celle qui dure 25 ans quand elle est posée par un homme du métier. Diagnostic précis, pose dans les règles de l'art, garantie écrite.",
      prestations: [
        { titre: "Recherche de fuite", detail: "Test fumigène, caméra thermique, infiltrométrie. Rapport remis sous 48h." },
        { titre: "Étanchéité bicouche bitumineuse", detail: "Pose au chalumeau sur toiture-terrasse béton ou bois." },
        { titre: "Membrane EPDM et PVC", detail: "Solution monocouche pour terrasses accessibles ou techniques." },
        { titre: "Reprise ponctuelle d'étanchéité", detail: "Joints, relevés, naissances EP — diagnostic + devis sous 48h." },
      ],
    },
    {
      id:        "paysage",
      slug:      "paysage",
      titre:     "Paysage & extérieur",
      label:     "Paysage",
      soustitre: "Terrasse bois · Tonte · Entretien",
      icone:     "trees",
      description: "Un seul artisan pour la maison ET le jardin — c'est le sens de Medétanch. Aménagement bois, taille, tonte régulière, entretien annuel des extérieurs.",
      prestations: [
        { titre: "Construction de terrasse bois", detail: "Pin classe 4, exotique ou composite — pose sur lambourdes ou plots." },
        { titre: "Tonte & entretien régulier", detail: "Contrats annuels résidentiel ou copropriété — passages programmés." },
        { titre: "Élagage & taille de haies", detail: "Travail soigné, évacuation des déchets verts incluse." },
        { titre: "Création de massifs & bordures", detail: "Conception sur mesure adaptée au climat girondin." },
      ],
    },
  ],

  stats: [
    { valeur: "12+",      label: "années sur les toits girondins" },
    { valeur: "100 km",   label: "zone d'intervention autour de Bordeaux" },
    { valeur: "24/7",     label: "astreinte fuite & urgence toiture" },
    { valeur: "10 ans",   label: "garantie décennale couverture & étanchéité" },
  ],

  avis: [
    {
      nom:    "Jean-Michel D.",
      ville:  "Mérignac",
      note:   5,
      date:   "Il y a 2 semaines",
      texte:  "Une fuite qui datait de deux ans, trois entreprises avant lui n'avaient rien trouvé. Lui : test fumigène, fuite localisée en 40 minutes, réparée le lendemain. Travail propre, prix tenu.",
      avatar: "JMD",
    },
    {
      nom:    "Catherine M.",
      ville:  "Bordeaux Caudéran",
      note:   5,
      date:   "Il y a 1 mois",
      texte:  "Réfection complète de la toiture en tuile canal. Travail à l'ancienne, pas de précipitation, propreté du chantier irréprochable. Et il a refait le jardin dans la foulée — un seul interlocuteur, c'est précieux.",
      avatar: "CM",
    },
    {
      nom:    "Patrick L.",
      ville:  "Pessac",
      note:   5,
      date:   "Il y a 3 semaines",
      texte:  "Étanchéité de ma toiture-terrasse au chalumeau. Devis très clair, intervention propre, garantie écrite remise en fin de chantier. Le métier dans les règles, comme on n'en voit plus souvent.",
      avatar: "PL",
    },
  ],

  mapsEmbed: "https://www.openstreetmap.org/export/embed.html?bbox=-0.7792%2C44.7378%2C-0.3792%2C44.9378&layer=mapnik&marker=44.8378%2C-0.5792",

  annee: "2026",
};
