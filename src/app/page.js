'use client'
import Header from '../components/Header'
import HeroSection from '../components/Home/HeroSection'
import Sections from '@/components/Home/Sections'
import { data } from '@/components/Home/data'

export default function Home () {
  return (
    <div>
      <Header />
      <HeroSection />
      <section className='pt-10 lg:pt-10'>
        {data.map(item => <Sections item={item} key={item.id} />)}
      </section>
    </div>
  )
}
