import React from 'react'
import { View, Text, StyleSheet, Dimensions, SafeAreaView,Image, } from 'react-native'

const List = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.list}>
                <View>
                    <Image style={{height:220}} resizeMode='cover'source={{uri:props.Image}}/>
                </View>
                <View style={styles.bottomContainer}>
                <View style={styles.bottomContainer}> 
                    <View>
                        <Text style={styles.title}>{props.Name}</Text>
                        <Text style={styles.title}>{props.Location}</Text>
                    </View>
                    <View>
                        {props.IsPopular && <Image resizeMode='contain' style={{width:50,height:40,marginLeft: 30}} source={require('../assets/popular3.png')}/>}          
                    </View>
                    <View>
                        {props.IsOpenNow && <Image resizeMode='contain' style={{width:60,height:40,marginLeft: 30}} source={require('../assets/open.png')}/>}
                    </View>           
                </View>
                <View style={styles.bottomContainer}>
                    <Image style={{width:20,height:20}} source={require('../assets/like.png')}/>  
                    <Text style={{fontSize:15,fontWeight:"bold"}}>{props.Likes}</Text>                            
                </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:"#F0F4C3",
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    list:{  
        flex:1,
        height:Dimensions.get('window').height*0.3,
        margin:10,
        borderRadius:10,            
        },
    bottomContainer:{
        height:Dimensions.get('window').height*0.06,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        backgroundColor:'#B3E5FC',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 5     
        },
    title:{
        fontSize:15,
        fontWeight:'bold',
        marginLeft:3,
        }
    })

export {List}