import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/Pageheader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import AsyncStorage from '@react-native-community/async-storage';


function Favorites() {
    const [ favorites, setFavorites] = useState([]);
    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(res => {
            if(res) {
                const favoritedTeacher = JSON.parse(res);
                setFavorites(favoritedTeacher);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    return (
        <View style={styles.container}> 
            <PageHeader title="My Favorite Proffys" />
            <ScrollView 
                style={styles.teacherList}
                contentContainerStyle={{ 
                    paddingHorizontal: 16,
                    paddingBottom: 16
                 }}

            >   
                { favorites.map((teacher: Teacher) => {
                    return (
                        <TeacherItem 
                            key={teacher.id}
                            teacher={teacher}
                            favorited
                        />
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default Favorites;

