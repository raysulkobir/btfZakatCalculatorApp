import { StyleSheet, View, Platform, KeyboardAvoidingView, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/ui/theme/colors'
import ZakatHeader from '../components/ZakatHeader'
import Input from '@/ui/components/Input'
import { useNavigation } from '@react-navigation/native'
import CommonButton from '@/ui/components/CommonButton'

const ZakatCalculatorScreen = () => {
    const [gold, setGold] = React.useState('')
    const [silver, setSilver] = React.useState('')
    const [cashHand, setCashHand] = React.useState('')
    const [cashBank, setCashBank] = React.useState('')
    const [receivableLoans, setReceivableLoans] = React.useState('')
    const [businessProfit, setBusinessProfit] = React.useState('')
    const [bizInvestments, setBizInvestments] = React.useState('')
    const [securities, setSecurities] = React.useState('')
    const [personalIncome, setPersonalIncome] = React.useState('')
    const [agriProducts, setAgriProducts] = React.useState('')
    const [livestock, setLivestock] = React.useState('')

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <ZakatHeader />

            <KeyboardAvoidingView
                style={styles.flex}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                keyboardVerticalOffset={Platform.select({ ios: 8, android: 0 })}
            >
                <ScrollView
                    contentContainerStyle={styles.scrollContent}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.fieldContainer}>
                        <Input placeholder="Gold" value={gold} onChangeText={setGold} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Silver" value={silver} onChangeText={setSilver} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Cash in Hand" value={cashHand} onChangeText={setCashHand} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Cash in Bank" value={cashBank} onChangeText={setCashBank} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Receivable Loans" value={receivableLoans} onChangeText={setReceivableLoans} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Business Profit" value={businessProfit} onChangeText={setBusinessProfit} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Investments/Stocks in Business" value={bizInvestments} onChangeText={setBizInvestments} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Shares, Bonds, Mutual Funds" value={securities} onChangeText={setSecurities} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Personal Income Received" value={personalIncome} onChangeText={setPersonalIncome} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Agricultural Products" value={agriProducts} onChangeText={setAgriProducts} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Livestock" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Rental Income Savings" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Precious Metals and Stones" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="B Cryptocurrencies & Trading Assets" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Provident Funds/Retirement Fund" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} /><Input placeholder="Providence" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Fixed Deposits & Savings Schemes" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} /><Input placeholder="Providence" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Advances Payments Receivable" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} /><Input placeholder="Providence" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Agricultural Loan Lease Income" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} /><Input placeholder="Providence" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Inheritance Received" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} /><Input placeholder="Providence" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                        <Input placeholder="Other" value={livestock} onChangeText={setLivestock} inputWrapperStyle={styles.inputWrapper} inputStyle={styles.input} />
                    </View>

                    <View style={styles.buttonContainer}>
                        <CommonButton
                            title="Reset"
                            variant="primary"
                            onPress={() => { console.log('Reset Zakat') }}
                            loading={false}
                            disabled={false}
                            fullWidth={false}
                            style={styles.button}
                            textStyle={styles.buttonText}
                        />
                        <CommonButton
                            title="Calculate"
                            variant="primary"
                            onPress={() => { console.log('Calculate Zakat') }}
                            loading={false}
                            disabled={false}
                            fullWidth={false}
                            style={styles.button}
                            textStyle={styles.buttonText}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ZakatCalculatorScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    flex: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 10,
        paddingBottom: 24, // extra space so last input isn't under keyboard/home indicator
    },
    fieldContainer: {
        paddingTop: 10,
    },
    inputWrapper: {
        marginTop: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 24,
    },
    button: {
        paddingHorizontal: 30,
        width: 180,
    },
})
