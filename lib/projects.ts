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
          { image_url: "/soundwalk/mt-sound-storytelling-k21.png" },
          { image_url: "/soundwalk/mt-sound-storytelling-k21-art-exhibition.png" },
          { image_url: "/soundwalk/mt-sound-storytelling-data-visualization.png" },
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
      headline: "EVERYDAY LIFE as expertise",
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
          { image_url: "/soundwalk/mt-sound-storytelling-k21.png" },
          { image_url: "/soundwalk/mt-sound-storytelling-k21-art-exhibition.png" },
          { image_url: "/soundwalk/mt-sound-storytelling-data-visualization.png" },
  ],
      },
      {
        type: "paragraph",
        title: "Grounded in research: How fear quietly restructures women's relationship to public space",
        paragraph: "Both pieces grew out of my master's thesis on feminist urbanism and how women experience safety through everyday mobility in Rotterdam. The research explores how fear operates not just as an emotion but as something that shapes where women go, when, and how; quietly restructuring their relationship to public space. These audio pieces are an attempt to make that research felt rather than just read.",
      },
    ],
  },
]
