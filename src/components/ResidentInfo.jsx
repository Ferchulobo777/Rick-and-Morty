import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({resident, quiteLoading}) => {

    const [residentItem, setResidentItem] = useState([])

    useEffect(() => {
        axios.get(`${resident}`)
            .then(res => {
                setResidentItem(res.data)
            })
    }, [])
    
    const bgStatus = () => {
        if (residentItem.status === "Alive"){
            return "lawngreen"
        } else if (residentItem.status === "Dead"){
            return "red"
        } else {
            return "gray"
        }
    }

    return (
        <div className='resident__card'>
            <img src={residentItem.image} alt={residentItem.name} />
            <div className='info__resident'>
                <h2>{residentItem.name}</h2>
                <hr />
                <p className='description'><strong className='description_strong'>Especie </strong>:{residentItem.species}</p>
                <p className='description'><strong className='description_strong'>Origen</strong>:{residentItem.origin?.name}</p>
                <p className='description'><strong className='description_strong'>Episodios</strong>:{residentItem.episode?.length}</p>
            </div>
            <div className='info__status'>
                <div className='status' style={{backgroundColor: bgStatus()}} >
                </div>
                <p className='text-status'>
                    {residentItem.status === 'Alive'
                      ? 'Vivo'
                      : residentItem.status === 'Dead'
                      ? 'Muerto'
                      : 'Desconocido'}
                  </p>    
            </div>
        </div>
    );
};

export default ResidentInfo;