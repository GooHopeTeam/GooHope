import {createWebHistory, createRouter} from "vue-router"
import MainPage from "@/components/pages/MainPage";
import SignIn from "@/components/pages/SignIn";
import SignUp from "@/components/pages/SignUp";
import ProfilePage from "@/components/pages/ProfilePage";
import DialogsPage from "@/components/pages/DialogsPage";

const DEFAULT_TITLE = 'GooHope'

const routes = [
    {
        path: "/",
        name: MainPage.name,
        component: MainPage,
    },
    {
        path: "/sign_in",
        name: SignIn.name,
        component: SignIn
    },
    {
        path: "/sign_up",
        name: SignUp.name,
        component: SignUp
    },
    {
        path: "/profile/:profile_id",
        name: ProfilePage.name,
        component: ProfilePage
    },
    {
        path: "/dialogs",
        name: DialogsPage.name,
        component: DialogsPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const names = {
        'SignIn': 'Вход',
        'SignUp': 'Регистрация',
        'ProfilePage': 'Профиль',
        'DialogsPage': 'Диалоги'
    };

    // Заголовки для отдельных страниц
    let text = `${DEFAULT_TITLE} - ${names[to.name]}`;
    if (to.name === MainPage.name)
        text = `Добро пожаловать в ${DEFAULT_TITLE}`;
    document.title = text;

    // удаление футера на некоторых страницах
    const non_footer_pages = [SignIn.name, SignUp.name, ProfilePage.name, DialogsPage.name];
    if (non_footer_pages.includes(to.name)) {
        document.querySelector('.footer').style.display = 'none';
    } else {
        document.querySelector('.footer').style.display = 'flex';
    }

    next();
})

export default router