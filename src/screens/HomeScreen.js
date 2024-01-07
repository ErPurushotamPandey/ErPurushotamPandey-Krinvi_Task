import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, Image } from 'react-native'
import ProductsList from '../component/ProductList';
import Styles from '../styles/Styles';
import * as ApiConstants from '../config/ApiConstants';
import ImagePath from '../assets/ImagePath';
import CustomHeader from '../component/CustomHeader';
const HomeScreen = () => {
    const [isLoading, setIsloading] = useState(true);
    const [productList, setProductList] = useState(null);

    useEffect(() => {
        fetchData()
    }, []);

    fetchData = () => {
        try {
            fetch(ApiConstants.PRODUCT_API, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => response.json())
                .then((responseJson) => {
                    if (responseJson.status) {
                        setIsloading(false);
                        console.log("fbdsf", JSON.stringify(responseJson));
                        global.totalItems = responseJson?.totalItems;
                        setProductList(responseJson?.object);
                    } else {
                        setIsloading(false);
                    }
                })
        }
        catch (error) {
            throw error;
        }
    };


    return (
        <View style={Styles.container}>
            <CustomHeader 
            headerTitle={"Kitchen"}
            />
            <View>
                <View style={[Styles.fdCenter, { paddingHorizontal: 10, marginVertical:5 }]}>
                    <View style={{ flex: 1 }}>
                        <Text style={Styles.totalItems}>{global.totalItems} Products</Text>
                    </View>
                    <View style={[Styles.fdCenter, {}]}>
                        <Image source={ImagePath.SORT_ICON} style={Styles.filterSortIcon} resizeMode="contain" />
                        <Text style={Styles.filterSortText}>Sort</Text>
                    </View>
                    <View style={[Styles.fdCenter, {marginLeft:10}]}>
                        <Image source={ImagePath.FILTER_ICON} style={Styles.filterSortIcon} resizeMode="contain" />
                        <Text style={Styles.filterSortText}>Filter</Text>
                    </View>

                </View>
                <FlatList
                    data={productList}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => (

                        <View style={[Styles.homepage_card]}>
                            <ProductsList
                                product={item}
                            />

                        </View>

                    )}
                />
            </View>
        </View>
    )
}

export default HomeScreen;