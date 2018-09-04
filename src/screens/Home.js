import React from 'react';
import {StyleSheet,TouchableOpacity,Image, View, Text, ImageBackground} from 'react-native';
import Colors from '../Colors';
export default class Home extends React.Component{

    render(){

        const circleStyle = {height:'100%', width:'100%', tintColor:Colors.ThirdColor}

        return(
            <ImageBackground style= {styles.bg}source={require('../assets/images/home_bg.png')}>
            <View style={styles.container}>

                <View style={styles.up_con}>

                    <View style={styles.header}>

                    </View>

                    <View style={styles.welcome}>

                    </View>

                </View>
                
                <View style={styles.down_con}>

                    <View style={styles.new_event_btn}>

                        <TouchableOpacity>

                            <Text>رویداد جدید</Text>
                        
                        </TouchableOpacity>
                            
                    </View>

                    <View style={styles.busy_info_con}>

                        <View style={styles.cirlc_con}>
                            <Image style = {circleStyle} source={require('../assets/images/circle.png')}>

                            </Image>

                        </View>

                        <View>
                            
                        </View>

                    </View>

                    <View style={styles.see_events_con}>

                        <Text>مشاهده ی برنامه ها و رویداد های جدید</Text>


                    </View>
                    

                </View>

            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({

    bg:{

        height:'100%',
        width:'100%',

    },

    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    },

    up_con:{

        height:'36%',
        width:'96%',
        padding:5,
        backgroundColor:'red'
    },

    header:{
        height:'20%',
        width:'100%',
        backgroundColor:'black'
    },

    welcome:{
        height:'80%',
        width:'100%',
        backgroundColor:'orange'
    },

    down_con:{
        height:'60%',
        width:'96%',
        padding:10,
        backgroundColor:'green'

    },

    new_event_btn:{

        height:'16%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow'

    },

    busy_info_con:{

        height:'54%',
        width:'100%',
        alignItems:'center',
        backgroundColor:'gray'
    },

    cirlc_con:{
        height:'68.7%',
        width:'38.6%',
        elevation:10
    },

    see_events_con:{

        height:'30%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },

    text_reg:{

        fontSize:20,

    },

  });