import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Switch} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      nome: '',
      idade: '',
      sexo: '',
      sexos: [
        {id: 1, nome: 'Masculino'},
        {id: 2, nome: 'Feminino'},
      ],
      escolaridade: '',
      escolaridades: [
        {id: 1, nome: 'Nada'},
        {id: 2, nome: 'Fundamental'},
        {id: 3, nome: 'Ensino medio'},
        {id: 4, nome: 'Graduação'},
        {id: 5, nome: 'Pós Graduação'}
      ],
      limite: 0,
      brasileiro: false
    };
    
    this.cadastrar = this.cadastrar.bind(this);
  }


  cadastrar(){
    if ( (this.state.numero1 === '') || (this.state.numero2 === '')){
      alert('É obrigatório digitar os dois numeros')
      return;
    }

    res = (this.state.numero1 / (this.state.numero2 * this.state.numero2)).toFixed(2)
    
    if(res < 18.5){
      this.setState({resultado: 'Abaixo do peso, seu Frango ' + res});
    }
    else if(res >= 18.5 && res <= 24.9 ){
      this.setState({resultado: 'Peso normal ' + res});
    }
    else if(res >= 25 && res <= 29.9 ){
      this.setState({resultado: 'Sobrepeso ' + res});
    }
    else if(res >= 30 && res <= 34.9 ){
      this.setState({resultado: 'Obesidade Grau I ' + res});
    }
    else if(res >= 35 && res <= 39.9 ){
      this.setState({resultado: 'Obesidade Grau II ' + res});
    }
    else if(res >= 40){
      this.setState({resultado: 'Obesidade Grau III, mano vai fazer uma dieta ' + res});
    }
    else{
      this.setState({resultado: 'Alguma coisa ta muito errada ' + res});
    }
  }


  render(){

    let sexoItem = this.state.sexos.map( (valor, chave) => {
      return <Picker.Item key={chave} value={valor.nome} label={valor.nome} />
    })

    let escolaridadeItem = this.state.escolaridades.map( (valor, chave) => {
      return <Picker.Item key={chave} value={valor.nome} label={valor.nome} />
    })

    return(
      <View style={styles.area}>

      <Text style={styles.titulo2}>Raphael</Text>
      <Text style={styles.titulo}>Abertura de conta</Text>

      <TextInput
      style={styles.input}
      placeholder="Digite o nome"
      onChangeText={ (valor) => this.setState({numero1: valor}) }
      />

      <TextInput
      style={styles.input}
      placeholder="Digite a idade"
      onChangeText={ (valor) => this.setState({numero1: valor}) }
      />

      <Picker
        selectedValue={this.state.sexo}
        onValueChange={ (itemValue, itemIndex) => this.setState({sexo: itemValue}) }
      >
        {sexoItem}
      </Picker>

      <Picker
        selectedValue={this.state.escolaridade}
        onValueChange={ (itemValue, itemIndex) => this.setState({escolaridade: itemValue}) }
      >
        {escolaridadeItem}
      </Picker>

      <Slider
        minimumValue={0}
        maximumValue={100}
        onValueChange={ (valorSelecionado) => this.setState({limite: valorSelecionado})}
        value={this.state.limite}
        step={15}
        minimumTrackTintColor='blue'
        maximumTrackTintColor='green'
        thumbTintColor='orange'
      />

      <Switch 
      value={this.state.brasileiro}
      onValueChange={ (valorSwitch) => this.setState({brasileiro: valorSwitch})}
      />


      <Text style={{textAlign: 'center', fontSize:30}}>
        {(this.state.brasileiro) ? "Ativo" : "Inativo"}
      </Text>


      




      <Button title="Verificar" onPress={this.cadastrar} />


      <Text style={styles.texto}> {this.state.limite} </Text>
      </View>
    );
  }
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


export default App;