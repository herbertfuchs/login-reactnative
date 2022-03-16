import React from 'react';
import { 
    View, 
    Text,
    StyleSheet,
    Image,
    TouchableOpacity } from 'react-native';

export default function Welcome(){
    return(
        <View style={styles.container}>
            <View>
                <Image 
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }} 
                    resizeMode="contain"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
});