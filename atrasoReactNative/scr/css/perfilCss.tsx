import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    //fundo
    background: {
        flex: 1,

    },
    container:{
    justifyContent:'center',
    alignItems:'center',
    },

    imgPerfil: {
        borderRadius: 100,
        width: 130,
        height: 130,
        justifyContent: 'center',
      
        marginTop:80,

    },

    cameraIcon: {
      position: 'absolute',
      marginTop:150,
      right: 30,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      borderRadius: 20,
      padding: 5,
      marginRight:100
    },

    nome:{
        fontWeight:'bold',
        fontSize:17,
        marginTop:20
    },
   //icons 

   containerBase:{
   justifyContent:'flex-start',
   alignItems:'flex-start',
   marginLeft:30,
},

imgIcon:{
    width:60,
    height:60,
    borderRadius:70,
    marginTop:50,
},
imgIcon2:{
    width:60,
    height:60,
    borderRadius:70,
    marginTop:20,
},

nomeAvaliador:{
    fontWeight:'bold',
    fontSize:17,
    marginLeft:70,
    bottom:50
},
textAvaliacao:{
    marginLeft:80,
    fontWeight:'bold',
    fontSize:12
},
   });
export default styles;

