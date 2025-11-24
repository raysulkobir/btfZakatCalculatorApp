import { Image, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/utils/images'
import { Colors } from '@/ui/theme/colors'
import Fonts from '@/ui/theme/fonts'
import { getProportionalFontSize } from '@/ui/theme/typography'
import { TodayDate } from '@/ui/components/TodayDate'
import { useNavigation } from '@react-navigation/native'
import { Typography } from '@/ui/theme/typography';

const PaysZalatScreen = () => {
    const navigation = useNavigation();
    return (
       <View style={styles.container}>
          {/* <StatusBar
            barStyle="dark-content"
            backgroundColor="white"
            translucent={false}
          /> */}

          <View style={styles.header}>
                <Image source={images.paysZakat} style={styles.paysZakatImage} />
                <Text style={styles.headerText}> What is a Zakat? </Text>
          </View>

        <View style={styles.section}>
            <Text style={Typography.subtitle}> This literal meaning of Zakat includes:</Text>
                <Text style={styles.leftText}> 1. To grow </Text>
                <Text style={styles.leftText}> 2. To sanctify </Text>
                <Text style={styles.leftText}> 3. To purify </Text>
                <Text style={styles.leftText}> 4. To appreciate </Text>

            <Text style={Typography.subtitle}>Scholarly Definitions</Text>
                <Text style={Typography.subtitle}>Imam Ibn Taymiyyah:</Text>
                <Text style={styles.leftText}> Zakat is an obligatory charity imposed on specific types of wealth for the benefit of specific categories of people as a means of purifying the soul from selfishness and greed and to grow the remaining wealth</Text>


                <Text style={Typography.subtitle}>Imam Nawabi (RA):</Text>
                <Text style={styles.leftText}> Zakat is an obligatory charity on specific types of wealth, which is prescribed to be given to specific categories of people, in order to purify the soul and grow the wealth</Text>
        </View>



                   
      </View>
  )
}

export default PaysZalatScreen

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        alignItems: 'center', 
        backgroundColor: Colors.white
    },
    header: {
        alignItems: 'center',
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.primary,
    },
    paysZakatImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginVertical: 20,
    },
    headerText: {
        fontFamily: Fonts.font_600,
        fontSize: getProportionalFontSize(20),
        color: Colors.primary,
        marginBottom: 5,
    },
    section: {
        paddingHorizontal: 20,
        marginTop: 10,
        alignSelf: 'flex-end',
    },
    leftText: {
        alignSelf: 'stretch',
        fontFamily: Fonts.font_400,
        fontSize: getProportionalFontSize(16),
        color: Colors.textPrimary,
        marginBottom: 5
    },
})

