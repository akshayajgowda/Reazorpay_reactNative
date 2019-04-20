import React,{Component} from 'react';
import {TouchableHighlight} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';
import {Text} from 'react-native';

export default class Payment extends Component {
  render(){
return (
<TouchableHighlight onPress={() => {
  var options = {
    description: 'Credits towards consultation',
    image: 'https://i.imgur.com/3g7nmJC.png',
    currency: 'INR',
    key: 'rzp_test_lwbsOuzzATJC4E',
    amount: '5000',
    name: 'foo',
    prefill: {
      email: 'akshayaj18gowda@gmail.com',
      contact: '8861747109',
      name: 'Razorpay Software'
    },
    theme: {color: '#F37254'}
  }
  RazorpayCheckout.open(options).then((data) => {
    // handle success
    alert(`Success: ${data.razorpay_payment_id}`);
  }).catch((error) => {
    // handle failure
    alert(`Error: ${error.code} | ${error.description}`);
  });
}}>
<Text>Pay</Text>
</TouchableHighlight>
)
}
}
