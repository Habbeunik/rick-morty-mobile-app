import React from "react";
import { View, Text } from "react-native";
import axios from "react-native-axios";

const LocationScreen = props => {
  const [data, setData] = React.useState({});
  const url = props.route.params.url;

  React.useEffect(() => {
    axios.get(url).then(response => {
      setData(response.data);
    });
  }, [url]);

  return (
    <View>
      <Text style={styles.name}>{data.name}</Text>
      <Text>Type: {data.type}</Text>
      <Text>Dimension: {data.dimension}</Text>
    </View>
  );
};

const styles = {
  name: {
    fontWeight: "bold",
    fontSize: 20
  },
  caption: {
    fontSize: 13,
    color: "#0000005c"
  },
  textRow: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
};

export default LocationScreen;
