import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native'
import React from 'react'
import ImagePath from '../assets/ImagePath';
import Styles from '../styles/Styles';

export default function CustomHeader(props) {
    const { } = props;

    return (
        <View>
            <StatusBar barStyle={"dark-content"} backgroundColor={"white"} />
            <View style={[styles.headerview, { ...props.headerview }]}>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: "center", paddingHorizontal: 10 }}>
                    <View style={Styles.fdCenter}>
                        <TouchableOpacity onPress={props.goBack}>
                            <Image source={ImagePath.LEFT_ARROW} resizeMode={'contain'} style={{ width: 25, height: 25, ...props.leftImageStyle }} />
                        </TouchableOpacity>
                        <Text style={styles.topHeaderTitleText}>{props.headerTitle}</Text>
                    </View>
                    <View style={[Styles.fdCenter, { alignItems: "flex-end", flex: 1, justifyContent: "flex-end", alignSelf: "flex-end" }]}>
                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                            <Image source={ImagePath.SEACH_ICON} resizeMode={'contain'} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                            <Image source={ImagePath.WISHLIST_ICON} resizeMode={'contain'} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                            <Image source={ImagePath.SHOPPING_BAG} resizeMode={'contain'} style={{ width: 25, height: 25 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ borderWidth: 0.8, borderColor: "#cccccc", width: "100%", alignSelf: "center", marginVertical: 10 }} />
        </View>

    )
}

const styles = StyleSheet.create({
    headerview: {
        width: '100%',
        height: 60,
        ...Styles.fdCenter,
    },
    topHeaderTitleText: {
        fontSize: 18,
        color: "#000000",
        textAlign: 'center',
        fontWeight: "700",
        paddingLeft: 10
    },
});