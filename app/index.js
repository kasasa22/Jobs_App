import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useState } from 'react';
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex:1, background:COLORS.
            lightWhite
         }}>
            
           <Stack.Screen
           options={{ 
            headerStyle:{
                backgroundColor: COLORS.lightWhite
            }
            }},
          <SafeAreaView/>
    );
}

export default Home;
