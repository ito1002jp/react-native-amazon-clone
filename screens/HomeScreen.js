import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, Image } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import RecommendedCardItem from '../components/RecommendedCardItem';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
	<Header style={[{ backgroundColor: '#3a455c', height: 90, borderBottomColor: '#757575' }, styles.androidHeader]}>
	  <Left style={{ flexDirection: 'row' }}>
	    <Icon onPress={() => this.props.navigation.openDrawer()} 
	      name= "md-menu" style={{ color:'white', marginLeft: 5}} />
	    <FAIcon name="amazon" style= {{ fontSize: 32, color: 'white', marginLeft: 15}} />
	  </Left>
	  <Right>
	    <Icon name= "md-cart" style={{ color: 'white' }}/>
	  </Right>
	</Header>
	<View 
	    style={{ backgroundColor: '#3a455c',
		     height: 70,
		     alignItems: 'center', 
		     flexDirection:'row',
		     paddingHorizontal: 5 
	          }}>
	  <TouchableOpacity>
	    <View style={{ backgroundColor: '#e7e7eb', height: 50, width: 100, borderRadius: 4, padding: 10 }}>
	      <Text style={{ fontSize: 12 }}>Shop By</Text>
	      <Text style={{ fontWeight: 'bold' }}>Category</Text>
	    </View>
	  </TouchableOpacity>

	  <View style={{ flex: 1, marginLeft: 5}}>
            <Item style={{ backgroundColor: 'white', paddingHorizontal:10, borderRadius: 4}}>
	      <Icon name="search" style={{ fontSize: 20, paddingTop: 5}} />
	      <Input placeholder="Search"/>
	    </Item>
	  </View>
	
	</View>

	<Content style={{ backgroundColor: '#d5d5d6'}}>
	  <View 
	    style={{height: 50, backgroundColor: 'white', flexDirection: 'row', paddingHorizontal: 5,
		    alignItems:'center', justifyContent: 'space-between' }}>
	    <Text>Hello, Tesshu Ohkura</Text>
	    <View style={{ flexDirection:'row'}}>
	      <Text>Your Account </Text>
	      <Icon name="arrow-forward" style={{ fontSize: 18 }}/>
	    </View>
	  </View>
	  <Swiper style={{ height: 100 }} autoplay= {true}>
	    <View style={{ flex: 1 }}>
	      <Image
	        style={{ height: null, width: null, flex: 1 }}
	    	source={ require('../assets/pic1.jpg')} />
	    </View>
	    <View style={{ flex: 1 }}>
	      <Image
	        style={{ height: null, width: null, flex: 1 }}
	    	source={ require('../assets/pic2.jpg')} />
	    </View>
	    <View style={{ flex: 1 }}>
	      <Image
	        style={{ height: null, width: null, flex: 1 }}
	    	source={ require('../assets/pic3.jpg')} />
	    </View>
	  </Swiper>

	  <Card style={{ marginLeft: 5, marginRight: 5 }}>
	    <CardItem header style={{ borderBottomWidth: 1, borderBottomColor: '#dee0e2' }}>
	      <Text>Your Recommendations</Text>
	    </CardItem >
	    <RecommendedCardItem 
	      itemName="You can heal your life" 
	      itemCreator="tesshu ohkura" 
	      itemPrice="$10" 
	      savings="$2.5"
	      imageUri={ require('../assets/protein1.jpg') }
	      rating={3}
	    />
	    <RecommendedCardItem 
	      itemName="You can heal your life" 
	      itemCreator="tesshu ohkura" 
	      itemPrice="$10" 
	      savings="$2.5"
	      imageUri={ require('../assets/protein2.jpg') }
	      rating={3}
	    />
	    <RecommendedCardItem 
	      itemName="You can heal your life" 
	      itemCreator="tesshu ohkura" 
	      itemPrice="$10" 
	      savings="$2.5"
	      imageUri={ require('../assets/protein3.jpg') }
	      rating={3}
	    />

	  </Card>


	</Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // 画面の開始位置をアンドロイドはステータスバーの下からに設定する
  androidHeader: {
    ...Platform.select({ android: { paddingTop: StatusBar.currentHeight, } })
  },
});
