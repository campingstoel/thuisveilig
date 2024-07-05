import Icon from "../../../components/atoms/Icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Checklists from "./checklists";
import Profile from "./profile";
import Settings from "./settings";
import { useFonts } from "expo-font";
import { TabFocusContext, TabFocusProvider } from "../../../context/NavigationProvider";
import { useContext } from "react";

const Tab = createBottomTabNavigator();


const TabsLayout = () => {
  const [fontsLoaded] = useFonts({
    'Poppins': require('../../../assets/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../../../assets/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../../../assets/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../../../assets/Poppins-Medium.ttf'),
    'Poppins-Light': require('../../../assets/Poppins-Light.ttf'),
    'Poppins-MediumItalic': require('../../../assets/Poppins-MediumItalic.ttf'),
  
  });


  if(!fontsLoaded) return null;


  return (
      <TabFocusProvider>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            tabBarShowLabel: false,
            tabBarIcon: () => {
              const { focusedTab } = useContext(TabFocusContext);
              return focusedTab == 'Home' ? <Icon name="home" size={30} active /> : <Icon name="home" size={30} />;
            },
          }}

        />
        <Tab.Screen
          name="Checklists"
          component={Checklists}
          options={{
            title: 'Checklists',
            tabBarShowLabel: false,
            tabBarIcon: () => {
              const { focusedTab } = useContext(TabFocusContext);
              return focusedTab == 'Checklists' ? <Icon name="clipboard" size={30} active /> : <Icon name="clipboard" size={30} />;
            },
          }}

        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            tabBarShowLabel: false,
            tabBarIcon: () => {
              const { focusedTab } = useContext(TabFocusContext);
              return focusedTab == 'Profile' ? <Icon name="person" size={30} active /> : <Icon name="person" size={30} />;
            },
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'Settings',
            tabBarShowLabel: false,
            tabBarIcon: () => {
              const { focusedTab } = useContext(TabFocusContext);
              return focusedTab == 'Settings' ? <Icon name="settings" size={30} active /> : <Icon name="settings" size={30} />;
            },
          }}
        />
      </Tab.Navigator>
      </TabFocusProvider>
  );
};

export default TabsLayout;
