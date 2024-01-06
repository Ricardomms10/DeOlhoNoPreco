import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import styles from './styles';

export default function CustomModal({ title, message, onClose, visible, resetOnClose, onResetApp }) {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(visible);
  }, [visible]);

  const closeModal = () => {
    setModalVisible(false);
    if (onClose) {
      onClose();
      if(resetOnClose){
        onResetApp();
      }
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.modalText}>{title}</Text>
          <Text style={styles.modalText}>{message}</Text>
          <TouchableOpacity style={styles.btnClose} onPress={closeModal}>
            <Text style={styles.btnText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
