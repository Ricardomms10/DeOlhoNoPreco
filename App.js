import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "./src/components/Title";
import Main from "./src/components/Main";
import List from "./src/components/List";
import Footer from "./src/components/Footer";
import CustomModal from "./src/components/Modal";
import { message } from "./src/components/Modal/dataModal";


export default function App() {
  const [items, setItems] = useState([]);
  const [valorTotal, setValorTotal] = useState(0);
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

  const handleDeleteItem = (index) => {
    const newItems = [...items];
    const deletedItem = newItems.splice(index, 1)[0];
    setItems(newItems);
    setValorTotal((prevValorTotal) => prevValorTotal - deletedItem.preco);
    handleOpenModal('delete');
  };

  const handleAddItem = (newItem, precoTotal) => {
    setItems((prevItems) => [...prevItems, newItem]);
    setValorTotal((prevValorTotal) =>
      precoTotal !== null ? prevValorTotal + precoTotal : 0
    );
  };

  const resetApp = () => {
    setItems([]);
    setValorTotal(0);
    handleOpenModal(null);
  };

  return (
    <View style={styles.container}>
      <Title />
      <Main onAddItem={handleAddItem} />
      <List items={items} handleDeleteItem={handleDeleteItem} />
      <CustomModal
        visible={modalVisible}
        title={titleModal}
        message={messageModal}
        onClose={() => handleOpenModal(null)}
      />
      <Footer valorTotal={valorTotal} onResetApp={resetApp} />
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center"
  }
});
