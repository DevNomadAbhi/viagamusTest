import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, ImageBackground, Dimensions, Image, TouchableOpacity, Modal, Pressable, StatusBar } from 'react-native'
import { Fonts } from "../Assets/Fonts";


const Screen1 = () => {

    const [visible, setVisible] = useState(false)
    const [ticket, setTicket] = useState(0)
    const item = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

    const openModal = () => {
        setVisible(true)
        console.log(visible);
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} barStyle={'light-content'} />

            <View style={{ marginStart: 15, marginEnd: 15, marginTop: 35 }}>
                <Text style={{ color: '#333333', fontWeight: '600', fontSize: 16,fontFamily:Fonts.mosn_normal }}>Today's Games</Text>
                <View style={{ width: '100%', height: Dimensions.get('window').height - 300, backgroundColor: '#fff', marginTop: 25, }}>
                    <View style={{ flex: 1, height: 120, borderTopLeftRadius: 10 }}>
                        <ImageBackground source={require('../Assets/images/rectangle.png')} style={{ height: 110, paddingStart: 15, paddingEnd: 15, }} >
                            <View style={{ flexDirection: 'row', marginTop: 18, justifyContent: 'space-between' }}>
                                {/* <View style={{ flexDirection: 'row' }}> */}
                                <Text style={[styles.text,{fontSize:12,marginTop:2.5}]}>UNDER OR OVER</Text>
                                {/* <Image source={require('../Assets/images/i.png')} style={{ height: 20, width: 20, marginStart: 14 }} /> */}
                                {/* </View> */}
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={[styles.text, { color: '#B296DC' }]}>Starting In</Text>
                                    <Image source={require('../Assets/images/clock.png')} style={{ height: 20, width: 20, marginStart: 5, marginEnd: 5 }} />
                                    <Text style={styles.text}>03:14:15</Text>
                                </View>
                            </View>
                            <Text style={[styles.text, { marginTop: 20 }]}>Bitcoin price will be under</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.text, { color: '#ffffff', fontSize: 16 }]}>$24,524</Text>
                                <Text style={styles.text,{color:'#fff'}}> at 7 a ET on 22nd Jan'21</Text>

                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{ width: '100%', paddingStart: 15, paddingEnd: 15, paddingTop: 15, flex: 1.5 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={styles.text2}>PRIZE POOL</Text>
                                <Text style={styles.text3}>$12,000</Text>

                            </View>
                            <View>
                                <Text style={styles.text2}>UNDER</Text>
                                <Text style={styles.text3}>3.25x</Text>

                            </View><View>
                                <Text style={styles.text2}>OVER</Text>
                                <Text style={styles.text3}>$1.25x</Text>

                            </View><View>
                                <Text style={styles.text2}>ENTRY FEES</Text>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', }}>
                                    <Text style={styles.text3}>5</Text>
                                    <View style={{ height: 15, width: 15, borderRadius: 20 / 2, backgroundColor: '#FFD600', marginStart: 15, marginTop: 5 }} />
                                </View>


                            </View>

                        </View>
                        <Text style={{ marginTop: 15, color: '#727682', fontSize: 14, fontWeight: '600',fontFamily:Fonts.mosn_normal }}>What's your prediction?</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20, marginBottom: 20 }}>
                            <TouchableOpacity style={{ height: 50, paddingStart: 35, paddingEnd: 35, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#452C55', borderRadius: 25, flexDirection: 'row' }}>
                                <Image source={require('../Assets/images/arrow.png')} style={{ height: 12, width: 15, resizeMode: 'contain', marginEnd: 5 }} />
                                <Text style={[styles.text, { color: '#ffffff', fontSize: 16 }]}>Under</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 50,  paddingStart: 35, paddingEnd: 35, paddingTop: 5, paddingBottom: 5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#6231AD', borderRadius: 25, flexDirection: 'row' }} onPress={() => openModal()}>
                                <Image source={require('../Assets/images/arrow.png')} style={{ height: 12, width: 15, resizeMode: 'contain', marginEnd: 5, transform: [{ rotate: '180deg' }] }} />

                                <Text style={[styles.text, { color: '#ffffff', fontSize: 16 }]}>Over</Text>
                            </TouchableOpacity>

                        </View>

                    </View><View style={{ backgroundColor: '#F6F3FA', width: '100%', paddingStart: 15, paddingEnd: 15, paddingTop: 15, flex: 1 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../Assets/images/per.png')} style={{ height: 12, width: 12, resizeMode: 'contain' }} />
                                <Text style={{ color: '#727682', fontSize: 14, fontWeight: '600',fontFamily:Fonts.mosn_normal }}> 355 Players</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../Assets/images/chart.png')} style={{ height: 13, width: 17, resizeMode: 'contain' }} />
                                <Text style={{ color: '#727682', fontSize: 14, fontWeight: '600',fontFamily:Fonts.mosn_normal }}> View Chart</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 20, marginBottom: 20, flexDirection: 'row' }}>
                            <View style={{ height: 10, width: '70%', borderTopLeftRadius: 5, borderBottomLeftRadius: 5, backgroundColor: '#FE4190' }} />
                            <View style={{ height: 10, width: '30%', borderTopRightRadius: 5, borderBottomRightRadius: 5, backgroundColor: '#2DABAD' }} />


                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
                            <Text style={{ color: '#B5C0C8', fontSize: 12, fontWeight: '500' }}> 232 predicted under</Text>

                            <Text style={{ color: '#B5C0C8', fontSize: 12, fontWeight: '500' }}> 123 predicted over</Text>

                        </View>
                    </View>
                </View>
            </View>

            <Modal
                animationType='slide'
                transparent={true}
                visible={visible}
                onRequestClose={() => setVisible(false)}>
                <Pressable
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={() => setVisible(false)}>
                    <View style={styles.modalView}>
                        <View
                            style={{
                                height: 5,
                                width: 40,
                                borderRadius: 10,
                                backgroundColor: '#B5C0C8',
                                alignSelf: 'center',
                                marginTop: 15,
                            }}
                        />
                        <View style={{ marginStart: 15, marginEnd: 15, marginTop: 15, }}>
                            <Text style={{ color: '#333333', fontWeight: '600', fontSize: 16,fontFamily:Fonts.mosn_normal }}>Your Prediction Is Under</Text>
                            <Text style={{ color: '#727682', fontSize: 12, fontWeight: 'bold', marginTop: 20,fontFamily:Fonts.mosn_normal }}>ENTRY TICKETS</Text>
                            <View style={{ height: 160, justifyContent: 'center', paddingStart: 20, paddingEnd: 20, }}>
                                <Picker selectedValue={ticket}
                                    dropdownIconColor={'#171717'}
                                    style={{ color: '#171717',fontSize:16,fontFamily:Fonts.mosn_normal }}
                                    onValueChange={(itemValue, itemIndex) => setTicket(itemValue)} >
                                    {item.map((item, index) => { return <Picker.Item value={item} label={item} key={index} /> })}
                                </Picker>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View><Text style={[styles.text3, { color: '#B5C0C8', fontWeight: '500',fontSize:12,fontFamily:Fonts.mosn_normal }]}>{'You can win'}</Text>
                                    <Text style={[styles.text3, { color: '#03A67F',fontWeight:'600',fontFamily:Fonts.mosn_normal }]}>{'$2000'}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center' }}>
                                    <Text style={[styles.text3,{fontFamily:Fonts.mosn_normal}]}>Total</Text>
                                    <View style={{ height: 15, width: 15, borderRadius: 20 / 2, backgroundColor: '#FFD600', marginStart: 10, marginEnd: 10, marginTop: 5 }} />
                                    <Text style={[styles.text3,{fontFamily:Fonts.mosn_normal}]}>5</Text>

                                </View>
                            </View>

                            <TouchableOpacity style={{ height: 50, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#6231AD', borderRadius: 25, marginTop: 15 }} onPress={() => setVisible(false)}>
                                <Text style={[styles.text, { color: '#ffffff', fontSize: 14,fontFamily:Fonts.mosn_normal }]}>Submit my prediction</Text>
                            </TouchableOpacity>

                            <View
                                style={{
                                    height: 5,
                                    width: 100,
                                    borderRadius: 10,
                                    backgroundColor: '#B5C0C8',
                                    alignSelf: 'center',
                                    marginTop: 30,
                                }}
                            />

                        </View>
                    </View>

                </Pressable>
            </Modal>

        </SafeAreaView>
    )
}
export default Screen1
const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#e5e5e5' },
    text: { color: '#D2BAF5', fontSize: 14, fontWeight: '600' ,fontFamily:Fonts.mosn_normal}, text2: { color: '#B5C0C8', fontSize: 14 ,fontFamily:Fonts.mosn_normal}, text3: { marginTop: 5, color: '#333333', fontSize: 14, fontWeight: '600',fontFamily:Fonts.mosn_normal },
    modalView: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: Dimensions.get('window').height / 1.85,
        marginTop: 'auto',
        width: '100%',
    },
})