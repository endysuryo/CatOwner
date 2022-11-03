/* eslint-disable react-native/no-inline-styles */
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useGlobalState} from '../../App';
import {IOwner} from '../../interface/index.interface';
import {globalTextStyle} from '../../styles/global';

const DetailsCard = ({id, name, avatar, is_favorite}: Partial<IOwner>) => {
  const [owner, setOwner] = useGlobalState('owner');
  const handleFavorite = () => {
    setOwner(
      owner.map(item => {
        return {
          ...item,
          is_favorite: item.id === id ? true : false,
        };
      }),
    );
  };

  return (
    <>
      <View
        style={{
          backgroundColor: 'white',
          padding: 20,
          marginBottom: 20,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={style.avatar}>
          <Text style={style.avatarText}>{avatar}</Text>
        </View>
        <View style={{marginRight: 'auto', flexDirection: 'column'}}>
          <View style={{marginBottom: 10}}>
            <Text style={globalTextStyle.header}>First Name</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={globalTextStyle.normal}>{name}</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={globalTextStyle.header}>Last Name</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={globalTextStyle.normal}>{name}</Text>
          </View>
        </View>
        {is_favorite ? (
          <FontAwesomeIcon icon={faStar} color="purple" size={24} />
        ) : (
          <TouchableOpacity onPress={handleFavorite}>
            <FontAwesomeIcon icon={faStar} color="gray" size={24} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const style = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  avatarText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default DetailsCard;
