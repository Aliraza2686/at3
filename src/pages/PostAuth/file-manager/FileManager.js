import React from 'react'
import SidebarLayout from '../../../layouts/SidebarLayout'
import { Jumbo } from '../../../components/templates/atoms/jumbo/Jumbo'

export const FileManager = () => {
  return (
    <div>
    <SidebarLayout>
        <Jumbo text={"File Manager"} path={[{title : "file manager", click : "/file-manager"}]} />
    </SidebarLayout>
</div>
  )
}
