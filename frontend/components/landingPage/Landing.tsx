import Hero from './Hero'
import Features from './Features'
import Footer from './Footer'
import FAQs from './FAQs'
import Header from './Header'
import Designs from './Designs'
import CTA from './CTA'

function Landing() {
    return (
        <div className='relative mx-auto my-10 flex max-w-6/8 mt-0 flex-col items-center justify-center'>

            <Header />
            <Hero />
            <Features />
            <Designs />
            <FAQs />
            <CTA />
            <Footer />


            <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute top-0 h-40 w-px " />
            </div>

            <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute h-40 w-px " />
            </div>
            <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                <div className="absolute mx-auto h-px w-40 " />
            </div>
        </div>
    )
}

export default Landing