# Xero PayNow
Quick setup for custom Xero Payment integration using Bootstrap 4, Vue.js and [PaynowQR](https://github.com/ThunderQuoteTeam/PaynowQR) libraries. Generates a simple webpage which automatically generates the PayNow SGQR (Singapore) for easy payment of invoices.

**Does not perform automatic realtime payment feedback**. Auto realtime payment feedback requires the local Singaporean banks to open up their payment notification APIs (e.g. DBS RAPID) to you, on top of a proper backend server to check for the payment status. We can provide integration help – contact us if you're interested!

**Cannot be used with other Credit Card payment methods (other than PayPal) in Xero**. Xero currently only allows either credit card payment (e.g. Stripe) or a single Custom Payment method. See this [feature request](https://community.xero.com/business/discussion/3145941) on Xero Business Community.


See https://central.xero.com/s/article/Custom-URL for more information.

## Project setup
Clone this project into your local environment, then run the following command. Node.js and npm should already be installed.
```bash
# Install VueJs and dependencies
npm install

# Copy and create a local environment configuration file
cp .env .env.local
```

You shoud then edit the .env.local file accordingly to set the application variables
```shell
# Set the title of the HTML page that is generated (Optional)
VUE_APP_TITLE=Pay with PayNow Corporate

# Set your organisation UEN number and name to receive payments (REQUIRED)
VUE_APP_UEN=YOUR_ORGANISATION_UEN_NUMBER
VUE_APP_ORGNAME=YOUR_ORGANISATION_NAME
```

As per typical vue-cli development, the following commands can be executed
```bash
# Compiles and hot-reloads for development. Project will typically be served on localhost:8080
npm run serve

# Compiles and minifies for production
npm run build
```

## Building and deploying

#### Building:

To build the application, run the following command:
```bash
npm run build
```
The project will be deployed to `/dist`. 

#### Deployment:
1. Copy and upload the contents of the `dist` folder to your webserver (e.g. `https://www.example.com/paynow/`). You can also use [Github Pages](https://pages.github.com/) for hosting if you fork this repository. Simply copy the contents of the dist folder to a new `/docs` folder and enable GitHub pages hosting for the working branch. 

2. Visit [Payment Services](https://go.xero.com/Settings/PaymentGateways/) under the Xero organisation settings.

3. Look for a section called **Other Payment Services**. Click **Add Other** and select **Custom Payment URL**.

4. Under <ins>Name</ins>, fill in the name of the payment method (e.g. `PayNow QR`)

5. Under <ins>Your custom url</ins>, fill in the url where you uploaded the application. Also include the query strings
(e.g. `https://www.example.com/paynow/?invoiceNo=[INVOICENUMBER]&currency=[CURRENCY]&amount=[AMOUNTDUE]&shortCode=[SHORTCODE]`)

6. Under <ins>Pay now text</ins>, fill in the payment button text (e.g. `Pay with PayNowQR`)

7. Click Save. Scroll up, click manage themes and add the new payment method you created to your branding themes (under credit card).

## Screenshots:

![Sample Application Screenshot](https://raw.githubusercontent.com/ThunderQuoteTeam/XeroPayNowQR/main/screenshots/example.jpg "Sample Application Screenshot")

## Credits
Developed by ThunderQuote (https://www.thunderquote.com). 

See the [original PayNowQR repository](https://github.com/ThunderQuoteTeam/PaynowQR) for additional credits.

Feel free to fork this repository for your own use and report any issues.

## Need help for implementation?
We offer a setup, hosting and maintenance service for this project and other PayNow QR integrations. 
We can also extend Xero PayNowQR to work with bank payment realtime APIs, allowing realtime payment feedback.

Interested? Contact us at hello@thunderquote.com. 
