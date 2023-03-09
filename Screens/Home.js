import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.imageStyle}>
        <Image source={require('../Images/Ingredients.png')} />
      </View>

      <View style={styles.ultimateStyle}>
        <Text
          style={{
            color: '#E8E8E8',
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 600,
            marginTop: -180,
          }}>
          The ultimate Recipe Resource Guide For You!{' '}
        </Text>
        <Text
          style={{
            color: '#E8E8E8',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 400,
            marginTop: 20,
            marginBottom: 30,
            fontFamily: 'inter',
          }}>
          5000+ recipes made by people for your healthy life
        </Text>

        {/* <Button style={{borderRadius: 10}} title="Get Started" /> */}
        <Text
          onPress={() =>
            navigation.navigate('Explore', {name: 'eba', soup: 'efo'})
          }
          style={styles.btnStyle}>
          Get Started
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
  },
  imageStyle: {
    backgroundColor: '#000000',
  },
  ultimateStyle: {
    backgroundColor: '#000000',
    color: '#E8E8E8',
    justifyContent: 'center',
    height: 372,
  },
  btnStyle: {
    backgroundColor: '#D13B55',
    color: '#E8E8E8',
    textAlign: 'center',
    padding: 20,
    fontSize: 20,
    fontWeight: 700,
    borderRadius: 40,
    width: 353,
    left: 20,
    // fontFamily: 'inter',
  },
});
export default HomeScreen;
