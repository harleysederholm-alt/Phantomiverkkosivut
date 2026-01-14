# 🔮 PHANTOMI

> **Jäljettömän Salatun Viestinnän Protokolla**

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?logo=threedotjs)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/Lisenssi-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="https://img.shields.io/badge/TILA-AKTIIVINEN-00FF41?style=for-the-badge" alt="tila"/>
  <img src="https://img.shields.io/badge/SALAUS-POST--QUANTUM-00FFFF?style=for-the-badge" alt="salaus"/>
</p>

---

## 📡 Mikä on Phantomi?

Phantomi on **ultra-turvallinen, hajautettu viestiprotokolla**, joka on suunniteltu jäljettömään viestintään. Sotilastason salauksella (ECDH P-521 + CRYSTALS-Kyber-1024) Phantomi varmistaa, ettei viesteistäsi jää minkäänlaista forensista jälkeä.

### 🔐 Pääominaisuudet

| Ominaisuus | Kuvaus |
|------------|--------|
| **Post-Quantum Salaus** | CRYSTALS-Kyber-1024 hybridi-avaimenvaihto |
| **Zero Trace -arkkitehtuuri** | Vain RAM-tallennusta, ei levykirjoituksia |
| **Perfect Forward Secrecy** | Oletuksena päällä kaikissa viesteissä |
| **Hajautettu Mesh-verkko** | Ei keskuspalvelimia murrettavaksi |
| **0 sekunnin viestisäilytys** | Viestit ovat olemassa vain RAM-muistissa |

---

## 🎨 Tietoa projektista

Tämä repositorio sisältää **Phantomin virallisen markkinointisivuston** – elokuvamaisen 3D-kokemuksen, joka esittelee protokollan kyvykkyyksiä interaktiivisella tavalla.

### Teknologiapino

| Teknologia | Käyttötarkoitus |
|------------|-----------------|
| **Next.js 15 + React 19** | Sovelluskehys ja UI-komponentit |
| **Three.js + React Three Fiber** | 3D-grafiikka ja animaatiot |
| **Drei + Postprocessing** | 3D-apukirjastot ja jälkikäsittelyefektit |
| **Framer Motion** | Sivusto-animaatiot ja siirtymät |
| **Tailwind CSS 4** | Responsiivinen tyylitys |
| **TypeScript** | Tyypitetty JavaScript |

### Suunnittelufilosofia: "Terminal Brutalism"

Sivusto edustaa **elokuvallista hakkeri-estetiikkaa**:

- 🖥️ **Terminal Brutalist UI** – Monospace-fontit, lasipaneelit, skannauslinjat
- 💚 **Myrkynvihreä väripaletti** – `#00FF41` syvänmustan päällä
- 🌀 **Elokuvallinen 3D** – Upottavat kohtaukset scroll-ohjauksella
- ⚡ **Jälkikäsittely** – Bloom, kromaattinen aberraatio, filmijyvä, vinjetti

---

## ✅ Mitä on tehty

### 3D-kokemus
- [x] **SceneContainer** – Three.js-kanvaskontti jälkikäsittelyefekteillä (Bloom, ChromaticAberration, Noise, Vignette)
- [x] **CameraRig** – Scroll-pohjainen kamerakuljetus läpi 3D-maailman
- [x] **StarField** – Tähtikentät partikkelijärjestelmällä (6000 tähteä)
- [x] **NeuralNetwork** – Verkkovisualisointi pisteiden ja viivojen välillä
- [x] **HexGrid** – Heksagonaalinen ruudukko taustalle
- [x] **DataRings** – Pyörivät datarenkaat keskelle
- [x] **QuantumMonolith** – Kvanttimonoliitti-animaatio
- [x] **HyperTunnel** – Hypertunnelin läpikulkuefekti
- [x] **DataPackets** – Liikkuvat datapaketit verkossa
- [x] **ParticleLogo** – Partikkelilogo-visualisointi
- [x] **CyberGlobe** – Globaali visualisointi

### Sivusto-osiot
- [x] **HeroSection** – Etusivu Phantomi-logolla ja aloitusteksteillä
- [x] **FeaturesSection** – Ominaisuuskortit (4 pääominaisuutta)
- [x] **TechSection** – Teknologiakohtainen esittely
- [x] **SecurityPrinciplesSection** – Turvallisuusperiaatteet
- [x] **NetworkStatsSection** – Verkkotilastojen reaaliaikaiset laskurit
- [x] **ComparisonSection** – Vertailutaulukko (Phantomi vs kilpailijat)
- [x] **UseCasesSection** – Käyttötapaukset eri ryhmille
- [x] **ThreatModelSection** – Uhkamallit ja suojaukset
- [x] **NodeGuideSection** – Ohjeet oman noodin perustamiseen
- [x] **DeveloperAPISection** – Kehittäjä-API dokumentaatio
- [x] **UserTestimonialsSection** – Käyttäjätestimoniaalit
- [x] **RoadmapSection** – Tuotekehityksen aikajana
- [x] **FooterSection** – Sivuston footer

### UI-komponentit
- [x] **JourneyController** – 6 minuutin automaattinen esitysmoodi play/pause-ohjauksella
- [x] **LanguageSwitcher** – Kielenvaihtaja (FI/EN)
- [x] **FeatureCard** – Ominaisuuskorttikomponentti
- [x] **ComplianceBanner** – Vaatimustenmukaisuusbanneri
- [x] **Navbar** – Navigointipalkki

