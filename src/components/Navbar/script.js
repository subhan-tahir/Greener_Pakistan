import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";

let contactButtons = [
  {
    icon: IoLogoFacebook,
  },
  {
    icon: FaInstagram,
  },
  {
    icon: IoLogoLinkedin,
  },
  {
    icon: BsTwitterX,
  },
  {
    icon: FaYoutube,
  },
];

let navbarItems = [
  {
    item: "Home",
    path: "/home",
  },
  {
    item: "About Us",
    path: "/about",
  },
  {
    item: "Services",
    path: "/service",
    dropDownItems:[{item:'Residential Solar System',dropDownPath:'residential-solar'},{item:"Commercial Solar System",dropDownPath:'commercial-solar'},{item:"Industrial Solar System",dropDownPath:'industrial-solar'},
    {item:"Solar Maintainance Support",dropDownPath:'solar-maintainance'}, 
    ],
    dropDownItems1:[  {item:'Underground HT/LT Cabling &amp; Maintenance',path:'/servicecards'},
      {item:'HT/LT Cable Jointing',path:'/servicecards'},
      {item:'Sub-Station Service &amp; Maintenance',path:'/servicecards'},
      {item:'New Sub-Station Construction (Civil &amp; Electrical)',path:'/servicecards'},
    ],


  },
  {
    item: "Energy Load Calculator",
    path: "/energycalculator",
  },
  {
    item: "Products",
    path: "/products",
  },
];
// let sideBarData = [
   
//   { item:"Residential Solar System",path:'residential-solar'},
//     {item:"Commercial Solar System",path:'commercial-solar'},
//     {item:"Industrial Solar System",path:'industrial-solar'},
//     {item:"Solar Maintainance &amp; Support",path:'solar-maintainance'},
//     {item:'Underground HT/LT Cabling &amp; Maintenance',path:'/servicecards'},
//     {item:'HT/LT Cable Jointing',path:'/servicecards'},
//     {item:'Sub-Station Service &amp; Maintenance',path:'/servicecards'},
//     {item:'New Sub-Station Construction (Civil &amp; Electrical)',path:'/servicecards'},
//   ];
//   {
//     para1:['HT/LT Cable Jointing','HT/LT Cable Jointing']
//   },
//   {para1:[{item:'Contact US',path:'/contact'}]},
// ];


export { contactButtons, navbarItems };
