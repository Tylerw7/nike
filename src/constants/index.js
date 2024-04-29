import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3, } from "../assets/images";
import Jacket1 from '../assets/images/Jacket1.png'
import Jacket2 from '../assets/images/Jacket2.png'
import Jacket3 from '../assets/images/Jacket3.png'
import Jacket4 from '../assets/images/Jacket4.png'
import Jacket5 from '../assets/images/Jacket5.png'
import Jacket6 from '../assets/images/Jacket6.png'

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
    {
        thumbnail: Jacket1,
        bigShoe: Jacket1,
    },
    {
        thumbnail: Jacket5,
        bigShoe: Jacket5,
    },
    {
        thumbnail: Jacket3,
        bigShoe: Jacket3,
    },
];

export const statistics = [
    { value: '1k+', label: 'Brands' },
    { value: '500+', label: 'Shops' },
    { value: '250k+', label: 'Customers' },
];

export const products = [
    {
        imgURL: Jacket1,
        name: "Arctic Aura",
        price: "$120.20",
    },
    {
        imgURL: Jacket2,
        name: "Frosty Flair",
        price: "$80.20",
    },
    {
        imgURL: Jacket3,
        name: "Alpine Apparel",
        price: "$60.20",
    },
    {
        imgURL: Jacket4,
        name: "Tundra-100",
        price: "$150.20",
    },
];

export const services = [
    {
        imgURL: truckFast,
        label: "Free shipping",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Secure Payment",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Love to help you",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Morich Brown',
        rating: 4.5,
        feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
    },
    {
        imgURL: customer2,
        customerName: 'Lota Mongeskar',
        rating: 4.5,
        feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
    }
];


export const footerLinks = [
    {
        title: "Products",
        links: [
            { name: "Arctic Aura", link: "/" },
            { name: "Frosty Flair", link: "/" },
            { name: "Alpine Apparel", link: "/" },
            { name: "Tundra-100", link: "/" },
            { name: "Glacier Gear", link: "/" },
            { name: "Avalanche Attire", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "FAQs", link: "/" },
            { name: "How it works", link: "/" },
            { name: "Privacy policy", link: "/" },
            { name: "Payment policy", link: "/" },
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@UrbanHue.com", link: "mailto:customer@UrbanHue.com" },
            { name: "+92554862354", link: "tel:+92554862354" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];