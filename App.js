import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  // Q Style
  const [showingText, setShowingText] = useState("")
  const [textArray, setTextArray] = useState([])

  const pushTextToArray = () => {
    if (!showingText) return
    const newArray = [...textArray, showingText]
    setTextArray(newArray)
    setShowingText("")
  }

  const removeTextFromArray = (index) => {
    const array = [...textArray]
    if (index > -1) array.splice(index, 1)
    setTextArray(array)
  }

  return(
   <View style={styles.container}>
     <View style={styles.headerContainer}>
       <Text style={styles.headerText}>สมุดบันทึก</Text>
       <TextInput placeholder="เพิ่มข้อความที่นี่" style={styles.textInput} multiline onChangeText={text => setShowingText(text)} value={showingText}></TextInput>
       <TouchableOpacity style={styles.button} onPress={pushTextToArray}>
         <Text>บันทึก</Text>
       </TouchableOpacity>
       <View style={styles.textContainer}>
         {textArray.map((txt, index) => {
           return <TouchableOpacity key={index} onPress={() => {removeTextFromArray(index)}}>
             <Text style={styles.textBox}>{txt}</Text>
           </TouchableOpacity>
         })}
       </View>
     </View>
   </View> 
  )
  }

// Pok Style
  // const [note, setNote] = useState("")
  // const [noteList, setNoteList] = useState([])

  // const handleButton = () => {
  //   if (!note) return
  //   setNoteList([...noteList, note]);
  //   setNote("")
  // }

//   const removeItem = (index) => {
//     let tmpArr = noteList.slice(0, noteList.length);
//     tmpArr.splice(index, 1)
//     setNoteList(tmpArr)
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.headerContainer}>
//         <Text style={styles.headerText}>สมุดบันทึก</Text>
//         <TextInput placeholder='เพิ่มข้อความที่นี่' style={styles.textInput} multiline onChangeText={(text) => setNote(text)} value={note} />
//         <TouchableOpacity style={styles.button} onPress={() => handleButton()}>
//           <Text>บันทึก</Text>
//         </TouchableOpacity>
//         <View style={styles.textContainer}>
//           {noteList.map((item) => {
//             return(
//               <TouchableOpacity key={noteList.indexOf(item)} onPress={() => removeItem(noteList.indexOf(item))}>
//                 <Text style={styles.textBox}>{item}</Text>
//               </TouchableOpacity>
//             )
//           })}
//         </View>
//       </View>
//     </View>
//   );
// }

// Kim removeItem Solution
// const removeItem = (index) => {
//   const array = [...noteList]
//   const filtered = array.filter(item => noteList.indexOf(item) !== index)
//   setNoteList(filtered)
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20, 
    borderBottomWidth: 10, 
    borderColor: 'white'
  },
  textContainer:{
    borderTopWidth: 10,
    borderColor: 'white',
    width: "100%",
    flex: 1,
    backgroundColor: "#cccccc",
    paddingTop: 10,
  },
  textInput:{
    borderColor: 'black',
    borderWidth: 1,
    width: "80%",
    textAlign: "center",
    fontSize: 18,
    padding: 4,
  },
  button: {
    backgroundColor: '#4097eb',
    width: "80%",
    alignItems: "center",
    padding: 10,
  },
  textBox: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  },
});
