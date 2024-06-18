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
                            iconUrl={icons.menu} dimensions="100%"
                        />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn 
                            iconUrl={icons.profile} dimensions="100%"
                        />
                    )
                }}
            />
            {/* Add your ScrollView and other components here */}
            <ScrollView>
                <View>
                    <Text>Welcome to the Home Screen</Text>
                    {/* Include other components like Nearbyjobs, Popularjobs, etc. */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
