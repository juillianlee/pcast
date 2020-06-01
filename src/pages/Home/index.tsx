import React from 'react';
import {View, Image, ImageBackground, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const logo = require('../../assets/img/logo.png');

  return (
    <View style={{backgroundColor: '#09121C', flex: 1}}>
      <ImageBackground
        source={require('../../assets/img/BG.png')}
        style={{flex: 1}}>
        <View>
          <View
            style={{
              marginTop: 50,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginRight: 32,
                marginLeft: 32,
              }}>
              <Image source={logo} style={{width: 90, height: 42}} />
              <Icon
                name="search"
                size={20}
                color="#ffffff"
                style={{marginLeft: 'auto'}}
              />
              <Icon
                name="navicon"
                size={20}
                color="#ffffff"
                style={{marginLeft: 48}}
              />
            </View>
          </View>
          <View
            style={{
              height: 192,
              marginTop: 48,
              borderRadius: 24,
              marginRight: 32,
              marginLeft: 32,
              paddingTop: 12,
              paddingBottom: 12,
            }}>
            <View
              style={{
                backgroundColor: '#FF334B',
                width: 46,
                height: 23,
                paddingTop: 2.5,
                borderRadius: 12,
                position: 'absolute',
                zIndex: 5,
                left: 32,
                top: 1,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                }}>
                NEW
              </Text>
            </View>
            <ImageBackground
              borderRadius={24}
              borderBottomRightRadius={0}
              resizeMode="stretch"
              style={{
                height: '100%',
                width: '100%',
              }}
              source={require('../../assets/img/bg-podcast-home.png')}>
              <LinearGradient
                useAngle={true}
                angle={90}
                style={{
                  height: '100%',
                  borderRadius: 24,
                  borderBottomRightRadius: 0,
                }}
                colors={[
                  'rgba(0, 0, 0, 0.5)',
                  'rgba(0, 0, 0, 0.5)',
                  'rgba(9, 18, 28, 0.8)',
                  'rgba(9, 18, 28, 0)',
                ]}>
                <View
                  style={{paddingLeft: 32, paddingRight: 32, paddingTop: 24}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 24,
                      fontWeight: '500',
                    }}>
                    About flow and our motivations
                  </Text>
                  <View style={{flexDirection: 'row', marginTop: 19}}>
                    <Text style={{color: '#898F97', fontSize: 13}}>
                      23.05.2019
                    </Text>
                    <Icon
                      name="clock-o"
                      size={13}
                      color={'#898F97'}
                      style={{marginLeft: 4.5, marginRight: 4.5}}
                    />
                    <Text style={{color: '#898F97', fontSize: 13}}>
                      24:15:05
                    </Text>
                  </View>
                  <View style={{flexDirection: 'row', marginTop: 4}}>
                    <Image
                      source={require('../../assets/img/03w.png')}
                      style={{width: 16, height: 16, borderRadius: 999}}
                    />
                    <Text style={{color: 'white', fontSize: 13, marginLeft: 8}}>
                      Harold Mccoy
                    </Text>
                  </View>
                </View>
              </LinearGradient>
            </ImageBackground>
          </View>
        </View>
        <View>
          <Image source={require('../../assets/img/vector.png')} />
        </View>
        <View style={{backgroundColor: '#09121C', flex: 1}}></View>
      </ImageBackground>
    </View>
  );
};

export default Home;
