import { Container, Grid, LinearProgress } from "@material-ui/core";
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

  if (!gifts.length) return <LinearProgress />;

  return (
    <Container style={{ marginTop: "5rem" }}>
      <Grid container spacing={2}>
        {gifts.map((gift) => (
          <Grid item xs={12} sm={4} md={3} key={gift.id}>
            <GiftCard gift={gift} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gifts;
