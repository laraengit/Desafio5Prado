import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
const TabBarIcon = ({title,icon}) => {
  return (
    <View style={styles.container}>
      <Feather name = {icon} size={20} color="white"/>
      <Text style={styles.tabBarText}>{title}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
    container:{
      alignItems:'center',

    },
    tabBarText:{
      color:'white'
    }
  })