import ribble from "@/assets/Picture1.png.asset.json";
import webcreator from "@/assets/1.png.asset.json";
import madhura from "@/assets/3.png.asset.json";
import subject from "@/assets/4.png.asset.json";
import testgangster from "@/assets/5.png.asset.json";

export type Brand = {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string;
  cta: string;
  logo: string;
  group: "services" | "products";
};

export const brands: Brand[] = [
  {
    id: "ribble",
    name: "Ribble Designs",
    category: "Design & Creative",
    description:
      "Creates posters, videos, graphics and other creative digital designs.",
    url: "https://den-enterprise.github.io/Ribble-Designs/",
    cta: "Explore Ribble Designs",
    logo: ribble.url,
    group: "services",
  },
  {
    id: "webcreator",
    name: "Web_Creator",
    category: "Websites & Web Development",
    description:
      "Creates modern websites, mainly static websites, while also supporting other types of web projects when needed.",
    url: "https://den-enterprise.github.io/Web-Creator/",
    cta: "Explore Web_Creator",
    logo: webcreator.url,
    group: "services",
  },
  {
    id: "subject",
    name: "Subject",
    category: "Search / Python Tool",
    description:
      "A Python-based browser that takes a query, identifies the \u201csubject\u201d behind it, and searches Google for it.",
    url: "https://den-enterprise.github.io/Subject/",
    cta: "Explore Subject",
    logo: subject.url,
    group: "products",
  },
  {
    id: "testgangster",
    name: "Test-gangster",
    category: "Education / Assessment",
    description:
      "A platform where users can select the topics they are weak in and generate custom question papers and customized answer sheets.",
    url: "https://testgangster.lovable.app/",
    cta: "Try Test-gangster",
    logo: testgangster.url,
    group: "products",
  },
  {
    id: "madhura",
    name: "Madhura-Malayalam",
    category: "Education / Language Learning",
    description:
      "A Malayalam teaching platform designed to make learning Malayalam easier and more accessible.",
    url: "https://madhura-malayalam.lovable.app/",
    cta: "Explore Madhura-Malayalam",
    logo: madhura.url,
    group: "products",
  },
];

export const CONTACT_EMAIL = "denenterprisesinnovation@gmail.com";
export const CONTACT_PHONE_DISPLAY = "85903 72264";
export const CONTACT_PHONE_TEL = "tel:8590372264";
