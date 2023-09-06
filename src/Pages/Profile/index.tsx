import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome6';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {Content, Header, Title, Avatar} from '../../Components';
import {Box, Logout, LogoutWrapper, ProfileItem, Wrapper} from './styles';

export default function Profile() {
  return (
    <Content>
      <Header justify="space-between" align="center" direction="row">
        <Avatar />
        <Box>
          <Title size={25} weight="bold">
            Lucas chagaz
          </Title>
          <Title size={16}>lucas@exemplo.com</Title>
        </Box>
        <TouchableOpacity>
          <Icon name="pen-to-square" size={20} color="#999" />
        </TouchableOpacity>
      </Header>
      <Wrapper>
        <ProfileItem>
          <Title>Editar perfil</Title>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
        <ProfileItem>
          <Title>Avaliar-nos</Title>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
        <ProfileItem>
          <Title>Privacidade</Title>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
        <ProfileItem>
          <Title>Configurações</Title>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
      </Wrapper>
      <LogoutWrapper>
        <Logout>
          <Title size={22} mr={3} mb={2}>
            Sair do app
          </Title>
          <MaterialIcon name="exit-to-app" size={28} />
        </Logout>
      </LogoutWrapper>
    </Content>
  );
}
