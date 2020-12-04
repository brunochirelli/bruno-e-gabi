import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

import { Container, Grid, LinearProgress, Typography } from "@material-ui/core";

import GiftCard from "./GiftCard";
import { toTitleCase } from "../../utils/toTitleCase";

/**
 * Single Category Page
 *
 * @component
 * @version       0.1.0
 * @description   Pages to index all products for a certain category
 *
 */

const CategorySingle = () => {
  const gifts = useSelector((state) => state.gifts.products);
  const [categoryGifts, setActualGift] = useState(null);
  const [error, setError] = useState(false);

  const { category } = useParams();

  useEffect(() => {
    // Check if the Redux Stores contains gifts
    // This way, if it's the first access we can fetch only these category items
    if (gifts.length === 0)
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((res) => setActualGift(res))
        .catch((err) => setError(err));
    else setActualGift(gifts.filter((gift) => gift.category === category));
  }, []);

  if (!categoryGifts) return <LinearProgress />;

  if (error) return <Redirect to="/presentes" />;

  return (
    <Container style={{ marginTop: "5rem" }}>
      <Typography variant="h3" align="center" style={{ marginBottom: "1rem" }}>
        {toTitleCase(category)}
      </Typography>
      <Grid container spacing={2}>
        {categoryGifts.map((gift) => (
          <Grid item xs={12} sm={4} md={3} key={`${gift.category}-${gift.id}`}>
            <GiftCard gift={gift} hideCategory excerptLength={50} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CategorySingle;
