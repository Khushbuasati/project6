import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import TvOutlinedIcon from '@mui/icons-material/TvOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import BentoOutlinedIcon from '@mui/icons-material/BentoOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const subMenu = [
    'Ecommerce', 'Analytics', 'Finance', 'Retail', 'HR Dashboard', 'Logistics', 'Saas', 'Perfomance',
    'Marketing', 'Business'
];

export const menuList = [
    {
        id: '1',
        name: 'Dashboard',
        Icon: TvOutlinedIcon,
        list: subMenu,
    },
    {
        id: '2',
        name: 'Apps',
        Icon: AppsOutlinedIcon,
        list: subMenu,
    },
    {
        id: '3',
        name: 'Widgets',
        Icon: GridViewOutlinedIcon,
        list: subMenu,
    },
    {
        id: '4',
        name: 'Charts',
        Icon: DonutSmallOutlinedIcon,
        list: subMenu,
    },
    {
        id: '5',
        name: 'Advanced UI',
        Icon: ExploreOutlinedIcon,
        list: subMenu,
    },
    {
        id: '6',
        name: 'Vector Map',
        Icon: FmdGoodOutlinedIcon,
        list: subMenu,
    },
    {
        id: '7',
        name: 'Pages',
        Icon: LanguageOutlinedIcon,
        list: subMenu,
    },
    {
        id: '8',
        name: 'Tables',
        Icon: BentoOutlinedIcon,
        list: subMenu,
    },
    {
        id: '9',
        name: 'Forms',
        Icon: DescriptionOutlinedIcon,
        list: subMenu,
    },
    {
        id: '10',
        name: 'Icons',
        Icon: LightbulbOutlinedIcon,
        list: subMenu,
    },
    {
        id: '11',
        name: 'E-Commerce',
        Icon: LocalGroceryStoreOutlinedIcon,
        list: subMenu,
    },
];

