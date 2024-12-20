import { Home } from "../../pages/home/Home";

const homeRoutes = [
    {
        path: "/",
        component:<Home/>,
        // component: <SignupProtection Component={SignupOtp} />,

        isProtected: false,
        layout: "header",
      },]
export default homeRoutes;