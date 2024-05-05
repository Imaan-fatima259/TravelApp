import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Attractions, Hotels, NotFound, Restaurants } from "../assets";
import MenuContainer from "../components/MenuContainer";
import ItemCarDontainer from "../components/ItemCarDontainer";

const getPlacesData = async (type) => {
  try {
    let dummyData;
    switch (type) {
      case "restaurants":
        dummyData = [
          {
            name: "Panoramic View Hotel",
            location_string: "Dubai",
            price: "$280",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/restaurant-private-room-with-table-14-persons-wooden-ceiling-brick-walls-fireplace_140725-8452.jpg?t=st=1714906983~exp=1714910583~hmac=85658277b3b2ad1265b6b2c04e594d5e7c6ba22dbfc5bafa18e0bf4b56522260&w=740",
                },
              },
            },
            ratings: 4.2,
            bearing: "N",
            phone: "0312-9145321",
            email: "panoramicviewhotel@gmail.com",
            address: "Street 12, Dubai",
          },
          {
            name: "Mokeup, Dubai",
            location_string: "Sharjah",
            price: "$325",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-psd/view-signboard-store-building-with-japanese-aesthetics_23-2150417609.jpg?w=740",
                },
              },
            },
            ratings: 3.9,
            bearing: "S",
            phone: "0312-59922361",
            email: "mokeupdubai@gmail.com",
            address: "Street 15, Sharjah",
          },
          {
            name: "Urban Eats",
            location_string: "Marseille",
            price: "$64",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/beautiful-old-bildings-marseille_948265-266919.jpg?w=740",
                },
              },
            },
            ratings: 4.5,
            bearing: "E",
            phone: "0312-59922362",
            email: "urbaneats@gmail.com",
            address: "Avenue 20, Marseille",
          },
          {
            name: "Spice Route Bistro",
            location_string: "Doha",
            price: "$145",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/fine-dining-room-with-dark-wood-paneling-blue-leather-chairs_605022-29501.jpg?w=740",
                },
              },
            },
            ratings: 4.8,
            bearing: "W",
            phone: "0312-9045123",
            email: "spiceroutebistro@gmail.com",
            address: "Street 10, Doha",
          },
          {
            name: "Fusion Fare",
            location_string: "India",
            price: "$212",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/side-view-breakfast-table-with-red-tablecloth-fried-eggs-cheese-cheese-cucumbers-tomatoes-lettuce-coffee_176474-2483.jpg?t=st=1714907740~exp=1714911340~hmac=fca47ba49af4dceee9130d61f98e01031d5c09249a0f9a1075a130eac8a5a946&w=740",
                },
              },
            },
            ratings: 4.0,
            bearing: "S",
            phone: "0312-9837231",
            email: "fusionfare@gmail.com",
            address: "Lane 5, Mumbai",
          },
          {
            name: "Bistro Bliss",
            location_string: "China",
            price: "$67",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/lunch-setup-with-lentil-soup-grilled-fish-chips-vegetable-salad_140725-8499.jpg?t=st=1714907722~exp=1714911322~hmac=8b9d5fef7461f82421832ea7cb890f50901d6f2e085d6b70a4b9309fcad8be6a&w=740",
                },
              },
            },
            ratings: 4.3,
            bearing: "N",
            phone: "0312-59922365",
            email: "bistrobliss@gmail.com",
            address: "Street 8, Beijing",
          },
          {
            name: "The Cozy Kitchen, Islamabad",
            location_string: "Pakistan",
            price: "$189",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/restaurant-table-many-different-dishes_135427-6769.jpg?w=740",
                },
              },
            },
            ratings: 4.1,
            bearing: "E",
            phone: "0312-59922366",
            email: "cozykitchen@gmail.com",
            address: "Street 3, Islamabad",
          },
          {
            name: "Savory Delights",
            location_string: "China",
            price: "$120",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/restaurant-hall-with-blue-chairs-decors-wall_140725-8029.jpg?t=st=1714907686~exp=1714911286~hmac=468d6c7f2794e261420197825957cff51d12d879bbac9c10dc1acd435257bbac&w=740",
                },
              },
            },
            ratings: 4.6,
            bearing: "W",
            phone: "0317-0934712",
            email: "savorydelights@gmail.com",
            address: "Avenue 15, Shanghai",
          },
          {
            name: "Fireside Grill",
            location_string: "Japan",
            price: "$309",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/dining-room_100342-84.jpg?w=740",
                },
              },
            },
            ratings: 4.9,
            bearing: "S",
            phone: "0312-59922368",
            email: "firesidegrill@gmail.com",
            address: "Street 7, Tokyo",
          },
          {
            name: "Coastal Catch",
            location_string: "Sydney",
            price: "$98",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/pizza-with-olives-mozzarella-wooden-table_229911-6746.jpg?w=740",
                },
              },
            },
            ratings: 4.4,
            bearing: "N",
            phone: "0342-9045732",
            email: "coastalcatch@gmail.com",
            address: "Beach Road, Sydney",
          },
          {
            name: "The Hungry Plate",
            location_string: "New York",
            price: "$109",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/modern-restaurant-with-various-places_140725-9587.jpg?t=st=1714907637~exp=1714911237~hmac=b6b1860977ae0bd5019a1e87944e7197c1f5a9f83c5d6f243015cac84a83743c&w=740",
                },
              },
            },
            ratings: 4.7,
            bearing: "E",
            phone: "0312-9045172",
            email: "thehungryplate@gmail.com",
            address: "Avenue 25, New York",
          },
          {
            name: "The Daily Dish",
            location_string: "New Delhi",
            price: "$149",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/colorful-orchid-decor-india-wedding-dinner_73740-1026.jpg?w=740",
                },
              },
            },
            ratings: 3.8,
            bearing: "W",
            phone: "0318-9903651",
            email: "thedailydish@gmail.com",
            address: "Street 5, New Delhi",
          },
          {
            name: "Flavor Junction",
            location_string: "New Delhi",
            price: "$267",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/breakfast-set-table_140725-3715.jpg?t=st=1714907839~exp=1714911439~hmac=d435eccfd94a25aa99299ef65a10dca8a7d6721b2d73cb8b7b4c5980766e4148&w=740",
                },
              },
            },
            ratings: 4.3,
            bearing: "N",
            phone: "0315-8734921",
            email: "flavorjunction@gmail.com",
            address: "Lane 10, New Delhi",
          },
          {
            name: "Culinary Oasis",
            location_string: "New Delhi",
            price: "$87",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/chairs-tables-arranged-restaurant_1048944-17929606.jpg?w=826",
                },
              },
            },
            ratings: 4.0,
            bearing: "S",
            phone: "0312-59422546",
            email: "culinaryoasis@gmail.com",
            address: "Street 2, New Delhi",
          },
        ];
        break;
      case "hotels":
        dummyData = [
          {
            name: "Premier Doha Hotel",
            location_string: "Doha",
            price: "$78",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/tourist-ship-golden-horn-istanbul-evening-turkey_483040-1324.jpg?w=740",
                },
              },
            },
            ratings: 4.2,
            bearing: "N",
            phone: "0312-59922374",
            email: "premierdohahotel@gmail.com",
            address: "Street 5, Doha",
          },
          {
            name: "CappiDokia Hotel",
            location_string: "Turkey",
            price: "$65",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/table-with-traditional-food-thanksgiving-day-event_23-2148632567.jpg?t=st=1714898958~exp=1714902558~hmac=0a9cba932a1ee7c993f584090806f70a6a69da11639ef80a5ed76f3c47cc05b8&w=740",
                },
              },
            },
            ratings: 4.5,
            bearing: "E",
            phone: "0312-59922375",
            email: "cappidokiahotel@gmail.com",
            address: "Avenue 10, Istanbul",
          },
          {
            name: "Hormmoks",
            location_string: "Dubai",
            price: "$187",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/hammocks-near-pool_1203-693.jpg?t=st=1714901745~exp=1714905345~hmac=6edba7f975f16d93e25273f51052a5cfb63c055c2649b3ac011ab086149f00d5&w=740",
                },
              },
            },
            ratings: 4.0,
            bearing: "W",
            phone: "0312-59922376",
            email: "hormmoks@gmail.com",
            address: "Lane 8, Dubai",
          },
          {
            name: "Futuristic Landscape",
            location_string: "Dubai",
            price: "$234",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/futuristic-landscape-dubai_23-2151339806.jpg?t=st=1714901826~exp=1714905426~hmac=ea86f38fbd5e57c2b121140a548da8c1a6318d079dba121dd25c116c5ef29203&w=740",
                },
              },
            },
            ratings: 3.8,
            bearing: "S",
            phone: "0312-59922377",
            email: "futuristiclandscape@gmail.com",
            address: "Street 20, Dubai",
          },
          {
            name: "Capella Singapore",
            location_string: "Singapore",
            price: "$278",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/23-february-2021-dubai-uae-young-man-works-as-driver-captain-wooden-abra-dhow-boat-bur-dubai-creek-area-transports-passengers-from-one-side-channel-other_984126-10710.jpg?w=740",
                },
              },
            },
            ratings: 4.3,
            bearing: "NE",
            phone: "0312-59922378",
            email: "capellasingapore@gmail.com",
            address: "Marina Bay Sands, Singapore",
          },
          {
            name: "Evolve Back Kabini",
            location_string: "India",
            price: "$312",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/empty-table-cafe-decorated-with-flower_984126-4307.jpg?w=740",
                },
              },
            },
            ratings: 4.1,
            bearing: "E",
            phone: "0312-59922379",
            email: "evolvebackkabini@gmail.com",
            address: "Kabini, India",
          },
          {
            name: "Lal Qilla",
            location_string: "Doha",
            price: "$345",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/close-up-food-table_1048944-21259997.jpg?w=360",
                },
              },
            },
            ratings: 3.9,
            bearing: "S",
            phone: "0312-59922380",
            email: "lalqilla@gmail.com",
            address: "Corniche Street, Doha",
          },
          {
            name: "Silver Palm",
            location_string: "Pakistan",
            price: "$$$",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/cup-coffee-table-front-street-with-city-lights-background_839035-459438.jpg?w=740",
                },
              },
            },
            ratings: 4.6,
            bearing: "N",
            phone: "0312-59922381",
            email: "silverpalm@gmail.com",
            address: "Clifton, Karachi",
          },
          {
            name: "Shangri-La Eros",
            location_string: "New Delhi",
            price: "$712",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/close-up-tea-served-table-cafe-against-building_1048944-22689488.jpg?w=360",
                },
              },
            },
            ratings: 4.4,
            bearing: "W",
            phone: "0312-59922382",
            email: "shangrilaeros@gmail.com",
            address: "Connaught Place, New Delhi",
          },
          {
            name: "Shazza",
            location_string: "Doha",
            price: "$134",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/close-up-potted-plant-table-restaurant_1048944-1636460.jpg?w=740",
                },
              },
            },
            ratings: 4.0,
            bearing: "E",
            phone: "0312-59922383",
            email: "shazza@gmail.com",
            address: "C-Ring Road, Doha",
          },
          {
            name: "Ezdan Hotel",
            location_string: "Doha",
            price: "$87",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/swimming-pool_74190-6509.jpg?t=st=1714902375~exp=1714905975~hmac=e987855978591679b6fa879a5d8346ea963c769efc579dd53c8b86b78e377cf2&w=740",
                },
              },
            },
            ratings: 4.2,
            bearing: "S",
            phone: "0312-59922384",
            email: "ezdanhotel@gmail.com",
            address: "West Bay, Doha",
          },
          {
            name: "Ibis",
            location_string: "Doha",
            price: "$65",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/food-table_1048944-12494072.jpg?w=740",
                },
              },
            },
            ratings: 3.7,
            bearing: "N",
            phone: "0312-59922385",
            email: "ibis@gmail.com",
            address: "Airport Road, Doha",
          },
        ];
        break;
      case "attractions":
        dummyData = [
          {
            name: "Skyscrapers",
            location_string: "Dubai",
            price: "$187",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/low-angle-view-skyscrapers_1048944-18338033.jpg?w=740",
                },
              },
            },
            ratings: 4.0,
            bearing: "N",
            phone: "0312-59922386",
            email: "skyscrapers@gmail.com",
            address: "Sheikh Zayed Road, Dubai",
          },
          {
            name: "Museum of the Future",
            location_string: "Dubai UAE",
            price: "$345",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/museum-future-dubai-uae-city-downtown_981082-2424.jpg?w=740",
                },
              },
            },
            ratings: 4.5,
            bearing: "S",
            phone: "0312-59922387",
            email: "museumoffuture@gmail.com",
            address: "Sheikh Zayed Road, Dubai",
          },
          {
            name: "Burj Khalifa Skyscraper",
            location_string: "Dubai",
            price: "$135",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/happy-family-walking-dubai-with-burj-khalifa-skyscraper_109800-15498.jpg?w=360",
                },
              },
            },
            ratings: 4.8,
            bearing: "E",
            phone: "0312-59922388",
            email: "burjkhalifa@gmail.com",
            address: "1 Sheikh Mohammed bin Rashid Blvd, Dubai",
          },
          {
            name: "Matsumoto Castle",
            location_string: "Nango, Japan",
            price: "$234",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/matsumoto-castle-with-maple-leaves-autumn-nagano-japan_40015-762.jpg?w=740",
                },
              },
            },
            ratings: 4.2,
            bearing: "W",
            phone: "0312-59922389",
            email: "matsumotocastle@gmail.com",
            address: "Matsumoto, Nagano Prefecture, Japan",
          },
          {
            name: "Osaka Castle",
            location_string: "Osaka, Japan",
            price: "$265",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/osaka-castle-cherry-blossom-spring-sakura-seasons-osaka-japan_335224-226.jpg?t=st=1714899936~exp=1714903536~hmac=417ef22d36f0759279b7c9374b54371a5b783b45a2734d21f1686e04082bfc29&w=740",
                },
              },
            },
            ratings: 4.6,
            bearing: "N",
            phone: "0312-59922390",
            email: "osakacastle@gmail.com",
            address: "Osaka, Japan",
          },
          {
            name: "Urbane New Stone Suspension Tourist",
            location_string: "America",
            price: "$265",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/urbane-new-stone-suspension-tourist_1206-72.jpg?t=st=1714900041~exp=1714903641~hmac=e325b58fdc705a74e0abcd10f43099e257e5504505ed7178d4d701105915f387&w=740",
                },
              },
            },
            ratings: 4.3,
            bearing: "S",
            phone: "0312-59922391",
            email: "urbanetourist@gmail.com",
            address: "New Stone, America",
          },
          {
            name: "Suspension Bridge",
            location_string: "America",
            price: "$217",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/people-walking-suspension-bridge_1048944-8314588.jpg?w=740",
                },
              },
            },
            ratings: 4.7,
            bearing: "E",
            phone: "0312-59922392",
            email: "suspensionbridge@gmail.com",
            address: "Bridge Street, America",
          },
          {
            name: "View of Brooklyn Bridge",
            location_string: "New York",
            price: "$216",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/view-brooklyn-bridge-new-york-city_23-2151279493.jpg?t=st=1714900938~exp=1714904538~hmac=a327b101193ffa77b060e4794552aa05973fd94a6736de2112ccd7ae20e34d65&w=360",
                },
              },
            },
            ratings: 4.4,
            bearing: "W",
            phone: "0312-59922393",
            email: "brooklynbridge@gmail.com",
            address: "Brooklyn, New York",
          },
          {
            name: "Statue of Liberty in Odaiba",
            location_string: "Tokyo, Japan",
            price: "$351",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/premium-photo/statue-liberty-odaiba-tokyo-japan_46494-71.jpg?w=900",
                },
              },
            },
            ratings: 4.5,
            bearing: "N",
            phone: "0312-59922394",
            email: "statueofliberty@gmail.com",
            address: "Odaiba, Tokyo, Japan",
          },
          {
            name: "Hilton Doha",
            location_string: "Doha",
            price: "$66",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/ruins-ancient-city-hierapolis-hill-pamukkale-turkey_661209-373.jpg?t=st=1714899066~exp=1714902666~hmac=af3e47e4a131a254052388f8197ab57f507e6c5cd214c748bd595439f28945d9&w=740",
                },
              },
            },
            ratings: 4.8,
            bearing: "S",
            phone: "0312-59922395",
            email: "hiltondoha@gmail.com",
            address: "West Bay, Doha",
          },
          {
            name: "Mevlana Mosque in Konya",
            location_string: "Turkey",
            price: "$188",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/mevlana-mosque-konya-turkey_335224-631.jpg?t=st=1714899140~exp=1714902740~hmac=1a21f11b4fe3a75a411a6e55a85ce5246fd0b69895c5fb438df9a33e66e8a18d&w=740",
                },
              },
            },
            ratings: 4.1,
            bearing: "E",
            phone: "0312-59922396",
            email: "mevlanamosque@gmail.com",
            address: "Konya, Turkey",
          },
          {
            name: "Sydney Harbor Bridge",
            location_string: "Australia",
            price: "$213",
            photo: {
              images: {
                medium: {
                  url: "https://img.freepik.com/free-photo/beautiful-shot-sydney-harbor-bridge-with-light-pink-blue-sky_181624-16041.jpg?t=st=1714899283~exp=1714902883~hmac=5f1c5c3312d18a14fe40c6648bb5215e942d5ae1221a8773ce4fd08ca3accfae&w=740",
                },
              },
            },
            ratings: 4.7,
            bearing: "N",
            phone: "0312-59922397",
            email: "sydneybridge@gmail.com",
            address: "Sydney, Australia",
          },
        ];
        break;
      default:
        dummyData = [];
    }

    return dummyData;
  } catch (error) {
    return error;
  }
};

