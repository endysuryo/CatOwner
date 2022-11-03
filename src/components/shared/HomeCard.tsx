/* eslint-disable react-native/no-inline-styles */
import {faAngleRight, faStar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useGlobalState} from '../../App';
import {IOwner} from '../../interface/index.interface';
import {globalTextStyle} from '../../styles/global';

const HomeCard = ({
  id,
  name,
  avatar,
  is_favorite,
  cats,
  navigation,
}: Partial<IOwner>) => {
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
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {id, name, avatar, is_favorite, cats})
        }
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
        <Text style={(globalTextStyle.normal, {marginRight: 'auto'})}>
          {name}
        </Text>
        {is_favorite ? (
          <FontAwesomeIcon icon={faStar} color="purple" size={24} />
        ) : (
          <TouchableOpacity onPress={handleFavorite}>
            <FontAwesomeIcon icon={faStar} color="gray" size={24} />
          </TouchableOpacity>
        )}
        <FontAwesomeIcon
          icon={faAngleRight}
          size={24}
          color="gray"
          style={{marginLeft: 10}}
        />
      </TouchableOpacity>
    </>
  );
};

const style = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    marginRight: 20,
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

export default HomeCard;
