# Resume JSON Documentation

## Certificates Section
The certificates section contains a list of professional certifications and courses. Each certificate has the following structure:

```json
{
  "name": "Certificate Name",      // The title of the certificate/course
  "date": "YYYY-MM-DD",           // Date when the certificate was obtained
  "issuer": "Issuing Institution", // The organization that issued the certificate
  "url": "https://example.com",    // Link to the certificate or course page
  "icon": "fa-solid fa-*"         // Font Awesome icon class for visual representation
}
```

### Current Certificates:
1. Machine Learning (Stanford University)
2. Quantum Computing (Stanford University)
3. Quantum Information (Stanford University)
4. Quantum Cryptography (Stanford University)
5. Quantum Communication (Stanford University)
6. Quantum Teleportation (Stanford University)

### Icon Usage:
- Machine Learning: Location dot icon
- Quantum Computing: Tag icon
- Quantum Information: Envelope icon
- Quantum Cryptography: Hashtag icon
- Quantum Communication: Calendar icon
- Quantum Teleportation: Clipboard check icon


  "volunteer": [
    {
      "organization": "People's Climate March",
      "location": "Zurich, Switzerland",
      "position": "Lead Organizer",
      "url": "https://example.com",
      "startDate": "2014-04-01",
      "endDate": "2015-07-01",
      "summary": "Lead organizer for the New York City branch of the People's Climate March, the largest climate march in history.",
      "highlights": ["Awarded 'Climate Hero' award by Greenpeace for my efforts organizing the march.", "Men of the year 2014 by Time magazine"]
    }
  ],


  "projects": [
    {
      "name": "Quantum Computing",
      "summary": "Quantum computing is the use of quantum-mechanical phenomena such as superposition and entanglement to perform computation. Computers that perform quantum computations are known as quantum computers.",
      "highlights": ["Quantum Teleportation", "Quantum Cryptography"],
      "startDate": "2018-01-01",
      "endDate": "2018-01-01",
      "url": "https://example.com"
    }
  ]

    "references": [
    {
      "name": "Professor John Doe",
      "icon": "fa-solid fa-laptop",
      "reference": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum, diam quis convallis euismod, arcu mi ullamcorper lorem, a vestibulum nunc magna at sem. Sed in risus ac felis varius blandit. D"
    },
    {
      "name": "Professor John Doe",
      "icon": "fa-solid fa-thumbtack",
      "reference": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam condimentum, diam quis convallis euismod, arcu mi ullamcorper lorem, a vestibulum nunc magna at sem. Sed in risus ac felis varius blandit. D"
    }
  ],

  "interests": [
    {
      "name": "Physics",
      "icon": "fa-solid fa-tag",
      "keywords": [
        "Quantum Mechanics",
        "Quantum Computing",
        "Quantum Information",
        "Quantum Cryptography",
        "Quantum Communication",
        "Quantum Teleportation"
      ]
    }
  ]

  "skills": [
    {
      "name": "Physics",
      "level": "Master",
      "icon": "fa-solid fa-hashtag",
      "keywords": [
        "Quantum Mechanics",
        "Quantum Computing",
        "Quantum Information",
        "Quantum Cryptography",
        "Quantum Communication",
        "Quantum Teleportation"
      ]
    }
  ],


  "publications": [
    {
      "name": "Zur Elektrody/namik bewegter Körper",
      "publisher": "Annalen der Physik",
      "releaseDate": "1905-06-30",
      "url": "https://en.wikisource.org/wiki/Translation:On_the_Electrodynamics_of_Moving_Bodies",
      "summary": "It concerned an interpretation of the Michelson–Morley experiment and the properties of light and time. Special relativity incorporates the principle that the speed of light is the same for all inertial observers regardless of the state of motion of the source."
    },
    {
      "name": "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt",
      "publisher": "Annalen der Physik",
      "releaseDate": "1905-03-18",
      "url": "https://de.wikisource.org/wiki/Über_einen_die_Erzeugung_und_Verwandlung_des_Lichtes_betreffenden_heuristischen_Gesichtspunkt",
      "summary": "In the second paper, he applied the quantum theory to light to explain the photoelectric effect. In particular, he used the idea of light quanta (photons) to explain experimental results, but stressed the importance of the experimental results. The importance of his work on the photoelectric effect earned him the Nobel Prize in Physics in 1921."
    },
    {
      "name": "Die Grundlage der allgemeinen Relativitätstheorie",
      "publisher": "Annalen der Physik",
      "releaseDate": "1916-03-20",
      "url": "https://de.wikisource.org/wiki/Die_Grundlage_der_allgemeinen_Relativitätstheorie",
      "summary": "The publication of the theory of general relativity made him internationally famous. He was professor of physics at the universities of Zurich (1909–1911) and Prague (1911–1912), before he returned to ETH Zurich (1912–1914)."
    }
  ],