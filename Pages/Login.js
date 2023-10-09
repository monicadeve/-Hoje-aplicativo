import { StatusBar } from 'expo-status-bar'
import Input from '../Components/Input'
import Button from '../Components/Button'
import { Formik } from 'formik'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity } from 'react-native'
import { loginValidationSchema } from '../validations/Form'

export default function Login({navigation}) {
  return (
    
    
<SafeAreaView style={styles.container}>
<View style={styles.containerWrapper}>
<Formik validationSchema={loginValidationSchema} initialValues={{Email: '', Password:''}} onSubmit={(valures)=> alert(values)}>
  {
({
 handleChange,
 handleSubmit,
 values,
 errors,
 isValid
})=>(<>
 <View style={styles.containerInput}>
  <Input name="Email" onChange={handleChange('Email')} value={values.Email} type="text" placeholder="Email" />
  {errors.Email && <Text style={styles.textError}>{errors.Email}</Text>}
</View>
<View style={styles.containerInput}>
  <Input name="Password" onChange={handleChange('Password')} value={values.Password} type="password" placeholder="Senha" />
  {errors.Password && <Text style={styles.textError}>{errors.Password}</Text>}
</View>

<View style={styles.containerButton}>
  <Button title="Log In" onPress={handleSubmit} />
</View>
</>
)
  }    

</Formik>
        <TouchableOpacity style={styles.containerResetPassword} onPress={() => navigation.navigate('ResetPassword')}>
          <Text style={styles.containerResetPasswordLinkContentText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F95A5F',
    paddingTop: '3%',
    paddingLeft: '5%',
    paddingRight: '5%',
    gap: 30
  },
  containerWrapper: {
    flex: 1,
    width: '100%',
  },
  containerInput:{
    paddingTop: 18,
  },
  containerButton:{
    paddingTop: 18,
    width: '100%',
  },
  containerResetPassword:{
    paddingTop: 18,
    width: '100%',
  },
  containerResetPasswordLinkContentText:{
    textAlign: 'center',
    color: '#C42C2C',
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  textError: {
    color: 'red'
}
})
