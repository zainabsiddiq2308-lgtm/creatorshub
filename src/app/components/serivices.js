import React from "react";
import { data1 } from "../util/data";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Services = () => {
  const route=useRouter()
  return (
    <div className="w-full px-4 py-8" id="card ">
       <h1 className="text-4xl font-bold text-center text-white  pb-6 lg:pb-10 ">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  ">
   
        {data1.map((e, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-xl p-4 flex flex-col
            hover:scale-90 items-center text-center hover:shadow-lg transition-all duration-300"
            onClick={(()=>(route.push(e.path)))}
          >
          
            <div className="relative w-full h-48 md:h-56 lg:h-64">
              <Image
                src={e.img}
                alt={e.name}
                fill
                className="object-contain rounded-md "
              />
            </div>
            <h4 className="mt-4 text-lg font-semibold text-gray-800">
              {e.name}
            </h4>
            <p className="mt-2 text-sm text-gray-600">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
