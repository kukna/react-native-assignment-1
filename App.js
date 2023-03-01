import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

class Assignment extends Component{
  render(){
    var date = new Date().getDate()
    const d = new Date();
    let weekday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
    let day = weekday.at([d.getDay()]); 
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return(


      <View style={styles.container}>


        <View style={styles.upper}>


          <View style={{alignItems:'center',justifyContent:'center'}}>
          <Text style={styles.text}>{weekday.at([d.getDay()-3])}</Text>
          <Text style={styles.date}>{date-3>0?date-3:''}</Text>
        </View>
        <View>
          <Text style={styles.text}>{weekday.at([d.getDay()-2])}</Text>
          <Text style={styles.date}>{date-2>0?date-2:''}</Text>
        </View>
        <View>
          <Text style={styles.text}>{weekday.at([d.getDay()-1])}</Text>
          <Text style={styles.date}>{date-1>0?date-1:''}</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.text}>{weekday.at([d.getDay()])}</Text>
          <View  style={{marginTop:10,width:30,height:30,borderColor: "#755805",padding:6,borderRadius:15,backgroundColor:'#755805'}}>
          <Text>{date}</Text>
          </View>
          </View>
        <View>
          <Text style={styles.text}>{weekday.at([d.getDay()+1])}</Text>
          <Text  style={styles.date}>{date+1}</Text>
        </View>
        <View>
          <Text style={styles.text}>{weekday.at([d.getDay()+2])}</Text>
          <Text  style={styles.date}>{date+2}</Text>
        </View>
        <View>
          <Text style={styles.text}>{weekday.at([d.getDay()+3])}</Text>
          <Text  style={styles.date}>{date+3}</Text>
        </View>
        </View>



        <View style={styles.down}>

          <View style={{flexDirection:'row',paddingTop:40,padding:20,}}>
          <TextInput
          style={{backgroundColor:'white',borderRadius:10,height:120,width:260,padding:10}}
        placeholder={`Item for ${year + '-' + month + '-' + date }`}
      />
        <View style={{alignItems:'flex-end',padding:20}}>
          <Text style={{fontSize:40,color:"#755805",}}>{date}</Text>
          <Text style={{fontSize:25,color:"#755805",}}>{day}</Text>
        </View>
        </View>
        <View style={{flexDirection:'row',paddingTop:40,padding:20,}}>
          <TextInput
          style={{backgroundColor:'white',borderRadius:10,height:120,width:260,padding:10}}
        placeholder={`Item for ${year + '-' + month + '-' + (date+1) }`}
      />
        <View style={{alignItems:'flex-end',padding:20}}>
          <Text style={{fontSize:40,color:"#755805",}}>{date+1}</Text>
          <Text style={{fontSize:25,color:"#755805",}}>{weekday.at([d.getDay()+1])}</Text>
        </View>
        </View>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  upper: {
    paddingTop:30,
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'white',
    padding:20,
    paddingTop:30,
    flex:2,
    alignItems:'center',
  },
  text:{
    color:'#ebd18a',
    fontSize:20,
    textAlign:'center',
  },
  date:{
    color:'#634a04',
    fontSize:20,
    paddingTop:10,
    
  },
  down:{
    backgroundColor:'#ebd18a',
    flex:14,
  }

}
)
  export default Assignment
