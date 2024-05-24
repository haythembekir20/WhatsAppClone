import * as DocumentPicker from "expo-document-picker";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";

import firebase from "../../Config";
const storage = firebase.storage();
const database = firebase.database();

export default function Groupes(props) {
  const currentid = props.route.params.currentid;

  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [Pseudo, setPseudo] = useState("");
  const [urlImage, seturlImage] = useState();

  // Recuperer içi les données de l'utilisateur courant (Nom,Prenom,Telephone,Pseudo,url/urlImage)
  const ref_currentuser = database.ref("nom de reference").child(currentid);

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    console.log(result.assets[0].uri);
  };

  const imageToBlob = async (uri) => {
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob"; //bufferArray
      xhr.open("GET", uri, true);
      xhr.send(null);
    });
    return blob;
  };

  const uploadLocalFileToStorage = async (url) => {
    const ref_file = storage.ref("projets").child(currentid);
    const blob = await imageToBlob(url);
    await ref_file.put(blob);
    const lien = await ref_file.getDownloadURL();
    return lien;
  };

  // msg: Message à envoyer depuis la sone de saisie
  const [msg, setmsg] = useState();

  // data: contenu de la reference 'forum' que vous devez la recuperer
  const [data, setData] = useState();

  const ref_forum = database.ref("forum");
  // recuperer içi le contenu de la reference 'forum' =>

  return (
    <ImageBackground
      style={{ flex: 1, alignItems: "center" }}
      source={require("../../assets/pngtre.jpg")}
    >
      <FlatList
        inverted
        data={data}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                width: "310",
                margin: 5,
                height: "auto",
                alignItems: "flex-end",
                borderWidth: 2,
                borderColor: "white",
                alignSelf: "flex-end",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f4f4f455",
                  elevation: 2,
                  height: "auto",
                  width: 300,
                  alignItems: "center",
                  flexDirection: "row",
                  padding: 10,
                }}
              >
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 20,
                    marginRight: 15,
                  }}
                ></Image>
              </View>
            </View>
          );
        }}
        style={{ height: "100%", width: "95%", margin: 10 }}
      ></FlatList>

      <Text style={{ fontSize: 8, fontWeight: "bold", color: "red" }}></Text>
      <Button onPress={async () => {}} title="Select file"></Button>
      <Button onPress={async () => {}} title="Send work"></Button>
      <View
        style={{
          flexDirection: "row",
          margin: 5,
          borderColor: "black",
          borderWidth: 2,
          borderRadius: 5,
          padding: 5,
        }}
      >
        <TextInput
          onChangeText={(ch) => {
            setmsg(ch);
          }}
          style={{
            color: "black",
            fontSize: 14,
            fontWeight: "bold",
            backgroundColor: "#fff4",
            width: "85%",
            marginRight: 10,
          }}
        ></TextInput>
        <TouchableHighlight onPress={() => {}}>
          <Image
            source={require("../../assets/send msg.png")}
            style={{ width: 40, height: 40 }}
          ></Image>
        </TouchableHighlight>
      </View>
    </ImageBackground>
  );
}
