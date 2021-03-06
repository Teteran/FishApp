import React from 'react'
import { View, TouchableOpacity, Modal as RNModal, StyleSheet } from 'react-native'
import { Metrics, Colors, Helpers } from 'App/Theme'
import { PropTypes } from 'prop-types'
import { Text } from 'App/Components'
import Fonts from '../Theme/Fonts'
import i18n from 'App/Services/i18n'

export default function Modal({
  children,
  onModalVisibleChange,
  modalVisible,
  modalTitle,
  actions = [],
}) {
  const defaultAction = {
    label: i18n.t('general.cancel'),
    action: () => onModalVisibleChange(false),
  }
  return (
    <RNModal
      animationType="fade"
      visible={modalVisible}
      transparent
      onRequestClose={() => onModalVisibleChange(false)}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{modalTitle}</Text>

          <View style={[Helpers.column, Metrics.verticalMargin]}>{children}</View>
          <View style={styles.buttonsContainer}>
            {renderAction(defaultAction)}
            {actions && actions.map((action, index) => renderAction(action, index))}
          </View>
        </View>
      </View>
    </RNModal>
  )
}

const renderAction = ({ label, action }, index) => {
  return (
    <TouchableOpacity
      style={styles.actionButton}
      onPress={(e) => {
        action(e)
        onModalVisibleChange(false)
      }}
      key={index}
    >
      <Text style={styles.actionButtonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

Modal.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      action: PropTypes.function,
    })
  ),
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparentBlack,
  },
  buttonsContainer: {
    ...Helpers.fullWidth,
    ...Helpers.row,
    ...Helpers.mainEnd,
    ...Metrics.smallVerticalPadding,
    ...Metrics.smallHorizontalPadding,
  },
  actionButton: {
    ...Metrics.tinyHorizontalPadding,
    ...Metrics.tinyVerticalMargin,
    ...Metrics.tinyHorizontalMargin,
  },
  actionButtonLabel: {
    ...Fonts.normal,
    ...Fonts.bold,
    textAlign: 'left',
    textTransform: 'capitalize',
    color: Colors.green,
  },
  modalView: {
    ...Helpers.mainSpaceBetween,
    width: '85%',
    minHeight: '20%',
    backgroundColor: Colors.white,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalTitle: {
    ...Helpers.fullWidth,
    ...Metrics.smallVerticalPadding,
    ...Metrics.smallHorizontalPadding,
    ...Fonts.h5,

    textAlign: 'left',
    color: Colors.green,
  },
})
