import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@material-ui/core";

import { fetchGifts } from "../gifts/fetchGifts";
import { getLastCategoryItem } from "../../utils/getLastCategoryItem";

import homeImg from "./home.svg";

const Home = () => {
  const dispatch = useDispatch();
  const gifts = useSelector((state) => state.gifts.products);

  useEffect(() => {
    if (!gifts.length) dispatch(fetchGifts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        marginBottom={10}
        width="100%"
        height="95vh"
        style={{ background: `url(${homeImg})`, backgroundSize: "cover" }}
      >
        <Box marginBottom={3}>
          <Typography variant="h6" style={{ fontSize: "3rem" }}>
            Gabi e Bruno
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          disableElevation
          size="large"
          component={Link}
          to="/presentes"
          style={{ margin: "0.5rem auto" }}
        >
          Comprar Presente
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          size="large"
          style={{ margin: "0.5rem auto" }}
        >
          Confirmar Presença
        </Button>
      </Box>
      {gifts.length ? (
        <Container>
          <Grid container>
            <Grid item container xs={12} spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h3"
                  align="center"
                  style={{ marginBottom: "1rem" }}
                >
                  Categorias
                </Typography>
              </Grid>
              {getLastCategoryItem(gifts).map((gift) => (
                <Grid item xs={12} sm={6} md={3} key={`cat-${gift.id}`}>
                  <Box width="100%" bgcolor="white" borderRadius="10%">
                    <Link to={`/categorias/${gift.category}`}>
                      <img
                        src={gift.image}
                        alt=""
                        width="100%"
                        height="200px"
                        style={{ objectFit: "contain", padding: "1rem" }}
                      />
                    </Link>
                    <Typography
                      variant="h6"
                      align="center"
                      component={Link}
                      to={`/categorias/${gift.category}`}
                      style={{
                        display: "block",
                        textTransform: "uppercase",
                        color: "gray",
                        textDecoration: "none",
                      }}
                    >
                      {gift.category}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      ) : (
        <LinearProgress />
      )}
    </>
  );
};

export default Home;
