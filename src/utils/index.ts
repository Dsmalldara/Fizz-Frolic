
const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
  {
    name: "Amber Sunset",
    country: "NZ",
    detail: "500 ml",
    price: "$12",
  },
  {
    name: "Velvet Spice",
    country: "FR",
    detail: "Glass",
    price: "$42",
  },
  {
    name: "Copper Mule",
    country: "US",
    detail: "350 ml",
    price: "$18",
  },
  {
    name: "Midnight Rum",
    country: "JM",
    detail: "Shot",
    price: "$25",
  },
];

const mockTailLists = [
  {
    name: "Cucumber Drift",
    country: "US",
    detail: "Glass",
    price: "$9",
  },
  {
    name: "Pineapple Calm",
    country: "MX",
    detail: "Glass",
    price: "$39",
  },
  {
    name: "Berry Rain",
    country: "CA",
    detail: "750 ml",
    price: "$21",
  },
  {
    name: "Mint Harmony",
    country: "IE",
    detail: "500 ml",
    price: "$26",
  },
];

const profileLists = [
  {
	imgPath: "/images/profile1.png",
 },
   {
	imgPath: "/images/profile2.png",
 },
  {
    imgPath: "/images/profile3.png",
  },
  {
    imgPath: "/images/profile4.png",
  },
];

const featureLists = [
  "Crafted with fresh botanicals",
  "Styled with elegance",
  "Chilled to the core",
  "Made by certified mixologists",
];

const goodLists = [
  "Locally sourced flavors",
  "Unique house recipes",
  "Interactive drink experience",
  "Expert-level preparation",
];

const storeInfo = {
  heading: "Visit Our Bar",
  address: "789 Mix Ave, Suite 101, Brooklyn, NY 11201",
  contact: {
    phone: "(212) 555-7654",
    email: "cheers@craftedtails.com",
  },
};

const openingHours = [
  { day: "Mon–Thu", time: "12:00pm – 11pm" },
  { day: "Fri", time: "12:00pm – 1am" },
  { day: "Sat", time: "10:00am – 1am" },
  { day: "Sun", time: "10:00am – 11pm" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
{
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const sliderLists = [
  {
    id: 1,
    name: "Sunset Daiquiri",
   	image: "/images/drink1.png",
    title: "Bright Tones, Smooth Finish",
    description:
      "A stunning mix of rum, citrus, and a hint of bitters—perfect for winding down under warm lights and cool vibes.",
  },
  {
    id: 2,
    name: "Blackberry Twist",
    	image: "/images/drink2.png",
    title: "A Bold Take on the Familiar",
    description:
      "Fruity and bold with layers of blackberry and basil, this cocktail delivers refreshment with a modern twist.",
  },
  {
    id: 3,
    name: "Rosewater Mule",
   	image: "/images/drink3.png",
    title: "Elegant, Light, and Floral",
    description:
      "Combining ginger beer, rosewater, and lime—this floral mule offers a refreshing break from the ordinary.",
  },
  {
    id: 4,
    name: "Ocean Breeze",
    	image: "/images/drink4.png",
    title: "Handcrafted With Passion",
    description:
      "This tropical blue blend is layered with coconut, pineapple, and mint—crafted to elevate your beachside moments.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  openingHours,
  storeInfo,
  socials,
  sliderLists,
};