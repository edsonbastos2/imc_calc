import { useState } from 'react'
import style from './App.module.css'
import logo from './assets/powered.png'
import imageArrow from './assets/leftarrow.png'
import { GridItem } from './components/GridItem'
import {levels, Levels, calculateImc} from './helpers/imc'

export const App = () => {
  const [heightField, setHeightField] = useState<number>(0)
  const [weightField, setWeightField] = useState<number>(0)
  const [toShow, setToShow] = useState<Levels | null>(null)

  const handleCalcButton = () => {
    if(weightField && heightField) {
      setToShow(calculateImc(heightField, weightField))
    }else{
      alert('Os campos devem ser preenchidos')
    }
  }

  const handleBackInput = () => {
    setToShow(null)
    setHeightField(0)
    setWeightField(0)
  }

  return(
    <div className={style.container}>
      <header>
        <div className={style.headerContainer}>
          <h1 className={style.headerContainerTitle}>IMC</h1>
        </div>
      </header>
      <div className={`${style.container} ${style.content}`}>
        <div className={style.leftSide}>
          <h1 className={style.leftSide__title}>Calcule seu IMC</h1>
          <p className={style.leftSide__text}>
            IMC é a single para indice de massa corporea, parâmetro
            adotado pela organização mundial de saúde para calcular o peso ideal de cada pessoa
          </p>
          <input
            className={style.leftSide__input}
            type="number"
            placeholder='Digite sua altura Ex: 1.5 (m)'
            value={heightField ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input
            className={style.leftSide__input}
            type="number"
            placeholder='Digite seu peso Ex: 80.3 (kg)'
            value={weightField ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />
          <button className={style.leftSide__btn} onClick={handleCalcButton}>Calcular</button>
        </div>
        <div className={style.rightSide}>
          {
            !toShow &&
            <div className={style.grid}>
                {
                  levels.map((item,key) => (
                    <GridItem key={key} item={item}/>
                  ))
                }
            </div>
          }
          {
            toShow &&
            <div className={style.rightBig}>
              <button onClick={handleBackInput} className={style.rightArrow}>
                <img src={imageArrow} alt="" width={30}/>
              </button>
              <GridItem item={toShow}/>
            </div>
          }
        </div>
      </div>
    </div>
  )
}