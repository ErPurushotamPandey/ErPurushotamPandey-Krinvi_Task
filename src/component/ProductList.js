import React, {  } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { ScreenWidth } from "react-native-elements/dist/helpers";
import Styles from "../styles/Styles";
import ImagePath from "../assets/ImagePath";

const ProductsList = (props) => {
    const { product } = props;
    let item = product;

    return (
        <>                   
            <View style={{ height: ScreenWidth / 1.4, width: ScreenWidth / 2.1, backgroundColor:"red"}}>
                <View style={{flex:1}}>
                    <Image
                        source={{ uri: item?.mediaUrl }}
                        style={Styles.productImage}
                        resizeMode='cover'
                    />
                </View>

                <View style={{  position: 'absolute', top: 5, right: 5 }}>
                    <TouchableOpacity >
                        <Image source={ImagePath.WISHLIST_ICON} style={{ width: 25, height: 25 }} resizeMode="contain" />
                    </TouchableOpacity>
                </View>

                <View style={{ paddingVertical:10}}>
                    <View >
                        <Text style={Styles.productCategory}>{item?.category[0]?.name}</Text>
                        <Text style={Styles.productName} numberOfLines={2}>{item.name}</Text>
                    </View>
                    <View>
                        <Text style={Styles.productPrice}>₹ {item?.variants[0].sellingPrice}</Text>
                    </View>
                </View>

            </View>
                 
        </>
    )

}

export default ProductsList;
