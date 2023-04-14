import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Switch} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App(){
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState('Masculino')
  const [sexos, setSexos] = useState([
        {id: 1, nome: 'Masculino'},
        {id: 2, nome: 'Feminino'},
  ])
  const [escolaridade, setEscolaridade] = useState('')
  const [escolaridades, setEscolaridades] = useState([
        {id: 1, nome: 'Nada'},
        {id: 2, nome: 'Fundamental'},
        {id: 3, nome: 'Ensino medio'},
        {id: 4, nome: 'Graduação'},
        {id: 5, nome: 'Pós Graduação'}
  ])
  const [limite, setLimite] = useState(0)
  const [brasileiro, setBrasileiro] = useState(false)

  const [resultado, setResultado] = useState('')
  const [resultado_nome, setResultado_nome] = useState('')
  const [resultado_idade, setResultado_idade] = useState('')
  const [resultado_sexo, setResultado_sexo] = useState('')
  const [resultado_escolaridade, setResultado_escolaridade] = useState('')
  const [resultado_limite, setResultado_limite] = useState('')
  const [resultado_brasileiro, setResultado_brasileiro] = useState('')

  function cadastrar(){
      if( nome != '' &&
          idade != '' &&
          escolaridade != '' &&
          escolaridade != 'Nada'
      ){
        setResultado(("Cadastrado com sucesso"))
        setResultado_nome(("Nome:" + nome))
        setResultado_idade(("Idade:" + idade))
        setResultado_sexo(("Sexo:" + sexo))
        setResultado_escolaridade(("Escolaridade:" + escolaridade))
        setResultado_limite(("Limite:" + limite))
        setResultado_brasileiro(((brasileiro) ? "Brasileiro" : "Gringo"))

        setSexo(('Masculino'))
        setEscolaridade((''))
        setLimite((0))
        setBrasileiro((false))
      }
      else{
        setResultado(("Campos em branco"))
        setResultado_nome((''))
        setResultado_idade((''))
        setResultado_sexo((''))
        setResultado_escolaridade((''))
        setResultado_limite((''))
        setResultado_brasileiro((''))
      }
      
  }

    let sexoItem = sexos.map( (valor, chave) => {
      return <Picker.Item key={chave} value={valor.nome} label={valor.nome} />
    })

    let escolaridadeItem = escolaridades.map( (valor, chave) => {
      return <Picker.Item key={chave} value={valor.nome} label={valor.nome} />
    })

    return(
      <View style={styles.area}>

      <Text style={styles.titulo2}>Raphael</Text>
      <Text style={styles.titulo}>Abertura de conta</Text>

      <TextInput
      style={styles.input}
      placeholder="Digite o nome"
      onChangeText={ (valor) => setNome((valor)) }
      />

      <TextInput
      style={styles.input}
      placeholder="Digite a idade"
      onChangeText={ (valor) => setIdade((valor)) }
      />

      <Text style={styles.texto2}> Qual seu sexo? </Text>

      <Picker
        selectedValue={sexo}
        onValueChange={ (itemValue, itemIndex) => setSexo((itemValue)) }
      >
        {sexoItem}
      </Picker>
      

      <Text style={styles.texto2}> Qual sua escolaridade? </Text>

      <Picker
        selectedValue={escolaridade}
        onValueChange={ (itemValue, itemIndex) => setEscolaridade((itemValue)) }
      >
        {escolaridadeItem}
      </Picker>

      

      <Text style={styles.texto2}> Defina seu limite: </Text>

      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={ (valorSelecionado) => setLimite((valorSelecionado))}
        value={limite}
        step={15}
        minimumTrackTintColor='blue'
        maximumTrackTintColor='green'
        thumbTintColor='orange'
      />

      <Text style={styles.texto}> {limite} </Text>

      

      <Text style={styles.texto2}> Você é Brasileiro? </Text>

      <Switch 
        value={brasileiro}
        onValueChange={ (valorSwitch) =>  setBrasileiro((valorSwitch))}
      />

      

      <Button title="Cadastrar" onPress={cadastrar} />

      

      <Text style={styles.texto}> {resultado} </Text>

      
      <Text style={styles.texto2}> {resultado_nome} </Text>
      <Text style={styles.texto2}> {resultado_idade} </Text>
      <Text style={styles.texto2}> {resultado_sexo} </Text>
      <Text style={styles.texto2}> {resultado_escolaridade} </Text>
      <Text style={styles.texto2}> {resultado_limite} </Text>
      <Text style={styles.texto2}> {resultado_brasileiro} </Text>
      </View>
    );
  
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 25,
  },
  titulo:{
    fontSize: 18,
    alignSelf: 'center',
    color: 'orange',
    marginTop: 20
  },
  titulo2:{
    fontSize: 30,
    alignSelf: 'center',
    color: 'black',
    marginTop: 20
  },
  imagem:{
    width: 200, 
    height: 150, 
    marginTop: 10, 
    alignSelf: "center"
  }

})
