import { StyleSheet, TextInput, View, Button, Text } from 'react-native'
import uuid from 'react-native-uuid'
import { useSate } from 'react';
import BotonPropio from './BotonPropio'
import { useFonts } from 'expo-font';
import { fontsColection } from '../utils/fonts';
import { agregarPlanta } from '../features/misplantasSlice';
import { UseDispatch, useDispatch, useSelector } from 'react-redux';
import { setPlanta } from '../features/nuevaPlantaSlice';
const AgregarTarea = ({tareaTitle, onHandlerTitle,tareaDesc, onHandlerDesc,/* agregarTarea, */ screenWidth }) => {
  const [fontsLoaded] = useFonts(fontsColection)
  const dispatch = useDispatch()
  const nuevaplanta = useSelector((state)=>state.nuevaplanta.value)
  const [plantaDef, setPlantaDef] = useState({})
  /* const [tareaTitle,setTitle] = useState("")
  const [tareaDesc,setDesc] = useState("")
  
  const onHandlerTitle = (t) =>{
    setTitle(t)

  } */
  /* const onHandlerDesc = (d) =>{
    setDesc(d)
  } */
  /* const agregarTarea = () =>{
    const nuevaTarea = {
      id : uuid.v4(),
      titulo : tareaTitle,
      descripcion : tareaDesc,
      completed:false,
      createAt: new Date().toLocaleString(),
      updateAt: new Date().toLocaleString(),
    }
    setArrTarea([...arrTarea,nuevaTarea])
    setTitle("")
    setDesc("")
    console.log(arrTarea)
  } */
  
  return (
    <View style={[styles.inputContainer,{width:screenWidth-70}]}>
        <Text style={styles.tituloInput}>Agregar planta</Text>
        <TextInput value={tareaTitle} placeholder='Nombre' style={styles.input} onChangeText={()=>setPlantaDef({...plantaDef,nombre:tareaTitle})}/>
        <TextInput value={especie} placeholder='Especie' style={styles.input} onChangeText={()=>setPlantaDef({...plantaDef,especie:especie})}/>
        <TextInput value={riego} placeholder='Riego' style={styles.input} onChangeText={()=>setPlantaDef({...plantaDef,riego:riego})}/>
        <TextInput value={tareaDesc} placeholder='Cuidados' style={styles.input} onChangeText={()=>setPlantaDef({...plantaDef,cuidados:tareaDesc})}/>
        <BotonPropio
            nombre={"Agregar"}
            colorFondo={"#5DC966"}
            onPress={() => {dispatch(setPlanta(plantaDef));dispatch(agregarTarea(nuevaplanta))}}
            />
        {/* <Button title='+' onPress={agregarTarea}/> */}
      </View>
  )
}

export default AgregarTarea

const styles = StyleSheet.create({
    inputContainer:{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: '#A5D6AF',
        borderRadius:5,
        padding:10,
        gap:20,
        marginTop:40,
        
        
      },
      tituloInput:{
        fontFamily:"Montserrat",
        fontSize:17
      },
      input:{
        width:250,
        borderWidth: 2,
        margin: 4,
        paddingHorizontal:10,
        backgroundColor: 'white',
        borderRadius:5,
        color:"black",
        fontFamily:"Lato",
      },
})