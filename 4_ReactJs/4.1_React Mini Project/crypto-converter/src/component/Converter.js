import { useEffect, useState } from "react";
import { Card, Form, Input, Select } from "antd";
import "./Component.css";

function Converter() {
  const apiUrl = `https://api.coingecko.com/api/v3/exchange_rates`;

  const defaultFirstSelectValue = "Bitcoin";
  const defaultSecondSelectvalue = "Ether";

  const [cryptoList, setCryptoList] = useState([]);
  const [inputValue, setInputValue] = useState("0");
  const [firstSelect, setFirstSelect] = useState(defaultFirstSelectValue);
  const [secondSelect, setSecondSelect] = useState(defaultSecondSelectvalue);
  const [result, setResult] = useState("0");

  // const names = [
  //   { value: "jack", label: "Jack" },
  //   { value: "lucy", label: "Lucy" },
  //   { value: "Yiminghe", label: "yiminghe" },
  //   { value: "disabled", label: "Disabled" },
  // ];

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(apiUrl);
    const jsonData = await response.json();
    const data = jsonData.rates;
    // console.log(Object.entries(data));

    // // It is also the method like(Map)__
    // const tempArray = [];
    // Object.entries(data).forEach((item) => {
    //   const tempObj = {
    //     value: item[1].name,
    //     label: item[1].name,
    //     rate: item[1].name,
    //   };
    //   tempArray.push(tempObj);
    // });
    // console.log(tempArray)

    // This is the (Map)__
    const tempArray = Object.entries(data).map((item) => {
      return {
        value: item[1].name,
        label: item[1].name,
        rate: item[1].value,
      };
    });
    // console.log(tempArray);

    setCryptoList(tempArray);
  }

  useEffect(() => {
    // console.log(inputValue, firstSelect, secondSelect);

    if (cryptoList.length == 0) return;

    const firstSelectRate = cryptoList.find((item) => {
      return item.value === firstSelect;
    }).rate;
    const secondSelectRate = cryptoList.find((item) => {
      return item.value === secondSelect;
    }).rate;
    // console.log(firstSelectRate, secondSelectRate);

    const resultValue = (inputValue * secondSelectRate) / firstSelectRate;
    setResult(resultValue.toFixed(4)); // toFixed is used to print 4no. after Zero__
  }, [inputValue, firstSelect, secondSelect]);

  return (
    <div className="container">
      <Card hoverable className="crypto-card" title={<h1>Crypto Convertor</h1>}>
        <Form>
          <Form.Item>
            <Input
              onChange={(event) => {
                setInputValue(event.target.value);
              }}
            />
          </Form.Item>
        </Form>
        <div className="select-box">
          <Select
            style={{ width: "200px" }}
            defaultValue={defaultFirstSelectValue}
            options={cryptoList} // {names}
            onChange={(value) => {
              setFirstSelect(value);
            }}
          />
          <Select
            style={{ width: "200px" }}
            defaultValue={defaultSecondSelectvalue}
            options={cryptoList}
            onChange={(value) => {
              setSecondSelect(value);
            }}
          />
        </div>
        <p>
          {inputValue} {firstSelect} = {result} {secondSelect}
        </p>
      </Card>
    </div>
  );
}

export default Converter;
