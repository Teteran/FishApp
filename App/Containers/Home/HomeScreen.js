import React from 'react';
import {
  Platform,
  Text,
  View,
  Button,
  ActivityIndicator,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Style from './HomeScreenStyle';
import {ApplicationStyles, Helpers, Images, Metrics} from 'App/Theme';

class HomeScreen extends React.Component {
  render() {
    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}>
        <View style={Style.logoContainer}>
          <Image
            style={Helpers.fullSize}
            source={Images.logo}
            resizeMode={'contain'}
          />
        </View>
      </View>
    );
  }
}

HomeScreen.propTypes = {};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
