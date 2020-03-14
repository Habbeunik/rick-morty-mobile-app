import React from 'react';
import { View, Text } from 'react-native';
import axios from 'react-native-axios';

const EpisodeScreen = (props) => {
  const [data , setData ] = React.useState({});
  const url =props.route.params.url;

  React.useEffect(() =>{
    axios.get(url).then((res)=>{
      setData(res.data);
    });
  },[url]);

  return (
    <View>
    <Text style={styles.name}>{data.name}</Text>
    <Text>Airdate:{data.air_date}</Text>
    <Text>Episode: {data.episode}</Text>
  </View>
  )
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

export default EpisodeScreen;
