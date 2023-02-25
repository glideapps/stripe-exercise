const CreditCardForm = () => {
  return (
    <form className="credit-card" action="https://api.stripe.com/v1/subscriptions" method="post">
      <div>
        <label>Card number</label>
        <input id="card_number" name="card_number" type="text" placeholder="1234 1234 1234 1234"></input>
      </div>

      <div>
        <label>Expiration date</label>
        <input id="expiration_date" name="expiration_date" type="text" placeholder="MM / YY"></input>
      </div>

      <div>
        <label>cvc</label>
        <input id="cvc" name ="cvc" type="text" placeholder="cvc"></input>
      </div>

      <button type="submit">Pay</button>
    </form>
  );
};

export default CreditCardForm;