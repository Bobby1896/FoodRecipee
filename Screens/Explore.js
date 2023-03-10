import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ExploreScreen = ({navigation, route}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
      {/* <View>
      {/* <Text>Choose food {route.params.soup}</Text> */}
      {/* <Image source={require('../Images/PicsIcon.png')} />
      </View> */}

      <View
        style={{
          // alignItems: 'center',
          marginLeft: 17,
        }}>
        <Text
          style={{
            color: '#EBEBEB',
            fontWeight: 600,
            fontSize: 20,
            marginTop: 15,
          }}>
          Our Latest Recipes
        </Text>

        <TouchableOpacity
          onPress={() => {
            console.log('icon tapped');
          }}
          style={styles.cardContainer}>
          <Image
            style={[styles.imgStyle]}
            source={require('../Images/Firstlayer.png')}
          />
          <Text style={{color: '#EBEBEB'}}>Creamy Spinach Pasta</Text>
          <Text style={{color: '#EBEBEB'}}>Juliet Jackson</Text>
        </TouchableOpacity>

        {/* <Image source={require('../Images/Secondlayer.png')} />
        <Image source={require('../Images/Thirdlayer.png')} /> */}
      </View>

      <View
        style={{
          marginLeft: 17,
        }}>
        <Text
          style={{
            color: '#EBEBEB',
            fontWeight: 600,
            fontSize: 20,
            marginTop: 15,
          }}>
          Editor's Choice
        </Text>
        <View style={{flexDirection: 'row', gap: 15, marginTop: 15}}>
          <Image
            style={{width: 169}}
            source={require('../Images/Chicken.png')}
          />
          <Image source={require('../Images/Vegetable.png')} />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => {
          console.log('icon tapped');
        }}
        style={[styles.iconStyle]}>
        <View>
          <FontAwesome5 name={'home'} size={30} color="#5C5C5C" />
          <Text style={{color: '#5C5C5C', fontWeight: 400}}>Home</Text>
        </View>
        <View>
          <FontAwesome5 name={'search'} size={30} color="#5C5C5C" />
          <Text style={{color: '#5C5C5C', fontWeight: 400}}>Search</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <FontAwesome5 name={'bookmark'} size={30} color="#5C5C5C" />
          <Text style={{color: '#5C5C5C', fontWeight: 400}}>Saved Recipes</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <FontAwesome5 name={'calendar'} size={30} color="#5C5C5C" />
          <Text style={{color: '#5C5C5C', fontWeight: 400}}>Meal Plan</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imgStyle: {
    borderWidth: 1,
    borderColor: '#1D1D1D',
    marginTop: 15,
    marginBottom: 20,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    width: 360,
    height: 300,
  },

  iconStyle: {
    flexDirection: 'row',
    marginLeft: 17,
    gap: 35,
    marginTop: 10,
    // backgroundColor: 'white',
  },
});

export default ExploreScreen;
