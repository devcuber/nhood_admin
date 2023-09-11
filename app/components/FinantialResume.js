import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

export default function FinantialResume(props){
    let resume_data = props.data
    let open = true

    
    const Row = ({item}: ItemProps) => {
      const [isShowingDetails, setIsShowingDetails] = useState(false);
      const action = () => {
        setIsShowingDetails(!isShowingDetails)
      } ;

      return (
        <View style={styles.item}>
          <View style={{flexDirection:'row', width:'80%'}} >
            <TouchableOpacity style={styles.ActionBtn} onPress={action} >
              { isShowingDetails ? (
                <Text style={styles.ButtonText}> ▲ </Text> 
              ):(
                <Text style={styles.ButtonText}> ▼ </Text> 
              )}
            </TouchableOpacity>
            <View style={{width:'100%'}} >
              <TouchableOpacity onPress={action} >
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={[styles.text, item.total_status == 'no-debt'? {color:'green'} : {color:'red'} ]}>{item.total_label} {item.total}</Text>
                </View>
              </TouchableOpacity>
              { isShowingDetails ? (
              <FlatList 
                data={item.fields}
                renderItem={({item}) => (
                  <View style={{flexDirection:'row', justifyContent:'space-between', margin:3}}>
                    <Text style={styles.title} >{item.label} </Text>
                    <Text style={[styles.text, item.status == 'paid'? {color:'green'} : {color:'red'} ]}>{item.value}</Text>
                  </View>
                )}
              />
              ):(
                null
              )}
            </View>
          </View>
        </View>
      )
    } 

    return (
      <View style ={styles.container}>
        <FlatList
            data={resume_data.rows}
            renderItem={({ item }) => <Row item={item}/> }
            keyExtractor={(item, index) => index}
          />
      </View>      
    )
}

const styles = StyleSheet.create({
  container   : {
    backgroundColor: '#fff',
    margin:10,
    overflow:'hidden',
    height : '70%'
  },
  item:{
    borderTopWidth: 1
  },
  titleContainer : {
      flexDirection: 'row',
      justifyContent:'space-between',
      alignItems : 'flex-end',
      alignContent:'center'
  },
  title       : {
      flex    : 1,
      padding : 10,
      color   :'#2a2f43',
      fontWeight:'bold'
  },
  button      : {
    color   :'#2a2f43',
    fontWeight:'bold',
  },
  body        : {
      padding     : 10,
      paddingTop  : 0
  },
  ActionBtn : {
    borderRadius: 25,
    height: 30,
    width: 30,
    margin : 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#39a0ff",
  },
  ButtonText : {
    color:"white"
  }

});