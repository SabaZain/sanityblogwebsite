import { client } from '@/sanity/lib/client';
import Image from 'next/image';

export default async function Page({params:{slug}}:{params:{slug:string}}){

    const query = `*[_type == "blog" && slug.current == "${slug}"]{
                heading,
                description,
                content,
                "imageUrl": image.asset->url,
                author->{name,bio,
                "imageUrl": image.asset->url}
              }[0]`;
        
const data = await client.fetch(query);



return (
    <div className='bg-black'>
        <h1 className='text-5xl text-center text-blue-800 font-bold p-3 pt-6'>{data.heading}</h1>
        <div className='flex justify-center align items-center p-3'>
            {data.imageUrl && (
            <Image 
            src={data.imageUrl}
            alt={`Image for ${data.heading}`}
            height={500}
            width={800}
            layout='intrinsic'
            loading='lazy'
            />
          )}
            </div>
        <p className='text-center text-[16px] md:text-[20px] lg:text-[20px] text-white font-semibold p-4'>{data.description}</p>
            <div className='mt-6'>
            <h1 className='text-4xl text-center text-blue-800 font-bold'>About Author</h1>
            <div className='flex justify-center align items-center p-6'>
            {data.author.imageUrl && (
            <Image 
            src={data.author.imageUrl}
            alt={`Image for ${data.author.name}`}
            height={60}
            width={60}
            layout='intrinsic'
            loading='lazy'
            />
            )}
            <h2 className='text-[20px] text-orange-700 text-center font-bold p-3'>{data.author.name}</h2>
            </div>
            <p className=' text-[14px] text-center text-red-600 font-semibold p-3'>{data.author.bio}</p>
            </div>
            <div>
                <p className='text-center text-[14px] md:text-[18px] lg:text-[18px] text-white font-semibold p-4'>{data.content}</p>
            </div>
           
        
</div>

);
}
