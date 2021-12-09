import React, { useState } from 'react';


export const App = () => {

  let NameArray = ["Расстояние", "Скорость", "Время"]
  let BtnArray = ["Рассчитать расстояние", "Рассчитать скорость", "Рассчитать время"]
  let Сhoice = [
    {
      id: 0,
      name: "Скорость",
      check: true
    },
    {
      id: 1,
      name: "Расстояние",
      check: false
    },
    {
      id: 2,
      name: "Время",
      check: true
    }
  ]

  const [NameFirst, setNameFirst] = useState(NameArray[0]);
  const [CountFirst, setCountFirst] = useState(0);
  const [NameSecond, setNameSecond] = useState(NameArray[1]);
  const [CountSecond, setCountSecond] = useState(0);
  const [BtnValue, setBtnValue] = useState(BtnArray[2])
  const [Result, setResult] = useState(0);

  const [СhoiceFitst, setСhoiceFitst] = useState("")
  const [СhoiceSecond, setСhoiceSecond] = useState("")

  const Main = () => {
    if (CountFirst == 0 && CountSecond == 0)
      return setResult("Заполните все поля")
    Сhoice.forEach(item => {
      if (item.id == 0 && item.check == true) {
        setResult(CountFirst * CountSecond)
        alert("0")
      }
      else if (item.id == 1  && item.check == true) {
        setResult(CountFirst / CountSecond)
        alert("1")

      }
      else if (item.id == 2  && item.check == true) {
        setResult(CountFirst / CountSecond)
        alert("2")

      }

    })
  }
  const SwitchСhoice = (id) => {
    Сhoice.forEach(item => { item.check = false; })
    for (let i = 0; i < Сhoice.length; i++)
      if (i == id) {
        Сhoice.forEach(item => { if (item.id == id) item.check = true })
        if (id == 0) {
          setNameFirst(NameArray[1])
          setNameSecond(NameArray[2])
          setBtnValue(BtnArray[0])
          setСhoiceFitst("км/ч")
          setСhoiceSecond("ч")
        }
        else if (id == 1) {
          setNameFirst(NameArray[0])
          setNameSecond(NameArray[2])
          setBtnValue(BtnArray[1])
          setСhoiceFitst("км")
          setСhoiceSecond("ч")
        }
        else if (id == 2) {
          setNameFirst(NameArray[0])
          setNameSecond(NameArray[1])
          setBtnValue(BtnArray[2])
          setСhoiceFitst("км")
          setСhoiceSecond("км/ч")
        }
      }
    console.log(Сhoice)
  }
  return (
    <div className="wrapper">
      <h3>Рассчитать скорость, время и расстояние</h3>
      <div className="input-container first">
        <div className="input-block">
          <input onClick={() => SwitchСhoice(0)} type="radio" name="type" id="" />
          <div className="input-block__title">расстояние</div>
        </div>
        <div className="input-block">
          <input onClick={() => SwitchСhoice(1)} type="radio" name="type" id="" />
          <div className="input-block__title">скорость</div>
        </div>
        <div className="input-block">
          <input onClick={() => SwitchСhoice(2)} type="radio" name="type" id="" />
          <div className="input-block__title">время</div>
        </div>
      </div>
      <div className="input-container second">
        <div className="input-block">
          <div className="input-block__name">{NameFirst}</div>
          <input value={CountFirst} onInput={(e) => setCountFirst(e.target.value)} type="text" />
          <div>{СhoiceFitst}</div>
        </div>
        <div className="input-block">
          <div className="input-block__name">{NameSecond}</div>
          <input value={CountSecond} onInput={(e) => setCountSecond(e.target.value)} type="text" />
          <div>{СhoiceSecond}</div>
        </div>
      </div>
      <button onClick={Main}>{BtnValue}</button>
      <div className="Result">Результат: {Result == 0 ? "" : Result}</div>
    </div>
  )
}
