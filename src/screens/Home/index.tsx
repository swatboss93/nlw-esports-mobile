import { useState, useEffect } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { GameCard, GameCardProps } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png'

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    console.log('fasfasfas');
    fetch('http://192.168.1.7:3333/games')
      .then(response => response.json())
      .then(data => {
        setGames(data)
      })
  }, [])

  return(
    <SafeAreaView style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />
      <Heading
        title='Encontre seu duo!'
        subtitle='Selecione o game que deseja jogar...'
      />

      <FlatList
        data={games}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
      />
    </SafeAreaView>
  );
}
