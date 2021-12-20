import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dataHandler = (event) => {
    props.onCambiaData(event.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Seleziona l'anno</label>
        <select value={props.selected} onChange={dataHandler}>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
