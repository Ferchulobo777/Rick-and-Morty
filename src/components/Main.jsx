import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Location from './Location';
import ResidentInfo from './ResidentInfo';
import Pages from './Pages';

const Main = () => {

    const [location, setLocation] = useState({})
    const [searchLoc, setSearchLoc] = useState("")
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const locId = Math.floor(Math.random() * 125) + 1
        axios.get(`https://rickandmortyapi.com/api/location/${locId}`)
            .then(res => {
                setLocation(res.data)
                quiteLoading()
                setPage(1)
            })
    }, [])

    const quiteLoading = () => {
        setTimeout(() => {
            setLoad(false)
        }, 1500)
    }

    const search = () => {
        if (searchLoc <= 126){
            setLoad(true)
            axios.get(`https://rickandmortyapi.com/api/location/${searchLoc}`)
                .then(res => {
                    setLocation(res.data)
                    setSearchLoc("")
                    quiteLoading()
                    setPage(1)
                })
        } else {
            alert("Ingresa un valor entre 1 y 126")
        }
       
    }
    //===== estados y variables de paginación=====
    const [page, setPage] = useState(1)
    const perPages = 6
    const quantyPages = Math.ceil(location.residents?.length / perPages)

    let cardsToShow = location.residents?.slice((page - 1)* perPages, (page - 1)* perPages + perPages)

    return (
        <div className='main__contain'>
            <div className='input'>
                <input type="number"
                    value={searchLoc}
                    onChange={(e) => setSearchLoc(e.target.value)}
                    placeholder="Localiza una Dimension entre (1 - 126)" />
                <button onClick={search} className="btn_search" >Buscar</button>
            </div>
            {
                load ? <div className='load'><i className='bx bx-loader-circle bx-spin bx-lg' ></i></div> :
            <>
            <Location location={location} />
            {location.residents[0] && <Pages quantyPages={quantyPages} page={page} setPage={setPage}/>}
            <div className='residents__contain'>
                { location.residents[0] ? 
                    cardsToShow.map((resident) => (
                        <ResidentInfo resident={resident} key={resident} quiteLoading={quiteLoading} />
                    )) :
                    <div className='no_population'>No existen habitantes en esta Dimension</div>
                }
            </div>
            </>
            }
        </div>
    );
};

export default Main;