import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import { Container, Content, Header, Left, Body, Right, Icon, List, ListItem } from 'native-base';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const CustomDrawerContentComponent = (props) => {
  return(
    <Container>
      <Header style={{ backgroundColor : '#3a455c', height: 90 }}>
	<Left style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
	  <Icon name= "person" style={{ color:'white' }}/>
	  <Text style={{ marginLeft: 5, color: 'white', fontSize: 22, fontStyle: 'italic' }}>Hello, Tesshu</Text>
	</Left>
      </Header>
      <Content>
	<FlatList
	  data = {[ 'Home', 'Shop by category', "Today's deal" ]}  
	  renderItem = {({item}) => (
	    <ListItem noBorder>
	      <Text>{item}</Text>
	    </ListItem>
	  )}
	/>
	<FlatList
	  style = {{ borderTopWidth: 0.2, borderTopColoer: '#f0f0f0' }}
	  data = {[ 'Your Wish List', 'Your Account', "Amazon Pay", "Prime", "Sell on Amazon" ]}  
	  renderItem = {({item}) => (
	    <ListItem noBorder>
	      <Text>{item}</Text>
	    </ListItem>
	  )}
	/>
	<FlatList
	  style = {{ borderTopWidth: 0.2, borderTopColoer: '#f0f0f0' }}
	  data = {[ 'Settings', 'Customer Service' ]}  
	  renderItem = {({item}) => (
	    <ListItem noBorder>
	      <Text>{item}</Text>
	    </ListItem>
	  )}
	/>
      </Content>
    </Container>
  );
}

const AppDrawerNavigator = new createDrawerNavigator(
{
  HomeScreen: { screen : HomeScreen }
},
{
  contentComponent : CustomDrawerContentComponent,
}
)

const AppNavigator = createAppContainer(AppDrawerNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
