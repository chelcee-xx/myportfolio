import React from 'react'
import Card from '../components/Card'

export default function Experience() {
  return (
    <div className="px-20 ">
    <h1 className='title'>Experience</h1>
    <div className='grid gap-y-7 gap-x-5 grid-cols-2'>
    <Card title="Primly premium solutions" date="January 2022 - December 2022" desc="rjdijri"/>
    
    <Card title="ULLWeb technologies" date="July 2022 - September 2022" desc="rjdijri"/>
    <Card title="Orange Market" date="December 2022 - February 2023" desc="rjdijri"/>
       
    </div>
    </div>
  )
}
