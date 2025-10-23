import { View } from "react-native";
import React from "react";
import Page from "../../Layouts/Page";
import SettingsButton from "../../components/SettingsButton";
import { navigate } from "../../navigation/NavigationService";
import { ROUTES } from "../../navigation/Routes";

const Settings = () => {
  return (
    <Page title="Settings" headerType="NAVIGATION">
      <View style={{ flex: 1, gap: 22, paddingTop: 30 }}>
        <SettingsButton title="Permission" type="switch" />
        <SettingsButton title="Push Notification" type="switch" />
        <SettingsButton title="Dark Mood" type="switch" />
        <SettingsButton title="Security" />
        <SettingsButton title="Help" />
        <SettingsButton
          title="Langauge"
          onPress={() => navigate(ROUTES.Langauge)}
        />
        <SettingsButton title="About Application" />
      </View>
    </Page>
  );
};

export default Settings;
