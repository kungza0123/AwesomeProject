import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/Knights_Helmet_In_Black_And_Gold_Wall_And_Art_Print___Knight-removebg-preview.png')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 125,
    height: 125,
    marginBottom: 8,
  },
})
