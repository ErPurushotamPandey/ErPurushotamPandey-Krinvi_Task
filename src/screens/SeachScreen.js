import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, Alert, Linking } from 'react-native'
import * as ApiConstants from '../config/ApiConstants';
import CustomHeader from '../component/CustomHeader';
import Styles from '../styles/Styles';
import { ProgressBar } from "react-native-paper";
import Toast from "react-native-tiny-toast";
import RNFetchBlob from 'rn-fetch-blob';
import FastImage from 'react-native-fast-image';
const SeachScreen = () => {
    const [isLoading, setIsloading] = useState(true);
    const [btnLoading, setBtnLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState(null);
    const [seachBookList, setSeachBookList] = useState(null);

    onSearchBook = () => {
        if (searchQuery != null) {
            setBtnLoading(true);
            try {
                let endpoint = ApiConstants.BaseUrl + ApiConstants.SEARCH_BOOK
                console.log("url", endpoint);
                fetch(endpoint, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        "book_id": searchQuery,
                    }),
                }).then(response => response.json())
                    .then((responseJson) => {
                        if (responseJson.status) {
                            setIsloading(false);
                            // setSearchQuery('')
                            setBtnLoading(false);
                            setSeachBookList(responseJson?.data);
                            if (responseJson?.message)
                                Toast.show(responseJson?.message, { containerStyle: Styles.toastStyle, textStyle: Styles.toastText, position: -70 })
                        } else {
                            setIsloading(false);
                        }
                    })
            }
            catch (error) {
                throw error;
            }
        } else {
            Toast.show('Please, enter book name', { containerStyle: Styles.toastStyle, textStyle: Styles.toastText, position: -70 })
        }
    };

    const onDowndloadBookAlert = (linkUrl) => {
        Alert.alert(
            'Alert',
            'Are you sure you want to download this book?',
            [
                {
                    text: 'CANCEL',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    style: 'default',
                    onPress: () => { onDowndloadBook("book", linkUrl) },
                },
            ],
            { cancelable: false }
        );
    }

    const onDowndloadBook = () => {
        const { config, fs } = RNFetchBlob;
        const date = new Date();
        const fileDir = fs.dirs.DownloadDir;
      
        config({
          fileCache: true,
          addAndroidDownloads: {
            useDownloadManager: true,
            notification: true,
            path: fileDir + '/downloadedFile.zip', // Specify the file name and extension here
            description: 'file download',
          },
        })
          .fetch('GET', 'https://vidyauniversitypress.com/vup.sitslive.com/vupsits/SubjectBook_1_7ef147e5-1a14-449e-86b2-3ccf9747252b.zip', {
            // Add any headers if needed
          })
          .then((res) => {
            // the temp file path
            console.log('The file saved to ', res.path());
                  unzip({
              from: res.path(),
              to: fileDir + '/unzipped', 
            })
              .then((path) => {
                console.log('File unzipped to:', path);
                Alert.alert('File downloaded and unzipped successfully');
              })
              .catch((error) => {
                console.error('Error unzipping file:', error);
              });
          })
          .catch((error) => {
            console.error('Error downloading file:', error);
          });
      };
      


    return (
        <View style={Styles.container}>
            <CustomHeader
                isShowRightIcon={true}
            />

            <View>
                {btnLoading ? (
                    <ProgressBar indeterminate={true} color={'#213661'} />
                ) : null}

                <TextInput
                    style={styles.inputStyle}
                    value={searchQuery}
                    onChangeText={(text) => setSearchQuery(text)}
                />
                <TouchableOpacity onPress={() => onSearchBook()} style={styles.searchBookBtn}>
                    <Text style={{ fontSize: 18, color: "white" }}>SEARCH BOOK</Text>
                </TouchableOpacity>

                <View>
                    <FlatList
                        data={seachBookList}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (

                            <TouchableOpacity onPress={() => onDowndloadBookAlert(item?.book_link)} style={[Styles.commonCardStyle, Styles.shadowStyle, Styles.fdCenter, { paddingHorizontal: 0 }]}>
                                <View style={{ height: 110, width: 110, padding: 10, marginRight: 10 }}>
                                    <FastImage
                                        source={{ uri: item?.thumbnail }} style={{ width: "100%", height: "100%" }} resizeMode='contain' />
                                </View>
                                <View>
                                    <Text>{item?.heading}</Text>
                                    <Text>{'Pages'} <Text>{item?.categories[0]?.parent}</Text></Text>
                                    <Text></Text>
                                </View>
                            </TouchableOpacity>

                        )}
                    />
                </View>
            </View>
        </View>
    )
}

export default SeachScreen;
const styles = StyleSheet.create({
    inputStyle: {
        height: 40,
        width: "95%",
        borderBottomWidth: 2,
        borderColor: '#000000',
        borderRadius: 5,
        fontSize: 16,
        padding: 10,
        justifyContent: 'center',
        alignSelf: "center",
    },
    searchBookBtn: {
        height: 40,
        width: "95%",
        backgroundColor: '#213661',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        marginTop: 10
    }
});