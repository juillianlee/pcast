import React, {useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const Home = () => {
  const [searching, setSearching] = useState(false);

  const logo = require('../../assets/img/logo.png');

  return (
    <>
      {!searching ? null : (
        <>
          <TouchableOpacity
            onPress={() => setSearching(false)}
            style={{
              backgroundColor: '#081727',
              flex: 1,
              position: 'absolute',
              height: '100%',
              width: '100%',
              zIndex: 5,
              opacity: 0.9,
            }}></TouchableOpacity>
          <View
            style={{
              backgroundColor: '#19232F',
              borderRadius: 24,
              width: 311,
              height: 357,
              position: 'absolute',
              zIndex: 10,
              top: 80,
              right: 33,
              left: 33,
              paddingRight: 17,
              paddingLeft: 16,
            }}>
            <View
              style={{
                backgroundColor: 'rgba(1, 3, 4, 0.5)',
                borderRadius: 16,
                height: 48,

                marginTop: 16,
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: 16,
                paddingLeft: 16,
              }}>
              <TextInput
                autoFocus={true}
                placeholderTextColor="#ffff"
                placeholder="Search"
                autoCapitalize="none"
                autoCompleteType="off"
                style={{
                  color: 'white',
                  fontSize: 14,
                  fontWeight: '500',
                  marginRight: 20,
                }}
              />
              <Icon
                size={16}
                name="search"
                color="#898F97"
                style={{marginLeft: 'auto'}}
              />
            </View>
            <View style={{marginTop: 24}}>
              <View style={{flexDirection: 'row'}}>
                <ImageBackground
                  borderRadius={16}
                  borderBottomRightRadius={0}
                  // resizeMode="stretch"
                  source={require('../../assets/img/60b8efa804d4047e45be7240344fcb07.png')}
                  style={{width: 71, height: 65}}>
                  <LinearGradient
                    useAngle={true}
                    angle={180}
                    style={{
                      height: '100%',
                      borderRadius: 16,
                      borderBottomRightRadius: 0,
                    }}
                    colors={['rgba(9, 18, 28, 0)', 'rgba(9, 18, 28, 0.85)']}
                  />
                </ImageBackground>
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 16,
                    }}>
                    Night streets in Hog Kong
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 8,
                        }}>
                        <Icon name="clock-o" size={12} color={'#898F97'} />
                        <Text
                          style={{
                            color: '#898F97',
                            fontSize: 12,
                            marginLeft: 3,
                          }}>
                          24:15:05
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 12,
                          marginTop: 'auto',
                        }}>
                        Janush Kowalski
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 23}}>
                <ImageBackground
                  borderRadius={16}
                  borderBottomRightRadius={0}
                  // resizeMode="stretch"
                  source={require('../../assets/img/5ec3d1e8fcdb8a80ac24e6edaca3b502.png')}
                  style={{width: 71, height: 65}}>
                  <LinearGradient
                    useAngle={true}
                    angle={180}
                    style={{
                      height: '100%',
                      borderRadius: 16,
                      borderBottomRightRadius: 0,
                    }}
                    colors={['rgba(9, 18, 28, 0)', 'rgba(9, 18, 28, 0.85)']}
                  />
                </ImageBackground>
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 16,
                    }}>
                    Miami isn’t the best plae...
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 8,
                        }}>
                        <Icon name="clock-o" size={12} color={'#898F97'} />
                        <Text
                          style={{
                            color: '#898F97',
                            fontSize: 12,
                            marginLeft: 3,
                          }}>
                          24:15:05
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 12,
                          marginTop: 'auto',
                        }}>
                        John Smith & Katy Doe
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 23}}>
                <ImageBackground
                  borderRadius={16}
                  borderBottomRightRadius={0}
                  // resizeMode="stretch"
                  source={require('../../assets/img/230a31e59e9bb0943b92be2153ca8242.png')}
                  style={{width: 71, height: 65}}>
                  <LinearGradient
                    useAngle={true}
                    angle={180}
                    style={{
                      height: '100%',
                      borderRadius: 16,
                      borderBottomRightRadius: 0,
                    }}
                    colors={['rgba(9, 18, 28, 0)', 'rgba(9, 18, 28, 0.85)']}
                  />
                </ImageBackground>
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 14,
                      fontWeight: '500',
                      lineHeight: 16,
                    }}>
                    On her way she met a co...
                  </Text>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                    }}>
                    <View>
                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 8,
                        }}>
                        <Icon name="clock-o" size={12} color={'#898F97'} />
                        <Text
                          style={{
                            color: '#898F97',
                            fontSize: 12,
                            marginLeft: 3,
                          }}>
                          24:15:05
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 12,
                          marginTop: 'auto',
                        }}>
                        John Smith
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </>
      )}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{backgroundColor: '#09121C', flex: 1}}>
        <View style={{paddingBottom: 40}}>
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
                    onPress={() => setSearching(!searching)}
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
                      style={{
                        paddingLeft: 32,
                        paddingRight: 32,
                        paddingTop: 24,
                      }}>
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
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 13,
                            marginLeft: 8,
                          }}>
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
            <View
              style={{
                backgroundColor: '#09121C',
                flex: 1,
                paddingLeft: 33,
                // paddingRight: 33,
                paddingTop: 45,
              }}>
              <View>
                <Text
                  style={{
                    fontSize: 24,
                    lineHeight: 28,
                    color: '#FFFFFF',
                    fontWeight: '500',
                  }}>
                  Listen podcasts
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  width: '100%',
                  marginTop: 24,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 19,
                    color: '#3E8BFF',
                    marginRight: 24,
                  }}>
                  Recent
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 19,
                    color: '#898F97',
                    marginRight: 24,
                  }}>
                  Topics
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    lineHeight: 19,
                    color: '#898F97',
                    marginRight: 24,
                  }}>
                  Authors
                </Text>
                <Text style={{fontSize: 16, lineHeight: 19, color: '#898F97'}}>
                  Episodes
                </Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    marginTop: 40,
                    flex: 1,
                    flexDirection: 'row',
                    paddingRight: 33,
                  }}>
                  <View style={{width: 147, marginRight: 15}}>
                    <ImageBackground
                      borderRadius={16}
                      borderBottomRightRadius={0}
                      // resizeMode="stretch"
                      source={require('../../assets/img/5ec3d1e8fcdb8a80ac24e6edaca3b502.png')}
                      style={{width: 147, height: 137}}>
                      <LinearGradient
                        useAngle={true}
                        angle={180}
                        style={{
                          height: '100%',
                          borderRadius: 16,
                          borderBottomRightRadius: 0,
                        }}
                        colors={['rgba(9, 18, 28, 0)', 'rgba(9, 18, 28, 0.85)']}
                      />
                    </ImageBackground>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                        fontWeight: '500',
                        marginTop: 16,
                      }}>
                      Miam isn’t the best place to live
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        marginTop: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
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
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 6,
                          }}>
                          <Image
                            source={require('../../assets/img/03w.png')}
                            style={{width: 16, height: 16, borderRadius: 999}}
                          />
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 13,
                              marginLeft: 8,
                            }}>
                            John Smith
                          </Text>
                        </View>
                      </View>
                      <View style={{marginLeft: 'auto'}}>
                        <Image
                          source={require('../../assets/img/play-blue.png')}
                          style={{height: 32, width: 32, marginLeft: 'auto'}}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{width: 147, marginRight: 15}}>
                    <ImageBackground
                      borderRadius={16}
                      borderBottomRightRadius={0}
                      // resizeMode="stretch"
                      source={require('../../assets/img/a923dd60c202dd6280d0536de6aba3b9.jpeg')}
                      style={{width: 147, height: 137}}>
                      <LinearGradient
                        useAngle={true}
                        angle={180}
                        style={{
                          height: '100%',
                          borderRadius: 16,
                          borderBottomRightRadius: 0,
                        }}
                        colors={['rgba(9, 18, 28, 0)', 'rgba(9, 18, 28, 0.85)']}
                      />
                    </ImageBackground>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                        fontWeight: '500',
                        marginTop: 16,
                      }}>
                      Malesuada {'\n'}elementum ipsum
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        marginTop: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
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
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 6,
                          }}>
                          <Image
                            source={require('../../assets/img/03w.png')}
                            style={{width: 16, height: 16, borderRadius: 999}}
                          />
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 13,
                              marginLeft: 8,
                            }}>
                            Arthur Fisher
                          </Text>
                        </View>
                      </View>
                      <View style={{marginLeft: 'auto'}}>
                        <Image
                          source={require('../../assets/img/play-blue.png')}
                          style={{height: 32, width: 32, marginLeft: 'auto'}}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{width: 147}}>
                    <ImageBackground
                      borderRadius={16}
                      borderBottomRightRadius={0}
                      // resizeMode="stretch"
                      source={require('../../assets/img/8d8d325363febf3bd6a57627cfe2268b.jpeg')}
                      style={{width: 147, height: 137}}>
                      <LinearGradient
                        useAngle={true}
                        angle={180}
                        style={{
                          height: '100%',
                          borderRadius: 16,
                          borderBottomRightRadius: 0,
                        }}
                        colors={['rgba(9, 18, 28, 0)', 'rgba(9, 18, 28, 0.85)']}
                      />
                    </ImageBackground>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                        fontWeight: '500',
                        marginTop: 16,
                      }}>
                      Miam isn’t the best place to live
                    </Text>
                    <View
                      style={{
                        flex: 1,
                        marginTop: 12,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View>
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
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
                        <View
                          style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 6,
                          }}>
                          <Image
                            source={require('../../assets/img/03w.png')}
                            style={{width: 16, height: 16, borderRadius: 999}}
                          />
                          <Text
                            style={{
                              color: 'white',
                              fontSize: 13,
                              marginLeft: 8,
                            }}>
                            John Smith
                          </Text>
                        </View>
                      </View>
                      <View style={{marginLeft: 'auto'}}>
                        <Image
                          source={require('../../assets/img/play-blue.png')}
                          style={{height: 32, width: 32, marginLeft: 'auto'}}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
              <View style={{marginTop: 90}}>
                <View>
                  <Text
                    style={{
                      fontSize: 24,
                      lineHeight: 28,
                      color: '#FFFFFF',
                      fontWeight: '500',
                    }}>
                    Podcasts authors
                  </Text>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: '100%',
                    marginTop: 24,
                  }}>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 19,
                      color: '#898F97',
                      marginRight: 24,
                    }}>
                    Recent
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 19,
                      color: '#898F97',
                      marginRight: 24,
                    }}>
                    Topics
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      lineHeight: 19,
                      color: '#898F97',
                    }}>
                    Most followed
                  </Text>
                </View>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                  style={{
                    marginTop: 40,
                    flex: 1,
                    flexDirection: 'row',
                  }}>
                  <View style={{width: 112}}>
                    <Image
                      source={require('../../assets/img/03w.png')}
                      style={{width: 64, height: 64, borderRadius: 999}}
                    />
                    <Text style={{fontSize: 12, color: 'white'}}>
                      Mitchell Hawkins
                    </Text>
                    <Text
                      style={{
                        color: '#898F97',
                        fontSize: 12,
                      }}>
                      Podcasts: 7 286
                    </Text>
                  </View>
                  <View style={{width: 112, marginLeft: 24}}>
                    <Image
                      source={require('../../assets/img/04w.png')}
                      style={{width: 64, height: 64, borderRadius: 999}}
                    />
                    <Text style={{fontSize: 12, color: 'white'}}>
                      Rosemary Richards
                    </Text>
                    <Text
                      style={{
                        color: '#898F97',
                        fontSize: 12,
                      }}>
                      Podcasts: 7 286
                    </Text>
                  </View>
                  <View style={{width: 112, marginLeft: 24}}>
                    <Image
                      source={require('../../assets/img/02m.png')}
                      style={{width: 64, height: 64, borderRadius: 999}}
                    />
                    <Text style={{fontSize: 12, color: 'white'}}>
                      Gregory Miles
                    </Text>
                    <Text
                      style={{
                        color: '#898F97',
                        fontSize: 12,
                      }}>
                      Podcasts: 7 286
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
