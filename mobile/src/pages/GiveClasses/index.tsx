import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import GiveClassesBgImage from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {

    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }


    return (
        <View style={styles.container}>
            <ImageBackground 
                source={GiveClassesBgImage} 
                style={styles.content}
                resizeMode="contain"
            >
                <Text style={styles.title}>Wanna be a Proffy?</Text>
                <Text style={styles.description}>
                    To start, you have to register as a teacher at our web platform.
                </Text>
            </ImageBackground>
            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>All good</Text>
            </RectButton>


        </View>
    )
}

export default GiveClasses;
