import React from 'react';
import {Text, View, ActivityIndicator, StyleSheet} from 'react-native';
import {Item, Input, Button, Toast} from 'native-base';
import axios from 'axios';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dataDetails: null,
      loader: false,
      textInput: '',
    };
  }

  //changes on input
  onchangeInput = text => {
    this.setState({textInput: text});
  };

  showIssue = () => {
    Toast.show({
      text: 'No Records to display',
      position: 'bottom',
    });
  };

  fetchCountryDetails = async data => {
    this.setState({loader: true});
    try {
      let response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${data}`,
      );

      if (response.data && response.data.length > 0) {
        this.props.navigation.navigate('Details', {
          details: response.data,
        });
      } else {
        throw Error('No Records to display');
      }
    } catch (e) {
      this.showIssue();
    }

    this.setState({textInput: '', loader: false});
  };

  onSubmit = () => {
    this.fetchCountryDetails(this.state.textInput);
  };

  remderOverLayIndicator = () => (
    <View style={styles.loader}>
      <ActivityIndicator color={'blue'} size={80} />
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.formField}>
          <Item style={styles.inputPlate}>
            <Input
              placeholder={'Enter country'}
              value={this.state.textInput}
              onChangeText={this.onchangeInput}
            />
          </Item>
          {this.state.textInput.length <= 2 ? (
            <View>
              <Text style={styles.warText}>Enter Minimum 3 Charachters</Text>
            </View>
          ) : null}

          <Button
            onPress={this.onSubmit}
            disabled={this.state.textInput.length <= 2 ? true : false}
            style={styles.buttonStyle}>
            <Text style={styles.buttonText}>SUBMIT</Text>
          </Button>
        </View>
        {this.state.loader ? this.remderOverLayIndicator() : null}
      </View>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  buttonStyle: {
    width: '60%',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  warText: {
    color: 'red',
    fontSize: 15,
    marginVertical: 15,
    fontWeight: '700',
  },
  loader: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    position: 'absolute',
    elevation: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    opacity: 0.4,
  },
  formField: {
    height: 300,
    width: '100%',
    borderWidth: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputPlate: {
    backgroundColor: '#fff',
    width: '90%',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
});
