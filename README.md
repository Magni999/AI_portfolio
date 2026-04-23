# Silver Sword Solutions

Landing page dla agencji AI — agenci konwersacyjni i automatyzacje procesów dla MŚP.

**Stack:** Single-page HTML + React 18 (via Babel Standalone) + inline JSX. Bez build-stepu — otwierasz `index.html` i działa.

## Struktura

```
index.html              # shell HTML + style globalne + CSS zmienne
silversword.jsx         # cała aplikacja React (TopBar, Hero, Features, News, FinalCTA, Footer + i18n PL/EN)
tweaks-panel.jsx        # panel Tweaks (design system: kolory, typografia, układ)
assets/
  hero-bg.png           # tło hero (kuźnia alchemiczna)
```

## Uruchomienie lokalne

```bash
# dowolny static server — np.:
python3 -m http.server 8000
# lub
npx serve .
```

Następnie otwórz `http://localhost:8000`.

> Uwaga: otwarcie `index.html` bezpośrednio z dysku (`file://`) nie zadziała — Babel wymaga HTTP, żeby załadować pliki `.jsx` przez `<script src>`.

## Deploy na GitHub Pages

1. W ustawieniach repo → **Pages** → Source: `Deploy from a branch`, branch `main`, folder `/ (root)`.
2. Push do `main`.
3. Strona będzie dostępna pod `https://magni999.github.io/AI_portfolio/`.

Plik `.nojekyll` w repo wyłącza Jekylla, żeby GitHub nie pomijał plików zaczynających się od `_`.

## Deploy na Vercel / Netlify

Perfect fit dla static HTML — wystarczy połączyć repo, framework preset: `Other`, output directory: `/`. Zero konfiguracji.

## Features

- **Dwujęzyczność PL/EN** — przełącznik w prawym górnym rogu
- **Spotlight hover** na kartach (radial glow podążający za kursorem)
- **Animowane hero** — ken burns + flicker + film grain
- **Responsive** — hamburger menu < 1080px
- **Tweaks panel** — edytor design systemu w czasie rzeczywistym (toggle w toolbarze)
- **Prefers-reduced-motion** respektowane

## Technologia

- React 18.3.1 (development build)
- Babel Standalone 7.29.0
- Google Fonts: Cormorant Garamond, Marcellus, Inter, JetBrains Mono

## Licencja

Proprietary — © Silver Sword Solutions
