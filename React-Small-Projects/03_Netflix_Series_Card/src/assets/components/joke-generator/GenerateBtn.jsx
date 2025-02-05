/* eslint-disable react/prop-types */
const btnStyle = {
  background: "red",
  color: "#fff",
  fontWeight: "bold",
  padding: "5px 10px",
  borderRadius: "100px",
  marginTop: "20px",
};

const GenerateBtn = ({ callApi }) => {
  return (
    <button onClick={callApi} style={btnStyle}>
      Generate Joke
    </button>
  );
};

export default GenerateBtn;
