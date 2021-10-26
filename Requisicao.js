import Globais from './Globais';
import React from 'react';
import {Text} from 'react-native';


export default function Main(){
  WebServiceCodigo();
}

function WebServiceCodigo(){

    var request = new XMLHttpRequest();
  
    request.onreadystatechange = (e) => {
      if (request.readyState !== 4) {
        return;
      }
    
      if (request.status === 200) {
        var xmlcidade = request.responseText;
  
        console.log('CIDADE--------------------------------------------------------');
        console.log(xmlcidade)
        
        var XMLParser = require('react-xml-parser');
  
        var xml = new XMLParser().parseFromString(xmlcidade); //Conversão do XML
        console.log('CONVERSÃO----------------------------------------------------------------------')
        console.log(xml.getElementsByTagName('id')) //Exibe todos os Objetos com o nome da cidade
  
        Globais.idcidade = xml.getElementsByTagName('id')[0].value //Pega o primeiro código de cidade
  
        console.log('ID DA CIDADE: '+Globais.idcidade)
        
        WebServiceHoje();
  
      
      } else {
        console.warn('Não foi possível comunicar com os servidores');
      }
    };
    
    let url = 'http://servicos.cptec.inpe.br/XML/listaCidades?city='+Globais.cidade
    request.open('GET', url);
    request.send();
  
      return;
  }
  
  
  function WebServiceHoje(){
  
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

        WebService6Dias();
  
      } else {
        console.warn('Não foi possível se comunicar com os servidores');
      }
    };
  
    request.open('GET', 'http://servicos.cptec.inpe.br/XML/cidade/'+Globais.idcidade+'/dia/0/ondas.xml');
    request.send();
      
      return;
  }
  