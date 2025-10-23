import { View } from "react-native";
import React, { useState } from "react";
import Page from "../../Layouts/Page";
import SettingsButton from "../../components/SettingsButton";

const Langauge = () => {
  const [langauge, setLangauge] = useState<string>("English");

  return (
    <Page title="Langauge" headerType="NAVIGATION">
      <View style={{ flex: 1, paddingTop: 30, gap: 22 }}>
        <SettingsButton
          title="English"
          type="checkbox"
          checkBoxValue={langauge === "English"}
          onPress={() => setLangauge("English")}
        />
        <SettingsButton
          title="Bangla"
          type="checkbox"
          checkBoxValue={langauge === "Bangla"}
          onPress={() => setLangauge("Bangla")}
        />

        <SettingsButton
          title="Spanish"
          type="checkbox"
          checkBoxValue={langauge === "Spanish"}
          onPress={() => setLangauge("Spanish")}
        />
        <SettingsButton
          title="France"
          type="checkbox"
          checkBoxValue={langauge === "France"}
          onPress={() => setLangauge("France")}
        />
      </View>
    </Page>
  );
};

export default Langauge;
