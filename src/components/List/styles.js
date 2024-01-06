import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '95%',
        marginTop: 30,

    },
    boxProduct: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    textProduct: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    textNumber: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#2e2e2e',
        padding: 8,
        borderRadius: 10,
    },
    boxList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#1F2020',
        borderRadius: 10,
        marginTop: 10,
    },
    boxItem: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    trashIcon: {
        color: '#fff', 
        fontSize: 30, 
    },
});

export default styles;