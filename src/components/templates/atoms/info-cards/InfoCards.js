import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function InfoCards({title, projects}) {
  return (
    <div>
      <h2 className="text-sm font-medium text-gray-500">{title}</h2>
      <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
        {projects.map((project) => (
            <Link to={project.navigate}>
          <li key={project.name} className="col-span-1 flex rounded-md shadow-sm hover:shadow-xl hover:scale-105 transition-all">
            <div
              className={classNames(
                project.bgColor,
                'flex w-16 shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white',
              )}
            >
              {project.initials}
            </div>
            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
              <div className="flex-1 truncate px-4 py-2 text-sm">
                <a href={project.href} className="font-medium text-gray-900 hover:text-gray-600">
                  {project.name}
                </a>
                <p className="text-gray-500">{project.members} Members</p>
              </div>
              <div className="shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex size-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                </button>
              </div>
            </div>
          </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
