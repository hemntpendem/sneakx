import React, { useCallback} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import products from '../data/products.json'
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Homegrid from './Homegrid';
import AboutusFooter from './AboutusFooter';

const Home = () => {
  const initialIndex = products.findIndex(product => product.id === 58);
  {/* corousel container starts with 58th productcard as in center */}
  
  
  {/* embla courousel library*/}
  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
    loop: false,
    align: 'center',
    startIndex: initialIndex !== -1 ? initialIndex : 0,
  });

  // using emblaApi to scroll the carousel left and right
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const navigate = useNavigate();

  return (
    <div className='main'>
      {/* main div */}
      {/* announcement tickker */}
<div className="ads" onClick={() => window.location.href = "/collection"}>
  <div className="ads-track">
    <span>Massive price slash alert! Selected sneakers are now up to 40% OFF — only this week on SneakX. Don’t wait, they won’t last.</span>
    <span>Massive price slash alert! Selected sneakers are now up to 40% OFF — only this week on SneakX. Don’t wait, they won’t last.</span>
    <span>Massive price slash alert! Selected sneakers are now up to 40% OFF — only this week on SneakX. Don’t wait, they won’t last.</span>
    <span>Massive price slash alert! Selected sneakers are now up to 40% OFF — only this week on SneakX. Don’t wait, they won’t last.</span>
    <span>Massive price slash alert! Selected sneakers are now up to 40% OFF — only this week on SneakX. Don’t wait, they won’t last.</span>
  </div>
</div>
      {/* Homepage 1 */}
      <div className='homepage1 bg-sneaky'> {/*homepage 1  and background hero image*/}
        <div className='overlay'>   {/* Homepage 1 overlay */}
          <h1 className='herotexts1'>
            <span className='hero-text1'>S A L E</span><br />
            <span className='hero-text2'>ONLINE AND IN STORES</span>
          </h1>
          <a href="/collection" className='shop-now'>shop now</a>
        </div>
      </div>

      {/* Homepage 2 */}
      <div className='homepage2'>
        <h1 className='heading'>
          <span className='heading1'>YOUR SNEAKX</span><br />
          <span className='heading2'>FEATURED FOR YOU</span>
        </h1>
        <a href='/collection' className="check-btn">CHECK 'EM</a>

        {/* Homepage 3 Embla Carousel */}
        <div className="carousel-wrapper">
          <button className="scroll-button left" onClick={scrollPrev}>&lt;</button>
          
          <div className="embla" ref={emblaRef}>{/*  Embla Carousel area*/}
            <div className="embla__container">{/*  Embla Carousel Container*/}
              {products.map((item) => (
               <div
              className="embla__slide"
              key={item.id}
              onClick={() => navigate(`/cartitem/${item.id}`)}
               style={{ backgroundImage: `url(${item.img})` }}> 
        
                  <div className="overlay3">
                      <div className="shoe-info2">
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </div>
                
              ))}
            </div>
          </div>

          <button className="scroll-button right" onClick={scrollNext}>&gt;</button>
        </div>
      </div>

      {/* Homepage 4 - Video */}
      <div className="homepage4"> {/* Homepage 4 hero texts */}
     <h1 className='herotexts2'>
       <span className='hero-text3'>CHOOSE YOUR STORY</span><br />
       <span className='hero-text4'>Every pair. Every step. Every move!</span>
     </h1>

        <div className="video-container"> {/* Homepage 4 video container */}
          <video autoPlay muted loop playsInline className="video1" id='sneakVideo'>
            <source src="/sneakercollection.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="video-overlay"> {/* Homepage 4 video overlay*/}
            <h1 className='vidtext'>YOUR <span className='sneakx-span'>SNEAKX</span> STORY</h1>
            <a href='/collection' className='vidbutton'><span className='btn-text'>STEP IN STYLE</span></a>
          </div>
        </div>
      </div>


      {/* Homepage 5 */}
      <div className='homepage5'>
        <div className='herotexts3'>
          <div className='hero-text5'>SNEAKX</div>
          <div className='hero-text5-overlay'>
            <div className='hero-text6'>
              <span className='collc'>COLLECTION</span>
            </div>
          </div>
        </div>
      </div>
       
     {/* Homepage 5 */}
          <Homegrid />
          {/* Homepage 5 homegrid component */} 

          {/* viewproducts button */}
        <div className='viewproducts'>
          <a href='/collection' className='viewallproducts'>VIEW ALL PRODUCTS</a>
          <h3 className='visit'>visit <span className='visitsneakx'><a href='/'>www.sneakx.com</a></span></h3>
        </div>
      <AboutusFooter/>
    </div>
  );
};

export default Home;
