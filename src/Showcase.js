import bulbasaur from "./images/bulbasaur.jpg";

function Showcase() {
  let favPokemon = "Bulbasaur";
  let pokeCharacteristics = {
    type: "Grass",
    move: "Vine Whip"
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{favPokemon}'s Showcase Component</h1>
      <img
        src={bulbasaur}
        alt={favPokemon}
        style={{
          margin: "auto",
          display: "block",
          borderRadius: "50%",
          height: 250,
          width: 250,
          padding: 20
        }}
      ></img>
      <h2 style={{ textAlign: "center" }}>
        {favPokemon}'s type is{" "}
        <span
          style={{
            padding: 5,
            borderRadius: "10%",
            background: "green",
            color: "white"
          }}
        >
          {pokeCharacteristics.type}
        </span>{" "}
        and one of their moves is{" "}
        <span
          style={{
            padding: 5,
            borderRadius: "10%",
            background: "white",
            color: "green"
          }}
        >
          {" "}
          {pokeCharacteristics.move}{" "}
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
