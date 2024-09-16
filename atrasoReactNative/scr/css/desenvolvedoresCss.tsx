import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
      background: {
        flex: 1,
        width:'100%',
        height:'100%',
    },
    container: {
        marginTop:120,
        marginLeft:5,
        marginRight:5,
      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      cardsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      card: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        alignItems: 'center',
      },
      avatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 10,
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
      },
      role: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
      },
      socialIcons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
      },
      icon: {
        color: '#333',
      },
   
   
});

export default styles;
