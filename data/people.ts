export type Person = {
  slug: string;
  name: string;
  title: string;
  practiceAreas: string[];
  biography: string[];
  experience: string[];
  awards: string[];
  email?: string;
  phone?: string;   // T:
  mobile?: string;  // M:
  qualifications?: string[];
  photo?: string;   // "/people/lim-bee-li.jpg"
  banner?: string;  // "/people/lim-hero@2x.jpg" (falls back if missing)
};

export const people: Person[] = [
  {
    slug: "lim-bee-li",
    name: "Lim Bee Li",
    title: "Managing Director",
    practiceAreas: ["Corporate", "Commercial", "Dispute Resolution", "Banking & Finance"],
    biography: [
      "John leads the firm's corporate practice.",
      "He advises on complex cross-border transactions and governance."
    ],
    experience: [
      "Advised SGX-listed company on a S$120m acquisition.",
      "Acted for a regional conglomerate in JV restructuring."
    ],
    awards: [
      "Recognised in Best Lawyers: Corporate Law (2024)."
    ],
    //photo: ,
    email: "johntan@gmail.com",
    phone: "67858507",
    mobile: "92831284",
    qualifications: [
      "University of Manchester",
      "National University of Singapore"
    ],
    photo: "/lim_bee_li.png",
    banner: "/lim_bee_li.png"
  },
  {
    slug: "kurzbock-tsang-yu-han-kenn",
    name: "Kurzbock Tsang Yu Han Kenn",
    title: "Associate",
    practiceAreas: ["Employment", "Regulatory","Banking & Finance"],
    biography: [
      "Amelia counsels clients on employment and regulatory matters.",
      "She regularly conducts internal investigations and compliance reviews."
    ],
    experience: [
      "Defended multinational in tripartite dispute proceedings.",
      "Advised fintech on MAS regulatory licensing."
    ],
    awards: ["IFLR Rising Star (2023)."]
  }
];

const norm = (s: string) =>
  s.trim().toLowerCase().replace(/_/g, "-").replace(/\s+/g, "-");

export const getPerson = (slug: string) => {
  const found = people.find((p) => norm(p.slug) === norm(slug));
  return found ?? null;
}
