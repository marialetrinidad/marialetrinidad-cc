import { ProjectPage } from "@/lib/types"

export const projects: ProjectPage[] = [
  {
    slug: "soundwalk",
    title: "Two audio pieces on the invisible work women do every time they leave the house",
    hero_image_url: "/soundwalk/mt-sound-storytelling-running.png",
    description: {
      headline: "ART EXHIBITION",
      title: "Heard at K21: Düsseldorf's contemporary art museum",
      paragraph_text: "Both audio pieces were presented at K21 Kunstsammlung Nordrhein-Westfalen, Düsseldorf in April 2026. They were part of the Soundwalk group exhibition by Werk:Klub.",
    },
    blocks: [
      {
        type: "image_paragraph",
        image_orientation: "RIGHT",
        image_url: "/square.png",
        headline: "Do you have a minute? On the small things women do to get home safe",
        paragraph: "Every time a woman goes for a run, she makes decisions you can't see. Which route. What time. Whether to wear headphones – and when to take them off. Whether to call someone, just to have a voice on the other end. This piece puts you inside one of those runs, told entirely through sound and the voice of a friend on the other end of the line.",
      },
      {
        type: "image_paragraph",
        image_orientation: "LEFT",
        image_url: "/square.png",
        headline: "Low notes: A month of movement, translated into sound",
        paragraph: "Over one month, I recorded every walk and run through Rotterdam: how long, and how safe I felt in my body. This piece translates that data into sound. Each note is one day: its pitch reflects how safe I felt, its length how long I moved. The low, rough tones are the days I wanted to disappear. The clear, high ones are the days I forgot to be careful. The music is not composed; it is documented.",
      },
      {
        type: "images",
        images: [
          { image_url: "/soundwalk/mt-sound-storytelling-k21.png", link: null },
          { image_url: "/soundwalk/mt-sound-storytelling-k21-art-exhibition.png", link: null },
          { image_url: "/soundwalk/mt-sound-storytelling-data-visualization.png", link: null },
        ],
      },
      {
        type: "paragraph",
        title: "Grounded in research: How fear quietly restructures women's relationship to public space",
        paragraph: "Both pieces grew out of my master's thesis on feminist urbanism and how women experience safety through everyday mobility in Rotterdam. The research explores how fear operates not just as an emotion but as something that shapes where women go, when, and how; quietly restructuring their relationship to public space. These audio pieces are an attempt to make that research felt rather than just read.",
      },
    ],
  },

  {
    slug: "co-creation",
    title: "Co-creating Shandon's historic heart",
    hero_image_url: "/co-creation/cocreation-urbanism-testingground-cork-heritage-design.png",
    description: {
      headline: "EVERYDAY LIFE AS EXPERTISE",
      title: "Feminist urbanism, placemaking and co-creation for the historic core",
      paragraph_text: "This project explores how public spaces in Shandon, Cork can become more welcoming, connected and reflective of everyday community life. Building on the Shandon Integrated Urban Strategy (2025), it focuses on the streets, routes and shared spaces at the heart of the neighbourhood.",
    },
    blocks: [
      {
        type: "image_paragraph",
        image_orientation: "RIGHT",
        image_url: "/co-creation/cocreation-urbanism-ireland-cork-heritage-design-shandon.png",
        headline: "Public space shaped from within: A testing ground, not a finished answer",
        paragraph: "Through conversations with residents, teenagers, migrants, local businesses and Cork City Council – alongside an exploratory night walk and a co-creation workshop – the project gathers lived experiences of safety, belonging and care. These insights shape a set of design priorities and a long-term roadmap that position Shandon’s historic core as a testing ground for community-led transformation: a place where diverse groups can spend time comfortably, meet one another, and actively shape the area’s future.",
      },
      {
        type: "image_paragraph",
        image_orientation: "LEFT",
        image_url: "/co-creation/cocreation-urbanism-participation-workshop.png",
        headline: null,
        paragraph: "Shandon’s historic core holds strong social ties, cultural memory and unrealised potential. Despite years of plans and delays, people remain deeply invested in its future, making it a powerful site for testing community-led change.",
      },
      {
        type: "images",
        images: [
          { image_url: "/co-creation/cocreation-urbanism-ireland-cork-heritage-design.gif", link: null }
        ],
      },
      {
        type: "images",
        images: [
          { image_url: "/co-creation/cocreation-urbanism-participation-workshop-timeline.jpg", link: null }
        ],
      }
    ],
  },

  {
    slug: "zine-sweden",
    title: "Zine: Shaping Nyhamnen, Malmö",
    hero_image_url: "/zine-sweden/sketch-malmo-ferry-urban.png",
    description: {
      headline: "URBAN DESIGN PROVOCATION",
      title: "Exploration of memory, maintenance and regeneration",
      paragraph_text: "Developed during the CityLab II in Malmö, this project examines the transformation of the Nyhamnen ferry terminal: Once the gateway between Malmö and Copenhagen, now a vast, unused landscape caught between demolition and renewal. Over one week, our group observed the site, spoke with historians, librarians, and marine educators, and documented informal uses like Eshing that persist amid planned regeneration.",
    },
    blocks: [
      {
        type: "image_paragraph",
        image_orientation: "RIGHT",
        image_url: "/zine-sweden/sweden-malmo-urban-regeneration-ferry-terminal-nyhamnen.jpg",
        headline: "The zine as a probe for speculative urban futures",
        paragraph: "The work culminated in a digital zine that collages field notes, interviews, and archival fragments to reflect Malmö’s layered identities and uncertain futures. Later expanded as part of my individual research, Shaping Nyhamnen reimagines the zine as a cultural probe: a speculative tool to spark dialogue about how cities can embrace incompleteness, care, and co-existence with nature.",
      },
      {
        type: "images",
        images: [
          { image_url: "/zine-sweden/zine-urban-research-design.gif", link: null }
        ],
      },
      {
        type: "image_paragraph",
        image_orientation: "RIGHT",
        image_url: null,
        headline: "Making as a way of understanding",
        paragraph: "The zine took shape through cutting, layering, and arranging fragments (maps, interview notes, photographs, and handwritten thoughts). This manual, almost meditative process became a method in itself: revealing the gaps between what we observed and what we understood. Each collage decision reflected our position as outsiders, assembling meaning from partial glimpses, acknowledging that knowledge, like the city, is always unfinished.",
      },
      {
        type: "images",
        images: [
          { image_url: "/zine-sweden/collage-zine-method-cocreation-participatory.jpg", link: null }
        ],
      },
    ],
  },

   {
    slug: "threads",
    title: "threads: weaving care into the urban fabric",
    hero_image_url: "/threads/illustration-safety-women-fear-city-exclusion.png",
    description: {
      headline: "PARTICIPATORY MAPPING",
      title: "Urban design meets feminist theory",
      paragraph_text: "Emerging as an interactive digital project, threads collects and visualizes personal and community-submitted narratives of safety and unease. Based on the understanding that experiences of vulnerability are shaped by identity, history, and structures of belonging and exclusion, Threads becomes an ongoing, collective conversation. Through small-scale, site-specific interventions, it maps the gaps – spatial, emotional, and social – that shape how public space is experienced.",
    },
    blocks: [
      {
        type: "image_paragraph",
        image_orientation: "RIGHT",
        image_url: "/threads/design-ux-web-brand-branding-mobile.png",
        headline: "A living, open archive of everyday urban experiences",
        paragraph: "threads is made possible through the contributions of women, gender-diverse individuals, and local residents willing to share their truths. By bringing forward the often invisible, emotional, and intersectional geographies of urban life, it invites us to look closer, walk slower, and imagine public space as a place of presence, not surveillance. Anyone can add their own story or place to the map from any device, anywhere – keeping the archive alive, evolving, and collective. This project is not authored in isolation: It evolved through constant dialogue: with residents, students, runners, dog walkers, and the city itself. By returning to the street with draft interventions and listening again, the design became not only site-specific but socially rooted.",
      },
      {
        type: "image_paragraph",
        image_orientation: "LEFT",
        image_url: "/threads/design-postcard-illustration-branding-gift.png",
        headline: "Reclaiming fear through thread and image",
        paragraph: "through these stitched postcards, threads transforms stories of unease and danger into something tangible, visible, and shared. By illustrating places of vulnerability, we reclaim space, give form to the often unspoken, and invite others to see, feel, and respond: Private fear becomes a collective narrative, stitched into the urban fabric as an act of care, memory, and quiet resistance.",
      },
      {
        type: "images",
        images: [
          { image_url: "/threads/mapping-map-intervention-cork-safety-fear-women.jpg", link: null }
        ],
      },
       {
        type: "image_paragraph",
        image_orientation: "LEFT",
        image_url: "/threads/cork-safety-city-urbanism-women-feminist-intervention.png",
        headline: "Why threads? Why here?",
        paragraph: "Washington Street is a complex space: Alive with cafés, nightlife, and cultural activity, but also marked by surveillance, traffic, and underused public infrastructure. This duality served as an ideal context for experimenting with feminist frameworks to reimagine the street as one of care and inclusion.",
      },
      {
        type: "images",
        images: [
          { image_url: "/threads/mapping-map-digital-interactive-safety-fear-women.png", link: "https://threads.marialetrinidad.cc" }
        ],
      }
    ],
  },

{
    slug: "home",
    title: "25m² of creative living in Cologne",
    hero_image_url: "/home/interior-design-cozy-home-modern-mid-century-vintage.jpg",
    description: {
      headline: "LIVING LARGE IN A SMALL SPACE",
      title: "A personalized interior for a seamless daily routine",
      paragraph_text: "Living in just 25m², I embraced the challenge of making a small space feel open and functional. Thoughtfully designed to match my daily routine, the apartment became a cozy and modern sanctuary, welcoming all who entered. Every corner reCects my personal touch, blending practicality with warmth, turning it into more than just a living space: it was home.",
    },
    blocks: [
      {
        type: "images",
        images: [
          { image_url: "/home/interior-design-cozy-scandinavian.jpg", link: null },
          { image_url: "/home/interior-design-cozy-art.jpg", link: null },
          { image_url: "/home/interior-design-cozy-altbau-europe.jpg", link: null },
        ],
      },
      {
        type: "image_paragraph",
        image_orientation: "RIGHT",
        image_url: "/home/plants_square.jpg",
        headline: "Nurturing green life",
        paragraph: "This is where I Enally discovered the art of propagating plants and keeping them thriving. Their vibrant presence truly brings the space to life, creating a warm and inviting atmosphere.",
      },
      {
        type: "image_paragraph",
        image_orientation: "LEFT",
        image_url: "/home/on_square.jpg",
        headline: "Dynamic essence",
        paragraph: "More passions intersecting",
      },
      {
        type: "image_paragraph",
        image_orientation: "RIGHT",
        image_url: "/home/fassade_komplett_square.jpg",
        headline: "Ein Stück Köln: my piece of Cologne",
        paragraph: "This mural was meant to bring a piece of my Veedel to life: highlighting the charm of my neighborhood on the facade of an altbau building. Though it never came to be due to *Denkmalschutz*",
      },
      {
        type: "paragraph",
        title: "Browse more illustrations",
        paragraph: null,
      },
      {
        type: "images",
        images: [
          { image_url: "/illustrations/mt-illustration-friends-cozy-community.jpg", link: "/illustration" },
          { image_url: "/home/illustration-cologne-art.jpg", link: "/illustration" },
          { image_url: "/illustrations/women-city-safety-fear-pink.jpg", link: "/illustration" },
        ],
      },
    ],
  },

]
