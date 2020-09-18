import React, { useState, useEffect } from 'react';
import {
    Text, View, Dimensions, TouchableOpacity, Modal, Image,
    FlatList
} from "react-native";
import axios from 'axios';
import { useSelector } from 'react-redux';


import Screen from '../components/screen';
import Colors from '../components/Colors';
import URLConstants from '../constant/URLConstants';



const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const HomeScreen = props => {

    const [employeeDetails, setEmployeeDetails] = useState({});

    const [employeeData, setEmployeeData] = useState([]);

    const [modalVisible, setModalVisible] = useState(false);

    // get venue theme from redux
    const theme = useSelector(state => state.theme.theme);



    useEffect(() => {
        showModal();
    }, []);

    const showModal = () => {
        axios.get(URLConstants.EMPLOYEE_DATA)
            .then(res => {
                console.log("Response : ", res.data.data);
                setEmployeeData(res.data.data);
            })
    }

    const onClickEmployee = (item) => {
        setModalVisible(true);
        setEmployeeDetails(item);
        console.log("+++", employeeDetails);
    }




    return (
        <Screen>
            <Text style={theme.titleText}>Employee Data</Text>
            <Modal
                transparent={true}
                animationType={'fade'}
                visible={modalVisible}>
                <View style={theme.loadingModalBackground}>
                    <TouchableOpacity
                        onPress={() => { setModalVisible(false); }}
                        style={theme.loadingActivityIndicatorBackground}>
                        <View style={{ padding: 10, borderRadius: 10, borderColor: '#ccc', borderWidth: 1 }}>
                            <Image
                                source={{ uri: employeeDetails.avatar }}
                                style={{ width: 100, height: 100, borderRadius: 10 }}
                                resizeMode="contain" />
                            <Text style={{ ...theme.loadingText, marginTop: 10 }}>Name: {employeeDetails.first_name} {employeeDetails.last_name}</Text>
                            <Text style={theme.loadingText}>Id: {employeeDetails.id}</Text>
                            <Text style={theme.loadingText}>Email: {employeeDetails.email}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
            <FlatList
                data={employeeData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => { onClickEmployee(item) }}
                            style={{
                                padding: 10, margin: 10,
                                backgroundColor: '#ccc'
                            }}>
                            <Text>Id: {item.id}</Text>
                            <Text>First Name: {item.first_name}</Text>
                            <Text>Last Name: {item.last_name}</Text>
                        </TouchableOpacity>
                    )
                }} />
        </Screen>
    );
}

export default HomeScreen;