import {defineStore} from "pinia"
import {ref} from 'vue'
import axios from 'axios'
import { useRouter } from "vue-router"


export const usePaymentStore = defineStore('payment', ()=>{


    const createOrder = async () => {
        isLoadingSpinner.value = true;
        try {
            const response = await axios.post('/create-order', {
                amount: amount.value,
                currency: currency.value,
                receipt: receipt.value,
            });
            orderId.value = response.data.id;
            console.log(response.data);
        } catch (error) {
            console.error('Error creating order:', error);
            
        } finally {
            
        }
    };

    const storePaymentDetails = async (paymentId, status, details = null, paymentType = '') => {
        try {
            await axios.post('/store-payment-details', {
                paymentId,
                status,
                details,
               
            });
        } catch (error) {
            console.error('Error storing payment details:', error);
            
        }
    };

    const payNow = async (amountValue) => {
        amount.value = amountValue;
        await createOrder();
        const options = {
            key: 'rzp_test_daoLopIZNUyaRK',
            amount: amount.value * 100,
            currency: currency.value,
            name: 'Bike Easy',
            description: 'Test Transaction',
            order_id: orderId.value,
            handler: async (response) => {

                console.log("Payment successful, handler triggered");
                try {

                    const verificationResponse = await axios.post('/verify-payment', {
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_signature: response.razorpay_signature,
                    });


                    const paymentDetails = await axios.get(`/payment-details/${response.razorpay_payment_id}`);
                    const paymentType = paymentDetails.data.method;


                    await storePaymentDetails(response.razorpay_payment_id, 'success', verificationResponse.data, paymentType);

                    
                    
                    
                    alert("Payment Successful");
                } catch (error) {
                    console.error('Error verifying payment:', error);


                    await storePaymentDetails(response.razorpay_payment_id, 'failure');
                    

                    alert('Payment verification failed');
                    isError.value =true;
                }
            },
            modal: {
                ondismiss: async () => {
                    
                    await storePaymentDetails("", 'failure');
                    
                }
            },
            prefill: {},
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: '#016dbc',
            },
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
    };

    return (payNow)

})