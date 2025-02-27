import {IWeatherResponse} from '@model/weather';
import {weatherActions} from '@redux-slice/weather';
import {selectCurrentWeather} from '@redux/selector/weather';
import {colors} from '@themes/colors/index';
import React, {useEffect} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native-unistyles';
import {useDispatch, useSelector} from 'react-redux';
// import {weatherActions} from '@redux-slice';

const HomeScreen = () => {
  const {currentWeather} = useSelector(selectCurrentWeather);

  const dispatch = useDispatch();
  const inset = useSafeAreaInsets();

  const handleLogin = () => {
    const option = {
      data: {
        lon: 106.6304,
        lat: 10.8039,
      },
      onSucceeded: (data: IWeatherResponse) => {
        console.log('onSucceeded', data);
      },
    };
    dispatch(weatherActions.fetchCurrentWeather(option));
  };

  return (
    <View style={[styles.container, {paddingTop: inset.top}]}>
      <ScrollView>
        <View style={[styles.boxWeather]}>
          <TouchableOpacity
            style={{width: 100, height: 100, backgroundColor: 'red'}}
            onPress={handleLogin}
          />
        </View>

        <View style={[styles.boxWeather]}>
          <TouchableOpacity
            style={{width: 100, height: 100, backgroundColor: 'green'}}
            onPress={() => {
              console.log('kettt quaaa la', currentWeather);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxWeather: {
    backgroundColor: colors.black_rgba.rgba_03,
  },
});
