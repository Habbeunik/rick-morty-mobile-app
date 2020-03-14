import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const Character = props => {
  function goToEpisodeScreen(url) {
    props.navigation.navigate("Episodes", { url });
  }

  function goToLocationScreen() {
    props.navigation.navigate("Locations", { url: props.location.url });
  }

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={{ uri: props.image }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.caption}>Status: {props.status}</Text>
        <Text style={styles.caption}>Species: {props.species}</Text>
        <Text style={styles.caption}>Gender: {props.gender}</Text>
        <View style={styles.textRow}>
          <Text style={styles.caption}>Location: </Text>
          <TouchableOpacity onPress={goToLocationScreen}>
            <Text style={{ ...styles.caption, ...styles.clickable }}>
              {props.location && props.location.name}
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.caption}>Episodes:</Text>
        <View style={styles.textRow}>
          {Array.isArray(props.episodes) &&
            props.episodes.map((episode, index) => (
              <TouchableOpacity onPress={() => goToEpisodeScreen(episode)}>
                <Text style={{ ...styles.caption, ...styles.clickable }}>
                  Episode {index},
                </Text>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </View>
  );
};

const styles = {
  clickable: {
    color: "blue"
  },
  textRow: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 20,
    backgroundColor: "#ccc",
    overflow: "hidden"
  },
  content: {
    marginLeft: 20
  },
  name: {
    fontWeight: "bold",
    fontSize: 20
  },
  caption: {
    fontSize: 13,
    color: "#0000005c"
  }
};

export default Character;
