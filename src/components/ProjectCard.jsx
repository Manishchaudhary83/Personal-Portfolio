import React from 'react'

function ProjectCard({ title, description, image, tech, demo }) {
  return (
    <div className='bg-dark-300 rounded-2xl m-4 overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt={title} className='w-full h-60 object-cover' />
      
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400'>{description}</p>

        <div className='flex flex-wrap gap-2 mb-4'>
          {tech.map((item, index) => (
            <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>
              {item}
            </span>
          ))}
        </div>

        <div className='flex gap-2'>
          <a 
            href={demo}
            target="_blank" 
            rel="noopener noreferrer"
            className='flex-1 text-center px-4 py-2 bg-blue rounded-lg font-medium hover:bg-blue-700 transition duration-300'
          >
            View Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;