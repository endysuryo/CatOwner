/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Layout from '../components/Layout';
import MainHeader from '../components/MainHeader';
import {globalTextStyle} from '../styles/global';
import SelectDropdown from 'react-native-select-dropdown';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from 'react';
import {useGlobalState} from '../App';
import {IOwner} from '../interface/index.interface';
import HomeCard from '../components/shared/HomeCard';

const Home = ({navigation}: any) => {
  const [owner, setOwner]: any = useGlobalState('owner');
  const filters = ['Name', 'Number of cats'];
  const [selectedFilter, setSelectedFilter] = useState('Name');

  const renderItem = ({item}: {item: IOwner}) => (
    <HomeCard
      id={item.id}
      name={item.name}
      avatar={item.avatar}
      is_favorite={item.is_favorite}
      cats={item.cats}
      navigation={navigation}
    />
  );

  return (
    <>
      <Layout>
        <MainHeader />
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingBottom: 20,
            }}>
            <Text style={globalTextStyle.header}>Owner List</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={globalTextStyle.header}>Sort By</Text>
              <SelectDropdown
                data={filters}
                defaultValueByIndex={0}
                onSelect={selectedItem => {
                  setSelectedFilter(selectedItem);
                  if (selectedItem === 'Name') {
                    const sortedName = owner.sort((a: IOwner, b: IOwner) => {
                      if (a.name < b.name) {
                        return -1;
                      }
                      if (a.name > b.name) {
                        return 1;
                      }
                      return 0;
                    });

                    setOwner(sortedName);
                  } else if (selectedItem === 'Number of cats') {
                    const sortedCats = owner.sort(
                      (a: IOwner, b: IOwner) => b.cats.length - a.cats.length,
                    );
                    setOwner(sortedCats);
                  }
                }}
                buttonTextAfterSelection={selectedItem => {
                  return selectedItem;
                }}
                rowTextForSelection={item => {
                  return item;
                }}
                buttonStyle={{
                  backgroundColor: '#F8F8FF',
                  width: 100,
                  height: 30,
                  borderRadius: 60,
                }}
                buttonTextStyle={{
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#404040',
                }}
                dropdownIconPosition="right"
                renderDropdownIcon={() => (
                  <FontAwesomeIcon icon={faCaretDown} />
                )}
              />
            </View>
          </View>
          <SafeAreaView>
            <FlatList
              data={owner}
              renderItem={renderItem}
              keyExtractor={(item: IOwner) => item.id}
            />
          </SafeAreaView>
          {/* <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          /> */}
        </View>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Home;
