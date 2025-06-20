# Bootstrap-CSS-Extractor

## Unterschied zu Tailwind CSS Extractor

| Eigenschaft                      | **Tailwind CSS Extractor**                                          | **Bootstrap CSS Extractor**                                              |
| -------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Ziel**                         | Extrahiert das **dynamisch generierte** Tailwind-CSS                | Extrahiert das **geladene Bootstrap-CSS** aus dem CDN                    |
| **Quelle des CSS**               | `<style>`-Tags im DOM (dynamisch eingefügt, z. B. von Tailwind JIT) | `<link>`-Tags zu externem CDN (z. B. `cdn.jsdelivr.net`)                 |
| **Erkennungsmethode**            | Liest alle `<style>`-Tags aus und speichert deren Inhalt            | Findet `<link rel="stylesheet">`, lädt den Inhalt per `fetch()` herunter |
| **Umfang des CSS**               | Meist **reduziert** durch Purge / JIT-Generierung                   | Immer das **komplette Bootstrap-CSS** (mehr Code)                        |
| **Pseudo-Klassen-Unterstützung** | Nur wenn sie im Style-Tag enthalten sind (z. B. `:hover`, `:focus`) | **Alle Pseudo-Klassen garantiert enthalten**, da Bootstrap sie definiert |
| **Herausforderung**              | Erkennung dynamisch erzeugter, evtl. minimierter Style-Blöcke       | Umgehung von CORS/SRI-Problemen, saubere CDN-Erkennung                   |
| **Typischer Einsatzfall**        | Tailwind-Projekte mit Inlined Styles (z. B. Vite, Astro, Next.js)   | Klassische Seiten mit geladenem Bootstrap-CSS via `<link>`               |
| **Größe der CSS-Datei**          | Sehr klein (z. B. 5–50 KB, je nach Seite)                           | Groß (z. B. 200+ KB für vollständiges Bootstrap)                         |
