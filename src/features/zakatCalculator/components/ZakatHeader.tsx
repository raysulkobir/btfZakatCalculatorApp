import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fonts from '@/ui/theme/fonts'
import { getProportionalFontSize } from '@/ui/theme/typography'

const ZakatHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ZakatHeader</Text>
    </View>
  )
}

export default ZakatHeader

const styles = StyleSheet.create({
    container:{
        // marginTop:10,
        alignItems:'center',
    },
    text:{
        fontSize: getProportionalFontSize(20),
        fontFamily:Fonts.font_700,
    }
})