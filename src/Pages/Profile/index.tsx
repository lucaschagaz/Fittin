import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {Content, Text, Avatar} from '../../Components';
import {NameBox, Logout, LogoutWrapper, ProfileItem, Wrapper} from './styles';

export default function Profile() {
  return (
    <Content>
      {/* <Header justify="space-between" align="center" direction="row"> */}
      <Avatar />
      <NameBox>
        <Text>Lucas chagaz</Text>
        <Text>lucas@exemplo.com</Text>
      </NameBox>
      <TouchableOpacity>
        <Icon name="pen-to-square" size={20} color="#999" />
      </TouchableOpacity>
      {/* </Header> */}
      <Wrapper>
        <ProfileItem>
          <Text>Editar perfil</Text>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
        <ProfileItem>
          <Text>Avaliar-nos</Text>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
        <ProfileItem>
          <Text>Privacidade</Text>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
        <ProfileItem>
          <Text>Configurações</Text>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
      </Wrapper>
      <LogoutWrapper>
        <Logout>
          <Text>Sair do app</Text>
          <MaterialIcon name="exit-to-app" size={28} />
        </Logout>
      </LogoutWrapper>
    </Content>
  );
}
