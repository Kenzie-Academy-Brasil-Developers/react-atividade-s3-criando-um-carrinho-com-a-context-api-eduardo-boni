import Button from "../button";

import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

import { Container, Card } from "./style";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <Container type={type}>
      {type === "catalogue" ? <h1>Catalogue</h1> : <h1>Cart</h1>}
      
      {type === "catalogue" &&
      
        catalogue.map((item, index) => (
          <Card key={index}>
            <h2>Product: {item.name}</h2>
            <p>{`Price: R$${item.price},00`}</p>
            <Button type={type} item={item} />
          </Card>
        ))}

      {type === "cart" &&
        cart.map((item, index) => (
          <Card key={index}>
            <h2>Product: {item.name}</h2>
            <p>{`Price: R$${item.price},00`}</p>

            <Button type={type} item={item} />
          </Card>
        ))}
    </Container>
  );
};

export default ProductList;