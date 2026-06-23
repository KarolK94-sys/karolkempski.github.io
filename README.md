# Portfolio — Karol Kempski

Statyczna, jednostronicowa strona portfolio (HTML + CSS + JS) gotowa do publikacji na **GitHub Pages**.
Zero build-stepów, zero frameworków — wystarczy wgrać pliki do repozytorium i włączyć Pages.

---

## Co dostajesz

```
karolkempski-portfolio/
├── index.html        # cała strona (PL + EN)
├── style.css         # style
├── script.js         # menu mobilne, przełącznik PL/EN, animacje
├── README.md         # ten plik
├── .nojekyll         # mówi GitHubowi: nie odpalaj Jekylla
├── CNAME.example     # przykład pliku CNAME pod własną domenę
├── img/              # tu wrzucasz zdjęcia projektów
└── cv.pdf.placeholder.txt   # zamień na cv.pdf
```

---

## Szybki start — publikacja na GitHub Pages (5 kroków, ~5 minut)

### Krok 1. Konto GitHub
Jeśli nie masz — załóż na https://github.com (darmowe).

### Krok 2. Utwórz repozytorium o **dokładnie tej nazwie**

```
karolkempski.github.io
```

> ⚠️ Nazwa MUSI być w formacie `<twoj-username>.github.io`. Wtedy GitHub udostępni stronę pod adresem **https://karolkempski.github.io** automatycznie, bez podstrony.

Ustaw repo jako **Public**.

### Krok 3. Wgraj pliki

Najprościej:
1. W nowo utworzonym repo kliknij **"Add file" → "Upload files"**.
2. Przeciągnij **całą zawartość** folderu `karolkempski-portfolio` (nie sam folder — same pliki!).
3. Na dole: **"Commit changes"**.

Alternatywnie przez Git:
```bash
git clone https://github.com/karolkempski/karolkempski.github.io.git
cd karolkempski.github.io
# skopiuj tu zawartość paczki
git add .
git commit -m "Initial portfolio"
git push
```

### Krok 4. Włącz GitHub Pages
1. W repo → **Settings → Pages**.
2. **Source:** *Deploy from a branch*.
3. **Branch:** `main` (lub `master`) → folder `/ (root)` → **Save**.

### Krok 5. Otwórz stronę
Po 1–2 minutach: **https://karolkempski.github.io** 🎉

---

## Wymiana zdjęć projektów

W `index.html` każdy projekt ma:

```html
<div class="project-img" data-label="Wstaw zdjęcie: KTW II">Wstaw zdjęcie</div>
```

Żeby wstawić zdjęcie:
1. Wrzuć plik np. do `img/ktw2.jpg` (zalecane: ~1200×900 px, JPG, <300 KB).
2. Zamień powyższy `<div>` na:

```html
<img class="project-img" src="img/ktw2.jpg" alt="KTW II Katowice — sprężanie stropów">
```

To wszystko — style są już gotowe.

---

## CV do pobrania

Wrzuć swój CV jako plik `cv.pdf` w katalogu głównym (obok `index.html`).
Przycisk "Pobierz CV" w hero już do niego linkuje. Plik `cv.pdf.placeholder.txt` możesz wtedy usunąć.

---

## Formularz kontaktowy — wersja działająca

Domyślnie formularz używa `mailto:` (otwiera klienta poczty). To minimum, ale słabo działa na komórkach bez skonfigurowanej poczty.

**Lepsza opcja: darmowe Formspree (50 wiadomości/mies za free)**:

1. Wejdź na https://formspree.io, zarejestruj się.
2. Utwórz nowy formularz (np. *Portfolio contact*).
3. Skopiuj endpoint, np. `https://formspree.io/f/abcd1234`.
4. W `index.html` znajdź:
   ```html
   <form class="contact-form" action="mailto:karolkempski1@gmail.com" method="post" enctype="text/plain">
   ```
   i zamień na:
   ```html
   <form class="contact-form" action="https://formspree.io/f/abcd1234" method="POST">
   ```
5. Gotowe — wiadomości lecą Ci na maila bez serwera.

---

## Własna domena (opcjonalnie, np. `karolkempski.pl`)

1. Kup domenę u dowolnego rejestratora (OVH, nazwa.pl, namecheap.com — ~50–80 zł/rok).
2. W repo utwórz plik **`CNAME`** (bez rozszerzenia) z jedną linią:
   ```
   karolkempski.pl
   ```
   (skopiuj `CNAME.example` i zmień nazwę)
3. W panelu DNS rejestratora ustaw rekordy:

   **A** (dla `karolkempski.pl`):
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   **CNAME** (dla `www.karolkempski.pl`):
   ```
   karolkempski.github.io
   ```
4. W GitHub: **Settings → Pages → Custom domain** wpisz `karolkempski.pl` → zaznacz **Enforce HTTPS**.

Propagacja DNS: 10 min – 24 h.

---

## Pro tipy

- **Favicon**: wrzuć `favicon.ico` (32×32) do katalogu głównego i dodaj w `<head>`:
  ```html
  <link rel="icon" href="favicon.ico">
  ```
- **Google Analytics / Plausible**: wklej snippet przed `</head>`.
- **Wersja angielska**: prawym górnym przyciskiem **PL / EN** — wybór zapamiętuje się w localStorage.
- **SEO**: meta description i og: tagi są już ustawione. Po wdrożeniu zgłoś stronę w Google Search Console.

---

## Stack

- HTML5, CSS3 (vanilla, custom properties), JS (vanilla, IntersectionObserver)
- Font: Inter (Google Fonts)
- Hosting: GitHub Pages (CDN, HTTPS, darmowe)

**Realny koszt całości: 0 zł** (lub ~50–80 zł/rok za własną domenę).

---

Powodzenia z portfolio! 🏗️
