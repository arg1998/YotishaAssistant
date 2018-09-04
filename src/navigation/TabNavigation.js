import {createTabNavigator} from 'react-navigation';
import Home from '../screens/Home';
import Calendar from '../screens/Calendar';
import CheckList from '../screens/CheckList';
import Map from '../screens/Map';
import TimeLine from '../screens/TimeLine';
import TabBar from './TabBar';


export default TabNavigator = createTabNavigator(
    
    {

        Calendar:{
            screen:Calendar
        },

        CheckList:{
            screen:CheckList
        },

        Home:{
            screen:Home
        },
        
        Map:{
            screen:Map
        },

        TimeLine:{
            screen:TimeLine
        }
    },
    {   
        initialRouteName:'Home',

        animationEnabled:true,
        
        tabBarComponent:TabBar,

        tabBarPosition:'bottom',

        navigationOptions:{
            
        },
        
    }
)