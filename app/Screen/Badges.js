import React from "react";
import { SafeAreaView, View, FlatList, Image, Text } from "react-native";
import { Fonts } from "../Assets/Fonts";

const Badge = () => {

const renderItem=({item, index }) => (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }} >
        <View style={{ padding: 10, width: '100%', backgroundColor: '#ffffff', borderRadius: 5, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
            <Image style={{ height: 80, width: 80, resizeMode: 'contain', }} source={item.img} />
            <View style={{ marginStart: 30 }}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={{ color: '#333333', fontSize: 16, fontWeight: '600' }}>{item.txt1} </Text>
                <Text style={{ color: '#FFA600', fontSize: 16, fontWeight: '600' }}>{item.text3} </Text>

                </View>
                <Text style={{ maxWidth: 200, color: '#727682', fontSize: 14, marginTop: 5 }}>{item.txt2} </Text>

            </View>
        </View>
    </View>
)


    return (
        <SafeAreaView style={{  backgroundColor: '#e5e5e5',flex:1 }}>
            <View style={{
                marginStart: 10,
                marginEnd: 10,
                marginTop: 5, marginBottom: 10
            }}>
                {/* <FlatList
                    data={data}
                    nestedScrollEnabled
                    showVerticalScrollIndicator={false}
                    style={{ flexGrow: 0, marginTop: 10, }}
                    scrollEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                /> */}

                {
                    data.map((item,index)=>{
                        return(
                            <View style={{
                                // flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }} >
                                <View style={{ padding: 10, width: '100%', backgroundColor: '#ffffff', borderRadius: 5, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={{ height: 60, width: 60, resizeMode: 'contain', }} source={item.img} />
                                    <View style={{ marginStart: 30 }}>
                                        <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Text style={{ color: '#333333', fontSize: 14, fontWeight: '600',fontFamily:Fonts.mosn_normal }}>{item.txt1} </Text>
                                        <Text style={{ color: '#FFA600', fontSize: 14, fontWeight: '600',fontFamily:Fonts.mosn_normal }}>{item.text3} </Text>
                        
                                        </View>
                                        <Text style={{ maxWidth: 200, color: '#727682', fontSize: 14, marginTop: 5,fontWeight:'500',fontFamily:Fonts.mosn_normal }}>{item.txt2} </Text>
                        
                                    </View>
                                </View>
                            </View>
                        )
                    })
                }

            </View>
        </SafeAreaView>
    )
}
export default Badge

const data = [{ id: '1', img: require('../Assets/images/duck.png'), txt1: 'First Stripe Earned', txt2: 'Top 10% of highest spending players in a month',text3:'x 3' }, { id: '2', img: require('../Assets/images/duck.png'), txt1: 'Born Winner', txt2: 'Top 10% of highest spending players in a month' }, { id: '3', img: require('../Assets/images/duck.png'), txt1: 'First Stripe Earned', txt2: 'Top 10% of highest spending players in a month' }, { id: '4', img: require('../Assets/images/duck.png'), txt1: 'Trader', txt2: 'Top 10% of highest spending players in a month', }]