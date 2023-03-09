import React from 'react';
import {View, SafeAreaView, Text, Image, StyleSheet} from 'react-native';

const ExploreScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
      {/* <View>
        <Text style={{color: '#EBEBEB'}}>Explore</Text> */}
      {/* <Text>Choose food {route.params.soup}</Text> */}
      {/* <Image source={require('../Images/PicsIcon.png')} />
      </View> */}

      <View
        style={{
          alignItems: 'center',
          // flexDirection: 'row',
        }}>
        <Text>Our Latest Recipes</Text>
        <Image
          style={[styles.imgStyle]}
          source={require('../Images/Firstlayer.png')}
        />
        <Image source={require('../Images/Secondlayer.png')} />
        <Image source={require('../Images/Thirdlayer.png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    backgroundColor: 'white',
    // borderWidth: 1,
    borderColor: '#1D1D1D',
    paddingBottom: 40,
    paddingLeft: 20,
    marginBottom: 150,
  },
});

export default ExploreScreen;
