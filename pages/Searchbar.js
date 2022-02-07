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
        placeholder="Recherchez par ville ..."
        onChangeText={setSearch}
        value={search}
        containerStyle={{
        backgroundColor:"white",
        border: "none",
        height: "100%",
        }}
        inputContainerStyle= {{
          backgroundColor: "white",
          border: "3px solid #000000",
          borderBottomWidth: 3,
          borderRadius : 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    height: "100vh",
  },
});

export default SwitchComponent;