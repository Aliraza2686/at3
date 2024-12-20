import React from 'react'
import SidebarLayout from '../../../layouts/SidebarLayout'
import { Jumbo } from '../../../components/templates/atoms/jumbo/Jumbo'
import TextTable from './TextTable'
import InfoCards from '../../../components/templates/atoms/info-cards/InfoCards'

export const Dashboard = () => {

    const projects = [
        { name: 'Admin Panel', initials: 'AP', href: '#', members: 2, bgColor: 'bg-pink-600', navigate : "#"},
        { name: 'Business Website', initials: 'BW', href: '#', members: 2, bgColor: 'bg-purple-600', navigate : "/settings/business-website" },
        { name: 'Business Store', initials: 'BS', href: '#', members: 2, bgColor: 'bg-yellow-500' , navigate : "#"},
        { name: 'Linker ', initials: 'L', href: '#', members: 2, bgColor: 'bg-green-500' },
      ]
  return (
    <div>
        <SidebarLayout>
            <Jumbo text={"Dashboard"} path={[{title : "dashboard", click : "/dashboard"}]} />

          <div className='mt-5 '>  <InfoCards projects={projects} title="Projects" /></div>
            <TextTable />
            <TextTable />

        </SidebarLayout>
    </div>
  )
}
