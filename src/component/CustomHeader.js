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
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: "center", paddingHorizontal: 10 , justifyContent:"center", alignSelf:"center"}}>
                    <View style={{ justifyContent:"center", alignItems:"center"}}>
                        <Image source={ImagePath.MAIN_LOGO} resizeMode={'contain'} style={{ width: 70, height: 70}} />
                    </View>
                    {!props.isShowRightIcon&&(
                    <View style={[Styles.fdCenter, {   flex:1,  justifyContent:"flex-end"}]}>
                        <TouchableOpacity style={{ marginHorizontal: 10 }}>
                            <Image source={ImagePath.PROFILE_ICON} resizeMode={'contain'} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={props.onSearchPress} style={{ marginHorizontal: 10 }}>
                            <Image source={ImagePath.SEACH_ICON} resizeMode={'contain'} style={{ width: 20, height: 20 }} />
                        </TouchableOpacity>
                        <TouchableOpacity  style={[Styles.fdCenter,{ marginHorizontal: 10 }]}>
                            <Image source={ImagePath.PLUS_ICON} resizeMode={'contain'} style={{ width: 15, height: 15 }} />
                            <Text style={styles.topHeaderTitleText}>{"Add Book"}</Text>
                        </TouchableOpacity>
                    </View>
                    )}
                </View>
            </View>
            {/* <View style={{ borderWidth: 0.8, borderColor: "#cccccc", width: "100%", alignSelf: "center", marginVertical: 10 }} /> */}
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