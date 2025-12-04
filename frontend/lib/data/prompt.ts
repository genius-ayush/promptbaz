// types.ts
export interface Tag {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface Prompt {
  id: string;
  title: string;
  promptText: string;
  sampleImageUrl: string;
  modelUsed: string; // e.g., "Midjourney v6", "DALL-E 3"
  steps: string[]; // JSON in DB, parsed as string array here
  aspectRatio: string | null;
  seed: number | null;
  categories: Category[];
  tags: Tag[];
  createdAt: string; // Date string
}

// mockData.ts
export const MOCK_PROMPTS: Prompt[] = [
  {
    id: "1",
    title: "Neon Cyberpunk City",
    promptText: "A futuristic city street at night, neon lights reflecting on wet pavement, cyberpunk aesthetic, highly detailed, cinematic lighting, 8k resolution, unreal engine 5 render, blue and pink color palette.",
    sampleImageUrl: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop",
    modelUsed: "Midjourney v6",
    steps: ["Set aspect ratio to 16:9", "Use niji style for vibrancy", "Upscale 2x"],
    aspectRatio: "16:9",
    seed: 452312,
    categories: [{ id: "c1", name: "Sci-Fi" }],
    tags: [{ id: "t1", name: "neon" }, { id: "t2", name: "city" }, { id: "t7", name: "night" }],
    createdAt: new Date('2023-11-01').toISOString(),
  },
  {
    id: "2",
    title: "Minimalist Pastel Portrait",
    promptText: "Close up portrait of a woman, soft pastel colors, minimalist background, studio lighting, fashion photography style, sharp focus on eyes, shot on 85mm lens.",
    sampleImageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    modelUsed: "Stable Diffusion XL",
    steps: ["Use DPM++ 2M Karras sampler", "CFG Scale 7", "Denoising strength 0.4"],
    aspectRatio: "3:4",
    seed: 998877,
    categories: [{ id: "c2", name: "Portrait" }],
    tags: [{ id: "t3", name: "woman" }, { id: "t4", name: "pastel" }, { id: "t8", name: "fashion" }],
    createdAt: new Date('2023-11-02').toISOString(),
  },
  {
    id: "3",
    title: "Abstract Liquid Gold",
    promptText: "Abstract 3D render of liquid gold swirling with black oil, intense contrast, macro photography, depth of field, luxury wallpaper, fluid simulation.",
    sampleImageUrl: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1935&auto=format&fit=crop",
    modelUsed: "DALL-E 3",
    steps: [],
    aspectRatio: "1:1",
    seed: null,
    categories: [{ id: "c3", name: "Abstract" }],
    tags: [{ id: "t5", name: "gold" }, { id: "t6", name: "3d" }, { id: "t9", name: "texture" }],
    createdAt: new Date('2023-11-03').toISOString(),
  },
  {
    id: "4",
    title: "Isometric Gaming Room",
    promptText: "Isometric view of a cozy gaming room, low poly style, soft lighting, pastel purple and blue, pc setup, cute decor, blender 3d render, clay material finish.",
    sampleImageUrl: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=2042&auto=format&fit=crop",
    modelUsed: "Midjourney v5.2",
    steps: ["--tile parameter", "Light upscaling"],
    aspectRatio: "16:9",
    seed: 123098,
    categories: [{ id: "c4", name: "Interior" }, { id: "c6", name: "3D Art" }],
    tags: [{ id: "t10", name: "isometric" }, { id: "t11", name: "gaming" }, { id: "t12", name: "lowpoly" }],
    createdAt: new Date('2023-11-04').toISOString(),
  },
  {
    id: "5",
    title: "Vintage Botanical Illustration",
    promptText: "Vintage botanical illustration of a fern leaf, aged paper texture, highly detailed, ink and watercolor, scientific drawing style, beige background.",
    sampleImageUrl: "https://images.unsplash.com/photo-1614730341194-75c607400070?q=80&w=1978&auto=format&fit=crop",
    modelUsed: "Stable Diffusion 1.5",
    steps: ["Use LoRA: VintagePaper", "CFG 9"],
    aspectRatio: "2:3",
    seed: 654321,
    categories: [{ id: "c5", name: "Illustration" }],
    tags: [{ id: "t13", name: "vintage" }, { id: "t14", name: "nature" }, { id: "t15", name: "drawing" }],
    createdAt: new Date('2023-11-05').toISOString(),
  },
  {
    id: "6",
    title: "Hyper-Realistic Cat",
    promptText: "A fluffy maine coon cat sitting on a wooden fence, sunset lighting, bokeh forest background, hyper-realistic, 8k, fur detail, golden hour.",
    sampleImageUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop",
    modelUsed: "Midjourney v6",
    steps: ["Style raw", "Chaos 10"],
    aspectRatio: "3:2",
    seed: 789012,
    categories: [{ id: "c7", name: "Animals" }],
    tags: [{ id: "t16", name: "cat" }, { id: "t17", name: "cute" }, { id: "t18", name: "fluffy" }],
    createdAt: new Date('2023-11-06').toISOString(),
  },
  {
    id: "7",
    title: "Futuristic Sneaker Concept",
    promptText: "Product photography of a futuristic sneaker floating in mid-air, levitation, deconstructed design, orange and white colorway, studio lighting, clean grey background.",
    sampleImageUrl: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&w=1964&auto=format&fit=crop",
    modelUsed: "Adobe Firefly",
    steps: ["Generative Fill for background"],
    aspectRatio: "1:1",
    seed: 334455,
    categories: [{ id: "c8", name: "Product" }, { id: "c9", name: "Fashion" }],
    tags: [{ id: "t19", name: "sneaker" }, { id: "t20", name: "design" }, { id: "t21", name: "shoe" }],
    createdAt: new Date('2023-11-07').toISOString(),
  },
  {
    id: "8",
    title: "Dark Fantasy Castle",
    promptText: "Gothic castle atop a jagged mountain peak, stormy sky, lightning, dark fantasy atmosphere, matte painting, lord of the rings style, epic scale.",
    sampleImageUrl: "https://images.unsplash.com/photo-1524312672589-943b18536f95?q=80&w=1932&auto=format&fit=crop",
    modelUsed: "Stable Diffusion XL",
    steps: ["Sampler: Euler a", "Steps: 40"],
    aspectRatio: "16:9",
    seed: 112233,
    categories: [{ id: "c10", name: "Fantasy" }, { id: "c11", name: "Landscape" }],
    tags: [{ id: "t22", name: "dark" }, { id: "t23", name: "castle" }, { id: "t24", name: "epic" }],
    createdAt: new Date('2023-11-08').toISOString(),
  },
  {
    id: "9",
    title: "Vector Logo Mascot",
    promptText: "Cute robot mascot logo, vector flat design, simple shapes, white background, tech startup branding, blue and white, minimal.",
    sampleImageUrl: "https://images.unsplash.com/photo-1596773348122-f17478648171?q=80&w=2070&auto=format&fit=crop",
    modelUsed: "DALL-E 3",
    steps: [],
    aspectRatio: "1:1",
    seed: null,
    categories: [{ id: "c12", name: "Logo" }, { id: "c13", name: "Vector" }],
    tags: [{ id: "t25", name: "robot" }, { id: "t26", name: "mascot" }, { id: "t27", name: "minimal" }],
    createdAt: new Date('2023-11-09').toISOString(),
  },
  {
    id: "10",
    title: "Underwater Coral Reef",
    promptText: "Vibrant coral reef underwater scene, colorful fish, sun rays piercing through water, national geographic style, 4k, wide angle.",
    sampleImageUrl: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?q=80&w=1974&auto=format&fit=crop",
    modelUsed: "Midjourney v5",
    steps: ["--ar 16:9", "--stylize 250"],
    aspectRatio: "16:9",
    seed: 990011,
    categories: [{ id: "c14", name: "Nature" }],
    tags: [{ id: "t28", name: "underwater" }, { id: "t29", name: "ocean" }, { id: "t30", name: "fish" }],
    createdAt: new Date('2023-11-10').toISOString(),
  },
  {
    id: "11",
    title: "Anime Style Samurai",
    promptText: "Anime style samurai drawing his sword, cherry blossoms falling, dramatic angle, cel shaded, studio ghibli inspired, vibrant colors.",
    sampleImageUrl: "https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=1887&auto=format&fit=crop",
    modelUsed: "Niji Journey",
    steps: ["Niji 5", "High contrast"],
    aspectRatio: "2:3",
    seed: 776655,
    categories: [{ id: "c15", name: "Anime" }],
    tags: [{ id: "t31", name: "samurai" }, { id: "t32", name: "japan" }, { id: "t33", name: "art" }],
    createdAt: new Date('2023-11-11').toISOString(),
  }
];