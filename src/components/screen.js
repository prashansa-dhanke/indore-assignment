import React from 'react'
import { ScrollView, StatusBar, View, SafeAreaView, Platform } from 'react-native'
import { useSelector } from 'react-redux';

const Screen = ({ children }) => {

    const theme = useSelector(state => state.theme.theme);


    return (
        <>
            <StatusBar barStyle={Platform.OS === 'android' ? "light-content" : "dark-content"} backgroundColor="#000" />
            <SafeAreaView style={theme.safeAreaView}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    // this prop/condition will allow button to be submitted when keyboard is open
                    keyboardShouldPersistTaps="handled">
                    <View style={{...theme.defaultBackround, padding: 20}}>
                        {children}
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    )
}


export default Screen;
