import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/Pageheader';

import styles from './styles';


function TeacherList() {
    return (
        <View style={styles.container}> 
            <PageHeader title="Available Proffys" />
        </View>
    )
}

export default TeacherList;

