import React from 'react';
import { IoCarSportOutline } from "react-icons/io5";
import { RiPercentLine } from "react-icons/ri";
import { FaRegCreditCard } from "react-icons/fa";
import { AiOutlineRocket } from "react-icons/ai";

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


// How does leasing word -- section 
export const howDoesSectionData = [
  { id: 1, desc: "How much you can drive, stated as annual miles (excess miles are charged at a specified rate)" },
  { id: 2, desc: "Types of damage that you may be liable for at the end of your lease"},
  { id: 3, desc: "The procedures and costs when you return the vehicle at the end of your lease" },
];

// Important Section (MainPage)
export const importantSectionData = [
  { id: 1, image: "https://kept.com.ua/image/4Klo/4.jpg" , desc: "Monthly payments on leases are generally 20% - 30% cheaper than loans"},
  { id: 2, image: "https://kept.com.ua/image/4Klp/1.jpg", desc: "You may be eligible for a tax break if you use the leased vehicle for business purposes"},
  { id: 3, image: "https://kept.com.ua/image/4Klq/2.jpg", desc: "Easy to upgrade to the newest vehicle model every few years" },
  { id: 4, image: "https://kept.com.ua/image/4Klr/3.jpg", desc: "There are often fees charged if you drive more than your lease's mileage allowance" },

];