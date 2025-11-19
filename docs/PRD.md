# Document de Spécifications Produit (PRD)
## Site Web du Tennis Club Clairefontaine

**Version:** 1.0
**Date:** 19 Novembre 2025
**Statut:** Brouillon Initial

---

## Table des Matières

1. [Résumé Exécutif](#1-résumé-exécutif)
2. [Vision & Objectifs du Projet](#2-vision--objectifs-du-projet)
3. [Contexte & Analyse Stratégique](#3-contexte--analyse-stratégique)
4. [Audiences Cibles & Personas](#4-audiences-cibles--personas)
5. [User Stories & Cas d'Usage](#5-user-stories--cas-dusage)
6. [Exigences Fonctionnelles](#6-exigences-fonctionnelles)
7. [Architecture de l'Information](#7-architecture-de-linformation)
8. [Spécifications Techniques](#8-spécifications-techniques)
9. [Design & UX](#9-design--ux)
10. [Métriques de Succès & KPIs](#10-métriques-de-succès--kpis)
11. [Phases d'Implémentation](#11-phases-dimplémentation)
12. [Gestion des Risques](#12-gestion-des-risques)
13. [Annexes](#13-annexes)

---

## 1. Résumé Exécutif

### 1.1 Vue d'Ensemble

Le Tennis Club Clairefontaine (TCC) est un petit club associatif situé dans le village rural de Clairefontaine-en-Yvelines (~1000 habitants) avec environ 90 adhérents. Le club dispose d'infrastructures solides (1 court couvert, 2 courts extérieurs) mais souffre d'une **absence totale de présence en ligne**, ce qui constitue un handicap majeur pour le recrutement de nouveaux membres.

### 1.2 Objectif Principal

Créer un site web moderne, fonctionnel et authentique qui servira de **vitrine digitale** pour le club et de **levier de croissance** pour augmenter durablement le nombre d'adhérents.

### 1.3 Impact Attendu

- **Visibilité:** Rendre le club accessible aux familles et nouveaux résidents recherchant des activités sportives en ligne
- **Recrutement:** Faciliter la conversion de prospects en adhérents via des informations claires et des CTA efficaces
- **Crédibilité:** Projeter une image professionnelle et moderne du club
- **Gestion:** Simplifier les processus d'inscription et de communication
- **Engagement:** Renforcer le lien avec la communauté existante

### 1.4 Budget & Contraintes

- **Budget:** ~60-120€/an (hébergement OVH + nom de domaine)
- **Solution:** Développement custom avec Claude Code (LLM de développement)
- **Hébergement:** OVH ou hébergeur similaire (mutualisé ou VPS léger)
- **Stack:** Application web moderne (Next.js/React avec interface d'administration custom)
- **Ressources:** Développement par IA + gestion contenu par bénévoles
- **Timeline:** Lancement initial sous 2-3 mois

---

## 2. Vision & Objectifs du Projet

### 2.1 Vision Stratégique

> **"Come for the courts. Stay for the community."**

Créer une présence en ligne qui reflète l'authenticité du TCC : un club de village convivial doté d'infrastructures de qualité et d'une excellence pédagogique incarnée par son jeune professeur classé 4/6.

### 2.2 Objectifs Primaires (P0)

1. **Augmenter le recrutement** de nouveaux adhérents (cible : +15-20% la première année)
2. **Établir une présence en ligne professionnelle** pour gagner en crédibilité
3. **Faciliter l'accès à l'information** (tarifs, horaires, inscriptions)
4. **Valoriser les atouts distinctifs** du club (jeune professeur 4/6, court couvert)

### 2.3 Objectifs Secondaires (P1)

5. Simplifier la gestion administrative (pré-inscriptions en ligne)
6. Renforcer l'esprit de club et la convivialité
7. Améliorer la communication vers les membres actuels
8. Positionner le club comme référence locale de qualité

### 2.4 Objectifs Tertiaires (P2)

9. Créer une communauté en ligne engagée
10. Améliorer le référencement local (SEO)
11. Développer des contenus vidéo pédagogiques

---

## 3. Contexte & Analyse Stratégique

### 3.1 Analyse SWOT

#### Forces (à capitaliser)
- ✅ **Jeune professeur dynamique classé 4/6** : Excellence technique reconnue, très apprécié
- ✅ **Court couvert** : Pratique toute l'année, avantage compétitif en milieu rural
- ✅ **Succès passé** des initiations scolaires et stages enfants
- ✅ **Population aisée** : Potentiel pour offres premium et stages de qualité
- ✅ **Infrastructures solides** : 3 courts (1 couvert + 2 extérieurs)

#### Faiblesses (à adresser)
- ❌ **Absence totale de présence en ligne** : Invisible pour nouveaux arrivants et recherches actives
- ❌ **Perception d'enseignement inégal** : Professeur principal "fait le travail sans plus"
- ❌ **Pas de club-house** : Manque de lieu de convivialité structuré
- ❌ **Communication inefficace** : Dépendance aux flyers (faible succès)
- ❌ **Disponibilité limitée** du jeune professeur excellent

#### Opportunités (à saisir)
- 🎯 **Forte demande** des familles de l'école primaire
- 🎯 **Population prête à payer** pour des offres de qualité
- 🎯 **Outils gratuits** : AssoConnect, Sportsregions pour site et gestion
- 🎯 **Partenariats locaux** : Mairie, commerces, école

#### Menaces (à anticiper)
- ⚠️ **Concurrence** des clubs voisins si l'offre n'est pas différenciée
- ⚠️ **Risque d'attrition** lié à l'hétérogénéité de l'enseignement
- ⚠️ **Bouche-à-oreille négatif** si promesses non tenues
- ⚠️ **Difficulté** à recruter/mobiliser des bénévoles

### 3.2 Positionnement Unique

**Le TCC n'est pas un grand centre d'entraînement, c'est un club de village authentique qui offre :**
- Excellence pédagogique accessible (professeur 4/6)
- Proximité et convivialité
- Pratique toute l'année (court couvert)
- Ancrage dans la communauté locale

**Promesse de valeur:**
*"Tennis de qualité dans un esprit village : rejoignez une communauté passionnée, progressez avec un enseignement d'excellence et jouez toute l'année."*

### 3.3 Cibles Prioritaires de Recrutement

**Par ordre de priorité :**

1. **HAUTE PRIORITÉ** : Enfants de l'école primaire (4-11 ans) et leurs familles
2. **HAUTE PRIORITÉ** : Adultes nouveaux résidents cherchant activité locale de qualité
3. **MOYENNE PRIORITÉ** : Adolescents compétiteurs (12-18 ans)
4. **MOYENNE PRIORITÉ** : Adultes loisir et seniors débutants

---

## 4. Audiences Cibles & Personas

### 4.1 Persona 1 : "Sophie, la Maman Active"

**Démographie:**
- Âge : 35-45 ans
- Situation : Mère de 2 enfants (8 et 10 ans)
- Profession : Cadre, télétravail partiel
- Résidence : Installée à Clairefontaine depuis 1 an
- Revenus : Aisés

**Besoins & Motivations:**
- Cherche activités extrascolaires de qualité et de proximité pour ses enfants
- Valorise la compétence des enseignants et la sécurité
- Apprécie la convivialité et l'esprit familial
- Souhaite que ses enfants pratiquent un sport régulier

**Parcours sur le site:**
1. Recherche Google : "cours tennis enfants Clairefontaine"
2. Visite page d'accueil → Section "Cours Enfants"
3. Consulte tarifs et horaires
4. Vérifie les qualifications du professeur
5. Remplit formulaire de contact ou pré-inscription

**Frustrations potentielles:**
- Informations difficiles à trouver
- Pas de photos des cours
- Horaires peu clairs
- Processus d'inscription compliqué

**Citation type:** *"Je veux que mes enfants aient un bon prof, proche de chez nous, et que ça soit simple à organiser."*

### 4.2 Persona 2 : "Marc, le Nouveau Résident Sportif"

**Démographie:**
- Âge : 40-50 ans
- Situation : Marié, vient de s'installer à Clairefontaine
- Profession : Dirigeant d'entreprise ou profession libérale
- Niveau tennis : Joueur régulier, classé 15/2 ou 15/1
- Revenus : Aisés

**Besoins & Motivations:**
- Cherche un club local pour jouer régulièrement
- Intéressé par des cours de perfectionnement de qualité
- Valorise la possibilité de jouer toute l'année (court couvert)
- Souhaite s'intégrer dans la communauté locale

**Parcours sur le site:**
1. Recherche Google : "tennis club Clairefontaine" ou "cours tennis adultes Yvelines"
2. Évalue les installations (photos des courts)
3. Vérifie les offres adultes et les qualifications des enseignants
4. Compare les tarifs
5. Regarde le calendrier des événements/tournois
6. Contacte le club

**Frustrations potentielles:**
- Manque d'information sur le niveau des cours
- Pas de présentation du professeur principal
- Absence de témoignages d'autres membres adultes
- Pas d'infos sur les possibilités de jeu libre ou tournois

**Citation type:** *"Je cherche un club sérieux, proche de chez moi, où je peux progresser et jouer régulièrement."*

### 4.3 Persona 3 : "Lucie, la Lycéenne Compétitrice"

**Démographie:**
- Âge : 14-17 ans
- Situation : Lycéenne, joue au tennis depuis 5 ans
- Niveau : Classée 15/4, ambitions compétition
- Résidence : Clairefontaine ou commune proche

**Besoins & Motivations:**
- Cherche un entraînement de qualité pour progresser
- Attirée par l'opportunité d'apprendre avec un professeur 4/6
- Souhaite participer aux interclubs jeunes
- Veut un club avec une ambiance dynamique

**Parcours sur le site:**
1. Arrive via réseaux sociaux ou bouche-à-oreille
2. Vérifie immédiatement les qualifications du jeune professeur
3. Regarde les horaires des cours ados/compétition
4. Consulte les résultats des équipes jeunes en interclubs
5. Cherche des photos/vidéos des entraînements
6. Demande à ses parents de la contacter le club

**Frustrations potentielles:**
- Pas assez d'infos sur les groupes compétition
- Manque de contenus dynamiques (vidéos, conseils techniques)
- Absence de présence sur les réseaux sociaux

**Citation type:** *"Je veux un vrai coach qui peut me faire progresser pour monter en classement."*

### 4.4 Persona 4 : "Membre Actuel - Jean, le Bénévole Fidèle"

**Démographie:**
- Âge : 55-65 ans
- Situation : Membre du club depuis 10 ans, au bureau
- Niveau : Joueur loisir, participe aux événements
- Profession : Retraité ou actif

**Besoins & Motivations:**
- Veut faciliter la gestion du club
- Souhaite attirer de nouveaux membres
- Cherche à renforcer l'esprit de club
- Fier de son club, veut le valoriser

**Utilisation du site:**
- Consulte le calendrier des événements
- Partage le site avec prospects
- Utilise les infos pour communiquer
- Contribue aux actualités et photos

**Citation type:** *"On a un super club, il faut qu'on le fasse savoir !"*

---

## 5. User Stories & Cas d'Usage

### 5.1 User Stories Prioritaires (P0 - MVP)

#### Epic 1 : Découverte & Information

| ID | User Story | Critères d'Acceptation | Priorité |
|----|------------|------------------------|----------|
| US-01 | En tant que **parent**, je veux voir rapidement les offres de cours pour enfants pour décider si le club convient à mes enfants | - Section "Cours Enfants" accessible en 1 clic<br>- Descriptifs par tranche d'âge<br>- Horaires et tarifs visibles<br>- Photos des cours | P0 |
| US-02 | En tant que **nouvel arrivant**, je veux connaître l'emplacement exact et les infrastructures du club pour évaluer la proximité et la qualité | - Page "Le Club" avec adresse complète<br>- Carte Google Maps intégrée<br>- Photos HD des 3 courts<br>- Description du court couvert | P0 |
| US-03 | En tant que **joueur adulte**, je veux connaître les qualifications des professeurs pour m'assurer de la qualité de l'enseignement | - Page "Notre Équipe" ou section dans "Cours"<br>- Présentation détaillée du jeune professeur (classement 4/6, parcours)<br>- Présentation du professeur principal<br>- Photos des enseignants | P0 |
| US-04 | En tant que **visiteur**, je veux consulter les tarifs d'adhésion pour comparer avec d'autres clubs | - Page "Adhésion" ou "Tarifs" dédiée<br>- Tableau clair : Adultes / Jeunes / Familles<br>- Détail des avantages inclus<br>- Mention du court couvert comme valeur ajoutée | P0 |

#### Epic 2 : Contact & Conversion

| ID | User Story | Critères d'Acceptation | Priorité |
|----|------------|------------------------|----------|
| US-05 | En tant que **prospect intéressé**, je veux pouvoir contacter facilement le club pour poser des questions | - Page "Contact" accessible<br>- Formulaire de contact simple (nom, email, téléphone, message)<br>- Coordonnées directes (email, tél)<br>- Horaires d'ouverture secrétariat | P0 |
| US-06 | En tant que **parent**, je veux pré-inscrire mon enfant en ligne pour gagner du temps | - Formulaire de pré-inscription (ou d'inscription complète si plateforme le permet)<br>- Champs: nom enfant, âge, niveau, coordonnées parents<br>- Confirmation par email automatique | P0 |
| US-07 | En tant que **visiteur mobile**, je veux que le site s'affiche parfaitement sur mon smartphone pour consulter les infos en mobilité | - Design 100% responsive<br>- Navigation adaptée mobile<br>- Temps de chargement < 3s<br>- Boutons CTA faciles à cliquer | P0 |

#### Epic 3 : Valorisation & Crédibilité

| ID | User Story | Critères d'Acceptation | Priorité |
|----|------------|------------------------|----------|
| US-08 | En tant que **prospect**, je veux voir des photos réelles du club pour me projeter | - Galerie photos sur page d'accueil<br>- Photos des courts, des cours, des événements<br>- Visages réels des membres (avec accords)<br>- Minimum 15-20 photos de qualité | P0 |
| US-09 | En tant que **visiteur**, je veux lire des témoignages de membres pour me rassurer sur la qualité du club | - Section témoignages sur page d'accueil ou "Le Club"<br>- 4-6 témoignages authentiques<br>- Variété: parents, adultes, jeunes<br>- Photos des témoins si possible | P0 |

### 5.2 User Stories Secondaires (P1 - Phase 2)

| ID | User Story | Critères d'Acceptation | Priorité |
|----|------------|------------------------|----------|
| US-10 | En tant que **membre**, je veux consulter le calendrier des événements et tournois pour planifier ma participation | - Page "Événements" dédiée<br>- Calendrier dynamique<br>- Détails par événement (date, type, inscription)<br>- Intégration calendrier Google | P1 |
| US-11 | En tant que **prospect**, je veux m'inscrire à une séance découverte gratuite pour essayer avant de m'engager | - Offre "Séance Découverte" mise en avant<br>- Formulaire d'inscription spécifique<br>- Gestion des créneaux disponibles | P1 |
| US-12 | En tant que **membre**, je veux suivre les actualités et résultats du club pour rester informé | - Section "Actualités" ou blog<br>- Articles sur événements passés<br>- Résultats interclubs<br>- Photos des événements récents<br>- RSS ou newsletter (optionnel) | P1 |
| US-13 | En tant que **visiteur**, je veux suivre le club sur les réseaux sociaux pour voir son dynamisme | - Intégration flux Instagram/Facebook<br>- Boutons de partage<br>- Liens vers pages sociales en footer<br>- Contenu social visible sur site | P1 |

### 5.3 User Stories Tertiaires (P2 - Phase 3)

| ID | User Story | Critères d'Acceptation | Priorité |
|----|------------|------------------------|----------|
| US-14 | En tant que **visiteur**, je veux voir des vidéos de démonstration technique du jeune professeur pour apprécier son enseignement | - Vidéos courtes (30s-2min)<br>- Hébergement YouTube<br>- Section "Conseils du Pro"<br>- 5-10 vidéos initiales | P2 |

### 5.4 User Stories Administrateur (P0 - MVP)

**Acteur Principal:** Administrateur du site (Responsable Web bénévole)

| ID | User Story | Critères d'Acceptation | Priorité |
|----|------------|------------------------|----------|
| US-A01 | En tant qu'**administrateur**, je veux accéder à un tableau de bord d'administration intuitif pour gérer le site facilement | - Interface d'administration custom (/admin)<br>- Tableau de bord avec statistiques clés<br>- Menu de navigation clair<br>- Accès rapide aux fonctions principales<br>- Responsive (gérable depuis tablette) | P0 |
| US-A02 | En tant qu'**administrateur**, je veux modifier tous les textes du site (titres, paragraphes, descriptions) sans toucher au code | - Éditeur visuel WYSIWYG (type TipTap ou Slate)<br>- Édition directe page par page<br>- Prévisualisation avant publication<br>- Sauvegarde automatique brouillons<br>- Historique des révisions | P0 |
| US-A03 | En tant qu'**administrateur**, je veux gérer facilement les images du site (ajouter, remplacer, supprimer, redimensionner) | - Bibliothèque médias intégrée<br>- Upload images par glisser-déposer<br>- Édition basique (recadrage, rotation)<br>- Remplacement image en 1 clic<br>- Génération miniatures automatique<br>- Optimisation automatique (Sharp/ImageKit) | P0 |
| US-A04 | En tant qu'**administrateur**, je veux créer et publier des actualités avec un éditeur visuel sans compétences techniques | - Éditeur rich text par blocs (type WordPress)<br>- Ajout texte, images, vidéos, galeries<br>- Mise en forme (gras, italique, listes, titres)<br>- Aperçu temps réel<br>- Catégories et tags<br>- Publication immédiate ou programmée | P0 |
| US-A05 | En tant qu'**administrateur**, je veux gérer les pages du site (créer, modifier, supprimer, réorganiser) facilement | - Création page en quelques clics<br>- Éditeur visuel intégré<br>- Choix template (page standard, contact, etc.)<br>- Réorganisation hiérarchie pages<br>- Modification URL (slug)<br>- Paramètres SEO par page | P0 |
| US-A06 | En tant qu'**administrateur**, je veux ajouter et gérer les événements du club (tournois, stages, fêtes) dans un calendrier | - Module de gestion d'événements intégré<br>- Formulaire simple ajout événement<br>- Date, heure, lieu, description, image<br>- Catégories événements<br>- Vue calendrier et liste<br>- Événements récurrents | P0 |
| US-A07 | En tant qu'**administrateur**, je veux consulter les formulaires de contact et pré-inscriptions reçus | - Notification email à chaque soumission<br>- Liste des messages dans admin<br>- Export CSV des données<br>- Protection anti-spam (reCAPTCHA) | P0 |
| US-A08 | En tant qu'**administrateur**, je veux modifier les menus de navigation (ajouter, retirer, réorganiser liens) sans développeur | - Interface drag & drop pour menus<br>- Menu principal (header)<br>- Menu footer<br>- Ajout pages, catégories, liens externes<br>- Réorganisation par glisser-déposer<br>- Sous-menus possibles | P0 |
| US-A09 | En tant qu'**administrateur**, je veux gérer les membres de l'équipe (professeurs, bureau) avec photos et descriptions | - Module "Équipe" dédié<br>- Formulaire simple (nom, fonction, bio, photo)<br>- Ordre d'affichage personnalisable<br>- Affichage automatique sur page Équipe | P0 |
| US-A10 | En tant qu'**administrateur**, je veux consulter les statistiques de fréquentation du site pour mesurer l'impact | - Intégration Google Analytics<br>- Statistiques dans tableau de bord admin<br>- Pages les plus vues<br>- Sources de trafic<br>- Données en temps réel | P1 |

### 5.5 Cas d'Usage Détaillés

#### CU-01 : Inscription d'un Enfant aux Cours

**Acteur Principal:** Parent (Sophie, Persona 1)

**Préconditions:**
- Le site est accessible
- Les informations sur les cours enfants sont à jour

**Scénario Principal:**
1. Sophie recherche "cours tennis enfants Clairefontaine" sur Google
2. Elle clique sur le résultat du site TCC
3. Elle accède à la page d'accueil et clique sur "Cours Enfants" dans le menu
4. Elle consulte les différents créneaux pour l'âge de son fils (8 ans)
5. Elle vérifie les horaires (Mercredi 14h-15h ou Samedi 10h-11h)
6. Elle consulte les tarifs (section visible sur la même page ou lien vers "Tarifs")
7. Elle lit la présentation du jeune professeur qui anime ces cours
8. Elle voit des photos des cours enfants
9. Convaincue, elle clique sur "Pré-inscription" ou "Nous contacter"
10. Elle remplit le formulaire avec les informations de son fils
11. Elle reçoit une confirmation par email
12. Le secrétariat la recontacte sous 48h pour finaliser

**Scénarios Alternatifs:**
- **3a.** Si l'information n'est pas claire, elle utilise le formulaire de contact pour poser des questions
- **5a.** Si les horaires ne conviennent pas, elle cherche d'autres créneaux ou consulte les stages vacances
- **9a.** Si pas de formulaire en ligne, elle note le numéro de téléphone et appelle

**Postconditions:**
- Sophie est contactée par le club
- Son fils est pré-inscrit ou inscrit
- Le club a acquis un nouveau membre

---

## 6. Exigences Fonctionnelles

### 6.1 Fonctionnalités par Section (MVP - P0)

#### 6.1.1 Page d'Accueil

**Objectif:** Créer une première impression forte et guider vers les actions clés

**Éléments obligatoires:**
- ✅ **Hero Section** : Grande photo/vidéo du club avec tagline inspirant
  - Exemple : "Tennis de Qualité, Esprit Village" ou "Jouez Toute l'Année à Clairefontaine"
  - CTA principal : "Découvrir nos Cours" ou "Devenir Membre"
- ✅ **Mise en avant du différenciateur** : Encart visible "Notre Professeur Classé 4/6" avec photo
- ✅ **Sections courtes** :
  - "Nos Offres" : 3 cartes (Enfants / Adultes / Stages) avec CTAs
  - "Nos Atouts" : Court couvert, Excellence pédagogique, Esprit convivial (icônes + texte court)
  - "Témoignages" : 3-4 avis de membres
  - "Actualités récentes" : 2-3 dernières news
- ✅ **CTA secondaire** : "Contactez-nous" ou "Visite Virtuelle"
- ✅ **Footer** : Coordonnées, liens rapides, réseaux sociaux

**Fonctionnalités techniques:**
- Carrousel ou slider pour le hero (optionnel)
- Responsive design optimisé
- Temps de chargement < 3 secondes
- Optimisation SEO (meta title, description)

#### 6.1.2 Section "Le Club"

**Objectif:** Raconter l'histoire du club et créer une connexion émotionnelle

**Contenu requis:**
- ✅ Histoire du club (création, évolution, ancrages local)
- ✅ Valeurs : Convivialité, Excellence, Proximité, Esprit Famille
- ✅ Présentation des installations détaillée :
  - 1 court couvert (dimensions, surface, avantages)
  - 2 courts extérieurs (surface, état)
  - Absence de club-house mais alternatives (zone détente, partenariats cafés locaux)
- ✅ Galerie photos (15-20 photos minimum) :
  - Installations
  - Cours en action
  - Événements/tournois
  - Membres souriants
- ✅ Équipe dirigeante (bureau) : Présentation brève avec photos si possible
- ✅ Carte Google Maps interactive avec adresse complète

**Ton:** Authentique, chaleureux, fier mais humble

#### 6.1.3 Section "Notre Équipe Pédagogique"

**Objectif:** Valoriser les enseignants et rassurer sur la qualité

**Structure:**

**Professeur 1 - [Prénom] (Jeune Professeur)**
- ✅ Photo professionnelle
- ✅ Classement : 4/6 (bien visible)
- ✅ Diplômes (CQP, DEJEPS, etc.)
- ✅ Parcours tennis (clubs précédents, compétitions)
- ✅ Style d'enseignement : "Approche dynamique et technique. Idéal pour les joueurs (jeunes et adultes) qui cherchent à progresser significativement. Son enseignement est particulièrement apprécié des jeunes pour son énergie et sa capacité à motiver."
- ✅ Témoignages de 2-3 élèves
- ✅ Vidéo courte de présentation (optionnel P1)

**Professeur 2 - [Prénom] (Professeur Principal)**
- ✅ Photo
- ✅ Diplômes et expérience
- ✅ Style d'enseignement : "Approche axée sur l'apprentissage des fondamentaux et le plaisir du jeu dans un contexte loisir. Assure une pratique régulière et structurée, idéale pour maintenir une activité physique et sociale." (ou spécialisation identifiée : "Patient et pédagogue, parfait pour vous accompagner lors de vos premiers pas sur le court.")

**Transparence:** Mentionner clairement quel professeur anime quels types de cours

#### 6.1.4 Section "Cours & Programmes"

**Objectif:** Présenter l'offre complète de manière claire et attractive

**Architecture:**

**A. Cours Enfants**
- ✅ Segmentation par âge :
  - Mini-Tennis (4-6 ans)
  - Débutants (7-9 ans)
  - Intermédiaires (10-12 ans)
- ✅ Pour chaque niveau :
  - Objectifs pédagogiques
  - Horaires (jours + créneaux)
  - Professeur animateur (nom + photo)
  - Tarif (annuel ou trimestriel)
  - Photos du groupe
  - Bouton "Inscrire mon enfant"

**B. Cours Adultes**
- ✅ Cours Collectifs Hommes (horaire, niveau, professeur, tarif)
- ✅ Cours Collectifs Femmes (horaire, niveau, professeur, tarif)
- ✅ Cliniques Techniques (stages intensifs avec jeune professeur 4/6)
  - Thématiques : Service-Retour, Revers, Stratégie Double, etc.
  - Format : 3 sessions de 2h sur un week-end
  - Tarif premium justifié
  - Calendrier des prochaines cliniques
- ✅ Séances Découverte (gratuites ou 5-10€)
  - Dates planifiées
  - Inscription en ligne
  - Pour adultes débutants

**C. Interclubs & Compétition**
- ✅ Équipes engagées (adultes, seniors, jeunes)
- ✅ Calendrier des rencontres
- ✅ Résultats récents
- ✅ Comment rejoindre une équipe

**D. Stages Vacances**
- ✅ Stages "Passerelle École-Club" (enfants initiations scolaires)
- ✅ Stages perfectionnement jeunes
- ✅ Stages adultes
- ✅ Calendrier annuel
- ✅ Tarifs préférentiels pour certains publics

**CTA global:** "Contactez-nous pour plus d'informations"

#### 6.1.5 Section "Adhésion & Tarifs"

**Objectif:** Fournir une information tarifaire claire et transparente

**Contenu:**
- ✅ **Tableau des tarifs** (clair, responsive) :
  - Adhésion Adulte (ex: 380€/an)
  - Adhésion Jeune (segmenté par âge)
  - Adhésion Famille (si applicable)
  - Cours collectifs inclus ou en supplément
  - Location de court (membres vs non-membres)
- ✅ **Avantages inclus** :
  - Accès aux courts (mention du court couvert)
  - Participation aux événements du club
  - Tarifs préférentiels stages
  - etc.
- ✅ **Modalités d'inscription** :
  - Pièces à fournir (certificat médical, photo, etc.)
  - Périodes d'inscription
  - Moyens de paiement acceptés
- ✅ **Formulaire de pré-inscription** ou bouton "Devenir membre"
- ✅ **Section FAQ** : Réponses aux questions fréquentes
  - "Puis-je essayer avant de m'inscrire ?" → Oui, séance découverte
  - "Y a-t-il un engagement minimal ?" → Adhésion annuelle
  - "Puis-je changer de créneau ?" → À voir avec le secrétariat
  - etc.

#### 6.1.6 Section "Contact"

**Objectif:** Faciliter la prise de contact

**Éléments:**
- ✅ **Formulaire de contact** :
  - Champs : Nom, Prénom, Email, Téléphone, Sujet (menu déroulant), Message
  - Bouton "Envoyer"
  - Confirmation visuelle après envoi
  - Email automatique de confirmation
- ✅ **Coordonnées directes** :
  - Adresse postale complète
  - Téléphone du secrétariat
  - Email du club
  - Horaires d'ouverture du secrétariat
- ✅ **Carte Google Maps** intégrée (interactive)
- ✅ **Liens réseaux sociaux** (si existants)

### 6.2 Fonctionnalités Phase 2 (P1)

#### 6.2.1 Section "Événements & Tournois"

**Contenu:**
- ✅ Calendrier dynamique des événements
- ✅ Détail par événement :
  - Date, heure, lieu
  - Type (tournoi interne, fête du tennis, galette, etc.)
  - Description
  - Modalités d'inscription
  - Galerie photos d'éditions précédentes
- ✅ Événements passés (archives)
- ✅ Événements récurrents :
  - Fête du Tennis (juin)
  - Tournoi interne (mars-juin)
  - Galette des Rois (janvier)
  - AG (date)

**Intégration:** Possibilité d'exporter vers calendrier Google/Outlook

#### 6.2.2 Section "Actualités / Vie du Club"

**Contenu:**
- ✅ Articles de blog (actualités du club)
- ✅ Catégories : Résultats, Événements, Conseils Techniques, Vie du Club
- ✅ Auteurs : Bureau, Professeurs, Membres
- ✅ **"Le Conseil du Pro"** : Section récurrente avec conseils du jeune professeur (hebdo ou bimensuel)
- ✅ Partage sur réseaux sociaux
- ✅ Commentaires (optionnel, modération requise)

**Objectifs:**
- Maintenir le site vivant
- Améliorer le SEO
- Renforcer l'engagement

#### 6.2.3 Intégration Réseaux Sociaux

**Plateformes:**
- Facebook (priorité 1)
- Instagram (priorité 2)

**Intégrations sur le site:**
- ✅ Flux Instagram/Facebook sur page d'accueil
- ✅ Boutons de partage sur actualités
- ✅ Liens footer vers pages sociales
- ✅ Widgets sociaux

**Stratégie de contenu social** (géré hors site mais lié) :
- Photos/vidéos des cours (accord préalable)
- Annonces événements
- Résultats interclubs
- Conseils techniques du jeune prof
- Témoignages

### 6.3 Fonctionnalités Phase 3 (P2)

#### 6.3.1 Contenus Vidéo Pédagogiques

**Objectif:** Valoriser l'expertise du jeune professeur et enrichir l'expérience utilisateur

**Fonctionnalités:**
- ✅ Section "Conseils du Pro" sur le site
- ✅ Vidéos courtes (30s-2min) avec conseils techniques
- ✅ Hébergement sur YouTube (chaîne du club)
- ✅ Intégration des vidéos sur le site web
- ✅ Playlist organisée par thématiques :
  - Technique (coup droit, revers, service, volée)
  - Tactique (jeu en double, stratégies)
  - Préparation physique
  - Conseils débutants

**Production:**
- Tournage smartphone de qualité (4K si possible)
- Montage simple (logiciels gratuits : DaVinci Resolve, Shotcut)
- Miniatures attractives (Canva)
- Sous-titres pour accessibilité

**Rythme de publication:**
- 1 vidéo par semaine (objectif)
- 5-10 vidéos initiales au lancement P2

#### 6.3.2 Optimisations Avancées

**SEO Avancé:**
- ✅ Audit SEO complet (outil gratuit : Google Search Console)
- ✅ Optimisation contenus existants
- ✅ Stratégie backlinks (partenaires locaux, presse, mairie)
- ✅ Schema markup enrichi
- ✅ Optimisation Core Web Vitals

**Analytics & Conversions:**
- ✅ Configuration objectifs Google Analytics
- ✅ Tracking événements personnalisés
- ✅ Heatmaps (Hotjar gratuit) pour comprendre comportement utilisateurs
- ✅ A/B testing CTAs (si budget permet outil)

**Automatisations:**
- ✅ Newsletter automatique (nouveaux articles, événements)
- ✅ Emails de bienvenue nouveaux inscrits
- ✅ Rappels événements automatiques

### 6.4 Interface d'Administration Custom (P0 - MVP)

**Objectif:** Fournir une interface intuitive permettant aux bénévoles de gérer tous les contenus du site sans compétences techniques, avec des fonctionnalités similaires à WordPress

#### 6.4.1 Tableau de Bord d'Administration

**URL d'accès:** https://tcclairefontaine.fr/admin

**Fonctionnalités du Dashboard:**
- 📊 **Aperçu statistiques** : Articles récents, commentaires, pages populaires
- 📈 **Analytics intégré** : Visiteurs du jour/semaine/mois (via Google Analytics)
- ⚡ **Actions rapides** : "Créer un article", "Ajouter une page", "Gérer médias"
- 📢 **Mises à jour** : Notifications de mises à jour de dépendances disponibles
- 🔔 **Notifications** : Nouveaux formulaires de contact reçus
- 🔒 **Sécurité** : État de sécurité de l'application, vulnérabilités détectées
- 🎨 **Personnalisation rapide** : Liens vers Paramètres > Apparence

**Menu de navigation admin (sidebar) :**
```
Tableau de bord
├── Accueil
├── Mises à jour
└── Sécurité

Articles (Actualités)
├── Tous les articles
├── Ajouter
├── Catégories
└── Étiquettes

Médias
├── Bibliothèque
└── Ajouter

Pages
├── Toutes les pages
└── Ajouter

Événements
├── Tous les événements
├── Ajouter un événement
└── Paramètres

Équipe
├── Tous les membres
└── Ajouter un membre

Commentaires (si activés)

Apparence
├── Personnaliser
├── Menus
└── Paramètres visuels

Utilisateurs
├── Tous les utilisateurs
├── Ajouter
├── Votre profil
└── Rôles (Admin, Éditeur, Auteur)

Paramètres
├── Général
├── Contenu
├── Médias
├── Permaliens
├── Sécurité
└── Confidentialité (RGPD)
```

#### 6.4.2 Éditeur Visuel WYSIWYG (Type WordPress Gutenberg)

**Principe:** Éditeur moderne type "WYSIWYG" (What You See Is What You Get) avec système de blocs, inspiré de WordPress Gutenberg
**Technologie:** TipTap ou Slate.js avec système de blocs personnalisé

**Fonctionnalités Éditeur:**

**A. Interface Principale**
- ✅ **Zone de contenu centrale** : Édition visuelle temps réel
- ✅ **Barre d'outils contextuelle** : Formatage rapide (gras, italique, lien, etc.)
- ✅ **Sidebar droite** : Paramètres de page/article
- ✅ **Top bar** : Sauvegarde, Prévisualisation, Publication
- ✅ **Mode plein écran** : Sans distractions

**B. Blocs Disponibles (par catégorie)**

**Blocs Texte:**
- **Paragraphe** : Texte standard avec formatage
- **Titre** (H1, H2, H3, H4, H5, H6) : Titres hiérarchisés
- **Liste** : À puces ou numérotée
- **Citation** : Mise en forme citation
- **Code** : Affichage code (rare pour TCC)
- **Préformaté** : Texte préformaté
- **Tableau** : Tableaux (ex: tarifs)

**Blocs Médias:**
- **Image** : Insertion image avec légende, alignement, lien
  - Upload depuis ordinateur
  - Sélection depuis bibliothèque médias
  - Recadrage, alignement (gauche, centre, droite, pleine largeur)
  - Texte alternatif (SEO)
- **Galerie** : Multiple images en grille
  - 2-9 colonnes configurables
  - Lightbox au clic
- **Vidéo** : Upload vidéo ou intégration URL
- **Audio** : Lecteur audio
- **Fichier** : Téléchargement PDF, documents
- **Image de couverture** : Image avec texte superposé (hero sections)

**Blocs Mise en Page:**
- **Groupe** : Regrouper plusieurs blocs
- **Colonnes** : Layout multi-colonnes (2, 3, 4 colonnes)
- **Espaceur** : Ajouter espacement vertical
- **Séparateur** : Ligne de séparation
- **Bouton** : CTA cliquable stylisé
  - Texte, lien, couleur personnalisables
  - Alignement, taille
- **Plus** : Extrait d'article "Lire la suite..."

**Blocs Widgets:**
- **Derniers articles** : Liste articles récents
- **Calendrier** : Calendrier archives
- **Archives** : Liste archives par mois
- **Catégories** : Liste catégories
- **Réseaux sociaux** : Icônes liens sociaux
- **Formulaire de contact** : Module de contact intégré

**Blocs Intégrations (Embeds):**
- **YouTube** : Vidéos YouTube
- **Google Maps** : Carte interactive
- **Facebook** : Post Facebook
- **Instagram** : Post Instagram
- **Twitter/X** : Tweet
- **Et 30+ autres services** : Vimeo, Spotify, SoundCloud, etc.

**C. Utilisation Pratique pour Articles/Actualités**

**Workflow création article :**
1. **Clic "Articles > Ajouter"**
2. **Saisir titre** : "Résultats Tournoi Interne 2025"
3. **Ajouter blocs contenu** :
   - Bloc Paragraphe : Introduction
   - Bloc Image : Photo podium gagnants
   - Bloc Paragraphe : Résultats détaillés
   - Bloc Galerie : 6-8 photos de l'événement
   - Bloc Bouton : "Voir tous nos événements"
4. **Sidebar droite - Paramètres** :
   - **Catégorie** : "Événements" ou "Résultats"
   - **Image à la une** : Photo principale (affichée liste articles)
   - **Extrait** : Résumé court (optionnel, auto-généré sinon)
   - **Paramètres SEO (Rank Math)** :
     - Meta title : Titre optimisé moteurs recherche
     - Meta description : Description 155 caractères
     - Mots-clés focus : "tournoi tennis clairefontaine"
5. **Prévisualisation** : Vérifier rendu final (desktop/mobile)
6. **Publier** immédiatement ou **Programmer** publication future

**D. Gestion Pages du Site**

**Workflow édition page existante :**
1. **Pages > Toutes les pages**
2. **Cliquer sur titre page** (ex: "Cours Enfants")
3. **Modifier blocs existants** :
   - Cliquer sur bloc pour le sélectionner
   - Modifier texte directement
   - Toolbar contextuelle pour formatage
   - Remplacer image : clic > "Remplacer"
4. **Ajouter nouveaux blocs** : Clic "+" entre blocs
5. **Réorganiser blocs** : Drag & drop ou flèches haut/bas
6. **Supprimer blocs** : Sélectionner > Toolbar > Poubelle
7. **Mettre à jour** : Bouton bleu en haut à droite

**Exemples modifications courantes :**
- Changer photo Hero page d'accueil : Éditer page Accueil > Clic sur image > Remplacer
- Modifier tarifs adhésion : Éditer page Adhésion > Modifier bloc Tableau
- Ajouter nouveau professeur : Équipe > Ajouter membre > Formulaire simple

#### 6.4.3 Gestion des Médias (Bibliothèque)

**Accès:** Médias > Bibliothèque

**Fonctionnalités:**
- ✅ **Upload images** :
  - Glisser-déposer depuis ordinateur
  - Upload multiple (jusqu'à 100 images d'un coup)
  - Formats acceptés : JPG, PNG, GIF, WebP, SVG
  - Taille max : 10 Mo (configurable OVH)
- ✅ **Optimisation automatique** :
  - Plugin Smush : Compression sans perte qualité
  - Conversion WebP automatique (meilleur format web)
  - Génération miniatures (thumbnail, medium, large)
- ✅ **Organisation** :
  - Vue grille ou liste
  - Recherche par nom fichier
  - Filtres par date, type
  - Dossiers organisés (plugin optionnel)
- ✅ **Édition basique** :
  - Recadrage
  - Rotation (90°, 180°, 270°)
  - Flip horizontal/vertical
  - Redimensionnement
- ✅ **Métadonnées** :
  - Titre
  - Texte alternatif (important SEO)
  - Légende
  - Description
  - Nom de fichier
- ✅ **Utilisation** : Voir où image est utilisée sur le site
- ✅ **Suppression** : Suppression définitive ou mise en corbeille

#### 6.4.4 Gestion des Événements (The Events Calendar)

**Accès:** Événements > Ajouter un événement

**Formulaire Ajout Événement:**

**Informations Principales:**
- ✅ **Titre événement** : "Tournoi Interne 2025", "Stage Été Enfants", etc.
- ✅ **Description** : Éditeur Gutenberg (texte, images, vidéos)
- ✅ **Date et heure** :
  - Date début
  - Date fin (si plusieurs jours)
  - Heure début / Heure fin
  - Toute la journée (checkbox)
  - Événement récurrent (quotidien, hebdo, mensuel, annuel)
- ✅ **Lieu** :
  - Nom lieu : "Tennis Club Clairefontaine"
  - Adresse complète (auto-complète Google)
  - Téléphone, site web (optionnels)
  - Carte affichée automatiquement
- ✅ **Organisateur** :
  - Nom : "Bureau TCC"
  - Contact, email
- ✅ **Catégorie événement** :
  - Tournoi
  - Stage
  - Fête du club
  - Interclub
  - Réunion (AG, bureau)
  - Autre
- ✅ **Image à la une** : Affichée dans calendrier et page événement
- ✅ **Site web événement** : URL externe (ex: inscription)
- ✅ **Coût** : Gratuit ou tarif (affiché sur page)
- ✅ **URL billetterie** : Lien vers système inscription externe (optionnel)

**Affichage Front-End:**
- Vue calendrier mensuel
- Vue liste événements à venir
- Vue journée
- Page détail par événement (URL propre)
- Widget "Prochains événements" (sidebar)
- Export Google Calendar / iCal

#### 6.4.5 Gestion des Formulaires

**Accès:** Admin > Formulaires > Tous les formulaires

**Fonctionnalités:**
- ✅ **Création formulaire** :
  - Interface intuitive de création de formulaires
  - Champs disponibles : texte, email, téléphone, textarea, dropdown, checkbox, radio, date, fichier
  - Validation automatique (email valide, champs requis) via Zod
  - Protection anti-spam : reCAPTCHA v3 ou honeypot
- ✅ **Notification email** :
  - Email envoyé à admin à chaque soumission (Resend ou Nodemailer)
  - Personnalisation sujet, corps email
  - Multiple destinataires possibles
- ✅ **Email de confirmation** : Auto-réponse automatique à l'utilisateur
- ✅ **Messages personnalisés** : Succès, erreur, validation
- ✅ **Stockage soumissions** : Base de données PostgreSQL
  - Liste tous les messages dans l'interface admin
  - Export CSV des données
  - Recherche, tri, filtres
- ✅ **Intégration** : Insertion directe dans les pages via l'éditeur

**Formulaires pré-configurés (livrés avec site) :**
1. **Formulaire Contact général** : Page Contact
2. **Formulaire Pré-inscription Enfants** : Page Cours Enfants
3. **Formulaire Pré-inscription Adultes** : Page Cours Adultes
4. **Formulaire Séance Découverte** : Page d'accueil ou Cours
5. **Formulaire Demande d'information** : Multiple pages

#### 6.4.6 Gestion des Menus

**Accès:** Apparence > Menus

**Interface Drag & Drop:**
- ✅ **Créer menu** : Nom (ex: "Menu Principal", "Menu Footer")
- ✅ **Ajouter éléments** :
  - **Pages** : Sélection pages existantes (Accueil, Cours, Contact, etc.)
  - **Articles** : Liens vers articles spécifiques
  - **Catégories** : Liens vers catégories blog
  - **Liens personnalisés** : URLs externes (ex: page Facebook club)
  - **Événements** : Liens vers page calendrier
- ✅ **Organiser éléments** :
  - Glisser-déposer pour réordonner
  - Indenter à droite pour créer sous-menus (dropdown)
  - Éditer texte affiché (différent du titre page si souhaité)
  - Ajouter classes CSS personnalisées (avancé)
- ✅ **Emplacement menu** : Assigner à position (Header, Footer, etc.)
- ✅ **Aperçu en direct** : Voir modifications immédiatement

**Exemple configuration Menu Principal :**
```
Accueil
Le Club
Notre Équipe
Cours & Programmes
  ├── Cours Enfants (sous-menu)
  ├── Cours Adultes
  ├── Interclubs
  └── Stages Vacances
Adhésion & Tarifs
Événements
Contact
```

#### 6.4.7 Gestion des Utilisateurs & Rôles

**Accès:** Utilisateurs > Tous les utilisateurs

**Rôles utilisateurs (par ordre de permissions) :**

1. **Administrateur** (Responsable Web)
   - Accès complet à tout
   - Installation plugins/thèmes
   - Gestion utilisateurs
   - Paramètres site
   - **Recommandation** : 1-2 personnes max

2. **Éditeur** (Responsable Contenu)
   - Créer, éditer, publier, supprimer : articles, pages, événements
   - Gérer médias (toute la bibliothèque)
   - Gérer catégories et tags
   - Modérer commentaires
   - **Recommandation** : 2-3 bénévoles actifs

3. **Auteur**
   - Créer, éditer, publier, supprimer : ses propres articles
   - Upload médias (uniquement pour ses articles)
   - **Usage TCC** : Professeur pour publier conseils techniques

4. **Contributeur**
   - Créer, éditer ses propres articles (mais pas publier, attendre validation)
   - Pas d'upload médias
   - **Usage TCC** : Membre bureau occasionnel

5. **Abonné**
   - Lecture seule, profil personnel
   - **Usage TCC** : Non utilisé (pas d'espace membre)

**Création nouvel utilisateur :**
- Nom d'utilisateur (login)
- Email
- Mot de passe (généré sécurisé ou personnalisé)
- Rôle attribué
- Notification email envoyée avec identifiants

#### 6.4.8 Personnalisation du Thème (Customizer)

**Accès:** Apparence > Personnaliser

**Options configurables (sans code) :**
- ✅ **Identité du site** :
  - Logo du club (upload)
  - Icône du site (favicon, 512x512px)
  - Titre et slogan
- ✅ **Couleurs** :
  - Couleur primaire (boutons, liens)
  - Couleur secondaire
  - Couleur header/footer
  - Personnalisation selon charte TCC
- ✅ **Typographie** :
  - Police titres (Montserrat par défaut)
  - Police corps texte (Open Sans par défaut)
  - Tailles par défaut
- ✅ **Header** :
  - Style header (transparent, solid)
  - Menu position
  - Affichage logo
  - Bouton CTA header ("Devenir Membre")
- ✅ **Footer** :
  - Nombre colonnes widgets (3-4)
  - Texte copyright
  - Réseaux sociaux (URLs)
  - Couleur background
- ✅ **Page d'accueil** :
  - Choix : page statique ou derniers articles
  - Sélection page d'accueil
  - Sélection page blog (actualités)
- ✅ **Widgets** :
  - Sidebar (si activée)
  - Footer colonnes (3-4 zones)
  - Drag & drop widgets disponibles
- ✅ **CSS personnalisé** (avancé) :
  - Ajouter CSS custom sans modifier fichiers
  - Pré-visualisation temps réel

**Mode Prévisualisation Temps Réel:**
- Toutes modifications visibles instantanément
- Test responsive (mobile, tablette, desktop)
- Publier ou Abandonner modifications

#### 6.4.9 Sauvegardes Automatiques

**Accès:** Admin > Paramètres > Sauvegardes

**Configuration automatique :**
- ✅ **Fréquence** :
  - Base de données PostgreSQL : Quotidienne (contient tous les contenus)
  - Fichiers médias uploadés : Quotidienne
  - Configuration application : Quotidienne
- ✅ **Rétention** : 30 derniers jours conservés
- ✅ **Destination** :
  - **Option 1** : Stockage local serveur OVH (espace dédié)
  - **Option 2** : Stockage externe (S3, Backblaze B2, ou Google Drive)
  - **Recommandation** : Double backup (local + cloud externe)
- ✅ **Notifications email** : Succès/échec backup
- ✅ **Restauration en quelques clics** : Interface admin dédiée
- ✅ **Vérification intégrité** : Test mensuel automatique des backups
- ✅ **Export/import** : Migration facilitée vers nouveau serveur

#### 6.4.10 Sécurité & Mises à Jour

**Accès:** Admin > Tableau de bord > Sécurité

**Protections intégrées :**
- ✅ **Rate limiting API** : Limitation automatique des requêtes par IP
- ✅ **Protection CSRF** : Tokens anti-Cross-Site Request Forgery
- ✅ **Validation XSS** : Protection contre injections de scripts
- ✅ **SQL Injection** : Protection via ORM Prisma (requêtes paramétrées)
- ✅ **Protection connexion** :
  - Limitation tentatives (5 max en 20 min)
  - Blocage temporaire IP suspects
  - 2FA (Two-Factor Authentication) avec NextAuth.js
  - Sessions sécurisées avec JWT
- ✅ **HTTPS obligatoire** : SSL Let's Encrypt automatique
- ✅ **Headers sécurité** : CSP, X-Frame-Options, HSTS
- ✅ **Validation données** : Zod pour toutes les entrées utilisateur

**Surveillance des dépendances :**
- ✅ **Audit automatique** : npm audit quotidien
- ✅ **Dependabot** : Détection automatique de vulnérabilités
- ✅ **Notifications admin** : Alertes dans le dashboard pour :
  - Dépendances avec vulnérabilités critiques
  - Mises à jour de sécurité disponibles
  - Packages obsolètes
- ✅ **Vue d'ensemble** : Dashboard affichant :
  - Nombre de dépendances à jour / obsolètes
  - Vulnérabilités détectées (critique/haute/moyenne/faible)
  - Dernière vérification de sécurité
  - Recommandations de mises à jour

**Mises à jour facilitées :**
- ✅ **Interface dédiée** : Section "Mises à jour" dans l'admin
- ✅ **Un clic pour mettre à jour** :
  - Mise à jour des dépendances non-breaking
  - Sauvegarde automatique avant mise à jour
  - Rollback possible en cas de problème
- ✅ **Documentation** : Guide de mise à jour pour versions majeures
- ✅ **Changelog** : Historique des mises à jour effectuées

**Backups automatiques :**
- ✅ **Base de données** : Backup quotidien PostgreSQL
- ✅ **Médias** : Sauvegarde fichiers uploadés
- ✅ **Rétention** : 30 derniers jours conservés
- ✅ **Restauration** : Interface simple de restauration depuis l'admin

**Logs & Monitoring :**
- ✅ **Logs d'accès** : Connexions admin, modifications importantes
- ✅ **Logs d'erreurs** : Erreurs applicatives avec stack traces
- ✅ **Tentatives de connexion** : Suivi échecs et succès
- ✅ **Alertes email** : Notifications pour événements critiques

**Actions admin disponibles :**
- Consulter logs de sécurité
- Voir vulnérabilités détectées
- Lancer audit de sécurité manuel
- Mettre à jour les dépendances
- Gérer les blocages IP
- Télécharger backups
- Voir historique des mises à jour

#### 6.4.11 SEO (Module Intégré)

**Accès (2 niveaux) :**
1. **Par page/article** : Panneau SEO dans l'éditeur
2. **Global** : Admin > Paramètres > SEO

**Par Page/Article (Meta Box) :**
- ✅ **Analyse SEO** : Score /100 avec recommandations
- ✅ **Mot-clé focus** : Définir mot-clé principal
- ✅ **Snippet Google** :
  - Prévisualisation résultat Google
  - Meta title (60 caractères)
  - Meta description (155 caractères)
  - URL (slug)
- ✅ **Schema Markup** : Données structurées automatiques
- ✅ **Réseaux sociaux** :
  - Aperçu Facebook (Open Graph)
  - Aperçu Twitter Card
  - Image et description personnalisées

**Dashboard Global :**
- ✅ **Analytics SEO** : Positions mots-clés, clics, impressions (Google Search Console intégré)
- ✅ **Suggestions** : Optimisations à réaliser
- ✅ **Sitemap XML** : Généré automatiquement
- ✅ **Redirections** : Gérer redirections 301 (changements URLs)
- ✅ **Monitor 404** : Pages non trouvées

#### 6.4.12 Formation & Documentation Admin

**Livrée avec le site :**
- ✅ **Guide PDF** : "Administration Site TCC - Guide Utilisateur" (30-40 pages)
  - Chapitres :
    1. Connexion et tableau de bord
    2. Créer et publier un article (pas à pas illustré)
    3. Modifier une page existante
    4. Gérer les images
    5. Ajouter un événement
    6. Consulter les formulaires
    7. Modifier les menus
    8. Résolution problèmes courants
    9. Qui contacter en cas de souci
  - Captures d'écran annotées
  - Format A4, imprimable

- ✅ **Tutoriels vidéo** : 5-7 vidéos courtes (3-5 min)
  - Hébergées YouTube (chaîne privée ou publique)
  - Sujets : Connexion, Créer article, Gérer images, Ajouter événement, Modifier page

- ✅ **Session formation** : 2h avec Responsable Web
  - Démonstration en direct
  - Exercices pratiques
  - Questions/réponses

- ✅ **Support continu** :
  - Email support : support@tcclairefontaine.fr (alias vers responsable web)
  - Documentation Next.js officielle : https://nextjs.org/docs
  - Documentation React : https://react.dev
  - Forum support communauté Next.js : https://github.com/vercel/next.js/discussions

---

## 7. Architecture de l'Information

### 7.1 Arborescence du Site (MVP)

```
📱 SITE TCC
│
├── 🏠 Accueil
│   ├── Hero + Tagline + CTA principal
│   ├── Nos Offres (3 cartes)
│   ├── Nos Atouts (3 blocs)
│   ├── Témoignages
│   ├── Actualités récentes
│   └── Footer
│
├── 🎾 Le Club
│   ├── Notre Histoire
│   ├── Nos Valeurs
│   ├── Nos Installations
│   │   ├── Court Couvert
│   │   ├── Courts Extérieurs
│   │   └── Galerie Photos
│   ├── Notre Bureau
│   └── Plan d'Accès (Carte)
│
├── 👨‍🏫 Notre Équipe
│   ├── [Prénom] - Professeur 4/6
│   │   ├── Présentation
│   │   ├── Parcours
│   │   └── Témoignages
│   └── [Prénom] - Professeur Principal
│       ├── Présentation
│       └── Parcours
│
├── 📚 Cours & Programmes
│   ├── Cours Enfants
│   │   ├── Mini-Tennis (4-6 ans)
│   │   ├── Débutants (7-9 ans)
│   │   └── Intermédiaires (10-12 ans)
│   ├── Cours Adultes
│   │   ├── Cours Collectifs Hommes
│   │   ├── Cours Collectifs Femmes
│   │   ├── Cliniques Techniques (Premium)
│   │   └── Séances Découverte
│   ├── Interclubs & Compétition
│   │   ├── Nos Équipes
│   │   ├── Calendrier
│   │   └── Résultats
│   └── Stages Vacances
│       ├── Stages Enfants
│       └── Stages Adultes
│
├── 💳 Adhésion & Tarifs
│   ├── Tableau des Tarifs
│   ├── Avantages Inclus
│   ├── Modalités d'Inscription
│   ├── Formulaire de Pré-inscription
│   └── FAQ
│
└── 📧 Contact
    ├── Formulaire de Contact
    ├── Coordonnées
    ├── Horaires Secrétariat
    └── Plan d'Accès
```

### 7.2 Arborescence Complète (Phase 2 & 3)

```
📱 SITE TCC (Complet)
│
├── ... [sections MVP ci-dessus]
│
├── 📅 Événements & Tournois (P1)
│   ├── Calendrier
│   ├── Événements à Venir
│   ├── Événements Passés
│   └── Galeries Photos
│
├── 📰 Actualités (P1)
│   ├── Toutes les Actualités
│   ├── Résultats
│   ├── Vie du Club
│   └── Le Conseil du Pro
│
├── 📸 Galerie (P1)
│   ├── Albums par Événement
│   └── Vidéos
│
└── 🎥 Conseils du Pro (P2)
    ├── Toutes les Vidéos
    ├── Technique
    ├── Tactique
    └── Préparation Physique
```

### 7.3 Menu de Navigation Principal

**Structure recommandée (5-7 items max) :**

**Version Desktop:**
```
[Logo TCC]  |  Le Club  |  Notre Équipe  |  Cours  |  Adhésion  |  Contact  |  [CTA: Devenir Membre]
```

**Version Mobile (Hamburger Menu):**
```
☰
├── Accueil
├── Le Club
├── Notre Équipe
├── Cours & Programmes
│   ├── Enfants
│   ├── Adultes
│   ├── Interclubs
│   └── Stages
├── Adhésion & Tarifs
├── Contact
└── [CTA: Devenir Membre]
```

**Phase 2 - Ajout au menu:**
```
├── Événements
├── Actualités
└── Galerie
```

**Phase 3 - Ajout au menu:**
```
└── Conseils du Pro (vidéos)
```

### 7.4 Footer (Pied de Page)

**Structure recommandée:**

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo TCC]                                                  │
│                                                              │
│  Liens Rapides      Cours              Contact              │
│  ─────────────      ─────              ───────              │
│  • Le Club          • Enfants          📍 [Adresse]         │
│  • Notre Équipe     • Adultes          📞 [Téléphone]       │
│  • Adhésion         • Stages           ✉️ [Email]           │
│  • Contact          • Interclubs       🕐 [Horaires]        │
│                                                              │
│  Suivez-nous : [Facebook] [Instagram]                       │
│                                                              │
│  © 2025 Tennis Club Clairefontaine | Mentions Légales |     │
│  Politique de Confidentialité | Création: [Nom]             │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. Spécifications Techniques

### 8.1 Plateforme & Hébergement

**Approche Retenue:** Développement custom avec Claude Code (LLM de développement)

#### Hébergement : OVH

**Offre recommandée:** OVH Hébergement Web Performance (ou équivalent)

**Caractéristiques:**
- 💰 **Prix:** ~5-10€/mois (60-120€/an)
- 💾 **Stockage:** 250-500 Go SSD (largement suffisant)
- 🌐 **Bande passante:** Illimitée
- 📧 **Emails:** Inclus (adresses @tcclairefontaine.fr)
- 🔒 **SSL:** Certificat Let's Encrypt gratuit inclus
- 🇫🇷 **Support:** Français, 7j/7
- 🗄️ **Base de données:** MySQL/PostgreSQL incluse
- ⚡ **Performance:** CDN intégré, cache optimisé

**Alternatives équivalentes:**
- o2switch (~7€/mois, français, illimité, excellent support)
- Ionos (5-10€/mois, interface simple)
- Hostinger (~3-8€/mois, budget très serré)

**URL:** https://www.ovhcloud.com/fr/web-hosting/

### 8.2 Stack Technique Recommandée

**Développement:** Claude Code (assistance IA pour développement)

#### Option 1 (Écartée) : WordPress

**Pourquoi WordPress pourrait convenir :**
- ✅ Facilité de gestion contenu
- ✅ Écosystème riche
- ✅ Grande communauté

**Pourquoi WordPress est écarté pour ce projet :**
- ❌ Besoin d'une interface d'administration sur-mesure
- ❌ Contrôle total sur les fonctionnalités souhaité
- ❌ Dépendance à de nombreux plugins tiers
- ❌ Complexité de maintenance des plugins
- ❌ Limitations de personnalisation de l'interface admin

#### Option 2 (RETENUE) : Next.js + Interface d'Administration Custom

**Pourquoi Next.js + Admin Custom :**
- ✅ Performance exceptionnelle (SSG/SSR)
- ✅ SEO optimal
- ✅ Expérience utilisateur fluide
- ✅ Stack moderne et pérenne
- ✅ Déploiement OVH compatible
- ✅ Interface d'administration totalement personnalisée et intuitive
- ✅ Contrôle total sur les fonctionnalités
- ✅ Sécurité renforcée avec mises à jour simplifiées
- ✅ Pas de dépendance à des plugins tiers

**Stack Technique Complète:**

**Frontend (Site Public) :**
- **Framework:** Next.js 14+ (App Router)
- **Langage:** TypeScript
- **Styling:** Tailwind CSS
- **Composants UI:** Shadcn/ui ou Radix UI
- **Images:** Next/Image avec optimisation automatique (Sharp)
- **Animations:** Framer Motion (optionnel)

**Backend (API) :**
- **Framework:** Next.js API Routes
- **Base de données:** PostgreSQL (hébergée sur OVH)
- **ORM:** Prisma ou Drizzle
- **Authentication:** NextAuth.js
- **Validation:** Zod
- **File Storage:** Uploadthing ou stockage local optimisé

**Interface d'Administration:**
- **Éditeur WYSIWYG:** TipTap (moderne, extensible) ou Slate.js
- **Système de blocs:** Custom inspiré de Gutenberg
- **Gestion médias:** Bibliothèque custom avec drag & drop
- **Dashboard:** Charts avec Recharts ou Chart.js
- **Formulaires:** React Hook Form + Zod validation

**Fonctionnalités Intégrées:**
- **Formulaires contact:** Resend ou Nodemailer pour emails
- **Galerie photos:** Lightbox custom (photoswipe)
- **Calendrier événements:** React Big Calendar ou custom
- **SEO:** next-seo + sitemap automatique
- **Analytics:** Google Analytics 4 (intégration native)
- **RGPD:** Module de consentement custom

**Sécurité & Maintenance:**
- **Dépendances:** Surveillance automatique avec Dependabot
- **Mises à jour:** npm audit automatique, notifications dans l'admin
- **HTTPS:** SSL Let's Encrypt (gratuit via OVH)
- **Rate limiting:** Protection API contre abus
- **Validation:** Protection XSS, CSRF, SQL injection
- **Backups:** Automatiques quotidiens (base de données + médias)

**Déploiement:**
- **Hébergement:** OVH VPS ou hébergement Node.js
- **Build:** Automatisé via Git hooks
- **Process:** PM2 pour process management
- **Reverse proxy:** Nginx
- **CI/CD:** Scripts de déploiement automatisés

**Avantages de cette approche:**
- ✅ Performance maximale (score Lighthouse 95-100)
- ✅ Contrôle total du code et des fonctionnalités
- ✅ Interface d'admin intuitive type WordPress pour les bénévoles
- ✅ Pas de plugins tiers à maintenir (moins de vulnérabilités)
- ✅ Sécurité renforcée avec mises à jour simplifiées
- ✅ Coûts maîtrisés (pas de plugins premium)
- ✅ Stack moderne et pérenne
- ✅ Facilité de maintenance avec suivi automatique des dépendances

#### Architecture Retenue : Next.js + Admin Custom

**Justification:**
- ✅ Bénévoles pourront gérer contenu via interface intuitive type WordPress
- ✅ Ajout actualités, événements, photos simple (éditeur WYSIWYG)
- ✅ Coût maîtrisé (pas de plugins premium)
- ✅ Maintenance simplifiée avec surveillance automatique des dépendances
- ✅ Sécurité renforcée (moins de surface d'attaque)
- ✅ Performance maximale (Next.js SSG/SSR)
- ✅ Compatible OVH (hébergement Node.js ou VPS)
- ✅ Claude Code peut développer l'application complète

**Architecture Next.js Retenue:**
```
Application Next.js 14+
├── Frontend Public (Site vitrine)
│   ├── Design sur-mesure selon maquettes PRD
│   ├── Optimisé performance (< 2s chargement)
│   ├── Mobile-first responsive (Tailwind CSS)
│   ├── SEO optimisé (next-seo, Schema.org, Open Graph)
│   └── Composants réutilisables (Shadcn/ui)
│
├── Interface d'Administration (/admin)
│   ├── Dashboard avec statistiques
│   ├── Éditeur WYSIWYG (TipTap) type WordPress
│   ├── Gestion médias (upload, crop, optimisation)
│   ├── Gestion articles/actualités
│   ├── Gestion pages
│   ├── Gestion événements (calendrier)
│   ├── Gestion équipe (membres)
│   ├── Gestion menus (drag & drop)
│   ├── Paramètres & personnalisation
│   ├── Module sécurité (audit dépendances)
│   └── Module mises à jour (notifications)
│
├── Backend (API Routes)
│   ├── Authentification (NextAuth.js)
│   ├── Base de données PostgreSQL
│   ├── ORM Prisma
│   ├── Validation Zod
│   ├── Rate limiting
│   └── Protection CSRF/XSS
│
├── Fonctionnalités Intégrées
│   ├── Formulaires contact (Resend/Nodemailer)
│   ├── Galerie photos (Lightbox)
│   ├── Calendrier événements
│   ├── Analytics (Google Analytics 4)
│   ├── SEO automatique (sitemap, robots.txt)
│   └── RGPD (module consentement)
│
└── Hébergement OVH
    ├── Node.js runtime
    ├── PostgreSQL database
    ├── SSL Let's Encrypt
    ├── PM2 process management
    ├── Nginx reverse proxy
    ├── Backups automatiques quotidiens
    └── Surveillance dépendances (Dependabot)
```

### 8.3 Nom de Domaine

**Coût:** ~10-15€/an (via OVH, Gandi, ou Namecheap)

**Options recommandées (par ordre de préférence) :**
1. **tcclairefontaine.fr** ⭐ (court, mémorable)
2. **tennisclubclairefontaine.fr** (explicite, bon pour SEO)
3. **tennis-clairefontaine.fr** (avec tiret, alternative)
4. **tcc78.fr** (court avec département)

**Recommandation:** **tcclairefontaine.fr** - Court, professionnel, facile à communiquer

**Configuration DNS :** Via interface OVH (simple, pointage automatique vers hébergement)

### 8.4 Performance & Optimisation

**Objectifs:**
- ⚡ Temps de chargement initial < 3 secondes
- ⚡ First Contentful Paint < 1.5s
- ⚡ Time to Interactive < 3.5s
- 📱 Score Google PageSpeed Insights > 80/100 mobile
- 📱 Score Google PageSpeed Insights > 90/100 desktop

**Techniques (Next.js + OVH):**
- **Application optimisée** : Build statique (SSG) ou server-side (SSR) selon besoins
- **Compression images** : Next/Image avec Sharp (WebP/AVIF automatique)
- **Lazy loading** : Natif Next.js pour images et composants
- **Minification** : Automatique dans build Next.js (CSS/JS/HTML)
- **Cache** : Cache HTTP natif Next.js + cache OVH si disponible
- **CDN** : Possibilité d'intégration Cloudflare (gratuit) ou CDN OVH
- **Base de données** : Requêtes optimisées via Prisma ORM + indexation PostgreSQL
- **GZIP/Brotli** : Compression automatique via Nginx
- **Limite taille image** : 300 Ko max, formats modernes (WebP/AVIF)
- **Fonts** : Fonts locaux optimisés avec next/font (preload automatique)
- **Code splitting** : Automatique Next.js (lazy loading des composants)
- **Tree shaking** : Élimination code non utilisé automatique

### 8.5 SEO (Référencement Naturel)

**Objectifs:**
- Être visible sur requêtes locales :
  - "tennis club clairefontaine"
  - "cours tennis clairefontaine"
  - "club tennis yvelines"
  - "cours tennis enfants clairefontaine"
  - "tennis près de rambouillet" (ville proche)

**Techniques On-Page:**
- ✅ Balises title optimisées (60 caractères max)
  - Exemple : "Tennis Club Clairefontaine | Cours Enfants & Adultes - Yvelines"
- ✅ Meta descriptions (155 caractères max)
- ✅ Balises H1, H2, H3 structurées
- ✅ URLs propres et lisibles
  - Exemple : /cours-enfants, /notre-equipe, /adhesion
- ✅ Attributs ALT sur toutes les images
- ✅ Maillage interne (liens entre pages)
- ✅ Contenu riche en mots-clés naturels (pas de sur-optimisation)
- ✅ Schema.org markup (SportsClub, LocalBusiness)

**Techniques Off-Page:**
- ✅ Inscription Google My Business (fiche locale)
- ✅ Inscription annuaires locaux (mairie, FFT, annuaires sport)
- ✅ Backlinks :
  - Site mairie Clairefontaine
  - Partenaires locaux
  - Presse locale (articles)
- ✅ Partages réseaux sociaux

**Outils:**
- Google Search Console (suivi indexation)
- Google Analytics (suivi trafic)
- Google My Business (référencement local)

### 8.6 Accessibilité (WCAG)

**Niveau visé:** AA (minimum légal)

**Critères:**
- ✅ Contraste texte/fond suffisant (ratio 4.5:1 minimum)
- ✅ Taille police lisible (16px minimum pour corps de texte)
- ✅ Navigation au clavier possible
- ✅ Attributs ALT sur images
- ✅ Formulaires accessibles (labels, placeholders)
- ✅ Vidéos sous-titrées (si applicable)
- ✅ Structure HTML sémantique

### 8.7 Sécurité & Maintenance

**Architecture sécurisée Next.js:**
- ✅ **HTTPS obligatoire** : SSL Let's Encrypt automatique
- ✅ **Headers de sécurité** :
  - Content Security Policy (CSP)
  - X-Frame-Options (protection clickjacking)
  - X-Content-Type-Options
  - Strict-Transport-Security (HSTS)
  - Referrer-Policy
- ✅ **Protection des données** :
  - Variables d'environnement pour secrets (.env)
  - Hachage bcrypt pour mots de passe
  - Sessions sécurisées avec JWT
  - Cookies HttpOnly et Secure

**Protection applicative:**
- ✅ **Rate limiting** : Limitation requêtes par IP (prévention DDoS)
- ✅ **CSRF Protection** : Tokens anti-Cross-Site Request Forgery
- ✅ **XSS Protection** : Sanitization des inputs utilisateur
- ✅ **SQL Injection** : ORM Prisma avec requêtes paramétrées
- ✅ **Validation stricte** : Zod pour toutes les entrées
- ✅ **Protection anti-spam** : reCAPTCHA v3 ou honeypot sur formulaires
- ✅ **Upload sécurisé** : Validation type/taille fichiers, scan antivirus optionnel

**Authentification & accès:**
- ✅ **NextAuth.js** : Gestion authentification sécurisée
- ✅ **2FA disponible** : Authentification à deux facteurs
- ✅ **Mots de passe forts** : Politique de complexité appliquée
- ✅ **Limitation tentatives** : Blocage après 5 échecs
- ✅ **Sessions** : Expiration automatique, révocation possible
- ✅ **Rôles utilisateurs** : Admin, Éditeur, Auteur (principe moindre privilège)

**Mises à jour et maintenance:**
- ✅ **Surveillance automatique** :
  - npm audit quotidien pour vulnérabilités
  - Dependabot GitHub pour dépendances
  - Notifications dans l'admin pour mises à jour critiques
- ✅ **Interface de mise à jour** :
  - Section dédiée dans l'admin
  - Vue d'ensemble des dépendances (à jour/obsolètes/vulnérables)
  - Mise à jour en un clic pour patches de sécurité
  - Sauvegarde automatique avant mise à jour
  - Rollback possible en cas de problème
- ✅ **Changelog** : Historique des mises à jour effectuées
- ✅ **Documentation** : Guide de mise à jour pour versions majeures

**Sauvegardes automatiques:**
- ✅ **Base de données** : Backup PostgreSQL quotidien
- ✅ **Médias & fichiers** : Sauvegarde quotidienne
- ✅ **Rétention** : 30 derniers jours conservés
- ✅ **Restauration** : Interface admin pour restauration rapide
- ✅ **Tests de backup** : Vérification mensuelle de l'intégrité

**Monitoring & logs:**
- ✅ **Logs d'accès** : Connexions admin, modifications importantes
- ✅ **Logs d'erreurs** : Stack traces, debugging
- ✅ **Logs de sécurité** : Tentatives connexion, blocages IP
- ✅ **Alertes email** : Incidents sécurité critiques
- ✅ **Dashboard sécurité** : Vue d'ensemble de l'état de sécurité

**Conformité RGPD:**
- ✅ **Politique de confidentialité**
- ✅ **Mentions légales**
- ✅ **Consentement cookies** : Banner avec choix granulaires
- ✅ **Droit d'accès** : Export données personnelles
- ✅ **Droit à l'oubli** : Suppression données utilisateur
- ✅ **Minimisation** : Collecte uniquement données nécessaires
- ✅ **Chiffrement** : Données sensibles chiffrées en base

**Avantages sécurité Next.js vs WordPress:**
- ✅ Moins de surface d'attaque (pas de plugins tiers)
- ✅ Mises à jour simplifiées (dépendances npm vs plugins WP)
- ✅ Contrôle total du code (audit possible)
- ✅ Protection native TypeScript (typage fort)
- ✅ Surveillance automatisée des vulnérabilités

### 8.8 Analytics & Tracking

**Outils recommandés:**
- **Google Analytics 4** (gratuit)
  - Suivi du trafic
  - Sources d'acquisition
  - Comportement utilisateurs
  - Conversions (formulaires remplis)
  - Événements (clics CTA, téléchargements, etc.)

**KPIs à suivre:**
- Visiteurs uniques / mois
- Pages vues / session
- Taux de rebond
- Durée moyenne session
- Taux de conversion (formulaires)
- Pages les plus visitées
- Appareils utilisés (desktop/mobile/tablet)

**Respect RGPD:**
- Bandeau cookies
- Anonymisation IP
- Opt-out possible

---

## 9. Design & UX

### 9.1 Identité Visuelle

#### 9.1.1 Palette de Couleurs

**Couleurs du Club TCC:**

**Palette Principale (Couleurs officielles du club) :**
- **Primaire - Bordeaux:** #8B1538 (ou #722F37 pour version plus douce) - Élégance, tradition, passion
  - Utilisation : Header, footer, CTAs principaux, titres H1, liens importants
  - Évoque : Prestige, excellence sportive, club historique

- **Secondaire - Blanc cassé:** #F8F6F0 (ou #FAF9F6) - Clarté, élégance, respiration
  - Utilisation : Backgrounds principaux, cartes, sections alternées
  - Évoque : Propreté, modernité, espaces aérés

- **Accent - Bordeaux foncé:** #5D1126 - Pour contraste et emphase
  - Utilisation : Hover states, éléments actifs, bordures importantes

- **Neutre - Gris chaud:** #4A4A4A - Textes et contenus
  - Utilisation : Corps de texte, descriptions, labels

- **Blanc pur:** #FFFFFF - Contraste maximal
  - Utilisation : Textes sur fond bordeaux, zones de respiration

**Palette Complémentaire (accents) :**
- **Or doux:** #D4AF37 (optionnel) - Pour highlights, distinctions, badges
- **Gris clair:** #E8E6E1 - Bordures, séparateurs subtils

**Utilisation par composants:**
- **Header** : Bordeaux (#8B1538) avec texte blanc
- **Footer** : Bordeaux foncé (#5D1126) avec texte blanc cassé
- **CTAs principaux** : Bordeaux (#8B1538) avec texte blanc, hover bordeaux foncé
- **Boutons secondaires** : Outline bordeaux, fond transparent, hover fond blanc cassé
- **Backgrounds** : Alternance blanc cassé (#F8F6F0) et blanc pur (#FFFFFF)
- **Textes** : Gris chaud (#4A4A4A) sur fond clair, blanc sur fond bordeaux
- **Liens** : Bordeaux (#8B1538), hover bordeaux foncé (#5D1126)
- **Icônes** : Bordeaux ou gris chaud selon contexte

**Accessibilité:**
- Ratio contraste bordeaux/blanc : 8.5:1 (AAA) ✅
- Ratio contraste gris/blanc cassé : 8.2:1 (AAA) ✅
- Texte blanc sur bordeaux foncé : Très lisible ✅

#### 9.1.2 Typographie

**Police Titres (Headings):**
- **Choix 1:** Montserrat (Google Fonts) - Moderne, géométrique, excellent pour titres
- **Choix 2:** Raleway - Élégante, lisible
- **Choix 3:** Poppins - Contemporaine, friendly

**Recommandation:** Montserrat Bold/SemiBold

**Police Corps de Texte:**
- **Choix 1:** Open Sans (Google Fonts) - Très lisible, neutre, professionnelle
- **Choix 2:** Roboto - Standard, excellente lisibilité écran
- **Choix 3:** Lato - Humaniste, chaleureuse

**Recommandation:** Open Sans Regular (corps), SemiBold (emphases)

**Tailles:**
- H1 : 36-48px (desktop) / 28-32px (mobile)
- H2 : 28-36px (desktop) / 24-28px (mobile)
- H3 : 22-28px (desktop) / 20-24px (mobile)
- Corps : 16-18px (minimum 16px)
- Small : 14px (mentions, footer)

**Hiérarchie:**
- Utiliser poids différents (Regular, SemiBold, Bold)
- Espacements généreux (line-height 1.6-1.8 pour corps texte)

#### 9.1.3 Style Photographique

**Directives:**
- ✅ **Photos réelles** du club uniquement (PAS de stock photos génériques)
- ✅ **Haute qualité** (minimum 1920px largeur pour hero, 800px pour galerie)
- ✅ **Lumière naturelle** privilégiée
- ✅ **Couleurs vives** mais naturelles (éviter sur-saturation)
- ✅ **Visages souriants** : Montrer membres en action, professeurs engageants
- ✅ **Diversité** : Enfants, adultes, hommes, femmes, différents âges
- ✅ **Contexte** : Montrer installations (courts, couvert), action de jeu, moments conviviaux

**Sujets prioritaires à photographier:**
1. Court couvert (plusieurs angles, jour/soir)
2. Courts extérieurs (vue d'ensemble, détails)
3. Jeune professeur en action (cours enfants, adultes, démonstrations)
4. Groupes d'enfants pendant cours (sourires, concentration, jeu)
5. Cours adultes (mixtes, dynamisme)
6. Événements du club (tournois, fête du tennis, galette)
7. Bureau et bénévoles
8. Détails (raquettes, balles, filets, équipements)

**Formats & Optimisation:**
- Format original : JPEG haute qualité ou RAW
- Compression pour web : JPEG 85% qualité ou WebP
- Ratio 16:9 pour hero et bannières
- Ratio 4:3 ou 1:1 pour vignettes et galeries
- Nommage descriptif : `tcc-cours-enfants-01.jpg` (aide SEO)

### 9.2 Principes UX/UI

#### 9.2.1 Design System - Composants

**Boutons (CTAs):**
- **Primaire (action principale):**
  - Couleur : Primaire ou Accent (fort contraste)
  - Padding : 12px 32px
  - Border-radius : 4-8px
  - Hover : Assombrissement 10-15%
  - Texte : Bold, uppercase ou sentence case
  - Exemple : "Devenir Membre", "Inscrire mon Enfant"

- **Secondaire:**
  - Couleur : Outline (bordure primaire, fond transparent)
  - Hover : Fond primaire léger
  - Exemple : "En Savoir Plus", "Contactez-nous"

**Cards (Cartes):**
- Ombre légère (box-shadow)
- Border-radius : 8px
- Padding : 20-30px
- Hover : Légère élévation (shadow augmentée)
- Utilisation : Offres cours, témoignages, événements

**Formulaires:**
- Champs avec labels clairs au-dessus
- Bordure subtile (gris clair)
- Focus : Bordure couleur primaire
- Placeholders en gris léger
- Messages d'erreur en rouge, succès en vert
- Bouton submit : CTA primaire

**Iconographie:**
- Style : Line icons (Material Icons, Feather Icons, ou Heroicons)
- Couleur : Primaire ou gris foncé
- Taille : 24-32px selon contexte
- Utilisation : Points forts, avantages, contacts, navigation

#### 9.2.2 Responsive Design (Mobile-First)

**Breakpoints:**
- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px
- Large Desktop : > 1440px

**Adaptations Mobile:**
- Menu hamburger
- Images adaptatives (srcset)
- Textes réduits mais lisibles
- Boutons tactiles larges (min 44x44px)
- Formulaires simplifiés (un champ par ligne)
- CTAs sticky (bouton flottant "Devenir Membre" ou "Contact")

**Grille:**
- 12 colonnes (desktop)
- 6 colonnes (tablet)
- 4 colonnes (mobile)
- Gutters : 20-30px

#### 9.2.3 Navigation & UX

**Principes:**
- ✅ **Clarté** : Menu principal 5-7 items max
- ✅ **Accessibilité** : 3 clics max pour atteindre toute info
- ✅ **Cohérence** : Navigation identique sur toutes les pages
- ✅ **Feedback** : États hover, active, focus visibles
- ✅ **Breadcrumbs** (fil d'Ariane) si arborescence profonde (Phase 2)

**Header (En-tête):**
- Logo TCC (lien vers accueil)
- Menu principal horizontal (desktop) / Hamburger (mobile)
- CTA "Devenir Membre" bien visible (bouton distinct)
- Possibilité : Barre info contact (téléphone, horaires) au-dessus

**Footer (Pied de page):**
- 3-4 colonnes (desktop) / Accordéons (mobile)
- Liens rapides, Cours, Contact
- Réseaux sociaux
- Mentions légales
- Copyright

**Call-to-Actions (CTAs):**
- CTAs principaux sur chaque page pertinente
- Texte orienté action : "Inscrire mon enfant" > "Inscription"
- Positionnement stratégique (après bénéfices, fin de section)
- Contraste fort avec background

#### 9.2.4 Micro-interactions

**Éléments animés (subtils):**
- Boutons : Hover avec transition douce (200-300ms)
- Images : Zoom léger au hover (galerie)
- Cards : Élévation au hover
- Scroll : Apparition progressive sections (fade-in)
- Formulaires : Validation en temps réel (icônes ✓ / ✗)

**Éviter:**
- Animations trop longues (> 500ms)
- Effets distrayants ou gimmicky
- Auto-play vidéos avec son

### 9.3 Maquettes Conceptuelles (Wireframes)

#### 9.3.1 Page d'Accueil (Desktop)

```
┌────────────────────────────────────────────────────────────┐
│  [HEADER]                                                   │
│  [Logo TCC]  Le Club | Notre Équipe | Cours | Adhésion |   │
│              Contact  |  [CTA: Devenir Membre]              │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  [HERO - Grande Image Court Couvert]                        │
│                                                              │
│         TENNIS DE QUALITÉ, ESPRIT VILLAGE                   │
│         Jouez toute l'année à Clairefontaine                │
│                                                              │
│         [CTA: Découvrir nos Cours]  [CTA: Contact]          │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  NOS ATOUTS                                                 │
│                                                              │
│  [Icône]              [Icône]              [Icône]          │
│  PROFESSEUR 4/6       COURT COUVERT        ESPRIT VILLAGE   │
│  Excellence           Jouez toute          Convivialité     │
│  pédagogique          l'année              & proximité      │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  NOS OFFRES                                                 │
│                                                              │
│  ┌────────────┐    ┌────────────┐    ┌────────────┐        │
│  │ [Image]    │    │ [Image]    │    │ [Image]    │        │
│  │ COURS      │    │ COURS      │    │ STAGES     │        │
│  │ ENFANTS    │    │ ADULTES    │    │ VACANCES   │        │
│  │            │    │            │    │            │        │
│  │ [CTA: +]   │    │ [CTA: +]   │    │ [CTA: +]   │        │
│  └────────────┘    └────────────┘    └────────────┘        │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  NOTRE PROFESSEUR D'EXCEPTION                               │
│                                                              │
│  ┌─────────┐  [Photo Professeur 4/6]                       │
│  │         │  Rencontrez [Prénom], notre jeune professeur  │
│  │ Photo   │  classé 4/6, diplômé et passionné.            │
│  │ Prof    │  Son approche dynamique et son excellence     │
│  │         │  technique font la différence.                │
│  └─────────┘                                                │
│              [CTA: Découvrir notre équipe]                  │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  ILS TÉMOIGNENT                                             │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ "Super   │  │ "Mon fils│  │ "Ambiance│  │ "Court   │   │
│  │ prof!"   │  │ adore!"  │  │ familiale│  │ couvert  │   │
│  │ - Marc   │  │ - Sophie │  │ sympa"   │  │ top!"    │   │
│  │ [Photo]  │  │ [Photo]  │  │ - Julie  │  │ - Pierre │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  ACTUALITÉS                                                 │
│                                                              │
│  ┌────────────────┐  ┌────────────────┐  ┌──────────────┐  │
│  │ [Image]        │  │ [Image]        │  │ [Image]      │  │
│  │ Article 1      │  │ Article 2      │  │ Article 3    │  │
│  │ Date           │  │ Date           │  │ Date         │  │
│  └────────────────┘  └────────────────┘  └──────────────┘  │
│                                                              │
│  [CTA: Toutes les actualités]                               │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  [FOOTER]                                                   │
│  Liens Rapides | Cours | Contact | Réseaux Sociaux         │
│  Mentions Légales | © 2025 TCC                              │
└────────────────────────────────────────────────────────────┘
```

#### 9.3.2 Page "Cours Enfants" (Desktop)

```
┌────────────────────────────────────────────────────────────┐
│  [HEADER - identique]                                       │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  [HERO/BREADCRUMB]                                          │
│  Accueil > Cours & Programmes > Cours Enfants               │
│                                                              │
│  COURS ENFANTS                                              │
│  Initiation et perfectionnement avec un professeur 4/6      │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  MINI-TENNIS (4-6 ANS)                                      │
│  ┌──────────┐  │  Objectif : Découverte ludique           │
│  │  Image   │  │  Jour : Mercredi 14h-15h                 │
│  │  Enfants │  │  Prof : [Prénom] (Classé 4/6)            │
│  │  Mini    │  │  Tarif : XXX€/an                         │
│  └──────────┘  │  [CTA: Inscrire mon enfant]              │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  DÉBUTANTS (7-9 ANS)                                        │
│  [Même structure que ci-dessus]                             │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  INTERMÉDIAIRES (10-12 ANS)                                 │
│  [Même structure]                                           │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  GALERIE PHOTOS                                             │
│  [6-8 photos des cours enfants]                             │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  TÉMOIGNAGES PARENTS                                        │
│  [3 témoignages]                                            │
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  [CTA SECTION]                                              │
│  Prêt à inscrire votre enfant ?                             │
│  [CTA: Formulaire de Pré-inscription] [CTA: Nous Contacter]│
└────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  [FOOTER - identique]                                       │
└────────────────────────────────────────────────────────────┘
```

#### 9.3.3 Version Mobile (375px)

```
┌──────────────┐
│ [Logo]    ☰ │  ← Hamburger menu
└──────────────┘

┌──────────────┐
│              │
│ [Hero Image] │
│              │
│ TAGLINE      │
│              │
│ [CTA Full]   │
│ [CTA Full]   │
└──────────────┘

┌──────────────┐
│ NOS ATOUTS   │
│              │
│ [Icône]      │
│ Titre        │
│ Texte court  │
│              │
│ [Icône]      │
│ Titre        │
│ Texte court  │
│              │
│ [Icône]      │
│ Titre        │
│ Texte court  │
└──────────────┘

┌──────────────┐
│ NOS OFFRES   │
│              │
│ [Card Enfant]│
│ [CTA]        │
│              │
│ [Card Adult] │
│ [CTA]        │
│              │
│ [Card Stage] │
│ [CTA]        │
└──────────────┘

[... sections empilées verticalement ...]

┌──────────────┐
│ [Footer]     │
│ Accordéons   │
└──────────────┘

┌──────────────┐
│ [CTA Sticky] │  ← Bouton flottant bas écran
│ Contact      │
└──────────────┘
```

### 9.4 Exemples d'Inspiration

**Sites à analyser (mentionnés dans docs) :**

1. **Rafa Nadal Academy** (rafanadalacademy.com)
   - À retenir : Organisation par audience, visuels HD, CTAs clairs
   - À adapter : Échelle et budget très différents, ne pas copier le prestige mais la clarté

2. **Eastside Paddle Club**
   - À retenir : Slogan communautaire ("Come for the courts. Stay for the community"), design moderne, facilité réservation
   - À adapter : Focus pickleball, adapter au tennis et esprit village

3. **Mission Hills Tennis Club**
   - À retenir : Minimalisme, élégance, épuré
   - À adapter : Ne pas tomber dans le "trop froid", garder chaleur et authenticité

4. **National Tennis Club (Newport)**
   - À retenir : Valorisation de l'histoire, présentation riche des installations
   - À adapter : Le TCC est plus modeste, mais peut valoriser son histoire locale

**Principe d'inspiration :**
> "S'inspirer des meilleurs, mais rester authentiquement TCC. Notre force n'est pas d'imiter les grands, mais de montrer notre vraie valeur : un club de village de qualité."

---

## 10. Métriques de Succès & KPIs

### 10.1 Objectifs SMART

#### Objectif 1 : Augmentation du Recrutement

**Spécifique:** Augmenter le nombre de nouveaux adhérents via le site web
**Mesurable:** +15-20% de nouveaux adhérents sur 12 mois post-lancement
**Atteignable:** Basé sur succès passés initiations + absence actuelle en ligne = fort potentiel
**Réaliste:** Club actuel ~90 adhérents → Cible 104-108 adhérents (+14-18 personnes)
**Temporel:** 12 mois après lancement du site

**KPI Principal:**
- Nombre de nouveaux adhérents / an (baseline actuel vs post-lancement)

**KPIs Secondaires:**
- Nombre de formulaires de pré-inscription remplis / mois
- Taux de conversion formulaire → adhésion effective
- Source d'acquisition des nouveaux adhérents (demander "Comment avez-vous connu le club?" lors inscription)

#### Objectif 2 : Visibilité En Ligne

**Spécifique:** Établir une présence en ligne mesurable
**Mesurable:**
- 500 visiteurs uniques / mois (mois 6)
- 1000 visiteurs uniques / mois (mois 12)
**Atteignable:** Village 1000 habitants + communes alentours
**Réaliste:** Avec actions SEO local + réseaux sociaux + partenariats
**Temporel:** Mois 6 et Mois 12

**KPIs:**
- Visiteurs uniques / mois
- Pages vues / mois
- Sessions / mois
- Taux de rebond (objectif < 60%)
- Durée moyenne session (objectif > 2 min)
- Trafic organique (Google) vs direct vs réseaux sociaux

#### Objectif 3 : Engagement & Satisfaction

**Spécifique:** Créer un site engageant et utile
**Mesurable:**
- Taux de rebond < 60%
- Durée session > 2 minutes
- 3+ pages vues par session
**Atteignable:** Avec contenu riche et navigation claire
**Réaliste:** Standards web pour sites associatifs
**Temporel:** À atteindre dans les 3 mois post-lancement

**KPIs:**
- Taux de rebond
- Pages / session
- Durée moyenne session
- Taux de clics sur CTAs (via Google Analytics événements)
- Retours qualitatifs (sondage satisfaction membres)

### 10.2 Tableau de Bord KPIs

| Catégorie | KPI | Baseline (Actuel) | Cible Mois 3 | Cible Mois 6 | Cible Mois 12 | Outil de Mesure |
|-----------|-----|-------------------|--------------|--------------|---------------|-----------------|
| **Trafic** | Visiteurs uniques / mois | 0 | 200 | 500 | 1000 | Google Analytics |
| **Trafic** | Pages vues / mois | 0 | 800 | 2000 | 4000 | Google Analytics |
| **Trafic** | Taux de rebond | N/A | <65% | <60% | <55% | Google Analytics |
| **Trafic** | Durée session (min) | N/A | >1.5 | >2 | >2.5 | Google Analytics |
| **Engagement** | Pages / session | N/A | >2.5 | >3 | >3.5 | Google Analytics |
| **Conversion** | Formulaires contact / mois | ~2 (tel) | 5 | 10 | 15 | Plateforme / Analytics |
| **Conversion** | Pré-inscriptions / mois | 0 | 3 | 6 | 10 | Plateforme |
| **Conversion** | Taux conversion formulaire→adhésion | N/A | 40% | 50% | 60% | Suivi manuel |
| **Recrutement** | Nouveaux adhérents / an | ~10-15 | N/A | 7-9 (mi-année) | 14-18 | Gestion club |
| **SEO** | Position Google "tennis club clairefontaine" | Non classé | Top 3 | Top 1-2 | Top 1 | Google Search Console |
| **SEO** | Impressions Google Search / mois | 0 | 200 | 500 | 1000 | Google Search Console |
| **Social** | Followers Facebook | 0 ou existant | +50 | +100 | +200 | Facebook Insights |
| **Social** | Engagements / post (moy) | N/A | 5-10 | 10-15 | 15-20 | Facebook/Instagram Insights |

### 10.3 Méthodes de Collecte

**Google Analytics 4:**
- Installation du code de suivi sur toutes les pages
- Configuration des événements :
  - Clic CTA "Devenir Membre"
  - Clic CTA "Inscrire mon Enfant"
  - Soumission formulaire contact
  - Soumission formulaire pré-inscription
  - Clic téléphone
  - Clic email
  - Téléchargement documents (si applicable)

**Google Search Console:**
- Vérification propriété du site
- Soumission sitemap
- Suivi positions mots-clés
- Suivi impressions/clics

**WordPress:**
- Statistiques formulaires via Contact Form 7 ou équivalent
- Export données via plugins ou base de données

**Suivi Manuel:**
- Tableau Excel/Google Sheets mensuel :
  - Nombre nouveaux adhérents
  - Source de connaissance du club (questionnaire oral lors inscription)
  - Retours qualitatifs

**Sondages:**
- Sondage satisfaction membres (1x/an) :
  - "Comment avez-vous connu le club?"
  - "Le site web vous a-t-il été utile?"
  - "Quelles améliorations souhaiteriez-vous?"

### 10.4 Revues & Ajustements

**Rythme de suivi:**
- **Hebdomadaire (Mois 1-2):** Vérification rapide Analytics, correction bugs urgents
- **Mensuel (Mois 3-12):** Revue complète KPIs, analyse tendances, ajustements contenu
- **Trimestriel:** Revue stratégique approfondie, décisions Phase 2/3
- **Annuel:** Bilan complet, ROI, planification année N+1

**Responsable:**
- Bénévole "Responsable Communication & Web" désigné
- Présentation mensuelle au bureau (10-15 min)
- Décisions d'ajustements validées collectivement

---

## 11. Phases d'Implémentation

### 11.1 Phase 0 : Préparation (Semaines 1-2)

**Objectif:** Poser les fondations et rassembler les ressources

#### Tâches:

**Organisation:**
- [ ] Désigner un "Responsable Web" bénévole (coordinateur projet)
- [ ] Constituer une petite équipe (2-3 personnes) : Responsable Web + Contenu + Photos
- [ ] Validation du PRD par le bureau du club
- [ ] Budget validé (hébergement, domaine, éventuels frais)

**Contenu:**
- [ ] Collecte informations existantes :
  - Historique club
  - Liste cours avec horaires et tarifs
  - Coordonnées complètes
  - Calendrier événements
- [ ] Rédaction textes courts :
  - Présentation du club (200-300 mots)
  - Valeurs (3-5 items courts)
  - Biographies professeurs (150-200 mots chacun)
  - Descriptions cours (100-150 mots par niveau)
- [ ] Collecte témoignages :
  - Interview 4-6 membres satisfaits (parents, adultes, jeunes)
  - Photos des témoins (avec accords écrits)

**Visuels:**
- [ ] Session photo professionnelle (ou amateur de qualité) :
  - Installations (3 courts, différents angles)
  - Cours en action (enfants, adultes) - **accords photos obligatoires**
  - Professeurs (portraits + action)
  - Événements récents (si dispo archives)
  - Minimum 30-40 photos HD
- [ ] Sélection 15-20 meilleures photos
- [ ] Optimisation poids images (< 300 Ko)
- [ ] Logo du club (vectoriel si possible, sinon PNG haute résolution)

**Technique:**
- [ ] Création compte OVH (ou hébergeur choisi)
- [ ] Commande hébergement VPS ou Node.js (OVH)
- [ ] Réservation nom de domaine : tcclairefontaine.fr
- [ ] Configuration serveur (Node.js, PostgreSQL, Nginx)
- [ ] Configuration SSL Let's Encrypt (HTTPS)
- [ ] Configuration emails @tcclairefontaine.fr
- [ ] Setup repository GitHub et environnement de développement
- [ ] Briefing avec Claude Code pour développement application

**Livrables:**
- ✅ Équipe projet constituée
- ✅ Textes rédigés et validés
- ✅ Banque de photos prête
- ✅ Hébergement OVH actif
- ✅ Serveur Node.js + PostgreSQL configuré
- ✅ Domaine configuré
- ✅ Environnement de développement prêt

### 11.2 Phase 1 : MVP - Lancement (Semaines 3-8)

**Objectif:** Site fonctionnel en ligne avec sections essentielles (P0)

#### Tâches:

**Semaines 3-4 : Développement Application (Claude Code)**
- [ ] Setup architecture Next.js :
  - Initialisation projet Next.js 14+ avec TypeScript
  - Configuration Tailwind CSS + Shadcn/ui
  - Setup Prisma ORM + PostgreSQL
  - Configuration NextAuth.js (authentification)
  - Setup structure de dossiers
- [ ] Développement backend :
  - Schéma base de données (Pages, Articles, Événements, Équipe, Médias, Formulaires)
  - API Routes pour CRUD operations
  - Middleware d'authentification
  - Validation Zod
  - Rate limiting
- [ ] Développement frontend public :
  - Structure HTML5 sémantique
  - Design responsive mobile-first selon maquettes PRD
  - Palette couleurs bordeaux/blanc cassé et typographie (Montserrat + Open Sans)
  - Templates pages : Accueil, Page standard, Contact, Archives
  - Composants réutilisables (Header, Footer, Cards, Buttons)
- [ ] Développement interface admin :
  - Dashboard avec statistiques
  - Layout d'administration
  - Système de navigation admin
  - Authentification et protection des routes

**Semaines 5-6 : Contenu Pages Principales**
- [ ] Page Accueil :
  - Hero avec photo + tagline + CTAs
  - Sections Atouts, Offres, Témoignages
  - Actualités (2-3 articles initiaux)
- [ ] Page "Le Club" :
  - Histoire, valeurs, installations
  - Galerie photos
  - Carte Google Maps
- [ ] Page "Notre Équipe" :
  - Fiches professeurs complètes
  - Photos, parcours, témoignages
- [ ] Page "Cours & Programmes" :
  - Cours Enfants (3 niveaux)
  - Cours Adultes (collectifs)
  - Mention Stages et Interclubs
- [ ] Page "Adhésion & Tarifs" :
  - Tableau tarifs
  - Avantages
  - FAQ (5-10 questions)
  - Formulaire pré-inscription
- [ ] Page "Contact" :
  - Formulaire
  - Coordonnées
  - Carte
  - Horaires

**Semaine 7 : Finitions & Tests**
- [ ] Relecture complète contenus (orthographe, cohérence)
- [ ] Tests navigation (toutes pages accessibles)
- [ ] Tests responsive (mobile, tablet, desktop)
- [ ] Tests formulaires (réception emails)
- [ ] Optimisation vitesse chargement
- [ ] Installation Google Analytics
- [ ] Installation Google Search Console
- [ ] Soumission sitemap
- [ ] Vérification SEO basique (titles, descriptions)
- [ ] Mentions légales et politique de confidentialité

**Semaine 8 : Pré-Lancement & Correction**
- [ ] Revue finale avec bureau du club
- [ ] Corrections dernières minutes
- [ ] Test utilisateurs (3-5 personnes externes : parents, prospects)
- [ ] Ajustements suite retours
- [ ] Préparation communication lancement

**Livrables:**
- ✅ Site web complet et fonctionnel en ligne
- ✅ Toutes pages P0 publiées et testées
- ✅ Analytics et Search Console actifs
- ✅ Site responsive et performant

### 11.3 Phase 2 : Lancement & Communication (Semaines 9-12)

**Objectif:** Faire connaître le site et générer du trafic initial

#### Tâches:

**Semaine 9 : Lancement Officiel**
- [ ] Mise en ligne publique (si pas déjà fait)
- [ ] Annonce aux membres actuels (email, affichage au club)
- [ ] Publication post Facebook/Instagram (si pages créées)
- [ ] Communiqué presse local (journal, mairie)
- [ ] Mise à jour Google My Business (créer fiche si inexistante)

**Semaine 10-12 : Communication Continue**
- [ ] Partage sur réseaux sociaux (2-3 posts/semaine)
- [ ] Annonce dans bulletin municipal
- [ ] Affichage chez commerçants partenaires
- [ ] Flyers avec URL du site (distribution ciblée école, commerces)
- [ ] Activation système parrainage (mention du site)
- [ ] Email aux anciens membres / prospects connus

**Semaine 9-12 : Premières Optimisations**
- [ ] Monitoring Analytics quotidien (première semaine), puis hebdomadaire
- [ ] Corrections bugs éventuels
- [ ] Ajustements suite retours utilisateurs
- [ ] Publication 2-3 actualités supplémentaires
- [ ] Ajout photos événements récents

**Livrables:**
- ✅ Trafic initial généré (objectif 100+ visiteurs mois 1)
- ✅ Premières conversions (formulaires remplis)
- ✅ Visibilité locale établie

### 11.4 Phase 3 : Consolidation & Enrichissement (Mois 4-6)

**Objectif:** Stabiliser, enrichir le contenu et ajouter fonctionnalités P1

#### Tâches:

**Mois 4 :**
- [ ] Ajout section "Événements & Tournois" (P1)
  - Calendrier dynamique
  - 5-10 événements planifiés
  - Galeries photos événements passés
- [ ] Ajout section "Actualités / Blog" structurée (P1)
  - 10-15 articles initiaux
  - Catégories définies
  - Rythme publication : 1-2 articles/semaine
- [ ] Création pages Facebook et Instagram si pas déjà fait
  - Intégration flux sur site
  - Stratégie contenu définie
  - Publication régulière (3-5 posts/semaine)

**Mois 5 :**
- [ ] Lancement première "Clinique Technique" adulte (si applicable)
  - Annonce sur site
  - Formulaire inscription dédié
  - Suivi taux inscription
- [ ] Organisation "Séance Découverte Adultes"
  - Annonce sur site
  - Promotion réseaux sociaux
  - Formulaire inscription
- [ ] Enrichissement galerie photos (50+ photos au total)
- [ ] Ajout 5-10 nouveaux témoignages

**Mois 6 :**
- [ ] Revue 6 mois :
  - Analyse KPIs vs objectifs
  - Retours membres (sondage)
  - Identification points d'amélioration
- [ ] Optimisations SEO avancées :
  - Audit SEO complet
  - Optimisation contenus
  - Stratégie backlinks (partenaires locaux)
- [ ] Décision Go/No-Go Phase 4 (P2)

**Livrables:**
- ✅ Site enrichi avec sections P1
- ✅ Présence réseaux sociaux active
- ✅ Trafic en croissance (objectif 500 visiteurs/mois)
- ✅ Premières adhésions attribuables au site

### 11.5 Phase 4 : Contenus Vidéo & Optimisations (Mois 7-12)

**Objectif:** Enrichir le site avec contenus vidéo et optimiser performances

#### Tâches:

**Mois 7-9 : Lancement Section Vidéo (P2)**
- [ ] Création chaîne YouTube du club
- [ ] Formation jeune professeur à la production vidéo
  - Tournage smartphone (techniques de base)
  - Montage simple (DaVinci Resolve ou Shotcut gratuits)
  - Création miniatures (Canva)
- [ ] Production 5-10 vidéos initiales :
  - 2-3 vidéos technique (coup droit, revers, service)
  - 2-3 vidéos tactique (jeu en double, stratégies)
  - 2-3 vidéos conseils débutants
- [ ] Création section "Conseils du Pro" sur le site
- [ ] Intégration playlist YouTube sur site

**Mois 10-12 : Optimisations & Contenus (P2)**
- [ ] Production continue vidéos (1 par semaine)
- [ ] Optimisations SEO avancées :
  - Audit SEO complet (Google Search Console)
  - Stratégie backlinks (partenaires locaux, presse)
  - Optimisation Core Web Vitals
- [ ] Mise en place Analytics avancés :
  - Configuration objectifs conversions
  - Tracking événements personnalisés
  - Heatmaps (Hotjar gratuit)
- [ ] Automatisations communication :
  - Newsletter automatique (si plateforme permet)
  - Emails bienvenue nouveaux inscrits
- [ ] Évaluation migration WordPress (si besoin fonctionnalités avancées)

**Mois 12 : Bilan Annuel**
- [ ] Analyse complète KPIs année 1
- [ ] Calcul ROI (nouveaux adhérents attribués au site x cotisation moy)
- [ ] Sondage satisfaction membres étendu
- [ ] Rapport au bureau / AG
- [ ] Planification année 2 :
  - Nouvelles fonctionnalités
  - Budget
  - Évolutions stratégiques

**Livrables:**
- ✅ Site complet avec fonctionnalités P2 (si validées)
- ✅ Objectifs annuels atteints (1000 visiteurs/mois, +15-20% adhérents)
- ✅ Processus de gestion et mise à jour établi et pérenne

### 11.6 Roadmap Visuelle

```
┌─────────────────────────────────────────────────────────────────────┐
│                       ROADMAP SITE WEB TCC                          │
└─────────────────────────────────────────────────────────────────────┘

Sem 1-2    │ ████ PHASE 0 : PRÉPARATION
           │ • Équipe, contenus, photos, plateforme
           │
Sem 3-8    │ ████████████ PHASE 1 : MVP - Lancement
           │ • Configuration, pages P0, tests, pré-lancement
           │ ✓ SITE EN LIGNE (Sem 8)
           │
Sem 9-12   │ ████ PHASE 2 : Communication & Lancement Public
           │ • Annonces, promotion, premières optimisations
           │
Mois 4-6   │ ██████ PHASE 3 : Consolidation & Enrichissement (P1)
           │ • Événements, Actualités, Réseaux Sociaux
           │ ✓ REVUE 6 MOIS (Mois 6)
           │
Mois 7-12  │ ██████████ PHASE 4 : Contenus Vidéo & Optimisations (P2)
           │ • Vidéos pédagogiques, SEO avancé, Analytics
           │ ✓ BILAN ANNUEL (Mois 12)
           │
   📈      │ OBJECTIFS : 1000 visiteurs/mois | +15-20% adhérents
```

---

## 12. Gestion des Risques

### 12.1 Matrice des Risques

| ID | Risque | Probabilité | Impact | Sévérité | Mitigation | Contingence |
|----|--------|-------------|--------|----------|------------|-------------|
| R01 | Manque de photos de qualité | Moyenne | Élevé | **Haute** | Session photo professionnelle prévue Phase 0 | Utiliser photos existantes optimisées + ajouter progressivement |
| R02 | Bénévoles débordés / abandon | Moyenne | Élevé | **Haute** | Équipe de 2-3 personnes (redondance), tâches fractionnées | Simplifier périmètre MVP, recruter nouveaux bénévoles |
| R03 | Contenus non prêts à temps | Moyenne | Moyen | **Moyenne** | Deadlines claires, responsabilités assignées | Décaler lancement 2-4 semaines, lancer avec contenu minimal |
| R04 | Budget insuffisant | Faible | Moyen | **Faible** | Plateformes gratuites privilégiées, pas d'engagement coûteux | Rester sur version gratuite, reporter P2/P3 |
| R05 | Faible trafic initial | Élevée | Moyen | **Moyenne** | Plan communication structuré, SEO dès MVP | Intensifier communication locale, partenariats, événements |
| R06 | Taux de conversion faible | Moyenne | Élevé | **Haute** | CTAs clairs, formulaires simples, suivi rapide prospects | Optimisations UX, A/B testing CTAs, relances personnalisées |
| R07 | Problèmes techniques (bugs, lenteur) | Faible | Moyen | **Faible** | Tests approfondis Phase 1, plateforme stable choisie | Support plateforme, correctifs rapides, backup si nécessaire |
| R08 | Non-respect RGPD (photos enfants sans accord) | Faible | Très Élevé | **Haute** | Process accords photos écrit et systématique | Retrait immédiat photos litigieuses, excuses, mise en conformité |
| R09 | Contenu obsolète (horaires, tarifs périmés) | Élevée | Moyen | **Moyenne** | Process mise à jour mensuel défini, responsable désigné | Bandeau "Info en cours de mise à jour", correction rapide |
| R10 | Concurrence accrue clubs voisins | Moyenne | Moyen | **Moyenne** | Différenciation claire (prof 4/6, court couvert, authenticité) | Renforcer avantages uniques, offres premium |
| R11 | Professeur 4/6 quitte le club | Faible | Très Élevé | **Haute** | Valoriser mais ne pas sur-dépendre, mettre en avant club global | Repositionner communication, recruter prof qualité équivalente |
| R12 | Cyberattaque / piratage site | Faible | Élevé | **Moyenne** | HTTPS, mots de passe forts, sauvegardes régulières | Restauration backup, changement mots de passe, support plateforme |

### 12.2 Plans de Mitigation Détaillés

#### R01 : Manque de Photos de Qualité

**Prévention:**
- Organiser session photo dédiée en Phase 0 (2-3 heures)
- Recruter photographe amateur doué parmi membres ou parents
- Planifier session pendant cours (action réelle) + événement (ambiance)
- Prévoir 2 sessions si météo défavorable

**Contingence si échec:**
- Utiliser photos d'archives existantes (optimisées)
- Ajouter progressivement nouvelles photos
- Privilégier authenticité à perfection (photos smartphone qualité décente acceptables temporairement)

#### R02 : Bénévoles Débordés / Abandon

**Prévention:**
- Constituer équipe de 2-3 personnes (pas une seule)
- Répartir tâches clairement (Coordinateur, Contenu, Photos)
- Fractionnement en micro-tâches (1-2h max par tâche)
- Reconnaissance et valorisation du travail (remerciements publics, AG)

**Contingence si abandon:**
- Recruter rapidement nouveau bénévole (appel membres, jeunes retraités, parents)
- Simplifier périmètre (retirer P1/P2, se concentrer sur MVP)
- Budget de secours : faire appel à prestataire junior (étudiant web) pour finir (200-500€)

#### R06 : Taux de Conversion Faible

**Prévention:**
- CTAs clairs et orientés action
- Formulaires simples (maximum 5-6 champs)
- Suivi rapide des demandes (< 48h)
- Témoignages rassurants
- Transparence sur tarifs et offres

**Contingence si taux faible:**
- Analyse comportement utilisateurs (Analytics : où quittent-ils le site?)
- Tests A/B sur CTAs (textes, couleurs, positions)
- Ajout chatbot simple ou numéro WhatsApp pour contact rapide
- Offre découverte gratuite plus visible
- Relances personnalisées (email/SMS) des prospects

#### R08 : Non-Respect RGPD

**Prévention:**
- **Process strict accordsphotos:**
  1. Formulaire de consentement écrit (papier ou digital)
  2. Mention explicite : "J'autorise le TCC à utiliser des photos de [moi/mon enfant] sur le site web et les réseaux sociaux du club"
  3. Droit de retrait à tout moment
  4. Archivage des accords (classeur, Google Drive sécurisé)
- Vérification systématique avant publication
- Responsable RGPD désigné au bureau

**Contingence si violation:**
- Retrait immédiat de la photo litigieuse (< 24h)
- Excuses formelles à la personne concernée
- Revue de toutes les photos en ligne
- Formation équipe web aux règles RGPD
- Mise en conformité totale

#### R11 : Professeur 4/6 Quitte le Club

**Prévention:**
- Communiquer sur l'excellence du prof, mais aussi sur d'autres atouts (court couvert, convivialité, infrastructures)
- Développer identité club au-delà d'une seule personne
- Contrat clair et fidélisation du professeur (si applicable)

**Contingence si départ:**
- Communication transparente aux membres
- Recrutement rapide d'un remplaçant de qualité équivalente (annonce FFT, réseau)
- Repositionnement communication site :
  - Mise en avant nouvelle recrue (avec qualifications)
  - Insistance sur autres atouts club
  - Témoignages sur l'ambiance générale (pas seulement un prof)
- Offres de fidélisation membres actuels (remise, événements)

### 12.3 Responsabilités & Escalade

**Responsable Risques:** Responsable Web + Président du club

**Process de gestion:**
1. **Identification:** Tout membre équipe peut signaler un risque
2. **Évaluation:** Responsable Web évalue probabilité/impact
3. **Décision:**
   - Risque faible/moyen : Responsable Web gère
   - Risque élevé/très élevé : Escalade au Président + Bureau
4. **Suivi:** Revue risques lors réunions mensuelles équipe web

**Communication:**
- Risques majeurs (R08, R11) : Communication immédiate au bureau
- Risques moyens : Mention dans rapport mensuel
- Risques faibles : Suivi interne équipe web

---

## 13. Annexes

### 13.1 Annexe A : Glossaire

| Terme | Définition |
|-------|------------|
| **AssoConnect** | Plateforme SaaS gratuite spécialisée dans la gestion d'associations (site web, adhésions, événements, paiements) |
| **CTA (Call-to-Action)** | Bouton ou lien incitant l'utilisateur à réaliser une action spécifique (ex: "Devenir Membre", "Nous Contacter") |
| **Hero Section** | Section principale en haut de la page d'accueil, généralement avec grande image/vidéo, titre accrocheur et CTA |
| **KPI (Key Performance Indicator)** | Indicateur clé de performance permettant de mesurer l'atteinte des objectifs |
| **MVP (Minimum Viable Product)** | Produit minimum viable : version initiale avec fonctionnalités essentielles uniquement |
| **P0, P1, P2** | Niveaux de priorité : P0 = critique (MVP), P1 = important (Phase 2), P2 = souhaitable (Phase 3) |
| **Responsive Design** | Design adaptatif s'ajustant automatiquement à la taille de l'écran (mobile, tablette, desktop) |
| **SEO (Search Engine Optimization)** | Optimisation pour moteurs de recherche (Google) pour améliorer le référencement naturel |
| **SWOT** | Strengths, Weaknesses, Opportunities, Threats - Analyse Forces, Faiblesses, Opportunités, Menaces |
| **UX (User Experience)** | Expérience utilisateur : facilité et plaisir d'utilisation d'un site |
| **UI (User Interface)** | Interface utilisateur : aspects visuels et interactifs du site |

### 13.2 Annexe B : Checklist de Lancement

#### Pré-Lancement (Avant Mise en Ligne Publique)

**Contenu:**
- [ ] Tous les textes sont relus et sans fautes
- [ ] Toutes les informations (horaires, tarifs, contacts) sont exactes et à jour
- [ ] Les biographies des professeurs sont validées par eux
- [ ] Les témoignages sont authentiques et autorisés
- [ ] Les photos ont toutes les autorisations nécessaires (RGPD)

**Technique:**
- [ ] Site accessible sur tous navigateurs (Chrome, Firefox, Safari, Edge)
- [ ] Site 100% responsive (testé sur mobile, tablette, desktop)
- [ ] Tous les liens fonctionnent (pas de 404)
- [ ] Formulaires fonctionnent et envoient bien les emails
- [ ] Temps de chargement < 3 secondes
- [ ] HTTPS activé (cadenas sécurisé)
- [ ] Google Analytics installé et tracking
- [ ] Google Search Console configuré et sitemap soumis

**SEO:**
- [ ] Toutes les pages ont un title unique et optimisé
- [ ] Toutes les pages ont une meta description
- [ ] Toutes les images ont un attribut ALT descriptif
- [ ] URLs propres et lisibles
- [ ] Fichier robots.txt configuré
- [ ] Sitemap.xml généré et soumis

**Légal:**
- [ ] Mentions légales complètes et conformes
- [ ] Politique de confidentialité / RGPD
- [ ] Bandeau cookies (si tracking)
- [ ] Droits d'auteur respectés (photos, textes)

**Fonctionnel:**
- [ ] Header et Footer corrects sur toutes les pages
- [ ] Menu de navigation fonctionne
- [ ] CTAs cliquables et mènent aux bonnes pages
- [ ] Carte Google Maps s'affiche et est interactive
- [ ] Intégrations réseaux sociaux fonctionnent (si applicable)

#### Post-Lancement (Première Semaine)

- [ ] Monitoring Analytics quotidien
- [ ] Vérification réception formulaires (tester)
- [ ] Correction bugs critiques sous 24h
- [ ] Réponse rapide aux premiers contacts (< 24h)
- [ ] Publication annonce lancement (email membres, réseaux sociaux)

### 13.3 Annexe C : Template Email de Lancement

**Objet:** 🎾 Nouveau Site Web du Tennis Club Clairefontaine !

---

**Bonjour [Prénom] / Chers Membres,**

Nous sommes ravis de vous annoncer le lancement officiel du **nouveau site web du Tennis Club Clairefontaine** !

🌐 **Découvrez-le dès maintenant : [URL du site]**

**Ce que vous y trouverez :**
- ✅ Toutes les informations sur nos cours enfants et adultes
- ✅ Présentation de notre équipe pédagogique d'exception
- ✅ Nos installations (y compris notre court couvert !)
- ✅ Les tarifs et modalités d'adhésion
- ✅ Le calendrier de nos événements et tournois
- ✅ Un formulaire de contact et de pré-inscription en ligne

**Pourquoi ce site ?**
Pour faciliter votre accès à l'information, valoriser notre club et accueillir encore plus de passionnés de tennis dans notre belle communauté de Clairefontaine.

**Votre avis compte !**
N'hésitez pas à nous faire vos retours à [email du club] pour que nous puissions améliorer continuellement notre site.

**Partagez autour de vous !**
Vous connaissez des personnes qui pourraient être intéressées ? Partagez-leur le lien :
👉 [URL du site]

**Suivez-nous aussi sur les réseaux sociaux :**
[Liens Facebook / Instagram si applicable]

Merci de votre fidélité et à très bientôt sur les courts !

Sportivement,
**L'équipe du Tennis Club Clairefontaine**

---

### 13.4 Annexe D : Modèle de Formulaire de Consentement Photos

```
AUTORISATION DE DROIT À L'IMAGE

Je soussigné(e) [Nom Prénom] ________________________________

En ma qualité de :
☐ Membre adulte du TCC
☐ Parent/Tuteur légal de [Nom Prénom enfant] ____________________

**AUTORISE** le Tennis Club Clairefontaine (TCC) à :

☐ Prendre des photographies et/ou vidéos de [moi / mon enfant]
   lors des activités du club (cours, stages, événements, tournois)

☐ Utiliser ces photographies et/ou vidéos sur les supports suivants :
   - Site web du club (tcclairefontaine.fr)
   - Réseaux sociaux du club (Facebook, Instagram)
   - Publications imprimées du club (affiches, flyers, brochures)
   - Communications internes (emails, newsletters)

**DURÉE :** Cette autorisation est valable pour une durée de :
☐ 1 an (renouvelable)
☐ Durée de l'adhésion au club
☐ Jusqu'à révocation de ma part

**DROIT DE RETRAIT :**
Je peux à tout moment retirer cette autorisation en contactant le club par email à [email du club]. Le TCC s'engage à retirer les contenus me concernant dans un délai de 7 jours ouvrés.

**RGPD :**
Conformément au Règlement Général sur la Protection des Données (RGPD), je dispose d'un droit d'accès, de rectification et de suppression des données me concernant. Pour exercer ce droit, je peux contacter [responsable RGPD du club].

Fait à __________________, le ____ / ____ / 20____

Signature :


(Pour les mineurs, signature du parent/tuteur légal obligatoire)
```

### 13.5 Annexe E : Calendrier Éditorial (Exemple Mois 1)

| Semaine | Date | Type | Sujet | Plateforme | Responsable |
|---------|------|------|-------|------------|-------------|
| S1 | 05/01 | Actualité | Lancement du site web | Site + Email | Responsable Web |
| S1 | 07/01 | Social | Présentation court couvert | Facebook | Contenu |
| S1 | 08/01 | Social | Portrait jeune professeur | Instagram | Contenu |
| S2 | 12/01 | Conseil Pro | "Le coup droit parfait" (article) | Site / Blog | Jeune Prof |
| S2 | 14/01 | Social | Photos cours enfants mercredi | Instagram | Contenu |
| S2 | 15/01 | Actualité | Annonce Galette des Rois | Site + Facebook | Bureau |
| S3 | 19/01 | Social | Témoignage membre adulte | Facebook | Contenu |
| S3 | 21/01 | Conseil Pro | "Service gagnant" (vidéo courte) | YouTube + Site | Jeune Prof |
| S3 | 22/01 | Social | Photos Galette des Rois | Facebook + Insta | Photos |
| S4 | 26/01 | Actualité | Résultats Interclubs équipe adultes | Site | Bureau |
| S4 | 28/01 | Social | Annonce stages vacances février | Facebook + Site | Responsable Web |
| S4 | 29/01 | Social | Coulisses : préparation tournoi interne | Instagram Stories | Contenu |

**Rythme cible:**
- Site / Blog : 1-2 articles/semaine
- Facebook : 3-5 posts/semaine
- Instagram : 4-7 posts/semaine (incluant Stories)

### 13.6 Annexe F : Budget Détaillé (12 mois)

#### Budget Next.js + Admin Custom (Solution Retenue)

| Poste | Détail | Coût An 1 | Récurrent |
|-------|--------|-----------|-----------|
| **Hébergement & Infrastructure** | | | |
| Hébergement OVH | VPS Starter ou hébergement Node.js (~10€/mois) | 120€ | Oui (120€/an) |
| Base de données PostgreSQL | Incluse dans VPS ou service géré (~5€/mois) | 0-60€ | Oui (0-60€/an) |
| Nom de domaine | tcclairefontaine.fr | 12€ | Oui (12€/an) |
| SSL Let's Encrypt | Gratuit | 0€ | Oui (gratuit) |
| **Développement** | | | |
| Application Next.js Custom | Développée par Claude Code | 0€ | - |
| Interface Admin Custom | Développée par Claude Code | 0€ | - |
| Dépendances npm | Toutes open-source gratuites | 0€ | Oui (gratuit) |
| **Contenus** | | | |
| Session photos | Bénévole ou amateur (0€) ou Pro (100-200€) | 0-100€ | Ponctuel |
| Rédaction textes | Bénévoles | 0€ | - |
| **Outils Gratuits** | | | |
| Google Analytics 4 | Gratuit | 0€ | Oui |
| Google Search Console | Gratuit | 0€ | Oui |
| Canva Free (designs) | Gratuit | 0€ | Oui |
| GitHub (repository) | Gratuit | 0€ | Oui |
| **Services Email (optionnel)** | | | |
| Resend (100 emails/jour gratuit) | Gratuit ou Pro si volume | 0-20€ | Oui (0-20€/an) |
| **Monitoring & Sécurité** | | | |
| Dependabot GitHub | Gratuit | 0€ | Oui |
| Backups automatiques | Inclus VPS ou script custom | 0€ | Oui |
| **Communication** | | | |
| Flyers lancement | 100 flyers A5 couleur | 20€ | Ponctuel |
| Affiches | 10 affiches A3 | 15€ | Ponctuel |
| **Divers** | | | |
| Imprévus / Maintenance | Marge sécurité | 30€ | - |
| **TOTAL ANNÉE 1** | | **197-357€** | |
| **TOTAL ANNÉES SUIVANTES** | | **132-192€/an** | |

#### Comparatif avec alternatives

| Solution | An 1 | Années suivantes | Avantages | Inconvénients |
|----------|------|------------------|-----------|---------------|
| **Next.js + Admin Custom (Retenu)** | 197-357€ | 132-192€/an | Performance maximale, Sécurité renforcée, Mises à jour facilitées, Interface sur-mesure | Setup initial plus technique |
| **WordPress** | 137-317€ | 82-172€/an | Écosystème riche | Plugins tiers, Sécurité à maintenir, Moins de contrôle |
| **SaaS (Wix, Squarespace)** | 200-400€ | 200-400€/an | Simple à utiliser | Coûts récurrents élevés, Limité, Pas de contrôle |

**Recommandation Budget :** **Next.js + Admin Custom** - Investissement initial ~280€, puis ~160€/an. Performance optimale, sécurité renforcée, et coûts maîtrisés sur le long terme.

**Économies réalisées :** Le développement par Claude Code (application complète + interface admin) représente une économie de **2500-8000€** par rapport à un développeur humain.

**Avantages budgétaires :**
- ✅ Pas de plugins premium à payer
- ✅ Pas de dépendance à des services tiers coûteux
- ✅ Mises à jour gratuites via dépendances npm
- ✅ Contrôle total = moins de coûts cachés
- ✅ Performance optimale = meilleur ROI marketing

### 13.7 Annexe G : Contacts & Ressources Utiles

**Hébergement & Infrastructure:**
- OVH : https://www.ovhcloud.com/fr/ / Support : https://www.ovh.com/fr/support/
- Panneau client OVH : https://www.ovh.com/auth/
- Documentation OVH VPS : https://help.ovhcloud.com/csm/fr-vps-getting-started
- Documentation OVH Node.js : https://help.ovhcloud.com/csm/fr-web-hosting-nodejs

**Framework & Technologies:**
- Next.js Documentation : https://nextjs.org/docs
- Next.js Learn (tutoriels) : https://nextjs.org/learn
- React Documentation : https://react.dev
- TypeScript Documentation : https://www.typescriptlang.org/docs/
- Tailwind CSS : https://tailwindcss.com/docs
- Shadcn/ui : https://ui.shadcn.com

**Backend & Database:**
- Prisma ORM : https://www.prisma.io/docs
- PostgreSQL Documentation : https://www.postgresql.org/docs/
- NextAuth.js : https://next-auth.js.org
- Zod Validation : https://zod.dev

**Composants & Outils:**
- TipTap Editor : https://tiptap.dev
- React Hook Form : https://react-hook-form.com
- Resend (emails) : https://resend.com/docs
- Recharts (graphiques) : https://recharts.org

**Outils Analytics:**
- Google Analytics 4 : https://analytics.google.com
- Google Search Console : https://search.google.com/search-console
- Google My Business : https://www.google.com/intl/fr_fr/business/

**Ressources Design & Médias:**
- Google Fonts : https://fonts.google.com
- Unsplash (photos libres) : https://unsplash.com
- Pexels (photos libres) : https://www.pexels.com/fr-fr/
- Canva (designs) : https://www.canva.com
- TinyPNG (compression images) : https://tinypng.com

**SEO & Performance:**
- PageSpeed Insights : https://pagespeed.web.dev
- GTmetrix : https://gtmetrix.com
- WebPageTest : https://www.webpagetest.org
- Screaming Frog SEO Spider : https://www.screamingfrogseoseo.com (outil audit SEO)

**Outils Développement:**
- Claude Code : Développement IA (vous utilisez actuellement !)
- GitHub : https://github.com (versioning code si besoin)
- VS Code : https://code.visualstudio.com (éditeur code local)

**Formation & Aide:**
- WPMarmite (tutoriels FR) : https://wpmarmite.com
- WPBeginner (anglais, très complet) : https://www.wpbeginner.com
- Tutoriels Google Analytics : https://analytics.google.com/analytics/academy/
- YouTube Channel WPMarmite : https://www.youtube.com/@WPMarmite

**Partenaires Locaux (à contacter Phase 2):**
- Mairie de Clairefontaine-en-Yvelines : [contact]
- École Primaire Clairefontaine : [contact]
- Commerçants : [liste à établir]
- Presse locale : [nom journal / contact]

---

## FIN DU DOCUMENT

**Document rédigé le:** 19 Novembre 2025
**Version:** 1.0 - Brouillon Initial
**Auteur:** Tennis Club Clairefontaine - Équipe Projet Web
**Prochaine révision:** Après Phase 0 (validation bureau)

**Pour toute question sur ce PRD, contacter:**
[Nom Responsable Web] - [Email] - [Téléphone]

---

*Ce document est confidentiel et destiné à l'usage interne du Tennis Club Clairefontaine.*
