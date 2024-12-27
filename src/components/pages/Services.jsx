import React from 'react'
import Header from '../Navbar/Header'
import Hero from '../Herosection/hero'
import ServiceCards from '../servicePagsComts/ServiceCards'
import AboutHero from '../aboutPagsComts/AboutHero'
import Empower from '../servicePagsComts/Empower'
import AboutCards from '../aboutPagsComts/AboutCards'
import AutoSlider from '../AutoSlider'
import Footer from '../footer/Footer'
import { serviceCardsData } from '../servicePagsComts/script'


const Services = () => {
  let project1 = {
    title:'Empower your space with our electrifying services',
    subtitle: '- igniting efficiency and brilliance!',
    description : 'Our services encompass:',
    list : ['Streamlined documentation for new connections.',
      'Installation of LT / HT cables with precision.',
      'Thorough testing of LT / HT cables at consumer sites.',
      'Thorough testing of LT / HT cables at consumer sites.',
      'Thorough testing of LT / HT cables at consumer sites.'
    ],
    wiredPic1 : 'src/assets/wiredPic1.webp',
    wiredPic2 : 'src/assets/wiredPic2.webp',
  };
  let project2 = {
    title:'10KW Elevated 18 Panels On-Grid System Installed at Karachi (South)',
    description : 'A residential project of 10 KW solar installation using ground based 18 solar panels to fulfill the rising energy demand through green and clean technology. The basis of the project opted for designing the system is On-Grid/Grid-tied with net metering complaints. The energy from solar would be dispatched during the daytime hours only while the surplus energy would be fed back to the grid against which the consumer would be credited by KE. The system is provided with complete essentials including:',
    list : ['Installation of 18 solar PV modules with a significant life and product warranty.',
      '3D Layout for clear projection of the system to be installed.',
      'Inverter',
      'Termination points of solar installation and KE in main Distribution Board.',
      'Earthing wire from the DC & AC side of the solar system.'
    ],
    wiredPic1 : 'src/assets/servicePic2.webp',
    wiredPic2 : 'src/assets/solarstand.webp',
  };
  let project3 = {
    title:'2x15KW Elevated 24 Panels On-Grid Systems Installed at Karachi (East)',
    description : 'A residential project of 15 KW solar installation using elevated 24 solar panels based on On-Grid system. The project is scaled to efficiency with the provision of energy analysis and online metering through monitoring mobile app or online web portal. The system is provided with complete essentials including:',
    list : ['Installation of solar PV system with a significant life and product warranty.',
      '3D Layout for clear projection of the system to be installed.',
      'Termination of Solar system to main Distribution Board.',
      'Earthing of solar panels, inverter, Surge Protection Device.',
      'Documentation of Net Metering enablement process.',

    ],
    wiredPic1 : 'src/assets/servicePic4.webp',
    wiredPic2 : 'src/assets/servicePic3.webp',
  };

  return (
    <>
      <Header />
      <AboutHero title="Services" />


    
        <ServiceCards cardsData={serviceCardsData} />
      



      <Empower title={project1.title} additionalTitle={project1.subtitle} des={project1.description}
        wiredPic1={project1.wiredPic1} wiredPic2={project1.wiredPic2} list={project1.list} reverse={true}
      />
      {/* <Empower title={`Empower your space with our electrifying services`} additionalTitle={' - igniting efficiency and brilliance!'} des={'Our services encompass:'}
        pointsImage={'src/assets/leaf.webp'} wiredPic1={'src/assets/wiredPic1.webp'} wiredPic2={'src/assets/wiredPic2.webp'}
      /> */}
      <AboutCards />
      <div className='flex flex-col gap-[40px]   w-full'>
        <div className="text-[--darkGreyColor] text-[48px] font-[700] text-center pt-8">
          <h1>Our Best Projects</h1>
        </div>
                                                   {/*my mistake */}
        {/* <Empower title={`10KW Elevated 18 Panels On-Grid System Installed at Karachi (South)`} des={'A residential project of 10 KW solar installation using ground based 18 solar panels to fulfill the rising energy demand through green and clean technology. The basis of the project opted for designing the system is On-Grid/Grid-tied with net metering complaints. The energy from solar would be dispatched during the daytime hours only while the surplus energy would be fed back to the grid against which the consumer would be credited by KE. The system is provided with complete essentials including:'}

          wiredPic1={'src/assets/servicePic2.webp'} wiredPic2={'src/assets/solarstand.webp'} /> */}
          <Empower title={project2.title}  des={project2.description}
        wiredPic1={project2.wiredPic1} wiredPic2={project2.wiredPic2} list={project2.list} reverse={false}
      />
          <Empower title={project2.title}  des={project2.description}
        wiredPic1={project2.wiredPic1} wiredPic2={project2.wiredPic2} list={project2.list} reverse={true}
      />
      </div>
      {/* <Empower title={`2x15KW Elevated 24 Panels On-Grid Systems Installed at Karachi (East)`} des={'A residential project of 15 KW solar installation using elevated 24 solar panels based on On-Grid system. The project is scaled to efficiency with the provision of energy analysis and online metering through monitoring mobile app or online web portal. The system is provided with complete essentials including:'}
        wiredPic1={'src/assets/servicePic4.webp'} wiredPic2={'src/assets/servicePic3.webp'}
      /> */}
      <AutoSlider />
      <Footer />
    </>
  )
}

export default Services
