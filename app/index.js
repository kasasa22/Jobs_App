import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { useState } from 'react';
import { Stack, useRouter } from "expo-router";

import { COLORS, SIZES, icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{ 
                    headerStyle: {
                        backgroundColor: COLORS.lightWhite
                    },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.menu} dimensions="60%"
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                            iconUrl={images.profile} dimensions="60%"
                        />
                    ),
                    headerTitle: ""
                }}
            />
            {/* Add your ScrollView and other components here */}
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View
                style={{ 
                    flex: 1,
                    padding:SIZES.medium,
                 }}
                >
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>  
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
