const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const typesRoute = require("./types")
const pokemonsRoute = require("./pokemons")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/types", typesRoute)
router.use("/pokemons", pokemonsRoute)

module.exports = router;
