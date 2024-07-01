import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          display: "none",
        },
      }}
    >
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name="index"
      />
      <Tabs.Screen name="home/index" />
    </Tabs>
  );
};

export default TabsLayout;
