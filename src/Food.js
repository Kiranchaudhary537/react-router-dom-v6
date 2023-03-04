const Data = [
  [
    { key: 1, title: "Swad Tiffins", quatity: "450" },
    { key: 2, title: "Swad Tiffins", quatity: "450" },
    { key: 3, title: "Swad Tiffins", quatity: "450" },
    { key: 4, title: "Swad Tiffins", quatity: "450" },
    { key: 5, title: "Swad Tiffins", quatity: "450" }
  ]
];

function Menucard() {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
  };
  return (
    <>
      {Data[0].map((items) => {
        return (
          <div style={{ border: "2px solid black" }}>
            <h3>{items.title}</h3>
            <p>{items.quatity}</p>
          </div>
        );
      })}
    </>
  );
}
export default function Food() {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))"
  };
  return (
    <div style={styles}>
      <Menucard />
    </div>
  );
}
