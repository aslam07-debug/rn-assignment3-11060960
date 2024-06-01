import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.frame1}>
        <Text style={{fontWeight:700 , fontSize:32,}}>Hello , Devs</Text>
        <Text style={styles.taskCount}>14 tasks today</Text>
         <View style={styles.Ellipse1}>
           <Image source={require("./Images/person.png") } style={{right:-2}}/>
         </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
     borderRadius:30,
     width: 420 ,
     height:852,
    
  },
  frame1:{
    top:70,
    left:40,
    width:354,
    height:52,
    flexDirection:'row',
    
    
  },
  taskCount:{
    bottom:-50,
    left:-185,
    top:46,
  },
 Ellipse1:{
  width:50,
  backgroundColor:'#ffffff',
  height:50,
  borderRadius:30,
 }
});
