import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, StatusBar, Image } from 'react-native';
import { Container, Content, Header, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';
import RecommendedCardItem from '../components/RecommendedCardItem';

export default class Screen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
	<Text>yeah!</Text>
      </View>
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
