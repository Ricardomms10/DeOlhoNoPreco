import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import CustomModal from "../Modal";
import { useState } from "react";
import { message } from "../Modal/dataModal";

export default function Footer({ valorTotal, onResetApp }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const [messageModal, setMessageModal] = useState("");

    const handleOpenModal = (type) => {
        if (!type) {
            setModalVisible(false);
            setTitleModal('');
            setMessageModal('');
            return;
        }
        setModalVisible(true);
        setTitleModal(message?.[type]?.title);
        setMessageModal(message?.[type]?.message || '');
    }

    const CloseConta = () => {
        handleOpenModal('finish');
        
    };
        
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.buttonExit}
                onPress={CloseConta}
            >
                <Text
                    style={styles.textButton}
                >Fechar a conta</Text>
            </TouchableOpacity>
            <Text
                style={styles.textTotal}
            >TOTAL  R$: {valorTotal}</Text>
            <CustomModal
                visible={modalVisible}
                title={titleModal}
                message={messageModal + `R$ ${valorTotal}`}
                onClose={() => handleOpenModal(null)}
                resetOnClose={true}
                onResetApp={onResetApp}
            />
        </View>
    )

}