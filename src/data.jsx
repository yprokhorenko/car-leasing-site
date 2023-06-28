import React from "react";
import { IoCarSportOutline } from "react-icons/io5";
import { RiPercentLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import { AiOutlineRocket } from "react-icons/ai";


export const menuItems = [
  { id: 1, title: "new cars", link: "/" },
  { id: 2, title: "catalog", link: "/catalog" },
  // { id: 3, title: "finance", link: "/" },
  // { id: 4, title: "lease vs buy", link: "/" },
  { id: 5, title: "contacts", link: "/contacts" },
];

export const sliderData = [
  { id: 1, url: "src/assets/mainSliderImages/car1.jpg" },
  { id: 2, url: "src/assets/mainSliderImages/car2.jpg" },
  { id: 3, url: "src/assets/mainSliderImages/car3.jpg" },
  { id: 4, url: "src/assets/mainSliderImages/car4.jpg" },
];

export const array = [
  {
    titleMain: "Products",
    info: { title1: "Used", title2: "New", title3: "Sell your car" },
  },
  {
    titleMain: "Resources",
    info: { title1: "Blog", title2: "FAQ", title3: "Contact us" },
  },
  {
    titleMain: "Work With TrueCar",
    info: { title1: "Dealers", title2: "Partners" },
  },
  {
    titleMain: "About",
    info: { title1: "About us", title2: "Team", title3: "Careers" },
  },
];

export const copyright = [
  { id: 1, title: "Terms of Service", link: "#" },
  { id: 2, title: "Privacy Policy", link: "#" },
  { id: 3, title: "Do Not Sell My Personal Information", link: "#" },
  { id: 4, title: "Other", link: "#" },
];

export const WhyLeaseSectionData = [
  {
    id: 1,
    icon: <IoCarSportOutline />,
    title: "Top Dealers",
    description:
      " TrueCar Certified Dealers compete for your business by providing discounted pricing on in-stock inventory.",
  },
  {
    id: 2,
    icon: <RiPercentLine />,
    title: "Discounted Pricing",
    description:
      "View local inventory from the comfort of home and get access to guaranteed savings on the car of your choice.",
  },
  {
    id: 3,
    icon: <FaRegCreditCard />,
    title: "Lower Payments",
    description:
      "Get discounted pricing when you shop for a car or truck using TrueCar and save on your lease payment.",
  },
  {
    id: 4,
    icon: <AiOutlineRocket />,
    title: "Easy Upgrade",
    description:
      "Easy to upgrade to the newest vehicle model every few years if you would like to be modern and comfortable",
  },
];

                                                  // How  -- section
export const howDoesSectionData = [
  {
    id: 1,
    desc: "How much you can drive, stated as annual miles (excess miles are charged at a specified rate)",
  },
  {
    id: 2,
    desc: "Types of damage that you may be liable for at the end of your lease",
  },
  {
    id: 3,
    desc: "The procedures and costs when you return the vehicle at the end of your lease",
  },
];

// Important Section (MainPage)
export const importantSectionData = [
  {
    id: 1,
    image: "https://i.ibb.co/Chrc8pn/1.jpg",
    desc: "Monthly payments on leases are generally 20% - 30% cheaper than loans",
  },
  {
    id: 2,
    image: "https://i.ibb.co/tcsxxh7/2.jpg",
    desc: "You may be eligible for a tax break if you use the leased vehicle for business purposes",
  },
  {
    id: 3,
    image: "https://i.ibb.co/kg4VjMj/3.jpg",
    desc: "Easy to upgrade to the newest vehicle model every few years",
  },
  {
    id: 4,
    image: "https://i.ibb.co/0QTL6t1/4.jpg",
    desc: "There are often fees charged if you drive more than your lease's mileage allowance",
  },
];

export const carsCatalog = [
  {
    brand: "BMW",
    img: "/src/assets/catalogPhotos/1.png",
    model: "X5 (2022)",
    paymentPerMonth: 1000,
    engine: "2.0L Turbocharged",
    horsepower: "200 HP",
    transmission: "Automatic",
    fuelConsumption: "8.5L/100km",
  },
  {
    brand: "BMW",
    img: "/src/assets/catalogPhotos/2.png",
    model: "3 Series (2022)",
    paymentPerMonth: 900,
    engine: "2.0L Turbocharged",
    horsepower: "180 HP",
    transmission: "Automatic",
    fuelConsumption: "8.0L/100km",
  },
  {
    brand: "BMW",
    img: "/src/assets/catalogPhotos/3.png",
    model: "7 Series (2022)",
    paymentPerMonth: 1500,
    engine: "3.0L V6",
    horsepower: "320 HP",
    transmission: "Automatic",
    fuelConsumption: "10.0L/100km",
  },
  {
    brand: "BMW",
    img: "/src/assets/catalogPhotos/4.png",
    model: "X3 (2023)",
    paymentPerMonth: 1100,
    engine: "2.0L Turbocharged",
    horsepower: "240 HP",
    transmission: "Automatic",
    fuelConsumption: "9.0L/100km",
  },
  {
    brand: "BMW",
    img: "/src/assets/catalogPhotos/5.png",

    model: "i3 (2023)",
    paymentPerMonth: 1300,
    engine: "Electric",
    horsepower: "170 HP",
    transmission: "Automatic",
    fuelConsumption: "Electric",
  },
  {
    brand: "Mercedes-Benz",
    img: "/src/assets/catalogPhotos/6.png",

    model: "C-Class (2022)",
    paymentPerMonth: 1100,
    engine: "2.0L Turbocharged",
    horsepower: "255 HP",
    transmission: "Automatic",
    fuelConsumption: "8.5L/100km",
  },
  {
    brand: "Mercedes-Benz",
    img: "/src/assets/catalogPhotos/7.png",

    model: "GLC (2022)",
    paymentPerMonth: 1200,
    engine: "2.0L Turbocharged",
    horsepower: "241 HP",
    transmission: "Automatic",
    fuelConsumption: "8.0L/100km",
  },
  {
    brand: "Mercedes-Benz",
    img: "/src/assets/catalogPhotos/8.png",

    model: "S-Class (2022)",
    paymentPerMonth: 2000,
    engine: "4.0L V8",
    horsepower: "469 HP",
    transmission: "Automatic",
    fuelConsumption: "11.0L/100km",
  },
  {
    brand: "Mercedes-Benz",
    img: "/src/assets/catalogPhotos/9.png",

    model: "EQC (2023)",
    paymentPerMonth: 1800,
    engine: "Electric",
    horsepower: "402 HP",
    transmission: "Automatic",
    fuelConsumption: "Electric",
  },
  {
    brand: "Mercedes-Benz",
    img: "/src/assets/catalogPhotos/10.png",

    model: "AMG GT (2023)",
    paymentPerMonth: 2500,
    engine: "4.0L V8",
    horsepower: "577 HP",
    transmission: "Automatic",
    fuelConsumption: "13.0L/100km",
  },
  {
    brand: "Audi",
    img: "/src/assets/catalogPhotos/11.png",

    model: "Q5 (2022)",
    paymentPerMonth: 1200,
    engine: "2.0L Turbocharged",
    horsepower: "261 HP",
    transmission: "Automatic",
    fuelConsumption: "8.2L/100km",
  },
  {
    brand: "Audi",
    img: "/src/assets/catalogPhotos/12.png",

    model: "A6 (2022)",
    paymentPerMonth: 1500,
    engine: "3.0L V6",
    horsepower: "335 HP",
    transmission: "Automatic",
    fuelConsumption: "9.0L/100km",
  },
  {
    brand: "Audi",
    img: "/src/assets/catalogPhotos/13.png",

    model: "e-tron (2023)",
    paymentPerMonth: 2000,
    engine: "Electric",
    horsepower: "355 HP",
    transmission: "Automatic",
    fuelConsumption: "Electric",
  },
  {
    brand: "Audi",
    img: "/src/assets/catalogPhotos/14.png",

    model: "TT (2023)",
    paymentPerMonth: 1300,
    engine: "2.0L Turbocharged",
    horsepower: "288 HP",
    transmission: "Automatic",
    fuelConsumption: "8.7L/100km",
  },
  {
    brand: "Toyota",
    img: "/src/assets/catalogPhotos/15.png",

    model: "Corolla (2022)",
    paymentPerMonth: 800,
    engine: "1.8L 4-cylinder",
    horsepower: "139 HP",
    transmission: "Automatic",
    fuelConsumption: "6.7L/100km",
  },

  {
    brand: "Toyota",
    img: "/src/assets/catalogPhotos/16.png",

    model: "Camry (2022)",
    paymentPerMonth: 1200,
    engine: "2.5L 4-cylinder",
    horsepower: "203 HP",
    transmission: "Automatic",
    fuelConsumption: "7.2L/100km",
  },
  {
    brand: "Toyota",
    img: "/src/assets/catalogPhotos/17.png",

    model: "Highlander (2022)",
    paymentPerMonth: 1500,
    engine: "3.5L V6",
    horsepower: "295 HP",
    transmission: "Automatic",
    fuelConsumption: "8.1L/100km",
  },
  {
    brand: "Toyota",
    img: "/src/assets/catalogPhotos/18.png",

    model: "Prius (2023)",
    paymentPerMonth: 900,
    engine: "1.8L 4-cylinder Hybrid",
    horsepower: "121 HP",
    transmission: "CVT",
    fuelConsumption: "4.4L/100km",
  },
  {
    brand: "Honda",
    img: "/src/assets/catalogPhotos/19.png",

    model: "Civic (2022)",
    paymentPerMonth: 900,
    engine: "2.0L 4-cylinder",
    horsepower: "158 HP",
    transmission: "CVT",
    fuelConsumption: "6.3L/100km",
  },
  {
    brand: "Honda",
    img: "/src/assets/catalogPhotos/20.png",

    model: "Accord (2023)",
    paymentPerMonth: 1100,
    engine: "1.5L 4-cylinder",
    horsepower: "192 HP",
    transmission: "CVT",
    fuelConsumption: "6.7L/100km",
  },

  {
    brand: "Honda",
    img: "/src/assets/catalogPhotos/21.png",

    model: "Clarity (2022)",
    paymentPerMonth: 1800,
    engine: "1.5L 4-cylinder Hybrid",
    horsepower: "212 HP",
    transmission: "CVT",
    fuelConsumption: "5.0L/100km",
  },
  {
    brand: "Ford",
    img: "/src/assets/catalogPhotos/22.png",

    model: "Fiesta (2022)",
    paymentPerMonth: 700,
    engine: "1.6L 4-cylinder",
    horsepower: "120 HP",
    transmission: "Automatic",
    fuelConsumption: "6.3L/100km",
  },
  {
    brand: "Ford",
    img: "/src/assets/catalogPhotos/23.png",

    model: "Focus (2022)",
    paymentPerMonth: 800,
    engine: "2.0L 4-cylinder",
    horsepower: "160 HP",
    transmission: "Automatic",
    fuelConsumption: "7.4L/100km",
  },
  {
    brand: "Ford",
    img: "/src/assets/catalogPhotos/24.png",

    model: "Escape (2022)",
    paymentPerMonth: 1100,
    engine: "2.5L 4-cylinder",
    horsepower: "168 HP",
    transmission: "Automatic",
    fuelConsumption: "8.9L/100km",
  },
  {
    brand: "Ford",
    img: "/src/assets/catalogPhotos/25.png",

    model: "Explorer (2022)",
    paymentPerMonth: 1500,
    engine: "2.3L EcoBoost",
    horsepower: "300 HP",
    transmission: "Automatic",
    fuelConsumption: "10.7L/100km",
  },
  {
    brand: "Ford",
    img: "/src/assets/catalogPhotos/26.png",

    model: "Mustang (2022)",
    paymentPerMonth: 1800,
    engine: "5.0L V8",
    horsepower: "450 HP",
    transmission: "Automatic",
    fuelConsumption: "12.2L/100km",
  },
  {
    brand: "Tesla",
    img: "/src/assets/catalogPhotos/27.png",
    model: "Model S (2022)",
    paymentPerMonth: 1500,
    engine: "Electric",
    horsepower: "670 HP",
    transmission: "Automatic",
    fuelConsumption: "Electric",
  },
];
