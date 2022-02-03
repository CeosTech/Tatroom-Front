import React, { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';

type SearchBarComponentProps = {};

const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Rechercher par ville..."
        onChangeText={this.updateSearch}
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
});

export default SwitchComponent;