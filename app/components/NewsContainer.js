import React from 'react';
import { View, Text, TouchableOpacity, Image , StyleSheet, FlatList} from 'react-native';


export default function NewsContainer(props){
    let data = props.data

    const action = () => {
      alert('something')
    } ;
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
      },
      item: {
        backgroundColor: 'white',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
        justifyContent : 'flex-start',
        borderRadius: 20 ,
      },
      title: {
        fontSize: 18,
        fontWeight: "bold"
      },
      text: {
        fontSize: 12,
        padding : 5,
      },
      image: {
        width: 70, 
        height: 70,
        borderRadius: 40 ,
        marginTop: "5%",
      },
      ActionBtn: {
        borderRadius: 25,
        height: 40,
        width: 80,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8%",
        backgroundColor: "#39a0ff",
      },
      ButtonText: {
        color: 'white',
        fontSize: 14,
      }
    });

    const Item = ({title, text, link, date}: ItemProps) => (
      <View style={styles.item}>
        <Image style={styles.image} source={require("@assets/images/landscape.jpg")} /> 
        <View style={{flexDirection:'row', justifyContent : 'space-around'}}>
    
          {link ?     
          <>
            <View style={{width:'60%'}}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.text}>{text}</Text>
              <Text style={styles.text}>{date}</Text>
            </View>
            <TouchableOpacity style={styles.ActionBtn} onPress={action} >
                <Text style={styles.ButtonText}> Enlace </Text> 
            </TouchableOpacity>
          </>
          :
            <View style={{width:'80%'}}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.text}>{text}</Text>
              <Text style={styles.text}>{date}</Text>
            </View>
          }
        </View>
    
      </View>
    );    

    return (
    <View>
      <FlatList
        data={data.rows}
        renderItem={({item}) => <Item title={item.title} text={item.text} link={item.link} date={item.date}/>}
        keyExtractor={item => item.id}
      />
    </View>
    )
}
