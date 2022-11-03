/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {Text, View} from 'react-native';
import {useGlobalState} from '../../App';
import {globalTextStyle} from '../../styles/global';

const CatCard = ({name, age}: any) => {
  const [owner, setOwner] = useGlobalState('owner');

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
        <View style={{marginRight: 'auto', flexDirection: 'column'}}>
          <View style={{marginBottom: 4}}>
            <Text style={globalTextStyle.normal}>{name}</Text>
          </View>
          <View style={{marginBottom: 4}}>
            <Text style={globalTextStyle.header}>{age}</Text>
          </View>
        </View>
        <FontAwesomeIcon
          icon={faAngleRight}
          size={24}
          color="gray"
          style={{marginLeft: 10}}
        />
      </View>
    </>
  );
};

export default CatCard;
