/**
 * CONDITIONS TO TEST
 *  -   Incorrect secret
 *  -   Family not reached
 *  -   Server error
 *  -   Successful
 *  -   Empty input
 *  -   UI feedback
 */

import { useState } from "react";
import { useHistory } from "react-router-dom";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

const GuestsLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("verify password and connect to API");
    history.push("/familia");
  };

  return (
    <Container
      maxWidth="xs"
      style={{ margin: "8rem auto", textAlign: "center" }}
    >
      <Grid container>
        <Grid item>
          <Typography variant="h3" paragraph>
            Confirme sua presença
          </Typography>
          <Typography paragraph>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box marginBottom="0.75rem">
              <FormControl fullWidth>
                <InputLabel htmlFor="secret">Segredo da Família</InputLabel>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="alternar visualização do password"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  id="secret"
                  aria-describedby="secret-helper"
                />
                <FormHelperText id="secret-helper">
                  Insira seu segredo do verso do convite
                </FormHelperText>
              </FormControl>
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disableElevation
              fullWidth
            >
              Enviar
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GuestsLogin;
