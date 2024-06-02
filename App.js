import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,TextInput,ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView>
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
          <Text style={{top:130 , right:240 , fontSize:16 , fontWeight:700}}>Search</Text>
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

      {/* On-going task section */}
      <Text style={{top:200 , left:20,fontWeight:700,fontSize:30}}>Ongoing Task</Text>
      <View style={{display:'flex',flexDirection:'column' ,justifyContent:'space-evenly'}}>
        <View style={styles.Task}>
         <Text style={{textAlign:'center',top:50,left:-65,fontWeight:500,fontSize:16}}>Mobile App Development</Text>
        </View>
        <View style={styles.Task}>
         <Text style={{textAlign:'center',top:50,left:-65,fontWeight:500,fontSize:16}}>Web Development</Text>
        </View>
        <View style={styles.Task}>
         <Text style={{textAlign:'center',top:50,left:-65,fontWeight:500,fontSize:16}}>Push Ups </Text>
        </View>
       </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
     borderRadius:30,
     width: 420 ,
     height:1000,
    
  },
  frame1:{
    top:70,
    left:20,
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
  right:-30,
  backgroundColor:'#ffffff',
  height:50,
  borderRadius:30,
 },
 searchBloc:{
  width:280,
  height:50,
 borderWidth:1,
  top:120,
  left:20,
  borderRadius:14,
  border: 'Mixed solid #FBF9F7',
 },
 searchIcon:{
  width:16,
  height:16,
  top:135,
  right:250,
  

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
 },
 Task:{
width:365,
height:128,
top:205,
left:20,
borderWidth:1,
borderRadius:15,
borderColor:'#E8D1BA',
marginBottom:10,
backgroundColor:'#fbf9f7'
 },

});
