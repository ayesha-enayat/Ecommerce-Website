import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex temporibus itaque atque fugit maiores ullam dignissimos natus iste placeat laboriosam nulla illum facere, soluta in quisquam veniam. Ex assumenda quia aliquid a non necessitatibus alias. Consequuntur voluptatum neque facere maximeemo pariatur sed omnis, repudiandae expedita saepe totam velit enim obcaecati unde distinctio sapiente molestias!</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde pariatur necessitatibus consectetur quia blanditiis deleniti ut commodi nulla voluptas libero! Excepturi atque, veniam at, delectus autem veritatis voluptateo inventore corrupti obcaecati!</p>
          <b className='text-gray-800'>
            Our Mission
          </b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ut llorem10
          </p>
        </div>
      </div>
      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, doloribus.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, doloribus.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, doloribus.</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About
