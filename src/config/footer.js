// src/config/footer.js
import { nav } from './nav';

// No socials
export const footerSocials = [];

// Build from nav, then add the CTA link manually
const baseItems = nav.map(({ title, slug }) => ({ title, slug }));

export const footerLists = [
  {
    title: 'Menu',
    items: [
      ...baseItems,
      { title: 'Get Started', slug: '/company/contact' }, // same destination as your header CTA
    ],
  },
];
