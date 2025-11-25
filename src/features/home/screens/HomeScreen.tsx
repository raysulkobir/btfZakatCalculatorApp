import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/utils/images'
import { Colors } from '@/ui/theme/colors'
import Fonts from '@/ui/theme/fonts'
import { getProportionalFontSize } from '@/ui/theme/typography'
import { TodayDate } from '@/ui/components/TodayDate'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
  return (
       <SafeAreaView style={styles.container}>
          <StatusBar
            barStyle="dark-content"
            backgroundColor="white"
            translucent={false}
          />

        {/* header section */}
        <View style={styles.header}>
            <Text style={styles.headerText}>Zakat</Text>
              <Text style={styles.dateText}><TodayDate style={styles.dateText} /></Text>
        </View>

        <View style={styles.box}>
              <Pressable onPress={() => { navigation.navigate('ZakatCalculator')}}
                style={styles.titleRow}
                android_ripple={{ color: '#eee' }}
            >
                <View>
                      <Text style={styles.title}>Zakat Calculator</Text>
                    <Text style={styles.subtitle}>Calculate your annual due</Text>
                </View>
                <Image source={images.calculator} style={styles.logo} />
              </Pressable>

            <Pressable onPress={() => { navigation.navigate('guide')}}
                style={styles.titleRow}
                android_ripple={{ color: '#eee' }}
            >
                  <View>
                      <Text style={styles.title}>Zakat Guide</Text>
                      <Text style={styles.subtitle}>Know the basics of Zakat</Text>
                  </View>
                  <Image source={images.guide} style={styles.logo} />
            </Pressable>

              <Pressable style={styles.titleRow} onPress={() => { navigation.navigate('guide') }}>
                <View>
                    <Text style={styles.title}>My Zakat History</Text>
                    <Text style={styles.subtitle}>View past served recods</Text>
                </View>
                  <Image source={images.history} style={styles.logo} />
            </Pressable>
        </View>

        <View style={styles.footer}>
              <Text style={styles.footerText}>Bangladesh Thalassemia Foundation</Text>
        </View>
      </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: Colors.white
    },
    header: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
        borderBottomLeftRadius: "70%",
        borderBottomRightRadius: "70%",
        paddingVertical: 50,
        marginBottom: 20
    },
    headerText: {
        fontFamily: Fonts.font_700,
        fontSize: getProportionalFontSize(24),
        color: Colors.white,
        marginTop: 20
    },
    dateText: {
        fontFamily: Fonts.font_500,
        fontSize: getProportionalFontSize(14),
        color: Colors.white,
        marginBottom: 20,
        marginTop: 10
    },
    box:{
        width: '90%',
    },  
    titleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        marginVertical: 20,
        borderWidth: 1,
        borderColor: Colors.surface, 
        borderRadius: 15,
        backgroundColor: Colors.white,

        // iOS shadow
        shadowColor: Colors.border_grey, 
        shadowOpacity: 0.8, 
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 3 },

        // Android shadow
        elevation: 5,               // tune for desired depth
    },

    logo:{
        width:50,
        height:50,
        resizeMode: 'contain',
        marginLeft: 15
    },
    title:{ 
        fontFamily: Fonts.font_600,
        fontSize: getProportionalFontSize(20),
        color: Colors.black,
        marginBottom: 5
    },
    subtitle:{
        fontFamily: Fonts.font_400,
        fontSize: getProportionalFontSize(14),
        color: Colors.grey,
    },
    footer:{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
    },
    footerText: {
        fontFamily: Fonts.font_400,
        fontSize: getProportionalFontSize(14),
        color: Colors.grey
    }

})

