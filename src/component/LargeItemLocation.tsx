import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {ILocation} from '../common/types';
import sizes from '../common/sizes';
import colors from '../common/colors';
import {AppStyle} from '../common/AppStyle';
import TextBase from '../common/TextBase';
import {ScreenName} from '../container/AppContainer';
import NavigationService from '../container/screens/NavigationService';

interface ILargeItemLocationProps {
  location: ILocation;
  onPress?: () => void;
}

interface ILargeItemLocationState {}

export default class LargeItemLocation extends React.PureComponent<
  ILargeItemLocationProps,
  ILargeItemLocationState
> {
  constructor(props: ILargeItemLocationProps) {
    super(props);
    this.state = {};
  }
  render(): React.ReactNode {
    const {location} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          if (this.props.onPress) {
            this.props.onPress();
            return;
          }
          NavigationService.navigate(ScreenName.DETAIL_LOCATION_SCREEN, {
            location: location,
          });
        }}>
        <View style={styles.rowCenter}>
          <Image
            source={{uri: location.avatar}}
            style={{
              height: sizes.width * 0.3,
              width: sizes.width * 0.3,
              resizeMode: 'cover',
              marginRight: sizes._16sdp,
            }}
          />
          <View
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}>
            <TextBase style={AppStyle.txt_20_bold}>
              {`${location.name}`}
            </TextBase>
            <TextBase
              numberOfLines={3}
              style={[AppStyle.txt_16_regular, {marginTop: sizes._8sdp}]}>
              {location.description}
            </TextBase>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary_200,

    marginBottom: sizes._16sdp,
    borderRadius: sizes._24sdp,
    overflow: 'hidden',
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
