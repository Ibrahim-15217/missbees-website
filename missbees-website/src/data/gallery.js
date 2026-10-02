const u = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

const galleryItems = [
  {
    id: 1,
    title: "Jollof rice with fried plantain",
    category: "Food",
    image: u("photo-1512058564366-18510be2db19", 1200),
  },
  {
    id: 2,
    title: "Our main dining area",
    category: "Restaurant",
    image: u("photo-1517248135467-4c7edcad34c4", 1200),
  },
  {
    id: 3,
    title: "Wedding catering setup",
    category: "Events",
    image: u("photo-1519225421980-715cb0215aed", 1200),
  },
  {
    id: 4,
    title: "Grilled platter served fresh",
    category: "Food",
    image: u("photo-1544025162-d76694265947", 1200),
  },
  {
    id: 5,
    title: "Our head chef at work",
    category: "Team",
    image: u("photo-1577219491135-ce391730fb2c", 1200),
  },
  {
    id: 6,
    title: "Fine dining atmosphere",
    category: "Restaurant",
    image: u("photo-1414235077428-338989a2e8c0", 1200),
  },
  {
    id: 7,
    title: "Event buffet presentation",
    category: "Events",
    image: u("photo-1464366400600-7168b8af9bc3", 1200),
  },
  {
    id: 8,
    title: "Burger special",
    category: "Food",
    image: u("photo-1568901346375-23c9450c58cd", 1200),
  },
  {
    id: 9,
    title: "The kitchen team",
    category: "Team",
    image: u("photo-1583394293214-28ded15ee548", 1200),
  },
  {
    id: 10,
    title: "Cozy seating corner",
    category: "Restaurant",
    image: u("photo-1552566626-52f8b828add9", 1200),
  },
  {
    id: 11,
    title: "Birthday celebration spread",
    category: "Events",
    image: u("photo-1530103862676-de8c9debad1d", 1200),
  },
  {
    id: 12,
    title: "Dessert selections",
    category: "Food",
    image: u("photo-1551024506-0bccd828d307", 1200),
  },
];

export const galleryCategories = [
  "All",
  "Food",
  "Restaurant",
  "Events",
  "Team",
];

export default galleryItems;