import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";




const PageMain = (props) => {
     const { navigation } = props;
      

  //  const onSignIn=()=>{
  //           navigation.navigate('SignIn');
  //       }
    return (
       <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/bg2.png")}
        resizeMode="cover"
        style={styles.image}
      >       
        <View style={styles.middle}>         
         <Image style={styles.img} source={require("../../assets/daulan.png")}/>         
         
        </View>

        <View style={styles.bottom}>
        <Text style={{color:'#FFDD00',fontSize:17,fontWeight:'bold',marginBottom:5,}}>Hướng Dẫn</Text>
        <TouchableOpacity style={styles.touchable}>
            <ImageBackground
               source={require("../../assets/button3.png")}
              resizeMode="cover"
              style={styles.imageButton1}>            
              <Text style={styles.title}>Chơi ngay</Text>
              <Text style={styles.intitle}>Bạn có tổng cộng <Text style={{color:'yellow'}}>8</Text> lượt chơi</Text> 
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>         
            <ImageBackground
              source={require("../../assets/button2.png")}
              resizeMode="cover"
              style={styles.imageButton}>             
              <Text style={styles.title2}>Quét mã</Text>
            </ImageBackground>
          </TouchableOpacity>      
          <TouchableOpacity style={styles.touchable}>         
            <ImageBackground
              source={require("../../assets/button2.png")}
              resizeMode="cover"
              style={styles.imageButton}>             
              <Text style={styles.title2}>Bộ sưu tập</Text>
            </ImageBackground>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchable}>         
            <ImageBackground
              source={require("../../assets/button2.png")}
              resizeMode="cover"
              style={styles.imageButton}>             
              <Text style={styles.title2}>Chi tiết quà tặng</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
    )
}

export default PageMain;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: "space-between",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  

  middle: {
    flex: 0.4,
    justifyContent: "center",
    // borderWidth: 3,
    textAlign: "center",
    color: "white",
  },

  bottom: {
    flex: 0.35,
    justifyContent: "center",
    // borderWidth: 3,
    textAlign: "center",
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    
  },

touchable: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 5,
  },
  title: {
    fontSize: 17,
    textAlign: "center",
    color: "white",
    fontWeight:'bold',
  },
  intitle: {
    fontSize: 9,
    textAlign: "center",
    color: "lightgray",
    marginRight:10,
    marginTop:4,
  },
  title2: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 8,
    color: '#0063A7',
    fontWeight:'bold',
  },
  imageButton: {
    justifyContent: "center",
    width: 190,
    height: 45,
    // borderWidth: 5,
  },
  imageButton1: {
    justifyContent: "center",
    width: 190,
    height: 56,
    // borderWidth: 5,
  },
  fontWhite:{
    color: "white",
  },
  img: {
    width: 180,
    height: 180,
    marginLeft: 70,
    // borderWidth: 5,
    
    }
})
