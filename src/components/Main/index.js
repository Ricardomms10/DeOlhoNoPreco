import { Fragment, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Pressable, Vibration, Keyboard } from "react-native";
import styles from './styles'
import List from "../List";
import { message } from "../Modal/dataModal";
import CustomModal from "../Modal";

export default function Main({ onAddItem }) {
    const [items, setItems] = useState([]);
    const [item, setItem] = useState("");
    const [unidade, setUnidade] = useState("");
    const [preco, setPreco] = useState("");
    const [valorTotal, setValorTotal] = useState(null);
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
        setMessageModal(message?.[type]?.message);
    }

    function somaItens() {
        return setValorTotal(preco * unidade);
    }

    function validationItem() {
        if (!item || !unidade || !preco) {
            Vibration.vibrate();
            handleOpenModal('error');
            return;
        }

        const precoNumerico = parseFloat(preco.replace(',', '.'));
        const unidadeNumerica = parseInt(unidade);
        const precoTotal = precoNumerico * unidadeNumerica;
        const precoFormatado = precoTotal.toFixed(2);

        const newItem = {
            item,
            unidade: unidadeNumerica,
            preco: parseFloat(precoFormatado)
        };
        onAddItem(newItem, precoTotal);
        setPreco("");
        setItem("");
        setUnidade("");
        setValorTotal(null);
    }


    return (
        <Pressable
            style={styles.container}
            onPress={() => Keyboard.dismiss()}>
            <View style={styles.boxInput}>
                <TextInput
                    style={styles.inputItem}
                    onChangeText={setItem}
                    value={item}
                    placeholder="Adicionar item"
                    placeholderTextColor='#fff'
                />

                <TextInput
                    style={styles.inputUnidade}
                    onChangeText={setUnidade}
                    value={unidade}
                    placeholder="Unidade"
                    keyboardType="numeric"
                    placeholderTextColor='#fff'
                />

                <TextInput
                    style={styles.inputUnidade}
                    onChangeText={setPreco}
                    value={preco}
                    placeholder="Preço"
                    placeholderTextColor='#fff'
                    keyboardType="numeric"
                />
            </View>

            <TouchableOpacity
                style={styles.buttonAdd}
                onPress={() => { somaItens(); validationItem(); }}>
                <Text
                    style={styles.textButton}
                >ADICIONAR PRODUTO</Text>
            </TouchableOpacity>

            <CustomModal
                visible={modalVisible}
                title={titleModal}
                message={messageModal}
                onClose={() => handleOpenModal(null)}
            />
        </Pressable>
    )
}
