# 🔮 PHANTOMI

> **Zero-Trace Encrypted Messaging Protocol**

[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-3D-black?logo=threedotjs)](https://threejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

<p align="center">
  <img src="https://img.shields.io/badge/STATUS-ACTIVE-00FF41?style=for-the-badge" alt="status"/>
  <img src="https://img.shields.io/badge/ENCRYPTION-POST--QUANTUM-00FFFF?style=for-the-badge" alt="encryption"/>
</p>

---

## 📡 What is Phantomi?

Phantomi is an **ultra-secure, decentralized messaging protocol** designed for zero-trace communications. Built with military-grade encryption (ECDH P-521 + CRYSTALS-Kyber-1024), Phantomi ensures that your messages leave no forensic footprint.

### 🔐 Key Features

| Feature | Description |
|---------|-------------|
| **Post-Quantum Encryption** | CRYSTALS-Kyber-1024 hybrid key exchange |
| **Zero Trace Architecture** | RAM-only storage, no disk writes |
| **Perfect Forward Secrecy** | Enabled by default on all messages |
| **Decentralized Mesh Network** | No central servers to compromise |
| **0-Second Message Retention** | Messages exist only in RAM |

---

## 🎨 Website Design

This repository contains the **official Phantomi marketing website** – a cinematic 3D experience showcasing the protocol's capabilities.

### Tech Stack

- **Framework:** Next.js 15 + React 19
- **3D Graphics:** Three.js + React Three Fiber + Drei
- **Post-Processing:** @react-three/postprocessing
- **Animations:** GSAP + Framer Motion
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript

### Design Philosophy: "Terminal Brutalism"

The website embodies a **Cinematic Hacker** aesthetic:

- 🖥️ **Terminal Brutalist UI** – Monospaced fonts, glass panels, scanlines
- 💚 **Toxic Green Palette** – `#00FF41` on deep void black
- 🌀 **Diamond-Tier 3D** – Six immersive scenes with scroll-driven camera
- ⚡ **Post-Processing** – Bloom, chromatic aberration, film grain, vignette

---

## 🌌 3D Experience Architecture

The website features **6 cinematic 3D scenes** that the user travels through while scrolling:

```
┌─────────────────────────────────────────────────────────────────┐
│  SCENE 1: THE AWAKENING                                         │
│  └── QuantumMonolith + DataRings (Hero Section)                 │
├─────────────────────────────────────────────────────────────────┤
│  SCENE 2: THE BREACH                                            │
│  └── HyperTunnel + HexGrid + DataPackets (Features)             │
├─────────────────────────────────────────────────────────────────┤
│  SCENE 3: THE NETWORK                                           │
│  └── StarField + NeuralNetwork (Technology + Security)          │
├─────────────────────────────────────────────────────────────────┤
│  SCENE 4: THE CORE                                              │
│  └── ParticleLogo (Node Guide + Developer API)                  │
├─────────────────────────────────────────────────────────────────┤
│  SCENE 5: THE VOID                                              │
│  └── CyberGlobe (Global Reach + Testimonials)                   │
├─────────────────────────────────────────────────────────────────┤
│  SCENE 6: THE ASCENSION                                         │
│  └── AscensionPortal (Roadmap + Footer)                         │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/harleysederholm-alt/Phantomiverkkosivut.git
cd Phantomiverkkosivut

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```
Phantomiverkkosivut/
├── app/
│   ├── globals.css          # Global styles + scrollbar
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── 3d/                  # Three.js 3D components
│   │   ├── SceneContainer.tsx
│   │   ├── CameraRig.tsx
│   │   ├── QuantumMonolith.tsx
│   │   ├── DataRings.tsx
│   │   ├── HyperTunnel.tsx
│   │   ├── HexGrid.tsx
│   │   ├── DataPackets.tsx
│   │   ├── StarField.tsx
│   │   ├── NeuralNetwork.tsx
│   │   ├── ParticleLogo.tsx
│   │   ├── CyberGlobe.tsx
│   │   └── AscensionPortal.tsx
│   ├── layout/              # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── TechSection.tsx
│   │   └── ...
│   └── ui/                  # Reusable UI components
│       ├── LanguageSwitcher.tsx
│       ├── FeatureCard.tsx
│       └── ComplianceBanner.tsx
├── hooks/
│   └── useLanguage.tsx      # i18n context & hook
├── lib/
│   └── translations.ts      # EN/FI translations
└── public/                  # Static assets
```

---

## 🌐 Internationalization

Full bilingual support for English and Finnish:

```tsx
// Toggle between languages in UI
<LanguageSwitcher />  // EN | FI buttons

// Use translations in components
const { t, language } = useLanguage();
<h1>{t('hero.headline')}</h1>
```

---

## 🔧 Configuration

### Tailwind CSS 4

Custom color tokens in `tailwind.config.ts`:

```ts
colors: {
  'deep-void': '#000500',
  'toxic-green': '#00FF41',
  'cyber-cyan': '#00FFFF',
}
```

### Post-Processing Effects

Configured in `SceneContainer.tsx`:

```tsx
<EffectComposer>
  <Bloom intensity={2} luminanceThreshold={0.05} />
  <ChromaticAberration offset={[0.003, 0.003]} />
  <Noise opacity={0.12} />
  <Vignette darkness={1.3} />
</EffectComposer>
```

---

## 📊 Technical Specifications

| Protocol | Implementation |
|----------|----------------|
| Key Exchange | ECDH P-521 (secp521r1) |
| Hash Algorithm | SHA-3 (Keccak-256) |
| Post-Quantum KEM | CRYSTALS-Kyber-1024 |
| Message Encryption | AES-256-GCM |
| Digital Signatures | EdDSA (Ed25519) |
| Message Retention | 0 seconds (RAM-only) |
| Network Topology | Decentralized Mesh |

---

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

- **Website:** [phantomi.io](https://phantomi.io)
- **GitHub:** [@harleysederholm-alt](https://github.com/harleysederholm-alt)

---

<p align="center">
  <code>>>> PHANTOMI v0.1.0 | ZERO TRACE PROTOCOL <<<</code>
</p>
