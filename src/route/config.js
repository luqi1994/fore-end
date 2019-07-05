import Home from '../component/home';
import Blog from "../component/home/blog";
import Slider from "../component/demo/slider";
import SlidePage from "../component/demo/slidePage";
import Card from "../component/demo/card";
import Set from "../component/set";
import Compass from "../component/demo/compass";

export const menus = [
    {key: '/desktop', title: '桌面', icon: 'el-icon-star-on', child: [
            {key: '/index', title: 'HOME',component: Home},
            {key: '/index/blog', title: 'BLOG',component: Blog}
        ]
    },
    {key: '/component', title: '组件', icon: 'el-icon-date',child: [
            {key: '/index/slider', title: 'SLIDER',component: Slider},
            {key: '/index/slidePage', title: 'SLIDE-PAGE',component: SlidePage},
            {key: '/index/card', title: 'CARD',component: Card},
            {key: '/index/compass', title: 'COMPASS',component: Compass}
        ]
    },
    {key: '/set', title: '设置', icon: 'el-icon-setting',child: [
            {key: '/index/set', title: 'SET',component: Set},
        ]
    },
];