import React, {ReactNode} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

interface PropsLayout {
  children: ReactNode;
}

const Layout = (props: PropsLayout) => {
  return (
    <>
      <SafeAreaView style={style.sectionContainer}>
        {props.children}
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  sectionContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F8F8FF',
    padding: 20,
  },
});

export default Layout;
