import { Header } from '@/components/header';
import { Tabs } from 'expo-router';
import React from 'react';

import { Text } from 'react-native';

export default function TabLayout() {

  return (
    <>
    <Header image={require("../../assets/images/react-logo.png")}></Header>
      <Tabs>
        <Tabs.Screen name='Camisetas' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍👤</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='Blusas' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍🏍</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='Bermudas' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍🚀</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='Calças' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍👓</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='Jaquetas de couro' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍🐉</Text>)}}></Tabs.Screen>
        <Tabs.Screen name='index' options={{headerShown: false, tabBarIcon: () => (<Text>🐱‍💻</Text>)}}></Tabs.Screen>
      </Tabs>
    </>
  );
}
