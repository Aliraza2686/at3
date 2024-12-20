import { BusinessWebSite } from "../../pages/PostAuth/business-website/BusinessWebSite";
import { Dashboard } from "../../pages/PostAuth/dashboard/Dashboard";
import { FileManager } from "../../pages/PostAuth/file-manager/FileManager";
import { Profile } from "../../pages/PostAuth/profile-section/Profile";
import { Login } from "../../pages/auth/login/Login";

const postAuthRoutes = [
    {
        path: "/dashboard",
        component:<Dashboard/>,
        // component: <SignupProtection Component={SignupOtp} />,

        isProtected: false,
        layout: "header",
      } ,{
        path: "/file-manager",
        component:<FileManager/>,
        // component: <SignupProtection Component={SignupOtp} />,

        isProtected: false,
        layout: "header",
      },{
        path: "/profile",
        component:<Profile/>,
        // component: <SignupProtection Component={SignupOtp} />,

        isProtected: false,
        layout: "header",
      },
      {
        path: "/settings/business-website",
        component:<BusinessWebSite/>,
        // component: <SignupProtection Component={SignupOtp} />,

        isProtected: false,
        layout: "header",
      },]
export default postAuthRoutes;