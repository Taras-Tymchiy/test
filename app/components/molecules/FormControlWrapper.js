// @flow
import * as React from 'react';
import { View, StyleSheet, ActivityIndicator, Text, Button, Modal, TouchableOpacity } from 'react-native';

import Header from './Header';
import { TextRegular, TextSecondary }  from '../atoms/Text';
import ScreenView from '../atoms/ScreenView';
import Icon from '../atoms/Icon';

import { COLOR_ELEMENT_BG, SPACING_S, SPACING_M, COLOR_ELEMENT_BORDER } from '../styles/constants';
import arrow from '../../assets/ios7-arrow-right.png';
import styles from './FormControlWrapper.styles'; 

export type FormControlWrapperProps = {
  title: string;
  description: string;
  value: any;
  children: React.Node;
  onSave: () => void;
  onDiscard: () => void;
}

export type FormControlWrapperState = {
  modalVisible: boolean;
}

export default class FormControlWrapper 
  extends React.PureComponent<FormControlWrapperProps, FormControlWrapperState> {
    state = {
      modalVisible: false
    };

    openModal = ()=> {
      this.setState({modalVisible:true});
    }

    closeModal = ()=> {
      const { onDiscard } = this.props;
      if (onDiscard) {
        onDiscard();
      }
      this.setState({modalVisible:false});
    }

    saveChanges = ()=> {
      const { onSave } = this.props;
      if (onSave) {
        onSave();
      }
      this.setState({modalVisible:false});
    }

    render() {
      const { title, value, description } = this.props;
      
      return (
        <View>
          <TouchableOpacity 
            style={styles.mainContainer}
            onPress={this.openModal}>
            <View style={styles.textRow}>
              <TextRegular>{title}</TextRegular>
              <TextSecondary>{value}</TextSecondary>
            </View>
            <Icon source={arrow} />
          </TouchableOpacity>
          <Modal
              visible={this.state.modalVisible}
              animationType={'slide'}
              onRequestClose={this.closeModal} 
            >
              <Header title={title}
                leftButtonTitle="Back" rightButtonTitle="Done" 
                onLeftButtonPress={this.closeModal} 
                onRightButtonPress={this.saveChanges} 
              />
              <ScreenView>
                <View style={styles.descriptionContainer}>
                  <Text>{description}</Text>
                </View>
                <View style={styles.inputContainer}>
                  {this.props.children}
                </View>
              </ScreenView>
            </Modal>
        </View>
      );
    }
}
