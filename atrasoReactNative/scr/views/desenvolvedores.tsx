import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Linking , ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../css/desenvolvedoresCss';
import Imagens from "../../img/img";

const profiles = [
  { 
    name: 'Thiago Monteiro', 
    role: 'Back-End', 
    avatar: require('../../assets/imgApp/perfil.png'),
    links: {
      linkedin: '',
      github: 'https://github.com/thiago-git1910',
      instagram: 'https://www.instagram.com/tthiago__11/'
    }
  },

  { ///ste
    name: 'Stephany Ramos', 
    role: 'Back-End', 
    avatar: require('../../assets/imgApp/perfil.png'),
    links: {
     linkedin: 'https://linkedin.com/in/depay',
      github: 'https://github.com/sttephany11',
      instagram: 'https://www.instagram.com/ste_rodrigues11/'
    }
  },

  { ///gui
    name: 'Guilherme Mesquita', 
    role: 'Back-End', 
    avatar: require('../../assets/imgApp/perfil.png'),
    links: {
     linkedin: 'https://linkedin.com/in/depay',
      github: 'https://github.com/Guilherme-S-Mesquita',
      instagram: 'https://www.instagram.com/gui.mesquitx/'
    }
  },

  { ///felipe
    name: 'Felipe Macedo', 
    role: 'Back-End', 
    avatar: require('../../assets/imgApp/perfil.png'),
    links: {
      linkedin: 'https://linkedin.com/in/depay',
      github: 'https://github.com/Felipe-Macedo-Correia',
      instagram: 'https://www.instagram.com/macedoo.felipe/'
    }
  },

  { ///nicolly
    name: 'Nicolly Terra', 
    role: 'Back-End', 
    avatar: require('../../assets/imgApp/perfil.png'),
    links: {
     linkedin: 'https://linkedin.com/in/depay',
      github: 'https://github.com/collyterra',
      instagram: 'https://www.instagram.com/collysza/'
    }
  },

  { ///kauanne
    name: 'Kauanne Sandes', 
    role: 'Back-End', 
    avatar: require('../../assets/imgApp/perfil.png'),
    links: {
      linkedin: '',
      github: '',
      instagram: 'https://www.instagram.com/ksandes_/'
    }
  },

  { ///joao
    name: 'João Victor', 
    role: 'Back-End', 
    avatar: require('../../assets/imgApp/perfil.png'),
    links: {
      linkedin: '',
      github: '',
      instagram: 'https://www.instagram.com/joaovtorellixz/'
    }
  },
  // Adicione mais perfis conforme necessário
];

const ProfileCard = ({ profile }) => (
  <View style={styles.card}>
    <Image source={profile.avatar} style={styles.avatar} />
    <Text style={styles.name}>{profile.name}</Text>
    <Text style={styles.role}>{profile.role}</Text>
    <View style={styles.socialIcons}>
  
      <TouchableOpacity onPress={() => Linking.openURL(profile.links.linkedin)}>
        <Icon name="linkedin" size={20} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(profile.links.github)}>
        <Icon name="github" size={20} style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL(profile.links.instagram)}>
        <Icon name="instagram" size={20} style={styles.icon} />
      </TouchableOpacity>
    </View> 
  </View>
);

const Desenvolvedores = () => (
    <ImageBackground
    source={Imagens.fundoDesenvolvedores}
    style={styles.background}
    resizeMode="cover"
  >
    <ScrollView>
   <View style={styles.container}>
  
    <Text style={styles.header}>Desenvolvedores</Text>
    <View style={styles.cardsContainer}>
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </View>
 
  </View>
  </ScrollView>

  </ImageBackground>
);


export default Desenvolvedores;
