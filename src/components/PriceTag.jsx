import Logo from "../assets/phco.png";

const PriceTag = () => {
  return (
    <div className="price-tag-container">
      <div className="price-tag-head">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="price-tag-title">HP 15S-FQ5114TU LAPTOP</div>
      <div className="price-tag-spec">Spec</div>
      <div className="bank-price-container">
        <div>Bank</div>
        <div>Price</div>
      </div>
      <div>Footer</div>
    </div>
  );
};

export default PriceTag;
