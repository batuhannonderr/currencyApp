import React from 'react'
import '../css/Currency.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { useState } from 'react';
import axios from 'axios';

const baseUrl = "https://api.freecurrencyapi.com/v1/latest";
const API_KEY = "fca_live_lJfeMjz2DcZ7DUXhnbkh54Jh7TH4X56O2uYvzhte";

function Currency() {

const [amount, setAmount] = useState();
const [fromCurrency, setFromCurrency] = useState("USD");
const [toCurrency, setToCurrency] = useState("TRY");
const [result, setResult]  = useState(0);

const exchange = async()=>{
  const response = await axios.get(`${baseUrl}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
  const resultData = response.data.data[toCurrency]
  setResult((resultData*amount).toFixed(2))
}

  return (
    
    <div className='currency-div'>
        <div className='title-div'>
            <h3 className='title'>DÖVİZ KURU UYGULAMASI</h3>
        </div>
        <div className='main'>
        <input type="number" className='input amount' 
        value={amount}
        onChange={(e)=>{
         setAmount(e.target.value)
        }}
        />
        <select onChange={(e)=>{
          setFromCurrency(e.target.value)
        }} className='select convert-this-currency'>
         <option>USD</option>   
        <option>EUR</option>
        <option>TRY</option>
        </select>
            <FaRegArrowAltCircleRight style={{fontSize:"25px"}}/>

        <select onChange={(e)=>{
          setToCurrency(e.target.value)
        }} className='select convert-to-this-currency'>
        <option>TRY</option>
        <option>USD</option>
        <option>EUR</option>
        </select>
        <input value={result}
        onChange={(e)=>{
          setResult(e.target.value)
        }}
        type="number" className='input result' />
            </div>
        <div className="button-div">
           <button 
           onClick={exchange}
           className='exchange-button'>ÇEVİR</button> 

        
    
    </div>
    </div>
    
  )
}

export default Currency