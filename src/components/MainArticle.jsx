import imgMainMobile from '../assets/images/image-web-3-mobile.jpg'
import imgMainDesktop from '../assets/images/image-web-3-desktop.jpg'
export const MainArticle = () => {
  return (
    <section className='mb-12'>
            <picture>
                <source media="(max-width: 640px" srcSet={imgMainMobile}/>
                <source media="(min-width: 641px" srcSet={imgMainDesktop}/>
                <img src={imgMainDesktop} alt="Imagen del articulo main" />
            </picture>
            <div className='flex flex-col sm:flex-row'>
                <div className='py-6 flex-1'>
                    <h1 className='text-6xl font-black  sm:text-5xl sm:mr-4 lg:text-6xl'>The Bright Future of Web 3.0?</h1>
                </div>
                <div className='flex flex-col pt-9 flex-1 justify-between'>
                    <p className='text-pretty tracking-wider text-[0.813rem] sm:text-base mb-10'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                    <button className='bg-Soft-red w-[185px] py-4 text-center font-bold uppercase text-base tracking-widest text-Very-dark-blue hover:bg-Very-dark-blue hover:text-Off-white transition-all ease-in-out'>Read more</button>
                </div> 
            </div>
        
                      
            

        
    </section>
  )
}
