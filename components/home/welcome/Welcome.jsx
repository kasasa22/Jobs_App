import React from 'react'
import { View,
   Text,
   TouchableOpacity,
   TextInput,
   Image,
   FlatList,
  
  } from 'react-native'
import {useState} from 'react'
import { useRouter } from 'expo-router'
import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'
 
const jobTypes =["Full-time", "Part-time", "Contractor"];



const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');
  return (
    <View>
      <View style={styles.Container}>
        <Text style={styles.userName}> Hello Adrian </Text>
        <Text style={styles.welcomeMessage}>Find your perfect job </Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
          value="" 
          placeholder='What are you looking for?'
          onChange={()=>{}}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
          source={icons.search}
          resizeMode="contain"
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
        <View style={styles.tabsContainer}>
        <FlatList data ={jobTypes} 
        renderItem={({item})=>(
            <TouchableOpacity style={styles.tab(activeJobType, item)}
            onPress={()=>{
              setActiveJobType(item);
              router.push('/search/${item}')
            }}
            >
              <Text style={styles.tabText(activeJobType, item)}> {item}</Text>
            </TouchableOpacity>
        )}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap:SIZES.small}}
        horizontal
        />
        </View>

      </View>
    </View>
  )
}

export default Welcome