import React, {Component} from 'react';

import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { object } from 'prop-types';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {

    state = {
        ingredients: null,
        totalPrice : 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount = () => {
        console.log(this.props);
        axios.get('https://react-my-burger-eric.firebaseio.com/ingredients.json')
                .then(response => {
                    this.setState({ingredients: response.data});
                })
                .catch(error => {
                    this.setState({error:true});
                });
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum,el) => {
            return sum + el;
        }, 0);
        this.setState({purchasable: sum > 0});
    }
    
    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        //用spread syntax 將原本 ingredient 裡的元素展開
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount === 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        //用spread syntax 將原本 ingredient 裡的元素展開
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelledHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseContinued = () => {
        //alert("You Can Continue!");
        // this.setState({loading:true});
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name:'Eric Lee',
        //         address: {
        //             Street: 'test',
        //             PostCode: '4109'
        //         },
        //         email:'sth@gmail.com',
        //         deliveryMode: 'fastest'
        //     }
        // }
        // axios.post('/orders.json',order)
        //         .then(response => {
        //             this.setState({loading:false, purchasing:false});
        //         })
        //         .catch(error =>{
        //             this.setState({loading:false,purchasing:false});
        //         });
        this.props.history.push('/checkout');
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        };
        // ingredientss = { salad:true, meat:false...}
        let orderSummary = null;
    
        let burger = this.state.error ? <p>ingredients can't be loaded</p> : <Spinner />;

        if (this.state.ingredients) {
            burger = (
                <Auxiliary>
                    <Burger ingredients = {this.state.ingredients} />
                                    <BuildControls 
                                        ingredientAdded = {this.addIngredientHandler}
                                        ingredientRemoved = {this.removeIngredientHandler}
                                        disabled = {disabledInfo}
                                        purchase = {this.purchaseHandler}
                                        price = {this.state.totalPrice}
                                        purchasable = {this.state.purchasable}
                                        />
                </Auxiliary>
            );

            orderSummary = <OrderSummary ingredients = {this.state.ingredients}
                            price = {this.state.totalPrice}
                            purchaseCancelled = {this.purchaseCancelledHandler}
                            purchaseContinued = {this.purchaseContinued}/>;
        }

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        return(
            <Auxiliary>
                <Modal show = {this.state.purchasing}
                        modalClosed = {this.purchaseCancelledHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);