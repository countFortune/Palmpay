import { StyleSheet, Text, View,Image,SafeAreaView,StatusBar,TouchableOpacity, TextInput,Button, Alert} from 'react-native';
import { useEffect, useState } from 'react';
// import { Icon } from 'react-native-vector-icons/Icon';
import  Icon3 from 'react-native-vector-icons/Ionicons';
import  Icon2 from 'react-native-vector-icons/MaterialIcons';
import {CheckBox} from '@react-native-community/checkbox';



export default function Login() {
  const [number, onChangeNumber] = useState('');
  console.log(number)
  
 


  const Message = ()=>{
    if(number.length<11){
      
      console.log('no')
    }
    else{console.log('yes')}
  }  

  // props:NumberInputProps & {clearNumberEntry ? : Boolean; isError? : Boolean; errorText ? : String:){

  //   const [secureNumberEntry,setsecureNumberentry]=
  //   useState(props.secureNumberEntry);
  //   const onpressShowHide =()=>{
  //     console.log('press')
  //     setsecureNumberentry(! secureNumberEntry);
  //   };
  //   const onPressClearTextEntry =()=>{
  //     console.log('clear pressed');
  //     onChangeNumber('');
  //   };
  //   const onChangeNumber = (value:String)=>{
      
  //   }
  // };
  // }




































 return(



  
  


   <View style={styles.container}>
   <StatusBar backgroundColor={'brown'}/>

   <TouchableOpacity style={{justifyContent:"center",display:"flex",flexDirection:"row",gap:290,marginTop:22}}>
      <Icon3 name ='arrow-back' size={29} style={{color:"black",}}/>  
      <Icon2 name ='headset-mic' size={29} style={{color:"black",}}/>
   </TouchableOpacity>

   <View style={{display:'flex',flexDirection:'row',paddingTop:29,marginBottom:30,margin:10}}>
    <Image source={{uri:"data:image/png;base64,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"}}
    style={{width:37,height:37,borderRadius:50,padding:20}}/>

   <Text style={{fontSize:29,color:'black',fontWeight:'bold'}}>Palmpay</Text>

    </View>
  
    <Text style={{fontSize:18,color:'black',margin:15,fontWeight:"bold"}}>Let's Create an Account</Text>
    <StatusBar style="auto" />




      {/* where i created my mobile number placeholder and added a country flag  :*/}

    <View style={{display:"flex",flexDirection:"row",marginTop:-20}}>

    <View style={{display:'flex',flexDirection:'row',padding:17}}>
      <Image source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEX///8AhlH7//9OmXsAgkwAfU/v/fvX9e0niWH5//8AhExKmHlcpIjf+PFRnn8AgUzo/fot1JrpAAABXUlEQVR4nO3dvW6DQBCFUbL4D+LEfv+nDbhIlSIzupFQdE7hcjQfsK13mgAAAAAAAAAAAAAAfjJGcFZu1AHtT+qQhbGlXt/CARPHEpuUGvQXQkcxeaJf4zKmZUk9/23aklprW2xOeb9fYl/Yx2dsrXk6ZTxO6+2Sydse0/UcWmszvcWkCqe9MLeWwgKFChU2KSxQqFBhk8IChQoVNiksUKhQYZPCAoUKFTYpLFCoUGGTwgKFChU2KSxQqFBhk8IChQoVNiksUKhQYZPCAoUKFTYpLFCoUGGTwgKFChU2KSxQqFBhk8IChQoVNiksUKhQYZPCAoUKFTYpLFCoUGGTwgKFChU2KSxQqFBhk8IChQoVNin8vVP0f/Vja6XfYeJyhDGyhWvK4/aM3bxxPcfWWnP3W8z33DmM3m+Ruwwk9Qb3QUvukpLQVkmHXIqC8f0DAAAAAAAAAAAAAMC/9AUUY1kkp24ARAAAAABJRU5ErkJggg=="}}
      style={{width:21,height:21}}/>

      <Text style={{color:"black",fontSize:14,paddingLeft:4}}>+234</Text>
    </View>

    <View style={{marginLeft:-25,marginTop:-6}}>

    <TextInput
       
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter mobile number"
        keyboardType="numeric"
        
      />
      
    </View>

    </View>
     {/* where the mobile number stoped. */}
    

   
    
    
    
      
   {number?

    // where i created my button :

    <View style={styles.box}>
      
      <TouchableOpacity onPress={Message}>
      <Text style={{color:"white",textAlign:"center",fontSize:16,marginTop:15}}>
        Sign Up
      </Text>

      </TouchableOpacity>
      

 
    </View>

    :
    
    <View style={styles.sox}>
      <Text style={{color:"white",textAlign:"center",fontSize:16,marginTop:15}}>
        Sign Up
      </Text>

    </View> }

    {/* where my button stoped. */}

    <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <CheckBox
          // value={isSelected}
          // onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Do you like React Native?</Text>
      </View>
      {/* <Text>Is CheckBox selected: {isSelected ? '👍' : '👎'}</Text> */}
    </View>;


   

    
     

    

   

   </View>




 );

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      
      
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 5,
      borderColor:'white',
      
      
      
      
    },
    box: {
      backgroundColor:'blue',
      width:330,
      height:50,
      borderRadius:12,
      marginLeft:12,
      marginTop:25,

      
    },

    sox: {
      backgroundColor:'rgb(183,170,241)',
      width:330,
      height:50,
      borderRadius:12,
      marginLeft:12,
      marginTop:25,

      
    },
    Cbox: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: 'center',
    },
    label: {
      margin: 8,
    },
  });