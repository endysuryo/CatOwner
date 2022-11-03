/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {
  Button,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Touchable} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Screen} from 'react-native-screens';
import {useGlobalState} from '../App';
import Layout from '../components/Layout';
import MainHeader from '../components/MainHeader';
import CatCard from '../components/shared/CatCard';
import DetailsCard from '../components/shared/DetailsCard';
import {globalTextStyle} from '../styles/global';

const Details = ({route, navigation}: any) => {
  const [master, setMaster] = useGlobalState('master');
  const [owner, setOwner] = useGlobalState('owner');
  const {id, name, avatar, is_favorite, cats} = route.params;

  const renderItem = ({item}: any) => (
    <CatCard name={item.name} age={item.age} />
  );

  return (
    <>
      <Layout>
        <MainHeader showBack navigation={navigation} />
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <Text style={globalTextStyle.header}>Owner Card</Text>
          </View>
          <DetailsCard
            id={id}
            name={name}
            avatar={avatar}
            is_favorite={is_favorite}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <Text style={globalTextStyle.header}>Cats</Text>
          </View>
          <View style={{height: '50%'}}>
            <SafeAreaView style={{flex: 1}}>
              <FlatList
                data={cats}
                renderItem={renderItem}
                keyExtractor={(item: any) => item.name}
              />
            </SafeAreaView>
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={() =>
                setMaster({
                  id,
                  name,
                  avatar,
                  is_favorite,
                })
              }
              style={{
                backgroundColor: '#36A388',
                padding: 20,
                width: '90%',
                borderRadius: 8,
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: '700'}}>
                Make Master
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Layout>
    </>
  );
};

export default Details;
