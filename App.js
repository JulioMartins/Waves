import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Form } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>    

      <View style={styles.containerPesquisa}>   
      <Form {...{ register, setValue, validation, errors }}>
        <TextInput type="text" placeholder="  Busque uma cidade..." style={styles.campoBusca} />
        <View style={styles.envioBusca} >
        <Button 
        color="#87cefa"   
        borderRadius="20" 
        width= "200"
        height= "50"
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Buscar" />    
        </View>  
        </Form> 
      </View>   

      <View>    
        <Text style={styles.campoCidade}>São Paulo</Text>
        <Text style={styles.campoData}>25/10/2021</Text>            
      </View>

      <View style={styles.containerResultado}>    

      <View style={styles.containerAgitacao}>   
      <Text style={styles.tituloResultado}>Periodo: Manhã</Text>    
      <Text style={styles.resultado}>Alt e Dir: 1.5 - S</Text>
      <Text style={styles.resultado}>Agitação: Fraco</Text>
      <Text style={styles.resultado}>Vento: 6.4 - S</Text>
      </View>

      </View>

      <View style={styles.containerResultado}>    

      <View style={styles.containerAgitacao}>   
      <Text style={styles.tituloResultado}>Periodo: Tarde</Text>    
      <Text style={styles.resultado}>Alt e Dir: 2.9 - C</Text>
      <Text style={styles.resultado}>Agitação: Moderado</Text>
      <Text style={styles.resultado}>Vento: 12.7 - N</Text>
      </View> 

       </View>

      <View style={styles.containerResultado}>        
        
      <View style={styles.containerAgitacao}>   
      <Text style={styles.tituloResultado}>Periodo: Noite</Text>    
      <Text style={styles.resultado}>Alt e Dir: 4.2 - S</Text>
      <Text style={styles.resultado}>Agitação: Forte</Text>
      <Text style={styles.resultado}>Vento: 14.1 - S</Text>
      </View>

      </View>

    </View>        
 
 );
}

const styles = StyleSheet.create ({

  //Formato da tela
  container: {
    width: '100%',
    height: '100%',
  },

  //container que armazena o campo de pesquisa e o botão de consulta
  containerPesquisa: {
    width: '100%' ,
    height: '15%',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '9%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
    
  //campo para realizar busca
  campoBusca: {   
    backgroundColor: '#e5e4e2',    
    borderRadius: 10,
    marginLeft: '5%',
    width: '60%', 
    height: 40     
  },

  //botao de consulta
  envioBusca: {        
    margin: '5%',    
    textAlign: 'center',
    color: "#fff",
    justifyContent: 'center',
    padding: 10
  },  

  //campo que aparece o nome da cidade ex: "São Paulo"
  campoCidade: {   
    backgroundColor: '#fff', 
    alignItems: 'center',
    textAlign: 'center',
    width: '100%', 
    height: 70, 
    fontSize: 35,
    fontWeight: '600',
  },

  //campo que aparece a data"
  campoData: {   
    backgroundColor: '#fff', 
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '-5%',
    marginBottom: '-3%',
    width: '100%', 
    height: 70, 
    fontSize: 20,
    fontWeight: '600',
  },

  containerResultadoAgitacao: {
    width: '100%' ,
    height: '60%',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: '-8%',
    marginBottom: '8%',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },

  containerResultado: {   
    width: '90%' ,
    height: 110,
    backgroundColor: '#e5e4e2',
    alignItems: 'center',
    marginLeft: '5%',
    marginBottom: '4%',
    borderRadius: 25,
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingBottom: '5%'
  },

  tituloResultado: {       
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    marginTop: '2%', 
    marginLeft: '0%',
    height: 20, 
    fontSize: 17,
    fontWeight: 'bold',
  },

  resultado: { 
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    marginTop: '2%', 
    marginLeft: '0%',
    height: 20, 
    fontSize: 17,
    fontWeight: 'normal',
  },

});

