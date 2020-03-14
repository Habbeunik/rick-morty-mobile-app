import React from "react";
import { View, Text, FlatList } from "react-native";
import axios from "react-native-axios";
import Character from "../components/character";

const CharacterListScreen = props => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/").then(response => {
      console.log("res", response);
      setData(response.data.results);
    });
  }, []);

  return (
    <View style={{ backgroundColor: "#fff", width: "100%", height: "100%" }}>
      <Text>Character List Screen yea</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Character
            name={item.name}
            image={item.image}
            status={item.status}
            species={item.species}
            gender={item.gender}
            location={item.location}
            episodes={item.episode}
            navigation={props.navigation}
          />
        )}
      />
    </View>
  );
};

export default CharacterListScreen;
