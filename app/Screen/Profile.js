import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, FlatList,StatusBar,Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Fonts } from '../Assets/Fonts';
import Badge from './Badges';

const Profile = () => {
    const Tab = createMaterialTopTabNavigator();
    const options = { headerShown: false }
    // function Badges() {
    //     <SafeAreaView style={{ flex:1,backgroundColor:'red', marginTop:20 }}>
    //         <Text>hdgafeaggh</Text>
    //         {/* <FlatList
    //             data={data}
    //             showsVerticalScrollIndicator={false}
    //             renderItem={({ item, index }) => (
    //                 <View style={{ backgroundColor:'red',flex:1 }}>

    //                </View>
    //             )}
    //         /> */}
    //     </SafeAreaView>
    // }
    function GamePlayed() {
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>gfgtdf</Text>
        </View>
    }

    return (
        <SafeAreaView style={styles.container}>
             <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />
            
<ScrollView contentContainerStyle={{flexGrow:1}} nestedScrollEnabled style={{height:'100%'}}>
            <View style={styles.view1}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Image source={require('../Assets/images/sol.png')} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
                    <Text style={[styles.text1,{fontWeight:'600'}]}>Profile</Text>
                    <Image source={require('../Assets/images/msg.png')} style={{ height: 35, width: 35, resizeMode: 'contain' }} />
                </View>
                <View style={{ alignItems: 'center', marginTop: 15 }}>
                    <Image source={require('../Assets/images/profile.png')} style={{ height: 75, width: 75, resizeMode: 'contain' }} />
                    <View style={{ height: 24, width: 24, borderRadius: 15, borderWidth: 1, borderColor: '#171717', zIndex: 10, backgroundColor: '#fff', top: -30, right: -30, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ height: 9, width: 12,resizeMode:'contain' }} source={require('../Assets/images/up.png')} />
                    </View>
                    <Text style={[styles.text1,{ color: '#333333',}]}>Jina Simons</Text>
                    <Text style={[styles.text1,{fontSize:12,fontWeight:'500'}]}>6000 pts</Text>
                    <Text style={[styles.text1,{fontWeight:'500',lineHeight:20,marginTop:5}]}>{'I’m a software developer that has been in the crypto space since 2012. And I’ve seen it grow and falter over a period of time. Really happy to be here!'}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
                        <Image source={require('../Assets/images/log.png')} style={{ height: 14, width: 18, resizeMode: 'contain' }} />
                        <Text style={[styles.text1,{marginStart: 15,}]}>Logout</Text>
                    </View>
                </View>
                <View style={{ padding: 10, borderRadius: 5, borderColor: '#EEEAF3', width: '100%', borderWidth: 2, marginTop: 25,backgroundColor:'#fff' }}>
                    <Image source={require('../Assets/images/star.png')} style={{height:30,width:30,resizeMode:'contain',zIndex:100,top:-25,alignSelf:'center'}} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: -20, marginBottom: 10 }}>
                        <View>
                            <Text style={styles.text1}>Under or Over</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>
                                <Image source={require('../Assets/images/uparrw.png')} style={{ height: 30, width: 30, resizeMode: 'contain', marginEnd: 10 }} />
                                <Text style={styles.text2}>81 %</Text>
                            </View>
                        </View>
                        <View>
                            <Text style={{fontWeight:'600',color:'#727682',fontSize:14,fontFamily:Fonts.mosn_normal}}>Top 5</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5, marginEnd: 25 }}>
                                <Image source={require('../Assets/images/dwn.png')} style={{ height: 30, width: 30, resizeMode: 'contain', marginEnd: 10 }} />
                                <Text style={styles.text2}>-51 %</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: 5, backgroundColor: '#f3f2f7', marginTop: 15 }} />
           
<View style={{height:Dimensions.get('window').height}}>
            <Tab.Navigator
                screenOptions={{
                      tabBarActiveTintColor: '#6231AD',
                      tabBarInactiveTintColor: '#727682',
                    tabBarLabelStyle: {
                        fontSize: 14,
                        textTransform: 'none',
                        margin: -10,
                        fontFamily:Fonts.mosn_normal
                        
                    },
                    //   style: {backgroundColor: concrete},

                 tabBarIndicatorStyle: {
                        backgroundColor: '#30A3B5',
                        height: 1.5,
                    },
                }}>
                <Tab.Screen
                    name="Games Played"
                    component={GamePlayed}
                    options={options}
                />
                <Tab.Screen
                    name="Badges"
                    component={Badge }
                    options={options}
                />

            </Tab.Navigator>
            </View>
          </ScrollView>
        </SafeAreaView>

    )

}
export default Profile

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FFFFFF' },
    view1:{ marginTop: 35, paddingStart: 20, paddingEnd: 20 },
    text1:{fontWeight:'600',color:'#727682',fontSize:14,fontFamily:Fonts.mosn_normal},
    text2:{ color: '#4F4F4F', fontSize: 24, fontWeight: '700',fontFamily:Fonts.mosn_normal },
})

