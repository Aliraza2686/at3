import authRoutes from "./auth/authRoutes";
import homeRoutes from "./home";
import postAuthRoutes from "./post-auth-routes/postAuthRoutes";

let AllRoutes = []
const homeRouter = {
    layout: 'home',
    path: '/',
    element: '',
    routes: homeRoutes
};

const authRouter = {
    layout: 'auth',
    path: '/',
    element: '',
    routes: authRoutes
};
const postAuthRouter = {
    layout: 'auth',
    path: '/',
    element: '',
    routes: postAuthRoutes
};

AllRoutes.unshift(
homeRouter,
authRouter,
postAuthRouter
);

export { AllRoutes };