import { Link, Redirect } from "react-router-dom";
import { ShippingInfo, OrderSummery, OrderReview } from "./";

const Checkout = ({
  cartInfo,
  remove,
  add,
  subs,
  total,
  totalQuantity,
  totalItems,
  empty,
  handleChange,
  shippingInfo,
  id,
}) => {
  return (
    <div className="container">
      {cartInfo.length === 0 ? (
        <Redirect to="cart" />
      ) : cartInfo.length > 0 ? (
        <>
          <div className="row mb-3">
            <Link to="/cart" className="pb-2 link-dark text-decoration-none h5">
              <i className="bi h4 bi-arrow-left-circle"></i> Back
            </Link>
            <hr />
          </div>
          <div className="row flex-md-row-reverse d-flex justify-content-between">
            <h3 className="text-dark mb-3 card-header">Shipping Information</h3>
            <div className="col-12 col-lg-4 col-md-4 col-sm-12 float-md-end mb-3">
              <OrderReview
                cart={cartInfo}
                add={add}
                subs={subs}
                remove={remove}
              />
              <OrderSummery
                total={total}
                totalQuantity={totalQuantity}
                totalItems={totalItems}
              />
            </div>
            <div className="col-12 col-lg-7 col-md-7 col-sm-12 float-md-start mb-3">
              <ShippingInfo
                cart={cartInfo}
                empty={empty}
                shippingInfo={shippingInfo}
                handleChange={handleChange}
                id={id}
              />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Checkout;
