import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput } from 'react-native';

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

      {/* Search layout*/}

      <View style={styles.search}>
        <TextInput style={styles.searchBloc}   />
         <View style={styles.searchText}>
          <Image source={require("./Images/Vector.png")} style={styles.searchIcon} />
          <Text style={{top:130 , right:220 , fontSize:16 , fontWeight:700}}>Search</Text>
         </View>

         <View  style={styles.filter}>
           <Image source={require("./Images/Vector (1).png")} style={{left:10, top:11}} />
         </View>
      </View>

      {/* Category Section */}
      <View>
        <Text style={{fontStyle:'lato' , top:160, left:20, fontWeight:700, fontSize:20, lineHeight:24}}>Categories</Text>
      </View>

      <View style={styles.category}>
        <View style={styles.category1}>
           <Text style={{fontSize:16,fontWeight:700, left:10, fontStyle:'lato'}}>Exercise</Text>
           <Text style={{left:10,top:-4,fontSize:11}}>12 Tasks</Text>
           <Image source={require("./Images/young woman working online.png")} style={{left:16}}/>
        </View>

        <View style={styles.category2}>
           <Text style={{fontSize:16,fontWeight:700, left:10, fontStyle:'lato'}}>Study</Text>
           <Text style={{left:10,top:-4,fontSize:11}}>12 Tasks</Text>
           <Image source={require("./Images/young woman working at desk.png")} style={{left:16}}/>
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
 },
 searchBloc:{
  width:280,
  height:50,
 borderWidth:1,
  top:120,
  left:40,
  borderRadius:14,
  border: 'Mixed solid #FBF9F7',
 },
 searchIcon:{
  width:16,
  height:16,
  top:135,
  right:230,
  

 }
 ,
 search:{
  flexDirection:'row',
 },
 searchText:{
  flexDirection:'row',
 },
 filter:{
  height:48,
  width:50,
  top:120,
  left:-5,
  borderRadius:14,
  borderStyle:'solid',
  backgroundColor:'#f0522f',
 },
 category:{
display:'flex',
flexDirection:'row',
justifyContent:'gap'

 },
 category1:{
  width:175,
  height:185,
  top:170,
  left:18,
  borderStyle:'solid',
  borderWidth:1,
  borderRadius:15,

 },
 category2:{
  width:175,
  height:185,
  top:170,
  left:40,
  borderStyle:'solid',
  borderWidth:1,
  borderRadius:15,
 }

});
