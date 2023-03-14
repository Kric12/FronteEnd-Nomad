import React, { useState, useContext, useEffect } from "react";
import { Button, Modal, Form, Input, Select } from "antd";
import { GlobalContext } from "../../context/UsersState";


const EditUser = ({ visible, setVisible}) => {
    const countriesArray = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic", "Congo, Republic of the", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Greenland", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Mongolia", "Morocco", "Monaco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda", "Samoa", "San Marino", " Sao Tome", "Saudi Arabia", "Senegal", "Serbia and Montenegro", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"];
  const options = countriesArray.map((e) => (
    { value: `${e}`, label: `${e}` }
  ))
const { editUser, user, getUserInfo } = useContext(GlobalContext);


const [form]= Form.useForm();


    useEffect(()=>{
        form.setFieldsValue(user);
    },[user])

  const onFinish = (values) => {
    console.log(values);
    editUser(values, user._id);
    getUserInfo()
    setVisible(false);
  };
  return (
    <Modal title='EDITAR USUARIO'  open={visible} onCancel={()=>setVisible(false)}  footer={[]}>
      <Form form={form} onFinish={onFinish} >
        <Form.Item label='Nombre' name='firstName'>
          <Input placeholder='Edite su nombre' />
        </Form.Item>
        <Form.Item label='Apellidos' name='lastName'>
          <Input placeholder='Edite su nombre' />
        </Form.Item>
        <Form.Item label='email' name='email'>
          <Input placeholder='¿Desea cambiar su correo electronico?' />
        </Form.Item>
        <Form.Item
          name="nationality"
          label="Nationality"
          rules={[
            {
              required: true,
              message: 'Please select your Nationality!',
            },
          ]}
        >
          <Select placeholder="select your country" options={[{ options }]} />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditUser;