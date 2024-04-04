import React, { useState } from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import Header from "../../../components/Header";
import locationImg from "../../../../assets/home/location.png";
import mainImg from "../../../../assets/raceResults/mainImg.png";
import Fonts from "../../../common/Fonts";

const RaceResults = () => {
  const [page, setPage] = useState(1);
  const itemsPerPage = 5;

  const data = [
    {
      id: 1,
      mainImage: mainImg,
      title: "AIA iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 2,
      mainImage: mainImg,
      title: "AIA iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 3,
      mainImage: mainImg,
      title: "AIA iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 4,
      mainImage: mainImg,
      title: "AIA iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 5,
      mainImage: mainImg,
      title: "AIA iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 6,
      mainImage: mainImg,
      title: "AIA iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 7,
      mainImage: mainImg,
      title: "AIA iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 8,
      mainImage: mainImg,
      title: "AIA3 iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 9,
      mainImage: mainImg,
      title: "AIA3 iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 10,
      mainImage: mainImg,
      title: "AIA3 iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 11,
      mainImage: mainImg,
      title: "AIA3 iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 12,
      mainImage: mainImg,
      title: "AIA3 iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 13,
      mainImage: mainImg,
      title: "AIA3 iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 14,
      mainImage: mainImg,
      title: "AIA3 iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 15,
      mainImage: mainImg,
      title: "AIA3 iRun for Vitality",
      city: "Putrajaya",
    },
    {
      id: 16,
      mainImage: mainImg,
      title: "AIA3 iRun for Vitality",
      city: "Putrajaya",
    },
  ];

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const renderItems = () => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex).map((item) => (
      <View style={styles.card} key={item.id}>
        <Image source={item.mainImage} style={styles.mainImg} />
        <View>
          <Text style={styles.imageTitle}>{item.title}</Text>
          <View style={styles.details}>
            <Image source={locationImg} />
            <Text style={styles.city}>{item.city}</Text>
          </View>
        </View>
      </View>
    ));
  };

  const changePage = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Header />
      <ScrollView style={styles.container}>
        <Text style={{ ...styles.heading, fontFamily: Fonts.Bold_700 }}>
          Upcoming races results
        </Text>
        {renderItems()}

       
      </ScrollView>

      <View style={styles.pagination}>
          <Text
            onPress={() => changePage(page - 1)}
            style={styles.paginationButton}
          >
            ◀
          </Text>
          {[...Array(Math.min(totalPages, 5))].map((_, i) => {
            const pageNumber = page <= 3 ? i + 1 : page - 3 + i;
            return (
              <Text
                key={i}
                onPress={() => changePage(pageNumber)}
                style={[
                  styles.pageNumber,
                  page === pageNumber && styles.selectedPage,
                ]}
              >
                {pageNumber}
              </Text>
            );
          })}
          <Text
            onPress={() => changePage(page + 1)}
            style={styles.paginationButton}
          >
            ▶
          </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
  },
  card: {
    marginBottom: 20,
  },
  heading: {
    color: "#FCB318",
    fontSize: 24,
    fontWeight: "700",
    marginVertical: 10,
    paddingBottom: 15,
  },
  imageTitle: {
    color: "white",
    marginVertical: 12,
    fontSize: 24,
    fontWeight: "700",
  },
  mainImg: {
    width: "100%",
    borderRadius: 12,
  },
  details: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  city: {
    color: "#939598",
    fontSize: 16,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    
  },
  paginationButton: {
    fontSize: 20,
    marginHorizontal: 5,
    color: "#FCB318",
    borderWidth: 1,
    borderColor: "#FCB318",
    paddingHorizontal: 6,
    paddingVertical: 5,
    paddingVertical: 1,
    borderRadius: 5,
  },
  pageNumber: {
    fontSize: 20,
    marginHorizontal: 5,
    color: "black",
    backgroundColor: "#FCB318",
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 16,
    borderRadius: 5,
  },
  selectedPage: {
    color: "white",
  },
});

export default RaceResults;
