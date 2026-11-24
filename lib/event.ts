import gallery01 from "@/public/gallery/01.jpg";
import gallery02 from "@/public/gallery/02.jpg";
import gallery03 from "@/public/gallery/03.jpg";
import gallery04 from "@/public/gallery/04.jpg";
import gallery05 from "@/public/gallery/05.jpg";
import gallery06 from "@/public/gallery/06.jpg";
import gallery07 from "@/public/gallery/07.jpg";
import gallery08 from "@/public/gallery/08.jpg";

export const EVENT = {
  honoree: "Raymund & Vanessa",
  groom: "Raymund Gumba",
  bride: "Vanessa Navera",
  initials: "R & V",
  dateLong: "Monday, December 21, 2026",
  dateShort: "12 · 21 · 2026",
  time: "1:30 PM",
  dateISO: "2026-12-21T13:30:00+13:30",
  theme: "Minimalist",
  color: "Dusty Blue",
  dressCode: "Semi-formal",
  ceremony: { label: "Ceremony", name: "Sacred Heart Church", address: "Tacloban City" },
  reception: { label: "Reception", name: "Hotel Alejandro Roof Deck", address: "Tacloban City" },
};

export const MEDIA = {
  tagline: "Two hearts, one beautiful beginning. Join us as we say “I do.”",
  hero: "/hero.png",
  music: { src: "/music/background_music.mp3", volume: 0.5 },
  gallery: [gallery01, gallery02, gallery03, gallery04, gallery05, gallery06, gallery07, gallery08],
};

export const GIFT = {
  title: "Gift Policy",
  message: "Your presence at our wedding is the greatest gift of all. Should you wish to bless us further, a monetary gift would be warmly appreciated as we begin our life together.",
  qr: "/gift-qr.png" as string | null,
  qrLabel: "Gift QR Code",
};
