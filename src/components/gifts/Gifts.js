import { Container, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGifts } from "./fetchGifts";
import GiftCard from "./GiftCard";

const Gifts = () => {
  const dispatch = useDispatch();
  const gifts = useSelector((state) => state.gifts.products);

  useEffect(() => {
    if (!gifts.length) dispatch(fetchGifts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!gifts.length) {
    return <div>loading...</div>;
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {gifts.map((gift) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={gift.id}>
            <GiftCard gift={gift} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gifts;
