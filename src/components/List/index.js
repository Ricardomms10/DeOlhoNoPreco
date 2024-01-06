import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from "./styles";
import Footer from '../Footer'
import { message } from "../Modal/dataModal";
import Modal from "../Modal";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

export default function List({ items, handleDeleteItem }) {
    const [open, setOpen] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [messageModal, setMessageModal] = useState('');


    const handleOpenModal = (type) => {
        if (!type) {
            setOpen(false);
            setTitleModal('');
            setMessageModal('');
            return;
        }
        setOpen(true);
        setTitleModal(message?.[type]?.title);
        setMessageModal(message?.[type]?.message);
    }


    const itensUnicos = new Set();
    items.forEach(item => {
        itensUnicos.add(item.item);
    });

    const quantidadeItensUnicos = itensUnicos.size;


    return (
        <View style={styles.container}>
            {items.length === 0 ? (
                <Text style={styles.textProduct}>Adicione um item</Text>
            ) : (
                <View>
                    <View style={styles.boxProduct}>
                        <Text style={styles.textProduct}>Produtos</Text>
                        <Text style={styles.textNumber}>{quantidadeItensUnicos} </Text>
                    </View>

                    {items.map((item, index) => (
                        <View key={index} style={styles.boxList}>
                            <View style={styles.boxItem}>
                                <Text style={styles.textProduct}>{item.unidade} | </Text>
                                <Text style={styles.textProduct}>{item.item}</Text>

                            </View>
                            <View style={styles.boxItem}>
                                <Text style={styles.textProduct}>R${item.preco}</Text>
                                <TouchableOpacity onPress={() => handleDeleteItem(index)}>
                                    <FontAwesomeIcon icon={faTrash} style={styles.trashIcon} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}

                </View>
            )}
         
        </View>
    );
}
