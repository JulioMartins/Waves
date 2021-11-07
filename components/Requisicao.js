import Globais from './Globais';
import { StyleSheet, Text, Button, View, TextInput, ScrollView} from 'react-native';
import DateTime from './DateTime';


export default function Main(){
  WebServiceCodigo();
  DateTime();
}

const WebServiceCodigo = () => {

  //   var request = new XMLHttpRequest();
  
  //   request.onreadystatechange = (e) => {
  //     if (request.readyState !== 4) {
  //       return;
  //     }
    
  //     if (request.status === 200) {
  //       var xmlcidade = request.responseText;
  
  //       console.log('CIDADE--------------------------------------------------------');
  //       console.log(xmlcidade)
        
  //       var XMLParser = require('react-xml-parser');
  
  //       var xml = new XMLParser().parseFromString(xmlcidade); //Conversão do XML
  //       console.log('CONVERSÃO----------------------------------------------------------------------')
  //       console.log(xml.getElementsByTagName('id')) //Exibe todos os Objetos com o nome da cidade
  
  //       Globais.idcidade = xml.getElementsByTagName('id')[0].value //Pega o primeiro código de cidade
  
  //       console.log('ID DA CIDADE: '+Globais.idcidade)
        
  //       WebServiceHoje();
  
      
  //     } else {
  //       console.warn('Não foi possível comunicar com os servidores');
  //     }
  //   };
    
    
  //   let url = 'http://servicos.cptec.inpe.br/XML/listaCidades?city='+Globais.cidade
  //   request.open('GET', url);
  //   request.send();

  //   return;
  // }
  
  
  // function WebServiceHoje(){
  
    var request = new XMLHttpRequest();


    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
  
      if (request.status === 200) {
  
        var xmlcodigo = request.responseText;
        console.log('ONDAS HOJE-----------------------------------------------------');
        console.log(xmlcodigo)
  
        var XMLParser1 = require('react-xml-parser');
        var xml1 = new XMLParser1().parseFromString(xmlcodigo);    // Assume xmlText contains the example XML
        console.log('CONVERSÃO--------------------------------------------------------')
        console.log(xml1.getElementsByTagName('cidade'))
  
        for(var x = 0; x<3; x++){
          Globais.agitação[x] = xml1.getElementsByTagName('agitacao')[x].value
          Globais.altura[x] = xml1.getElementsByTagName('altura')[x].value
          Globais.direçao[x] = xml1.getElementsByTagName('direcao')[x].value
          Globais.vento[x] = xml1.getElementsByTagName('vento')[x].value
          Globais.ventodir[x] = xml1.getElementsByTagName('vento_dir')[x].value
        }
        
        for(x = 0; x<3; x++){
          console.log('Altura: ', Globais.altura[x])
          console.log('Direção: ', Globais.direçao[x])
          console.log('Vento: ', Globais.vento[x])
          console.log('Vento Direção: ', Globais.ventodir[x])
        }
      
        console.log(request.responseText)

      } else {
        console.warn('https://localhost:44320/api/consultaOnda/consultaOnda/' + Globais.cidade);
        console.warn('Não foi possível se comunicar com os servidores');
      }
    };
         
    request.open('GET', 'http://localhost:44320/api/consultaOnda/consultaOnda/'+Globais.cidade);
    //request.open('GET', 'http://servicos.cptec.inpe.br/XML/cidade/'+Globais.idcidade+'/dia/0/ondas.xml'); https://localhost:44320/api/consultaOnda/consultaOnda/1
    request.send();    
      
      return;
  }
  
  // function WebService6Dias(){
  
  //   var request = new XMLHttpRequest();
  //   request.onreadystatechange = (e) => {
  //     if (request.readyState !== 4) {
  //       return;
  //     }
    
  //     if (request.status === 200) {
  
  //       var xml6dias = request.responseText;
  //       console.log('ONDAS 6 DIAS-----------------------------------------------------------------:');
  //       console.log(xml6dias)
  
  //       var XMLParser2 = require('react-xml-parser');
  //       var xml2 = new XMLParser2().parseFromString(xml6dias);    // Assume xmlText contains the example XML
  //       console.log('CONVERSÃO------------------------------------------------------------------')
  //       console.log(xml2.getElementsByTagName('cidade'))
  
  //      for(var y = 0; y<41; y++){
  //         console.log('Dia '+ y ,xml2.getElementsByTagName('dia')[y].value)
  //         console.log('Agitação '+ y ,xml2.getElementsByTagName('agitacao')[y].value)
  //         console.log('Altura '+ y ,xml2.getElementsByTagName('altura')[y].value)
  //         console.log('Direção '+ y ,xml2.getElementsByTagName('direcao')[y].value)
  //         console.log('Vento '+ y ,xml2.getElementsByTagName('vento')[y].value)
  //         console.log('Direção do Vento '+ y ,xml2.getElementsByTagName('vento_dir')[y].value)
  //         console.log('--------------------------------------------')
  
  //         Globais.diay[y] = xml2.getElementsByTagName('dia')[y].value
  //         Globais.agitaçãoy[y] = xml2.getElementsByTagName('agitacao')[y].value
  //         Globais.alturay[y] = xml2.getElementsByTagName('altura')[y].value
  //         Globais.direçaoy[y] = xml2.getElementsByTagName('direcao')[y].value
  //         Globais.ventoy[y] = xml2.getElementsByTagName('vento')[y].value
  //         Globais.ventodiry[y] = xml2.getElementsByTagName('vento_dir')[y].value
  //       }
        
  //       for(y = 0; y<41; y++){
  //         console.log('Dia: ', Globais.diay[y])
  //         console.log('Altura: ', Globais.alturay[y])
  //         console.log('Direção: ', Globais.direçaoy[y])
  //         console.log('Vento: ', Globais.ventoy[y])
  //         console.log('Vento Direção: ', Globais.ventodiry[y])
  //       }
  
  //     } else {
  //       console.warn('Não foi possível se comunicar com os servidores');
  //     }
  //   };
  
  //   request.open('GET', 'http://servicos.cptec.inpe.br/XML/cidade/'+Globais.idcidade+'/todos/tempos/ondas.xml');
  //   request.send();
      
  //     return;
  // }

  const styles = StyleSheet.create ({
  image: {
    width: '100%',
    marginTop: '10%',
    padding: 5
  },

})