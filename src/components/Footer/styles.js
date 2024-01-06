import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'
        
        
    },
    buttonExit: {
        backgroundColor: '#17a025',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40,
        paddingRight:15,
        paddingLeft: 15,
        paddingTop: 5,
        paddingBottom: 5,
    },
    textButton: {
        color: '#eee',
        fontSize: 15,
        fontWeight: 'bold',
    },
    textTotal:{
        color: '#eee',
        fontSize: 15,
        fontWeight: 'bold',
    }
});

export default styles;