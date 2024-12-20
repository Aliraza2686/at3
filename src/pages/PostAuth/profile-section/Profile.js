import { IconAt, IconPhoneCall } from '@tabler/icons-react';
import { Avatar, Group, Text } from '@mantine/core';
import  './css/profile.css';
import SidebarLayout from '../../../layouts/SidebarLayout';
import { Jumbo } from '../../../components/templates/atoms/jumbo/Jumbo';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { EditProfile } from './EditProfile';
import { PencilIcon } from '@heroicons/react/20/solid';

export function Profile() {
    const {data:profile} = useSelector((state) => state.getProfile)
    const [edit, setEdit] = useState(false)
  return (

    <SidebarLayout>
        <Jumbo text={"Profile"} />
        {edit && <EditProfile />}
         <div>
      <Group wrap="nowrap" className='flex gap-10 mt-5 relative bg-slate-100 p-5 rounded-xl '>

        <span className='absolute bg-slate-300 rounded-xl hover:shadow-xl p-2 right-5 top-5  cursor-pointer' onClick={() => setEdit(!edit)}>  
        <PencilIcon className='w-5 h-5' />
        </span>
        <img
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"
      
        
          className='rounded-xl'
        />
     
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed" className=''>
          {profile?.user?.username ??  "--"}
           
          </Text>

          <Text fz="md" fw={500} className="name">
          {profile?.user?.admin && "Admin"}
          </Text>

          <Group wrap="nowrap" gap={10} mt={3} className='flex gap-2 items-center'>
            <IconAt stroke={1.5} size={16} className="icon" />
            <Text fz="xs" c="dimmed">
           {profile?.user?.email || "--"}
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5} className='flex gap-2 items-center'>
            <IconPhoneCall stroke={1.5} size={16} className="icon" />
            <Text fz="xs" c="dimmed">
           {"N/A"}
            </Text>
          </Group>
        </div>
      </Group>
    </div>
    </SidebarLayout>
   
  );
}