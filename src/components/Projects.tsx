import React from 'react'
import Heading from './Heading';
import Card from"./Card";

const data =[
          {
            id: 0,
            title:"Web Pojects",
            desc:"a next js and typesrecipt based tool for fetching",
            img:"/1 image.webp",
            tags:["React","node","css","Typesript"],
          },
          {
            id: 1,
            title:"Web Pojects",
            desc:"a next js and typesrecipt based tool for fetching",
            img:"/2 image.jpeg",
            tags:["React","node","css","Typesript"],
          },
          {
            id: 2,
            title:"Web Pojects",
            desc:"a next js and typesrecipt based tool for fetching",
            img:"/3 image.webp",
            tags:["React","node","css","Typesript"],
          },
          {
            id: 3,
            title:"Web Pojects",
            desc:"a next js and typesrecipt based tool for fetching",
            img:"/4 image.jpg",
            tags:["React","node","css","Typesript"],
          },
          {
            id: 4,
            title:"Web Pojects",
            desc:"a next js and typesrecipt based tool for fetching",
            img:"/5 image.webp",
            tags:["React","node","css","Typesript"],
          },
          {
            id: 5,
            title:"Web Pojects",
            desc:"a next js and typesrecipt based tool for fetching",
            img:"/6 image.jpeg",
            tags:["React","node","css","Typesript"],
          }
]


const Projects = () => {
  return (
    <div id="projects" className='container pt-32'>
      <Heading title ='my projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) =>(<Card 
        key={el.id}
        title={el.title}
        desc ={el.desc}
        img={el.img}
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default Projects
