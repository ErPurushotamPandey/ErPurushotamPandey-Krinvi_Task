import React, { useEffect } from 'react'
import { View, Text, Image, StyleSheet, PermissionsAndroid } from 'react-native'
import ImagePath from '../assets/ImagePath'

export default function SplashScreen(props) {

    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('HomeScreen');
        }, 4000);
    });
    const requestStoragePermission = async () => {
        try {
            // Request ACCESS_FINE_LOCATION permission
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Downloader App Storage Permission',
                    message:
                        'Downloader App needs access to your storage ' +
                        'so you can download files',
                    // Optional buttons (uncomment if needed)
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK',
                },
            );
    
            // Check if permission is granted
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                // Permission granted, navigate to HomeScreen after a delay
                
            } else {
                // Permission denied
                console.log('Storage permission denied');
            }
        } catch (err) {
            // Handle errors during permission request
            console.warn('Error requesting storage permission:', err);
        }
    };
    
    
    

    return (
        <View style={styles.mainContainer}>
            <Image source={ImagePath.SPLASH_IMAGE} style={{ height: "100%", width: "100%" }} resizeMode='cover' />
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})