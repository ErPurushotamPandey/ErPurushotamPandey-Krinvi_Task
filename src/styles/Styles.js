import { I18nManager, Platform, StyleSheet } from 'react-native';
import { ScreenWidth } from 'react-native-elements/dist/helpers';

export default StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        flex: 1,
    },
    productImage: {
        alignSelf: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        borderRadius: 5,
        height: ScreenWidth / 2.5,
    },
    productPrice: {
        fontSize: 16,
        color: "#000000",
        fontWeight: "400",
    },
    productCategory: {
        fontSize: 17,
        fontWeight: "700",
        paddingVertical: 2,
        color: "#000000",
    },
    totalItems: {
        fontSize: 15,
        fontWeight: "400",
        color: "#000000",
    },
    productName: {
        fontSize: 17,
        paddingVertical: 2,
        fontWeight: "400",
        color: "#000000",
    },
    homepage_card: {
        backgroundColor: "#ffffff",
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
    filterSortText:{
        fontSize:14,
        fontWeight:"400",
        lineHeight:15
    }
});
