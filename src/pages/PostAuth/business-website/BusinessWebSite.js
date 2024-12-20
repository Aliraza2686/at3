import React, { useState } from "react";
import SidebarLayout from "../../../layouts/SidebarLayout";
import { Jumbo } from "../../../components/templates/atoms/jumbo/Jumbo";

import { BusinessText } from "./text-components/BusinessText";

export const BusinessWebSite = () => {
 
  return (
    <SidebarLayout>
      <div>
    
        <Jumbo text={"Business Website"} />
 <BusinessText/>
      </div>
    </SidebarLayout>
  );
};
