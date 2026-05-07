# Medétanch — Site vitrine

Site vitrine pour **Medétanch**, artisan couvreur, étancheur et paysagiste à Bordeaux et Gironde.

## Stack

- HTML5 statique (8 pages)
- Tailwind CSS via CDN (palette `brand` orange + `azur` bleu, dérivée du logo)
- Lucide Icons via CDN
- Google Fonts : Bebas Neue + Playfair Display + Inter + JetBrains Mono
- CSS partagé : `assets/css/medetanch.css` (lié par toutes les pages internes)
- Formulaire : FormSubmit.co (envoi vers medetanch@gmail.com, redirection sur `/merci.html`)

## Pages

1. `index.html` — Accueil (1500+ lignes, hero animé, signature "Le métier dans les règles", garantie 10 ans, urgence 24/7)
2. `couverture.html` — Couverture & toiture (réfection, démoussage, isolation, faîtage)
3. `etancheite.html` — Étanchéité toiture-terrasse (recherche fuite, bicouche bitume au chalumeau, EPDM/PVC)
4. `paysage.html` — Paysage & extérieur (terrasse bois, tonte, élagage, massifs)
5. `a-propos.html` — L'artisan derrière Medétanch (histoire, 6 engagements, certifications)
6. `contact.html` — Contact + formulaire devis FormSubmit + carte + FAQ
7. `mentions-legales.html` — Mentions légales (RGPD, cookies, hébergement, crédits)
8. `merci.html` — Page de confirmation après envoi formulaire (noindex)

## Infos client

- **Nom** : Medétanch
- **Téléphone** : 07 55 79 67 18
- **Email** : medetanch@gmail.com
- **Adresse** : Bordeaux, 33000
- **Zone** : Bordeaux Métropole + Gironde + 100 km autour
- **Disponibilité** : Lun–Ven 7h30–19h · Sam 8h–17h · Astreinte 24/7

## Identité visuelle

- **Couleurs** : orange `#E85D1A` (bandeau logo), bleu `#1976D2` (soulignement logo), rouge ember `#D7281F` (urgence)
- **Fond crème chaud** : `#FFFAF5`
- **Fontes** : Bebas Neue (titres) + Playfair Display (titres serif italiques) + Inter (corps) + JetBrains Mono (labels tech)

## Déploiement (Cloudflare Pages)

Aucun build requis. Upload du dossier complet (`*.html` + `assets/`) sur Cloudflare Pages.
URL cible : `medetanch-bordeaux.pages.dev`

## Reste à compléter manuellement

- Photos chantier client (les `.photo-placeholder` détaillent ce qui est attendu : hero couverture/étanchéité/paysage, portrait artisan, mosaïque chantier, avant/après réfection)
- SIRET, n° de police MAAF Pro, TVA intracommunautaire dans `mentions-legales.html`
- Liens réels Facebook / Instagram / Google Avis (placeholders `#` dans tous les footers)
- Logos partenaires Onduline/IKO/Soprema/Velux en images vectorielles si souhaité (actuellement rendus en wordmarks CSS)
