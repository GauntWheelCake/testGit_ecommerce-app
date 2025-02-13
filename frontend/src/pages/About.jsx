import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
    return (
        <div>
            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-16'>
                <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
                <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
                    <p>Our goal is to develop an IKEA-like e-commerce platform that allows users to browse, purchase, and customize  home furniture and decorations. The platform will provide a seamless shopping experience with intuitive navigation, a rich product catalog, and personalized recommendations . Key functionalities include user authentication, product management, shopping carts, secure payment processing, and order tracking.</p>
                    <p>To ensure a competitive edge, the platform will offer a user-friendly interface, fast search and filtering options, and integration with multiple payment gateways. A robust backend system will be implemented to handle inventory management, logistics, promotions, and customer reviews efficiently. The website will be designed with scalability in mind, supporting both desktop and mobile devices.</p>
                    <b className='text-gray-800'>Our Mission</b>
                    <p>Build a furniture shopping website centered on user experience. And pass the Final Exam.</p>
                </div>
            </div>

            <div className='text-xl py-4'>
                <Title text1={'WHY'} text2={'CHOOSE US'} />
            </div>
            <div className='flex flex-col md:flex-row text-sm mb-20'>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Quality Assurance:</b>
                    <p className='text-gray-600'>We xxx xxx xxx xxxxxx xxxxxxxxx xxxxxxxx.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Convenience:</b>
                    <p className='text-gray-600'>With our xxx xxx xxx xxxxxx xxxxxxxxx xxxxxxxx.</p>
                </div>
                <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                    <b>Exceptional Customer Service:</b>
                    <p className='text-gray-600'>Our team of dedicated xxx xx xx </p>
                </div>
            </div>
            <NewsletterBox />
        </div>

    )
}

export default About
