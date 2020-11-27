<template>
  <b-card>
    <div class="d-flex align-items-center justify-content-center flex-wrap flex-md-nowrap" v-if="currency =='SGD'">
      <div class="p-3">
        <div ref="qrcodearea"></div>
      </div>
      <div class="ml-5">
            <h4>PayNow Payment for {{refNumber}}</h4>
            <p class="lead mb-1">Instructions:</p>
            <p class="d-flex align-items-center"><span>Use your bank app to scan this QR code and make payment. </span> <b-badge variant="success" class="ml-1"><BIconCheckCircleFill/> Recommended</b-badge></p>
            <p class="small">Alternatively, send <strong>SGD {{amount}}</strong> to <strong>UEN {{uen}}</strong>, with reference <code>{{refNumber}}</code></p>
            <hr/>
            <p class="small">Once payment has been made, you may close this window. We will verify your payment as soon as we can.</p>
            <b-button size="sm" variant="primary" @click="back" v-if="!noBack"><BIconArrowLeft/> Back to Invoice.</b-button>
            <b-button size="sm" variant="secondary" class="ml-1" @click="close"><BIconX/> Close this window.</b-button>
      </div>
    </div>
    <template v-else>
      <p class="lead">PayNow payments are only supported for transactions in Singapore Dollars (SGD)</p>
      <p>Kindly use a different payment method.</p>
      <b-button size="sm" variant="primary" @click="back" v-if="!noBack"><BIconArrowLeft/> Back to Invoice.</b-button>

      <b-button size="sm" variant="secondary" class="ml-1" @click="close"><BIconX/> Close this window.</b-button>
    </template>

  </b-card>
</template>

<script>
import PaynowQR from 'paynowqr';
import paynowlogo from '@/assets/paynow.png';
import QRCode from 'easyqrcodejs';
import { BIconCheckCircleFill,BIconX, BIconArrowLeft } from 'bootstrap-vue'

export default {
  name: 'paynow',
    components:{
      BIconCheckCircleFill,BIconX,BIconArrowLeft
    },
    data(){
      const urlParams = new URLSearchParams(window.location.search);
      const amount = urlParams.get('amount')||urlParams.get('a');
      const refNumber = urlParams.get('invoiceNo')||urlParams.get('i');
      const currency = urlParams.get('currency')||urlParams.get('c');
      const noBack = urlParams.get('noBack')||urlParams.get('b');

      const uen = process.env.VUE_APP_UEN;
      const company = process.env.VUE_APP_ORGNAME


      let qrcode = new PaynowQR({
          uen,
          amount:amount.replace(/,|\s/g,''),
          refNumber,
          company
        });
        return {
          qrString: qrcode.output(),
          refNumber,
          amount,
          uen,
          company,
          currency,
          noBack
        };
    },
    methods:{
      close(){
        window.close();
      },
      back(){
        window.history.back();
      }
    },
    mounted(){
        if(this.currency =='SGD'){
          new QRCode(this.$refs.qrcodearea, {
            text:this.qrString,
            colorDark:'#7D1979',
            logo:paynowlogo,
            correctLevel : QRCode.CorrectLevel.H,
          });
        }
    },
    computed:{
      paynowlogo(){
        return paynowlogo
      }
    }

}
</script>