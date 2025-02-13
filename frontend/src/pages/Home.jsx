import React from 'react'
import Hero from '../components/Hero'
import LatestCollections from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import Title from '../components/Title'

const Home = () => {
    return (
        <div>
            <Title text1={'I do Some change in develop branch'} text2={'Elmo'} />
            <Hero />
            <LatestCollections />
            <BestSeller />
            <OurPolicy />
            <NewsletterBox />
        </div>
    )
}

export default Home
