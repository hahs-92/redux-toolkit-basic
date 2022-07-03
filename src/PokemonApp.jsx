import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//thunks
import { getPokemons } from "./store/slices/pokemon";

export default function PokemonApp() {
  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons()); // esta meoizado, no es necesario colocarlo como dependencia
  }, []);

  return (
    <main>
      <h1>Pokemons</h1>
      <hr />
      <section>
        {isLoading && <span>Loading...</span>}
        {!isLoading &&
          pokemons.length &&
          pokemons.map((poke) => (
            <article key={poke.name}>
              <h2>{poke.name}</h2>
            </article>
          ))}
      </section>
      <section>
        <button onClick={() => dispatch(getPokemons(page))}>Next</button>
      </section>
    </main>
  );
}
