import leaf from '/src/assets/leaf.webp'
import serviceCardPic1 from '/src/assets/house.webp';
import serviceCardPic2 from '/src/assets/servicePic1.webp';
import serviceCardPic3 from '/src/assets/servicePic2.webp';
import serviceCardPic4 from '/src/assets/servicePic3.webp';
import sloarBg from '/src/assets/solarsun.jpg'
import inverterBg from '/src/assets/inverter.webp'
import batteryBg from '/src/assets/battery.webp'




let serviceCardsData = [
    {
        pic:serviceCardPic1,
        title:'Residential Solar',
        des:'Custom-designed solar power systems for homeowners, helping them save money and reduce their environmental impact.',
        id:'residential-solar',
    },
    {
        pic:serviceCardPic2,
        title:'Commercial Solar',
        des:'Scalable solar solutions for businesses of all sizes, enabling cost savings, sustainability, and corporate social responsibility.',
      id: 'commercial-solar',
    },
    {
        pic:serviceCardPic3,
        title:'Industrial Solar',
        des:'Professional installation services by our team of certified technicians, ensuring optimal performance and reliability of your solar energy system.',
      id:'industrial-solar',

    },
    {
        pic:serviceCardPic4,
        title:'Solar Maintenance',
        des:'Ongoing maintenance and support to keep your solar panels operating at peak efficiency, maximizing your return on investment.',
        id:'solar-maintainance',
    },
];

let serviceCardsData1 = [
  
    {
        pic:sloarBg,
        title:'SOLAR PANELS',
        des:'Empower your energy system with our advanced inverters, ensuring seamless conversion and utilization of solar power for your needs',
    },
    {
        pic:inverterBg,
        title:'INVERTERS',
        des:'Professional installation services by our team of certified technicians, ensuring optimal performance and reliability of your solar energy system.',
    },
    {
        pic:batteryBg,
        title:'BATTERIES',
        des:'Ongoing maintenance and support to keep your solar panels operating at peak efficiency, maximizing your return on investment.',
    },
];
let servicePointsData = [
    {img:leaf,point:'Streamlined documentation for new connections.'},
    {img:leaf,point:'Installation of LT / HT cables with precision.'},
    {img:leaf,point:'Thorough testing of LT / HT cables at consumer sites.'},
    {img:leaf,point:'Comprehensive maintenance of substations, encompassing all switch types.'},
    {img:leaf,point:'Swapping out PTs and CTs for seamless operation.'},
];
export {
 serviceCardsData,
 serviceCardsData1,
 servicePointsData
}

    