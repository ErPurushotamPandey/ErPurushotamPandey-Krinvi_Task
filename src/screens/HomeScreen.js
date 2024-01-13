import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, Image } from 'react-native'
import ProductsList from '../component/ProductList';
import Styles from '../styles/Styles';
import * as ApiConstants from '../config/ApiConstants';
import ImagePath from '../assets/ImagePath';
import CustomHeader from '../component/CustomHeader';

const HomeScreen = (props) => {
    const [isLoading, setIsloading] = useState(true);
    const [productList, setProductList] = useState(null);

    useEffect(() => {
        // fetchData()
    }, []);

    fetchData = () => {
        try {
            let endpoint = ApiConstants.BaseUrl + ApiConstants.DOWNLOAD_BOOK
            console.log("url", endpoint);
            fetch(endpoint, {
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then(response => response.json())
                .then((responseJson) => {
                    console.log("responseJson: " + JSON.stringify(responseJson));
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
            onSearchPress={()=> props.navigation.navigate("SearchScreen")}
            />
            <View>
                <FlatList
                    data={productList}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => (

                        <View style={[Styles.commonCardStyle, Styles.shadowStyle,{}]}>


                        </View>

                    )}
                />
            </View>
        </View>
    )
}

export default HomeScreen;
