import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const CategoryCard = ({item,onPress}) => {
  return (
     <TouchableOpacity
     onPress={onPress}
   >
     <Image
       source={{
         uri: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
       }}
       width={150}
       height={150}
       borderRadius={99}
       style={{ resizeMode: "stretch" }}
     />
     <View>
       <Text
         style={{
           textAlign: "center",
           fontWeight: "bold",
           fontSize: 15,
         }}
       >
         {item}
       </Text>
     </View>
   </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({})