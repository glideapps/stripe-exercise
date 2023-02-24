const CreditCardForm = () => {
  return (
    <form>
      <label>Card number</label>
      <input type="text" placeholder="1234 1234 1234 1234"></input>

      <label>Expiration date</label>      
      <input type="text" placeholder="MM / YY"></input>

      <label>CVC</label>      
      <input type="text" placeholder="CVC"></input>

      <button type="submit">Pay</button>
    </form>
  );
};

export default CreditCardForm;