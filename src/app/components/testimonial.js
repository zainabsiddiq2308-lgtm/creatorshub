import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
const Testimonial = () => {

    const data=[
        {  Name: "Alexander Müller",
          Position:" CEO, TechNova Solutions",
          Feedback: "The team delivered our project on time with outstanding quality. Their SDLC approach kept everything transparent and efficient."
 ,
rate: < FaStar/>},
 {
    Name:"Sofia Rossi",
Position: "Product Manager, BrightApps",
Feedback: "Communication was smooth, and they truly understood our requirements. The end product exceeded our expectations."

,
rate: < FaStar/>},
 {
    Name: "Emily Johnson",
Position: "Founder, Creatify Studio",
Feedback: "What impressed me most was their attention to detail and commitment to user experience."

,
rate: < FaStar/>},
{ Name: "George Brown",
Position: "CTO, SmartBiz Solutions",
Feedback: "They followed a professional process from design to deployment. We are extremely satisfied with the results."

,
rate: < FaStar/>},
{Name: "Rodriguez",
Position: "Marketing Director, VisionWorks",
Feedback: "Our mobile app was delivered flawlessly. The team ensured scalability and top performance."
,
rate: < FaStar/>},
{Name:" Henry Thompson",
Position: "Operations Head, CloudTech Pvt Ltd",
Feedback: "Their agile method made it easy to adapt changes quickly without delaying the project timeline."
,
rate: < FaStar/>}
   ,

{Name: "Jennifer Lee",
Position: "Project Lead, FinEdge Systems",
Feedback: "They have a deep technical understanding. Testing and quality assurance were handled with perfection."
,
rate: < FaStar/>}
,
{
    Name: "Jack Taylo",
Position: "Co-Founder, GreenCart",
Feedback: "Deployment was smooth, and the support after launch has been fantastic. Truly a reliable partner."
,
rate: < FaStar/>
},
{
    Name: "Olivia Brown",
Position: "HR Manager, TalentHive",
Feedback: "Great team to work with! Their process made everything stress-free, and the results speak for themselves."
,
rate: < FaStar/>
}

]
  return (
    <div className='w-full  p-6 flex flex-col justify-center items-center lg:p-15'>
        <h1 className='text-xl  text-white font-bold
        md:text-3xl
        text-center mb-10'>What People Say About Us</h1>
<div className='bg-white shadow-lg'>

 <div className='grid grid-cols-1 lg:grid-col-3 gap-10 md:grid-cols-3 lg:pb-20 lg:pl-10 lg:pr-10
 lg:pt-20'>
    {/* map start */}
    {data.map((e,i)=>(

<div key={i} className='flex flex-col justify-center p-5 shadow-lg  rounded-3xl' >
    <h4 className='text-medium font-bold'>{e.Name}</h4>
    <p className='font-medium'>{e.Position}</p>
     <p className='leading-6'>{e.Feedback}</p>
     <p className='flex mt-2'>{e.rate} {e.rate}
        {e.rate}{e.rate}{e.rate}
     </p>
</div>

    ))}
    {/* map end */}

 </div>



 </div>    </div>
  )
}

export default Testimonial