### Muut
- [x] **Kaksikielisyys** – Täysi FI/EN-tuki kaikissa osioissa
- [x] **Responsiivisuus** – Toimii mobiili- ja työpöytänäytöillä
- [x] **Journey Mode** – Automaattinen 6 minuutin esitysscrollaus tasaisella nopeudella

---

## 🚧 Mitä on vielä tekemässä

### 3D-kehitys
- [ ] **AscensionPortal** – Loppuporttaali-animaatio
- [ ] **CyberGlobe** – Interaktiivinen globaali verkko
- [ ] **ParticleLogo** – Phantomi-logon partikkeliversio

### Ominaisuudet
- [ ] **White Paper -sivu** – Tekninen dokumentaatio erillisellä sivulla
- [ ] **Lataussivu** – Sovelluksen latauslinkki ja asennusohjeet
- [ ] **Blogi** – Uutisia ja päivityksiä projektista
- [ ] **Kontaktilomake** – Yhteydenottolomake

### Optimointi
- [ ] **Suorituskykyoptimointi** – Lazy loading, code splitting
- [ ] **SEO-parannukset** – Meta-tagit, Open Graph -kuvat
- [ ] **Accessibility** – WCAG-yhteensopivuus
- [ ] **Mobiiliparannukset** – Kosketusoptimoidut 3D-interaktiot

### Julkaisu
- [ ] **Tuotantobuild** – Optimoitu production-versio
- [ ] **Domain-konfigurointi** – phantomi.io verkkotunnus
- [ ] **CDN-jako** – Sisällönjakeluverkon käyttöönotto
- [ ] **Analytics** – Käyttäjäanalyysin toteutus

---

## 🚀 Käynnistys

### Vaatimukset

- Node.js 18+ 
- npm tai yarn

### Asennus

```bash
# Kloonaa repositorio
git clone https://github.com/harleysederholm-alt/Phantomiverkkosivut.git
cd Phantomiverkkosivut

# Asenna riippuvuudet
npm install

# Käynnistä kehityspalvelin
npm run dev
```

Avaa [http://localhost:3000](http://localhost:3000) selaimessasi.

### Journey Mode -käyttö

Sivustolla on automaattinen esitysmoodi:

| Komento | Toiminto |
|---------|----------|
| **Play-nappi** (vasen yläkulma) | Aloita 6 minuutin matka |
| **Välilyönti** | Aloita matka / Tauko / Jatka |
| **Escape** | Lopeta ja palaa alkuun |
| **Scroll** | Lopeta automaattinen scrollaus |

### Tuotantobuild

```bash
npm run build
npm run start
```

---

## 📁 Projektien rakenne

```
Phantomiverkkosivut/
├── app/
│   ├── globals.css          # Globaalit tyylit + scrollbar
│   ├── layout.tsx           # Juurilayout fontteilla
│   └── page.tsx             # Pääsivu kaikilla osioilla
├── components/
│   ├── 3d/                  # Three.js 3D-komponentit
│   │   ├── SceneContainer.tsx
│   │   ├── CameraRig.tsx
│   │   ├── StarField.tsx
│   │   ├── NeuralNetwork.tsx
│   │   ├── HexGrid.tsx
│   │   ├── DataRings.tsx
│   │   └── ...
│   ├── layout/              # Sivusto-osiot
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── ComparisonSection.tsx
│   │   └── ...
│   └── ui/                  # Uudelleenkäytettävät UI-komponentit
│       ├── JourneyController.tsx
│       ├── LanguageSwitcher.tsx
│       └── FeatureCard.tsx
├── hooks/
│   └── useLanguage.tsx      # i18n context & hook
├── lib/
│   └── translations.ts      # EN/FI-käännökset
└── public/                  # Staattiset tiedostot
```

---

## 🌐 Kaksikielisyys

Täysi tuki englannille ja suomelle:

```tsx
// Kielenvaihtaja käyttöliittymässä
<LanguageSwitcher />  // EN | FI -napit

// Käännösten käyttö komponenteissa
const { t, language } = useLanguage();
<h1>{t.hero.headline}</h1>
```

---

## 📊 Phantomi-protokollan tekniset tiedot

| Protokolla | Toteutus |
|------------|----------|
| Avaimenvaihto | ECDH P-521 (secp521r1) |
| Tiivistealgoritmi | SHA-3 (Keccak-256) |
| Post-Quantum KEM | CRYSTALS-Kyber-1024 |
| Viestien salaus | AES-256-GCM |
| Digitaaliset allekirjoitukset | EdDSA (Ed25519) |
| Viestien säilytys | 0 sekuntia (vain RAM) |
| Verkkotopologia | Hajautettu Mesh |

---

## 🤝 Osallistuminen

Tervetuloa mukaan kehitykseen!

1. Forkkaa repositorio
2. Luo oma feature-haara (`git checkout -b feature/loistava-ominaisuus`)
3. Tee muutokset ja committaa (`git commit -m 'Lisää loistava ominaisuus'`)
4. Pushaa haaraan (`git push origin feature/loistava-ominaisuus`)
5. Avaa Pull Request

---

## 📄 Lisenssi

Tämä projekti on lisensoitu MIT-lisenssillä - katso [LICENSE](LICENSE) tiedosto lisätiedoista.

---

## 📞 Yhteystiedot

- **Verkkosivusto:** [phantomi.io](https://phantomi.io)
- **GitHub:** [@harleysederholm-alt](https://github.com/harleysederholm-alt)

---

<p align="center">
  <code>>>> PHANTOMI v0.1.0 | ZERO TRACE PROTOCOL <<<</code>
</p>
