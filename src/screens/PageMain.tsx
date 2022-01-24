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
  Alert,
  Modal,
  Pressable,
} from "react-native";
import { Icon } from '@iconify/react';
import { Feather } from '@expo/vector-icons';



const PageMain = (props) => {
     const { navigation } = props;
     const [modalVisible, setModalVisible] = useState(false);
     const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

    const onSignIn=()=>{
            navigation.navigate('SignIn');
        }
          
      

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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Bạn có chắc muốn <Text style={{fontWeight:'bold'}}>đăng xuất</Text> không?</Text>
           
            <Pressable
              style={[styles.button]}
              onPress={onSignIn}>
              <Text style={styles.textStyle}>Đăng xuất</Text>
            </Pressable>

            <TouchableOpacity
             
              onPress={() => setModalVisible(!modalVisible)}>
              <ImageBackground
              source={require("../../assets/white_button1.png")}
              resizeMode="cover" style={{justifyContent: "center",
    width: 130,
    height:50}}
              >           
              <Text style={{color:'#0063A7',fontWeight:'bold',textAlign:'center',marginBottom:7}}>Hủy</Text>
            </ImageBackground>              
            </TouchableOpacity>            
          </View>
        </View>
      </Modal> 
      <Feather style={{position:"absolute",top:30,right:30}} name="log-out" size={20} color="white" onPress={() => setModalVisible(true)}/>      
        <View style={styles.top}>
       
         {/* <Icon style={{position:"absolute",right:10,top:-40,}} icon="mono-icons:log-out"  width="20" height="20" color="white" inline={true} />          */}

         
         <Image style={styles.img}   source={require("../../assets/daulan.png")}/>         
         
        </View>

        <View style={styles.bottom}>
        <Text onPress={createTwoButtonAlert} style={{color:'#FFDD00',fontSize:17,fontWeight:'bold',marginBottom:5,textAlign:"center"}}>Hướng Dẫn</Text>
        <TouchableOpacity style={styles.touchable}>
            <ImageBackground
               source={require("../../assets/button3.png")}
              resizeMode="cover"
              style={styles.imageButton1}>            
              <Text style={styles.title}>Chơi ngay</Text>
              <Text style={styles.intitle}>Bạn có tổng cộng <Text style={{color:'yellow'}}>0</Text> lượt chơi</Text> 
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
          <TouchableOpacity style={styles.touchable} >         
            <ImageBackground
              source={require("../../assets/button2.png")}
              resizeMode="cover"
              style={styles.imageButton}>             
              <Text style={styles.title2} >Bộ sưu tập</Text>
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
  

  top: {
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
    // marginLeft: 70,
    marginLeft: 90,
    // marginTop:50,
    borderWidth: 5,
    
    },
 
  




centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',    
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#FBC926',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // borderWidth: 5,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
   
  },
  button: {
    borderRadius: 10,
    padding: 10,
    width: 110,
    elevation: 2,
    marginBottom:10,
    backgroundColor:'#D02027',
    
  },  
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
  modalText: {
    marginBottom: 15,
    // borderWidth:1,
    width: 181,
    color:'#0063A7',
    fontSize:17,
     textAlign:'center'
    
  },

})
