import { Login } from "../../pages/auth/login/Login";

const authRoutes = [
    {
        path: "/login",
        component:<Login/>,
        // component: <SignupProtection Component={SignupOtp} />,

        isProtected: false,
        layout: "header",
      },]
export default authRoutes;