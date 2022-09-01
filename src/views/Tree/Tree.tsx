import React, {useContext, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { XmlDataContext } from '../App/App';

function Tree () {
  const navigate = useNavigate();
  const { xmlData } = useContext(XmlDataContext);

  useEffect(() => {
    if (!xmlData) {
      navigate('/')
    }
  }, [xmlData])

  if (!xmlData) return <></>

  return <h1>Tree</h1>
}

export default Tree;
