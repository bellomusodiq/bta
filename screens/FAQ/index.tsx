import React, { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { faqApi } from "../../api/profile.api";
import CustomText from "../../components/CustomText";
import FAQItem from "../../components/FAQItem";
import { FAQItemProps } from "../../components/FAQItem/types";
import ScreenLayout from "../../layouts/ScreenLayout";
import { useAppSelector } from "../../store";
import { RootStackScreenProps } from "../../types";
import styles from "./styles";

const FAQsScreen: React.FC<RootStackScreenProps<"FAQs">> = ({ route }) => {
  const onContinue = () => {};
  const { user } = useAppSelector((state) => state.auth);
  const [faqs, setFaqs] = useState<FAQItemProps[]>([]);

  const renderItem = ({ item }: { item: FAQItemProps }) => (
    <FAQItem {...item} />
  );

  const getFaqs = async () => {
    const result = await faqApi(user.token);
    if (result.success) {
      setFaqs(result.faq);
    }
  };

  useEffect(() => {
    getFaqs();
  }, []);

  return (
    <ScreenLayout
      footer={
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => {}} style={styles.footerButton}>
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
      <FlatList
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        data={faqs}
      />
    </ScreenLayout>
  );
};

export default FAQsScreen;
