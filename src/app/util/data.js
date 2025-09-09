import path from "path"
import header from "../components/header"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const data=[
    {

        
        name:'Home',
        path:"/",
        subname:['contact','about']
    },
    
    {

        
        name:'About',
        path:"/about"
    }
    ,
     {

        
        name:'Why us',
        path:"/product"
    },
     {

        
        name:'Services',
      
        arrow:<MdOutlineKeyboardArrowDown />

    }
    ,
   
    {

        
        name:'Technologies',
        path:"/technologies"

    }
]
export const about=[
{
    name: "brand creative",
    heading:"Brand story and messages",
    list:["mission","tagline","Adverstisment" ,"Producr mockup","Adverstisment (digital & print)"]
}
,
{
    name: "Testimonial"
}
,

{
    name: "Our Team"
}
,
{    name: "Our Client"
}

]
export const data1=[
    {
        img:"/assets/product.png",
        name:"Product Design & Development ",
        path:"/product-desigb",
        description:"Product design and development turns ideas into practical, user-friendly solutions that meet customer needs and drive market success."
        
    },
    {img:"/assets/custom.png",
        name:"Custom Software Development",
        path:"/custom_software",
        description:"Custom software development creates tailored  solutions designed to meet specific business needs with efficiency and scalability."
    },
      { img:"/assets/custom.png",
        name:" Quality Asuurance ",
        path:"/quality-assurance",
        description:"Quality assurance ensures products and software meet the highest standards of performance, reliability, and user satisfaction."
    },
      {img:"/assets/staff.png",
        name:"Staff Agumentation",
        path:"/staff-agumentation",
       description:" Staff augmentation provides skilled professionals on demand, helping businesses scale teams quickly and efficiently."
    },
    { img:"/assets/mobile.png",
        name:"mobile App Development",
path:"/mobile-app",
description:"Mobile app development delivers intuitive, high-performing apps that enhance user experience and drive business growth."
    }
    
]

export const images=[
    {
        img:"/assets/google.png"
    },
     {
        img:"/assets/amazon.png"
    },
     {
        img:"/assets/bykea.png"
    },
     {
        img:"/assets/spotify.png"
    },
     {
        img:"/assets/music.png"
    },
      {
        img:"/assets/daraz.png"
    },
]