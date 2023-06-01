import { useState } from "react";
import { View,ScrollView, SafeAreaView } from "react-native";
import { Link, Stack,useRouter } from "expo-router";

import {COLORS, icons, images, SIZES} from '../constants'
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'

export default function Home() {

    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState("")

    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite}}>
        {/* Use the `Screen` component to configure the layout. */}
        <Stack.Screen options={{ 
              headerStyle: { backgroundColor: COLORS.lightWhite},
              headerShadowVisible: false,
              headerLeft: () => (
                  <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
              ) ,
              headerRight: () => (
                  <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
              ) ,
              headerTitle: ''
          }} 
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{
              flex: 1,
              padding: SIZES.medium
          }}>
              <Welcome searchTerm = {searchTerm}
                setSearchTerm={setSearchTerm}
                handleClick={()=>{
                  if(searchTerm){
                    router.push(`/search/${searchTerm}`)
                  }
                }}
              />
              <Popularjobs/>
              <Nearbyjobs/>
          </View>
        </ScrollView>
        {/* Use the `Link` component to enable optimized client-side routing. */}
        {/* <Link href="/details">Go to Details,suck my dick</Link> */}
      </SafeAreaView>
    );
}