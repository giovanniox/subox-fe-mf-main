import React, { useEffect, useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PRODUCTS_ACTIONS } from '../../../../redux/actions/productActions'
import proximo from './proximo.png';
import './categotiesPanel.scss'

const CategotiesPanel = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.product.categories)

    useEffect(() => {
        categories == null && dispatch(PRODUCTS_ACTIONS.fetchCategoriesAction())
    })

    const handlerOnClickCategoryItem = (id, name) => {
        console.log({ id, name });
    }
    const handlerOnClickButtonToLeft = (e) => {
        console.log(e.target);
    }
    const handlerOnClickButtonToRight = (e) => {
        console.log(e.target);
    }
    const handlerOnClickDot = (e) => {
        console.log(e.target);
    }
    const dummyArray = [1, 2, 3, 4]
    const fakePosition = 3


    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        console.log('cuantasPuedoMostrar', cuantasPuedoMostrar(innerWidth))
        window.addEventListener("resize", () => {
            setInnerWidth(window.innerWidth);
        });
        return () => window.removeEventListener("resize", () => {
            setInnerWidth(window.innerWidth);
        });

    }, [innerWidth]);

    console.log("windowDimensions", innerWidth)


    const cuantasPuedoMostrar = (pantalla) => {
        let number = 10;
        if (pantalla <= 1150) {
            number = 9
        }
        if (pantalla <= 1030) {
            number = 8
        }
        if (pantalla <= 930) {
            number = 7
        }
        if (pantalla <= 830) {
            number = 6
        }
        if (pantalla <= 700) {
            number = 5
        }
        if (pantalla <= 585) {
            number = 4
        }
        if (pantalla <= 487) {
            number = 3
        }
        if (pantalla <= 375) {
            number = 2
        }
        if (pantalla <= 320) {
            number = 1
        }
        return number
    }


    return (
        <div className="principal">

            <button onClick={(e) => { handlerOnClickButtonToLeft(e) }} className="button-panel button-panel--left">
                <img className="button-panel-img button-panel-img--left" src={proximo} alt='proximo' />
            </button>


            <div className="box-main">



                <div className="panel">

                    {
                    


                    categories !== null && categories.slice(0, cuantasPuedoMostrar(innerWidth)).map(category => {
                        const { name, id, imageBase64 } = category
                        return (
                            <div className="panel-container">
                                <div className="panel--title">
                                    <h5>{name}</h5>
                                </div>
                                <div
                                    onClick={(e) => { handlerOnClickCategoryItem(id, name) }}
                                    className="panel--button"
                                    key={id}
                                    name={name}
                                >
                                    <img className="button-img" src={imageBase64} alt={name} />
                                </div>
                            </div>
                        )
                    })

/*******************************
const { name, id, imageBase64 } = category
return (
    <div className="panel-container">
        <div className="panel--title">
            <h5>{name}</h5>
        </div>
        <div
            onClick={(e) => { handlerOnClickCategoryItem(id, name) }}
            className="panel--button"
            key={id}
            name={name}
        >
            <img className="button-img" src={imageBase64} alt={name} />
        </div>
    </div>
)
 */

                    /*
                        categories !== null && categories.map((category) => {
                            const { name, id, imageBase64 } = category




                            return (
                                <div className="panel-container">
                                    <div className="panel--title">
                                        <h5>{name}</h5>
                                    </div>
                                    <div
                                        onClick={(e) => { handlerOnClickCategoryItem(id, name) }}
                                        className="panel--button"
                                        key={id}
                                        name={name}
                                    >
                                        <img className="button-img" src={imageBase64} alt={name} />
                                    </div>
                                </div>
                            )
                        })
                    */
                    
                    }

                </div>



                <div className="box-dot">
                    {dummyArray.map((index) => {
                        if (index === fakePosition) {
                            return <div value={index} key={index} onClick={(e) => { handlerOnClickDot(e) }} className="dot dot--dark"></div>
                        }
                        return <div value={index} key={index} onClick={(e) => { handlerOnClickDot(e) }} className="dot"></div>
                    })}
                </div>





            </div>


            <button onClick={(e) => { handlerOnClickButtonToRight(e) }} className="button-panel">
                <img className="button-panel-img " src={proximo} alt='proximo' />
            </button>

        </div>
    );
}

export default CategotiesPanel;