/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Pressable, StatusBar} from 'react-native';
import {useGlobalState} from '../App';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {globalTextStyle} from '../styles/global';

interface IMainHeader {
  showBack?: boolean;
  navigation?: any;
}

const MainHeader = (props: IMainHeader) => {
  const navigation = props.navigation;
  const [master, setMaster] = useGlobalState('master');
  const [owner, setOwner] = useGlobalState('owner');

  console.info(props);

  return (
    <>
      <View style={style.header}>
        <StatusBar backgroundColor="#F8F8FF" barStyle="dark-content" />
        {props.showBack && (
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              marginRight: 'auto',
            }}>
            <FontAwesomeIcon icon={faArrowLeft} size={24} />
          </Pressable>
        )}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 'auto',
            marginLeft: props.showBack ? 0 : 'auto',
          }}>
          <View style={style.avatar}>
            <Text style={style.avatarText}>{master.avatar}</Text>
          </View>
          <Text style={globalTextStyle.normal}>Master: {master.name}</Text>
        </View>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 45,
    width: '100%',
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#36A388',
    borderRadius: 30,
  },
  avatarText: {
    fontSize: 20,
    color: '#36A388',
    fontWeight: '600',
  },
});

export default MainHeader;
