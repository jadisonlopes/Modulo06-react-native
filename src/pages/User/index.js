import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import api from '../../services/api';

// import { Container } from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  static = {
    stars: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    const { data } = await api.get(`/users/${user.login}/starred`);

    this.setState({
      stars: data,
    });
  }

  render() {
    const { stars } = this.state;

    return <View />;
  }
}
