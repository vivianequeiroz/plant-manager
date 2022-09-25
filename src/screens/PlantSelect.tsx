import React, { useEffect, useState } from "react";

import { StyleSheet, View, Text, FlatList } from "react-native";
import { EnvironmentChips } from "../components/EnvironmentChips";

import { Header } from "../components/Headers";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import { Loader } from "../components/Loader";
import api from "../services/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnvironmentProps {
  key: string;
  title: string;
}
interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  };
}

export function PlantSelect() {
  const [envinronments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);
  const [selectedEnvironment, setSelectedEnvironment] = useState("all");
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);

  const [page, setPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);

  const [loading, setLoading] = useState(true);

  function handleEnrivonmentSelected(environment: string) {
    setSelectedEnvironment(environment);

    if (environment === "all") {
      return setFilteredPlants(plants);
    }

    let filteredPlants: PlantProps[] = [];

    plants.filter((plant) => {
      if (plant.environments.includes(environment)) {
        filteredPlants.push(plant);
      }
    });

    setFilteredPlants(filteredPlants);
  }

  async function fetchPlants() {
    const { data } = await api.get(
      `plants?_sort=name&_order=asc&_page=${page}&_limit=8`
    );
    try {
      if (!data) return setLoading(true);

      if (page > 1) {
        setPlants((oldValue) => [...oldValue, ...data]);
        setFilteredPlants((oldValue) => [...oldValue, ...data]);
      } else {
        setPlants(data);
        setFilteredPlants(data);
      }

      setLoading(false);
      setLoadingMore(false);
    } catch (error) {
      console.warn(error);
    }
  }

  useEffect(() => {
    async function fetchEnvironments() {
      const { data } = await api.get(
        "plants_environments?_sort=title&order=asc"
      );
      try {
        setEnvironments([
          {
            key: "all",
            title: "All",
          },
          ...data,
        ]);
      } catch (error) {
        console.warn(error);
      }
    }

    fetchEnvironments();
  }, []);

  useEffect(() => {
    fetchPlants();
  }, []);

  if (loading) return <Loader />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>In which environment</Text>
        <Text style={styles.subtitle}>do you want to place your plant?</Text>
      </View>

      <View>
        <FlatList
          data={envinronments}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.environmentList}
          renderItem={({ item }) => (
            <EnvironmentChips
              title={item.title}
              active={item.key === selectedEnvironment}
              onPress={() => handleEnrivonmentSelected(item.key)}
            />
          )}
        ></FlatList>
      </View>

      <View style={styles.plants}>
        <FlatList
          data={filteredPlants}
          renderItem={({ item }) => <PlantCardPrimary data={item} />}
          numColumns={2}
          showsVerticalScrollIndicator={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.text,
    lineHeight: 20,
  },
  environmentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginHorizontal: 30,
    marginVertical: 32,
    paddingRight: 40,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: "center",
  },
});
