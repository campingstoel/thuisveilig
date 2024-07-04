import { Tabs } from "expo-router";

const TabsLayout = () => {

  return (
    <Tabs>
      <Tabs.Screen  
      name="index"
      options={{ href: null }}
      />
      <Tabs.Screen 
      name="home/index"
      options={{ 
        title: "Thuis Veilig",
        tabBarLabel: "Home",
       }}

       />
      <Tabs.Screen
      name="checklists/index"
      options={{ 
        title: "Thuis Veilig",
        tabBarLabel: "Checklists",
       }}
        />
    </Tabs>
  );
};

export default TabsLayout;
