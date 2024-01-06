import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '95%',
        marginTop: 30,
       
    },
    boxInput: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: 5,
    },
    inputItem: {
        backgroundColor: '#2e2e2e',
        color: '#fff',
        padding: 10,
        borderRadius: 30,
        width: '55%',
        height: 50,
    },
    inputUnidade: {
        backgroundColor: '#2e2e2e',
        color: '#fff',
        padding: 10,
        borderRadius: 30,
        width: '21%',
        height: 50,
    },
    buttonAdd: {
        backgroundColor: '#17a025',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        height: 60,
        marginTop: 20,
        paddingTop: 14,
        paddingBottom: 14,
    },
    textButton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

});


export default styles;