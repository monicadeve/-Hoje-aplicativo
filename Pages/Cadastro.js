import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { Formik } from 'formik'
import CheckBox from 'expo-checkbox'
import { cadastrovalidationsShema } from '../validations/Form'
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Linking,
} from 'react-native'

export default function Home() {
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.containerWrapper}>
      <Formik validationSchema={cadastrovalidationsShema} initialValues={{Email: '', Password:'', CPF:''}} onSubmit={(valures)=> alert(values)}>
        {
          (
            handleChange,
            handleSubmit,
            values,
            errors,
            isValid
            )=>(
            
<>
<View style={styles.containerInput}>
          <Input name="Email" onChange={()=>null} type="text" placeholder="Email" />
        </View>
        <View style={styles.containerInput}>
          <Input name="CPF" onChange={()=>null} type="text" placeholder="CPF" />
        </View>
        <View style={styles.containerInput}>
          <Input name="Password" onChange={()=>null} type="password" placeholder="Senha" />
        </View>

        <View style={styles.containerTerms}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text style={styles.textTerms}>
            Estou ciente dos{' '}
            <Text
              onPress={() => {
                Linking.openURL('https://reactnative.dev')
              }}
              style={styles.textTermsLink}
            >
              termos e políticas de privacidade{' '}
            </Text>
            e aceito todos eles.
          </Text>
        </View>

        <View style={styles.containerButton}>
          <Button title="Cadastrar-se" onPress={() => alert('se cadastrou')} />
        </View>
</>
          )
        }
      
        </Formik>
  
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '3%',
    paddingLeft: '5%',
    paddingRight: '5%',
    gap: 30,
  },
  containerWrapper: {
    flex: 1,
    width: '100%',
  },
  containerInput: {
    paddingTop: 18,
  },
  containerButton: {
    paddingTop: 26,
    width: '100%',
  },
  containerTerms: {
    paddingTop: 24, 
    width: '100%',
    flexDirection: 'row',
  },
  textTerms: {
    paddingLeft: 8,
    fontSize: 16
  },
  textTermsLink: {
    color: '#83B6CC',
  },
})