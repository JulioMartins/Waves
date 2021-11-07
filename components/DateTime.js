import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Globais from './Globais';


const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}


const DateTime = () => {

    const ajuda = []

    for(x = 0; x<3; x++){
        if(Globais.altura[x] > 2){
            ajuda[x] = "Boa altura para aproveitar as ondas!"
        }else if(Globais.altura[x] <2){
            ajuda[x] = "Boa altura para banhos mais suaves"
        }else{
            ajuda[x] = "Cuidado com as ondas, estão mais altas do que de costume"
        }
    }

    const ajudavent = []

    for(x = 0; x<3; x++){

        if(Globais.vento < 1){

        }else if(Globais.vento[x] > 0 & Globais.vento[x]< 5){
            ajudavent[x] = "Calmo: Os ventos estão calmos, sem muita sensação";

        }else if(Globais.vento[x] > 5 & Globais.vento[x]< 11){
            ajudavent[x] = "Aragem: Os ventos estão um pouco menos calmo, mas sem muita sensação ainda";

        }else if(Globais.vento[x] > 11 & Globais.vento[x]< 19){
            ajudavent[x] = "Brisa Leve: ventos um pouco mais leve";

        }else if(Globais.vento[x] > 19 & Globais.vento[x]< 28){
            ajudavent[x] = "Brisa Moderada: ventos agitados, mais fortes";

        }else{
            ajudavent[x] = "Ventos mais fortes, cuidado!";
        }
    }

    
    return (
        <ScrollView>
            <View style={styles.container}>  
                <View>
                    <Text style={styles.subheading}>{Globais.cidade}</Text>
                        <View style={styles.weatherItemContainer}>
                            <Text style={styles.tempo}>Manhã</Text>
                                <WeatherItem title="Altura" value={Globais.altura[0]+"M"}/>
                                <WeatherItem title="Agitação" value={Globais.agitação[0]}/>
                                <WeatherItem title="Direção" value={Globais.direçao[0]}/>
                                <WeatherItem title="Vento" value={Globais.vento[0]}/>
                                <WeatherItem title="Vento Direção    " value={Globais.ventodir[0]}/>
                                <Image style={styles.image} source={require('../assets/sun.png')} />
                                <Text style={styles.tempo}>{ajuda[0]}</Text>
                                <Text style={styles.tempo}>{ajudavent[0]}</Text>
                        </View>
                        <View style={styles.weatherItemContainer}>
                        <Text style={styles.tempo}>Tarde</Text>
                                <WeatherItem title="Altura" value={Globais.altura[1]+"M"}/>
                                <WeatherItem title="Agitação" value={Globais.agitação[1]}/>
                                <WeatherItem title="Direção" value={Globais.direçao[1]}/>
                                <WeatherItem title="Vento" value={Globais.vento[1]}/>
                                <WeatherItem title="Vento Direção    " value={Globais.ventodir[1]}/>
                                <Image style={styles.image} source={require('../assets/sunset.png')} />
                                <Text style={styles.tempo}>{ajuda[1]}</Text>
                                <Text style={styles.tempo}>{ajudavent[1]}</Text>
                        </View>
                        <View style={styles.weatherItemContainer}>
                        <Text style={styles.tempo}>Noite</Text>
                                <WeatherItem title="Altura" value={Globais.altura[2]+"M"}/>
                                <WeatherItem title="Agitação" value={Globais.agitação[2]}/>
                                <WeatherItem title="Direção" value={Globais.direçao[2]}/>
                                <WeatherItem title="Vento" value={Globais.vento[2]}/>
                                <WeatherItem title="Vento Direção    " value={Globais.ventodir[2]}/>
                                <Image style={styles.image} source={require('../assets/night.png')} />
                                <Text style={styles.tempo}>{ajuda[2]}</Text>
                                <Text style={styles.tempo}>{ajudavent[2]}</Text>

                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1.5,
        flexDirection:"row",
        justifyContent:'space-between',
        padding: 15
    },
    heading: {
        fontSize: 45,
        color:'white',
        fontWeight: '100'
    },
    subheading: {
        fontSize: 25,
        marginTop: 10,
        color: '#eee',
        fontWeight: '300',
        textAlign: 'center',
    },
    rightAlign: {
        textAlign:'right',
        marginTop: 20
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        width: "100%",
        borderRadius: 50,
        padding: 20,
        marginTop: 10
    }, 
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color:'white',
    },
    weatherItemTitle: {
        color:'white',
        fontSize: 15,
        fontWeight: '100'
    },
    tempo:{
        color: 'white',
        textAlign: 'center',

    },
    image:{

        width: '25%',
        height: 70,
        left: '38.5%',

    }
})

export default DateTime
