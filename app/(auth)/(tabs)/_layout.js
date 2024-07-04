import Icon from "../../../components/atoms/Icon";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./home";
import Checklists from "./checklists";
import Profile from "./profile";

const Tab = createBottomTabNavigator();

const TabsLayout = () => {

  return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Icon name="home" size={30} active={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Checklists"
          component={Checklists}
          options={{
            title: 'Checklists',
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Icon name="clipboard" size={30} active={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => (
              <Icon name="person" size={30} active={focused} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default TabsLayout;