const Discover = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(type).then((data) => {
      setMainData(data);
      setIsLoading(false);
    });
  }, [type]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Explore</Text>
        <Text style={styles.subtitleText}>the unknown!!!</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#0B646B" />
      ) : (
        <ScrollView>
          <View style={styles.menuContainer}>
            <MenuContainer
              title="Hotels"
              imageSrc={Hotels}
              type={type}
              setType={setType}
            />
            <MenuContainer
              title="Destinations"
              imageSrc={Attractions}
              type={type}
              setType={setType}
            />
            <MenuContainer
              title="Cafes"
              imageSrc={Restaurants}
              type={type}
              setType={setType}
            />
          </View>

          <View style={styles.topTripsContainer}>
            <Text style={styles.topTripsTitle}>Top Trips</Text>
          </View>

          <View style={styles.itemsContainer}>
            {mainData.length > 0 ? (
              mainData.map((data, i) => (
                <ItemCarDontainer
                  key={i}
                  imageSrc={
                    data?.photo?.images?.medium?.url ||
                    "https://via.placeholder.com/400"
                  }
                  title={data?.name}
                  location={data?.location_string}
                  price={data?.price}
                  ratings={data?.ratings}
                  bearing={data?.bearing}
                  phone={data?.phone}
                  email={data?.email}
                  address={data?.address}
                  data={data}
                  navigation={navigation}
                />
              ))
            ) : (
              <View style={styles.notFoundContainer}>
                <Image source={NotFound} style={styles.notFoundImage} />
                <Text style={styles.notFoundText}>Oops... No Data Found</Text>
              </View>
            )}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  titleContainer: {
    paddingHorizontal: 8,
    paddingTop: 8,
    alignItems: "center",
  },
  titleText: {
    fontSize: 40,
    color: "#063e44cf",
    fontWeight: "bold",
  },
  subtitleText: {
    fontSize: 36,
    color: "#527283",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginTop: 8,
  },
  topTripsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginTop: 16,
  },
  topTripsTitle: {
    fontSize: 28,
    color: "#2C7379",
    fontWeight: "bold",
  },
  itemsContainer: {
    paddingHorizontal: 8,
    marginTop: 8,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  notFoundContainer: {
    width: "100%",
    height: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  notFoundImage: {
    width: 100,
    height: 100,
  },
  notFoundText: {
    fontSize: 24,
    color: "#428288",
    fontWeight: "bold",
    marginTop: 16,
  },
});

export default Discover;
