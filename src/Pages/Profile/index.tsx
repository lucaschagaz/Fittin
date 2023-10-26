import React from 'react';
import {View} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {Content, Text, Avatar, Button} from '../../Components';
import {ProfileItem, Wrapper, Box, NameBox} from './styles';

export const Profile = () => {
  return (
    <Content scrolable>
      <Box>
        <Avatar />
        <NameBox>
          <Text font="Heading_two">Lucas chagaz</Text>
          <Text bold font="SubTitle_one">
            lucas@exemplo.com
          </Text>
        </NameBox>
      </Box>
      <Box>
        <Text
          style={{alignSelf: 'flex-start', paddingLeft: 10}}
          font="Heading_two"
          bold>
          Evolução
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            height: 60,
            marginTop: 10,
            marginBottom: 30,
          }}>
          <View
            style={{
              height: '100%',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Text font="SubTitle_one" bold color="GRAYDARK">
              Inical
            </Text>
            <Text font="Heading_two" color="GRAY_100">
              50 kg
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Text font="SubTitle_one" bold color="GRAYDARK">
              Atual
            </Text>
            <Text font="Heading_two" color="GRAY_100">
              58kg
            </Text>
          </View>
          <View
            style={{
              height: '100%',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
            }}>
            <Text font="SubTitle_one" bold color="GRAYDARK">
              Ganho
            </Text>
            <Text font="Heading_two" color="GRAY_100">
              8 kg
            </Text>
          </View>
        </View>
        <Button width="large" title="Modificar" />
      </Box>
      <Wrapper style={{elevation: 5}}>
        <Text
          style={{
            alignSelf: 'flex-start',
            paddingLeft: 10,
            paddingVertical: 10,
          }}
          font="Heading_three"
          bold>
          Dados importantes
        </Text>
        <ProfileItem>
          <Text font="SubTitle_one" bold>
            Editar perfil
          </Text>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
        <ProfileItem>
          <Text font="SubTitle_one" bold>
            Avaliar-nos
          </Text>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
        <ProfileItem>
          <Text font="SubTitle_one" bold>
            Privacidade
          </Text>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
        <ProfileItem>
          <Text font="SubTitle_one" bold>
            Configurações
          </Text>
          <MaterialIcon name="arrow-forward-ios" size={20} />
        </ProfileItem>
      </Wrapper>
      <Button title="Sair" width="large" />
    </Content>
  );
};
