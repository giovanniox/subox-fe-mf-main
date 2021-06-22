import React from 'react';
import styled from 'styled-components';


const Product = () => {

    const category = [{
        name: "completos",
        product: [
            {
                img: 'https://www.w3schools.com/w3images/jeans3.jpg',
                title: 'Tailored Jeans',
                description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.',
                price: '$19.99'
            },
            {
                img: 'https://www.w3schools.com/w3images/jeans3.jpg',
                title: 'Tailored Jeans',
                description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.',
                price: '$19.99'
            },
            {
                img: 'https://www.w3schools.com/w3images/jeans3.jpg',
                title: 'Tailored Jeans',
                description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.',
                price: '$19.99'
            }
        ]
    },
    {
        name: "Pizza",
        product: [
            {
                img: 'https://placeralplato.com/files/2016/01/Pizza-con-pepperoni.jpg',
                title: 'Pizza Peperoni',
                description: 'El pepperoni es un embutido similar al salami muy sabroso y con un toque picantón. Aunque parezca una palabra italiana no lo es, dado que en Italia este ingrediente se denomina salsiccia napoletana piccante y en varios países de Latino américa es conocido como longaniza.',
                price: '$5.990'
            },
            {
                img: 'https://www.olivetto.com.co/wp-content/uploads/Olivetto-Experimenta-PizzaItalianaClasica.jpg',
                title: 'Pizza Italiana',
                description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.',
                price: '$19.99'
            },
            {
                img: 'https://i.ytimg.com/vi/TtDDTJvmcTE/maxresdefault.jpg',
                title: 'Pizza Napolitana',
                description: 'Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.',
                price: '$19.99'
            }
        ]
    }


    ]


    const handleClickAddCard = (product) =>{
        console.log(product)

    }

    return (
        <ContainerProduct>
            {
                category.map((category, index) => {
                    return (
                        <div id={category.name} >
                            <CategoryContainer>
                                <h3>{category.name}</h3>
                            </CategoryContainer>
                            <ContainerCard>
                                {
                                    category.product.map((product, index) => {
                                        return (
                                            <Card>
                                                <img src={product.img} alt={product.title} />
                                                <h1>{product.title}</h1>
                                                <Price>{product.price}</Price>
                                                <p>{product.description}</p>
                                                <p>
                                                    <AddCart onClick={() => {handleClickAddCard(product)}}>Añadir a carrito</AddCart>
                                                </p>
                                            </Card>
                                        )
                                    })
                                }
                            </ContainerCard>
                        </div>
                    )
                })
            }
        </ContainerProduct>
    );
}

export default Product;

const ContainerProduct = styled.div`
    background-color: #fff1cc;
    padding: 10px 0px;
`

const ContainerCard =styled.div`
    display: flex;

`

const CategoryContainer = styled.div`
    background-color: #fff1cc;
    border-radius: 15px;
    margin: 10px 30px;
    border: 2px solid #841212;

    h3 {
        font-family: cursive;
        font-weight: bold;
        font-size: x-large;
        letter-spacing: 6px;
        text-transform: uppercase;
        text-align: center;
        margin-top: 10px;
        margin-bottom: 12px;
        color: #000000;
    }
`

const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
    background-color: #fff;
`

const Price = styled.p`
    color: grey;
    font-size: 22px;
`
const AddCart = styled.button`
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;

    &:hover {
        opacity: 0.7;
    }
`
