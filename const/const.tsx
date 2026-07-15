export const links = [
  { path: "/", name: "Գլխավոր" },
  { path: "/about", name: "Իմ մասին" },
  { path: "/works", name: "Աշխատանքներ" },
  { path: "/contact", name: "Կապ" },
];

export const socials = [
  {
    path: "/contact/linkedin.png",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/lilitbareghamyan/",
  },
  {
    path: "/contact/github.png",
    name: "GitHub",
    link: "https://github.com/bareghamyanlilit",
  },
  {
    path: "/contact/instagram.png",
    name: "Instagram",
    link: "https://www.instagram.com/lilit.bareghamyan",
  },
  {
    path: "/contact/facebook.png",
    name: "Facebook",
    link: "https://www.facebook.com/lilit.baregamyan.2025",
  },
];


export const projectsData: Record<string, {
  title: string;
  category: string;
  description: string;
  fullStory: string;
  features: string[];
  technologies: string[];
  liveLink: string;
  images: string[];
}> = {
  epc: {
    title: "EPC.am (Էջմիածնի Պետական Քոլեջ)",
    category: "Full-Stack Web Application",
    description: "Էջմիածնի Վարդգես Համազասպյանի անվան պետական քոլեջի պաշտոնական վեբ հարթակը։",
    fullStory: "Այս նախագիծը իմ ամենամեծ ձեռքբերումներից է։ Լինելով պետական հաստատության պաշտոնական կայք՝ ես այն ամբողջությամբ ստեղծել եմ մենակով (և՛ Frontend-ը, և՛ Backend-ը)։ Կայքի առանձնահատկությունն այն է, որ այն ունի հատուկ ստեղծված Admin Panel (կառավարման վահանակ), որտեղից քոլեջի աշխատակիցները կարող են լիովին ինքնուրույն փոփոխել, ավելացնել կամ ջնջել ցանկացած տվյալ, նորություն կամ հայտարարություն առանց կոդին ձեռք տալու։",
    features: [
      "Ամբողջական կառավարում Admin Panel-ից (CMS)",
      "Նորությունների և իրադարձությունների դինամիկ համակարգ",
      "Meta Graph API ինտեգրում (Facebook posts sync)",
      "Օգտատերերի դերերի բաժանում (Roles) և պաշտպանված տվյալներ",
      "Ամբողջովին ադապտիվ (Mobile-friendly) դիզայն"
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "Prisma", "Tailwind CSS"],
    liveLink: "http://www.epc.am",
    images: [
      "/epc1.png",
      "/epc2.png"
    ]
  },
  siteup: {
    title: "Site Up (Թվային Հրավիրատոմսեր)",
    category: "Micro-business & Frontend Application",
    description: "Ժամանակակից, էսթետիկ և ինտերակտիվ օնլայն հրավիրատոմսերի պատրաստման հարթակ։",
    fullStory: "Site Up -ը իմ սեփական փոքր բիզնեսն է, որտեղ ես հանդես եմ գալիս և՛ որպես հիմնադիր, և՛ որպես ծրագրավորող։ Կայքը թույլ է տալիս հաճախորդներին ստանալ գեղեցիկ, էկոլոգիապես մաքուր և ժամանակակից հրավիրատոմսեր իրենց միջոցառումների համար։ Այս նախագիծը նաև իմ նպատակասլացության ապացույցն է․ բիզնեսի առաջին ինստագրամյան էջը 3 ամիս անց արգելափակվեց, սակայն ես չհանձնվեցի, բացեցի նորը և շարունակեցի առաջ գնալ։",
    features: [
      "Ինտերակտիվ RSVP ձևաչափեր հյուրերի համար",
      "Էսթետիկ և անհատականացված դիզայններ յուրաքանչյուր հաճախորդի համար",
      "Հարմարավետ նավիգացիա դեպի սրահ (Google Maps ինտեգրում)",
      "Երաժշտության նվագարկում կայքում",
      "Մի շարք այլ հնարավորություններ"
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    liveLink: "https://siteup-am.vercel.app/",
    images: [
      "/siteup1.png", 
      "/siteup2.png"
    ]
  },
  eyesbrand: {
    title: "Eyes Brand",
    category: "E-commerce / Brand Portfolio",
    description: "Նորաձևության բրենդի համար նախատեսված գերժամանակակից և էսթետիկ վեբ կայք։",
    fullStory: "Eyes Brand նախագիծը ստեղծված է նորաձևության և դիզայնի ոլորտի ներկայացուցիչների համար։ Կայքի հիմնական շեշտը դրված է բարձրորակ վիզուալների, սահուն անիմացիաների և մինիմալիստական կառուցվածքի վրա, որոնք ընդգծում են բրենդի էքսկլյուզիվությունը և պրոֆեսիոնալիզմը։",
    features: [
      "Գերժամանակակից մինիմալիստական դիզայն",
      "Սահուն վիզուալ անցումներ (Smooth animations)",
      "Ապրանքների կատալոգի էսթետիկ ցուցադրում",
      "Արագագործ և թեթև կոդային բազա"
    ],
    technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    liveLink: "https://eyesbrand.vercel.app",
    images: [
      "/eyesbrand1.png", 
      "/eyesbrand2.png"
    ]
  }
};

