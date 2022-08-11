import React from "react";
import { TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import CustomText from "../../components/CustomText";
import FAQItem from "../../components/FAQItem";
import { FAQItemProps } from "../../components/FAQItem/types";
import ScreenLayout from "../../layouts/ScreenLayout";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const data: FAQItemProps[] = [
  {
    title: "What is a buy and sell rate?",
    description:
      "You can add a maximum of 5 payment accounts. This includes MoMo payment number and bank accounts",
  },
  {
    title: "My received transaction is pending",
    description:
      "You can add a maximum of 5 payment accounts. This includes MoMo payment number and bank accounts",
  },
  {
    title: "My received transaction hasn’t reflected",
    description:
      "You can add a maximum of 5 payment accounts. This includes MoMo payment number and bank accounts",
  },
  {
    title: "What are the fees for sending funds ?",
    description:
      "You can add a maximum of 5 payment accounts. This includes MoMo payment number and bank accounts",
  },
  {
    title: "My received transaction hasn’t reflected",
    description:
      "You can add a maximum of 5 payment accounts. This includes MoMo payment number and bank accounts",
  },
];

const FAQsScreen: React.FC<RootStackScreenProps<"FAQs">> = ({
  route,
}) => {
  const onContinue = () => {};

  const renderItem = ({ item }: { item: FAQItemProps }) => (
    <FAQItem {...item} />
  );

  return (
    <ScreenLayout
      footer={
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.footerButton}
          >
            <CustomText style={styles.footerButtonText}>
              ASK US ANYTHING
            </CustomText>
          </TouchableOpacity>
        </View>
      }
      showHeader
      showShadow
      title="FAQ's"
    >
      <FlatList renderItem={renderItem} data={data} />
    </ScreenLayout>
  );
};

export default FAQsScreen;
