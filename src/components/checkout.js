import React from "react"
import Button from '@material-ui/core/Button';

const buttonStyles = {
  fontSize: "13px",
  textAlign: "center",
  color: "#fff",
  outline: "none",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "rgb(255, 178, 56)",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

const Checkout = class extends React.Component {
   // Initialise Stripe.js with your publishable key.
   // You can find your key in the Dashboard:
   // https://dashboard.stripe.com/account/apikeys
   componentDidMount() {
      this.stripe = window.Stripe("pk_test_upQ7P9IIf73Ucyo2zFwxluAM000mJP2HB6")
   }

   async redirectToCheckout(event) {
      event.preventDefault()
      const { error } = await this.stripe.redirectToCheckout({
         items: [{ sku: "sku_GWUjmXgy3OFsN8", quantity: 1 }],
         successUrl: `http://localhost:8000/purchase-success/`,
         cancelUrl: `http://localhost:8000/`,
      })

      if (error) {
         console.warn("Error:", error)
      }
  }

  render() {
    return (
       <div>

      <button
        style={buttonStyles}
        onClick={event => this.redirectToCheckout(event)}
        >
        BUY MY BOOK
      </button>
      <Button
      //   style={buttonStyles}
      onClick={event => this.redirectToCheckout(event)}
      >
        BUY MY BOOK
      </Button>
   </div>
    )
  }
}

export default Checkout