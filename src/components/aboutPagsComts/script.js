import aboutCardBg1 from '/src/assets/cardPic.jpg'
import aboutCardBg2 from '/src/assets/cardPic1.jpg'
import aboutCardBg3 from '/src/assets/cardPic2.jpg'
import aboutCardLogo1 from '/src/assets/cardLogo3.webp'
import aboutCardLogo2 from '/src/assets/cardLogo4.webp'
import aboutCardLogo3 from '/src/assets/cardLogo2.webp'
import workCardBg1 from '/src/assets/planningPic.svg'
import workCardBg2 from '/src/assets/research.svg'
import workCardBg3 from '/src/assets/install.svg'
let aboutcardsData = [
    {
      cardBgImg: aboutCardBg1,
      cardlogo: aboutCardLogo1,
      title: "Efficiency & Power",
      
    },
    {
      cardBgImg:aboutCardBg2,
      cardlogo: aboutCardLogo2,
      title: "Trust & Warranty",
      
    },
    {
      cardBgImg: aboutCardBg3,
      cardlogo: aboutCardLogo3,
      title: "High Quality Work",
     
    },
  ];
  let customerData = [
    '"Switching to solar was the best decision we ever made! The team at Greener made the process seamless, and now were enjoying lower energy bills and a greener lifestyle. Highly recommend!"',
    "I was hesitant at first, but after seeing the results, I wish I had gone solar sooner. Thanks to Greener for their professionalism and expertise!",
    "From start to finish, the experience with Greener was fantastic. They explained everything clearly, and the installation was quick and hassle-free. Our solar panels are working great, and we're saving money every month!",
    "I love how environmentally friendly our home is now with solar panels from Greener. The team was friendly, knowledgeable, and made the whole process easy. Definitely recommend them!",
    "The quality of service from Greener exceeded my expectations. I've already recommended them to several friends and family members!",
  ]
  let ourWorkData = [
    {
      img:workCardBg1,
      count:1,
      title:'Project Planning',
      des:'Develop tailored solar solutions through comprehensive site assessments and detailed system design.',
    },
    {
      img:workCardBg2,
      count:2,
      title:'Research & Analysis',
      des:'Conduct thorough feasibility studies and cost-benefit analyses to ensure optimal solar system performance.',
    },
    {
      img:workCardBg3,
      count:3,
      title:'Solar Installation',
      des:'Expertly install and commission solar systems using high-quality components for maximum efficiency and reliability.',
    },
  ] 
  
  export {
     aboutcardsData,customerData,
     ourWorkData
  }