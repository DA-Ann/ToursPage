import { FaArtstation, FaSearchLocation, FaPhoneAlt } from "react-icons/fa";
import React from "react";
const sublinks = [
  {
    page: "tours",
    links: [
      { label: "group", icon: <FaArtstation />, url: "/tours" },
      { label: "individual", icon: <FaArtstation />, url: "/tours" },
    ],
  },
  {
    page: "guides",
    links: [
      { label: "Monica Geller", icon: <FaSearchLocation />, url: "/tours" },
      { label: "Chandler Bing", icon: <FaSearchLocation />, url: "/tours" },
      { label: "Rachel Green", icon: <FaSearchLocation />, url: "/tours" },
      { label: "Joye Tribbiani", icon: <FaSearchLocation />, url: "/tours" },
      { label: "Phoebe Buffay", icon: <FaSearchLocation />, url: "/tours" },
      { label: "Ross Geller", icon: <FaSearchLocation />, url: "/tours" },
    ],
  },
  {
    page: "contact us",
    links: [
      { label: "+0000000000", icon: <FaPhoneAlt />, url: "/tours" },
      { label: "email@example.com", url: "/tours" },
    ],
  },
];

export default sublinks;
