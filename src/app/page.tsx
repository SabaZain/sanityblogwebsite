"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';


interface Blog {
  heading: string;
  description: string;
  slug: string;
  imageUrl: string;
}


const HomePage: React.FC = () => {

const [data, setData] = useState<Blog[]>([]);

useEffect(() => {
  const fetchData = async () => {
    const fetchedData = await client.fetch(
      `*[_type == "blog"] {
      heading,
      description,
        "slug":slug.current,
        "imageUrl": image.asset->url
    }`
  );
    setData(fetchedData);
};

  fetchData();
}, []);

if(data.length === 0) return <div className='font-bold'>Loading blogs...</div>;



  return (
    <div>
      <div className='flex flex-col md:flex-row lg:flex-row gap-6 p-6 mx-6'>
        <h1 className='text-orange-500 text-md md:text-md lg:text-xl text-center font-semibold mt-20'>Good health is the key to a fulfilling life,<br/> enabling you to live with energy, purpose and vitality.</h1>
        <Image src="/Image/healthybanner.webp" alt="hero image" width={600} height={600} />
      </div>
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {data.map((blog, index) => (
      <div key={index} className='max-w-sm mx-auto border border-black rounded-lg shadow-xl overflow-hidden m-3 bg-amber-600 hover:bg-lime-700'>
        <Image 
      src={blog.imageUrl} 
      alt={`Image for ${blog.heading}`}
      height={300} 
      width={300} 
      className='object-cover w-full h-48'
      />
      <div className='p-4'>
        <h2 className='text-xl text-center font-bold'>{blog.heading}</h2>
        <p className='text-sm text-center line-clamp-3'>{blog.description}</p>
        <Link href={`/blog/${blog.slug}`} passHref>
        <h3 className='text-center text-blue-900 hover:text-red-800 bg-black hover:bg-white rounded-md p-1 mt-2 cursor-pointer'>Read More</h3>
        </Link>
        </div>
        </div>
      ))}
      </div>
      </div>
  );
};

export default HomePage;


