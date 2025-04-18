import { readable } from "svelte/store";

export const categories = readable([
    { id: 1, name: 'Haircut' },
    { id: 2, name: 'Colours' },
    { id: 3, name: 'Treatment' },
    { id: 4, name: 'Other Services' }
]);

export const services = readable([
    { id: 1, name: 'Under 16 years old', price: 25, category: 1 },
    { id: 2, name: 'Men/Women (Gold Card holder)', price: 30, category: 1 },
    { id: 3, name: 'Men\'s Haircut', price: 35, category: 1 },
    { id: 4, name: 'Women\'s Haircut with blowdry', price: 40, category: 1 },
    { id: 5, name: 'Hair Wash (additional)', price: 10, category: 1 },
    { id: 6, name: 'Hair Iron (additional)', price: 30, category: 1 },

    { id: 7, name: 'Root Colour', price: 110, category: 2 },
    { id: 8, name: 'Hair Colour', price: 110, category: 2 },
    { id: 9, name: 'With full head foils', price: 220, category: 2, range: true },
    { id: 10, name: 'With Keratin treatment', price: 270, category: 2, range: true },
    { id: 11, name: 'Root Colour', price: 110, category: 2 },

    { id: 12, name: 'Hair Spa', price: 60, category: 3 },
    { id: 13, name: 'Keratin', price: 170, category: 3 },
    { id: 14, name: 'No yellow Keratin', price: 180, category: 3 },
    { id: 15, name: 'Kerabond', price: 250, category: 3 },
    { id: 16, name: 'Permanent straightening', price: 250, category: 3, range: true },

    { id: 17, name: 'Hair & Make-up', price: 150, category: 4 },
    { id: 18, name: 'Hair & Make-up (Bride)', price: 200, category: 4 },
    { id: 19, name: 'Hair styling', price: 60, category: 4 },
    { id: 20, name: 'Eyebrow tattoo', price: 200, category: 4 },
    { id: 21, name: 'Eyeliner tattoo', price: 150, category: 4 }
]);