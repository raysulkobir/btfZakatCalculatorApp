// screens/GuideScreen.tsx (snippet)
import React from 'react';
import { View, FlatList, StyleSheet, Image, Text, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '@/ui/components/Card';
import { images } from '@/utils/images';
import { GUIDE_ITEMS } from '@/features/guide/data';
import { Colors } from '@/ui/theme/colors'
import Fonts from '@/ui/theme/fonts'
import { getProportionalFontSize } from '@/ui/theme/typography'
import { TodayDate } from '@/ui/components/TodayDate'
import { useNavigation } from '@react-navigation/native'

export default function GuideGrid() {
    const navigation = useNavigation();
    console.log("images.guide", images.guide)
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
                <Text style={styles.dateText}>Zakat & It's Principles</Text>
            </View>

            <FlatList
                data={GUIDE_ITEMS}
                keyExtractor={(i) => i.id}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 16 }}
                contentContainerStyle={{ paddingTop: 20, paddingBottom: 120 }}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        icon={item.icon}
                        onPress={() => { navigation.navigate('paysZakat') }}
                    />
                )}
                showsVerticalScrollIndicator={false}
            />

            <View style={styles.footer}>
                <Text style={styles.footerText}>Bangladesh Thalassemia Foundation</Text>
            </View>
        </SafeAreaView>
    );
}

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
    footer: {
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

