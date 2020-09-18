import Colors from "../components/Colors";

const THEME = {
    safeAreaView: {
        flex: 1,
        backgroundColor: Colors.white
    },
    defaultBackround: {
        flex: 1,
        backgroundColor: Colors.white
    },
    loadingModalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040',
    },
    loadingActivityIndicatorBackground: {
        backgroundColor: Colors.white,
        padding: 15,
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'space-around',
    },
    loadingText: {
        fontSize: 17,
        color: Colors.black,
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 22,
        color: Colors.black,
        fontWeight: 'bold'
    }
}

export default THEME;