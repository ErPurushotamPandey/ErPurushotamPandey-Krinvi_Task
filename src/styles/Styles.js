import { I18nManager, Platform, StyleSheet } from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';

export default StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    homepage_card: {
        backgroundColor: '#a40cc9',
        borderRadius: 5,
        padding: 4
    },
    fdCenter: {
        alignItems: "center",
        flexDirection: "row",
    },
    filterSortIcon: {
        width: 20, height: 20, marginHorizontal: 5
    },
    filterSortText: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 15
    },
    commonCardStyle: {
        padding: 10,
        paddingHorizontal: 10,
        margin: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    shadowStyle: {
        shadowColor: "#878787",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor:"white"
    },
    toastStyle: {
        borderRadius: 40,
        backgroundColor: '#333333',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    toastText: {
        fontSize: 12,
        color: '#ffffff',
    },
});
