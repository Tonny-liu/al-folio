// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "dropdown-tipping-points",
              title: "Tipping Points",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/tipping-points/";
              },
            },{id: "dropdown-complex-systems",
              title: "Complex Systems",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/complex-systems/";
              },
            },{id: "dropdown-critical-phenomena",
              title: "Critical Phenomena",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/critical-phenomena/";
              },
            },{id: "dropdown-artificial-intelligence",
              title: "Artificial Intelligence",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/artificial-intelligence/";
              },
            },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-phase-separation-the-animation-lab",
        
          title: 'Phase Separation — The Animation Lab <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://animationlab.utah.edu/phase-separation/", "_blank");
          
        },
      },{id: "post-generative-modeling-by-estimating-gradients-of-the-data-distribution-yang-song",
        
          title: 'Generative Modeling by Estimating Gradients of the Data Distribution | Yang Song <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "This blog post focuses on a promising new direction for generative modeling. We can learn score functions (gradients of log probability density functions) on a large number of noise-perturbed data distributions, then generate samples with Langevin-type sampling. The resulting generative models, often called score-based generative models, has several important advantages over existing model families: GAN-level sample quality without adversarial training, flexible model architectures, exact log-likelihood computation, and inverse problem solving without re-training models. In this blog post, we will show you in more detail the intuition, basic concepts, and potential applications of score-based generative models.",
        section: "Posts",
        handler: () => {
          
            window.open("https://yang-song.net/blog/2021/score/", "_blank");
          
        },
      },{id: "post-the-math-of-climate-change-tipping-points-quanta-magazine",
        
          title: 'The Math of Climate Change Tipping Points | Quanta Magazine <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Tipping points in our climate predictions are both wildly dramatic and wildly uncertain. Can mathematicians make them useful?",
        section: "Posts",
        handler: () => {
          
            window.open("https://www.quantamagazine.org/the-math-of-climate-change-tipping-points-20250915/", "_blank");
          
        },
      },{id: "post-amazon-deforestation-linked-to-reduced-tibetan-snows-antarctic-ice-loss-study",
        
          title: 'Amazon deforestation linked to reduced Tibetan snows, Antarctic ice loss: Study <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "Environmental science and conservation news",
        section: "Posts",
        handler: () => {
          
            window.open("https://news.mongabay.com/2023/03/amazon-deforestation-linked-to-reduced-tibetan-snows-antarctic-ice-loss-study/", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-new-preprint-related-to-resilience-measurement-sparkles",
          title: 'New preprint related to resilience measurement! :sparkles:',
          description: "",
          section: "News",},{id: "news-a-new-review-paper-on-earth-system-tipping-elements-has-been-published",
          title: 'A new review paper on Earth system tipping elements has been published! 🎉...',
          description: "",
          section: "News",},{id: "news-a-preprint-introducing-a-novel-entropy-measure",
          title: 'A preprint introducing a novel entropy measure! 🥳',
          description: "",
          section: "News",},{id: "news-a-new-preprint-presents-new-evidence-on-the-loss-of-soil-moisture-stabilization-in-tibet-wonderful-collaboration-with-yiran",
          title: 'A new preprint presents new evidence on the loss of soil moisture stabilization...',
          description: "",
          section: "News",},{id: "news-a-new-preprint-introduces-a-deep-learning-based-method-for-reconstructing-long-term-climate-data-revealing-systematic-biases-in-widely-used-temperature-and-precipitation-datasets-incredible-collaboration-with-zhen-and-all-the-other-authors",
          title: 'A new preprint introduces a deep learning-based method for reconstructing long-term climate data,...',
          description: "",
          section: "News",},{id: "news-new-paper-https-www-nature-com-articles-s41467-026-76955-w-in-nature-communications-sparkles",
          title: 'New paper (https://www.nature.com/articles/s41467-026-76955-w) in Nature Communications! :sparkles:',
          description: "",
          section: "News",},{id: "projects-critical-phenomena",
          title: 'Critical Phenomena',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-earth-system-tipping-points",
          title: 'Earth System Tipping Points',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%65%6E%67.%6C%69%75@%74%75%6D.%64%65", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=3g_VFZgAAAAJ", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/https://www.researchgate.net/profile/Teng-Liu-15?ev=hdr_xprf/", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/https://www.semanticscholar.org/author/Teng-Liu/2110033756", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-4971-1703", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
