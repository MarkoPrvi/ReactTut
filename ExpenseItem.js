import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import ExpenseTitle from './ExpenseTitle';
import ExpensePrice from './ExprensePrice';

function ExpenseItem(props) {

    
    return (
        <div className='expense-item'>
          <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
           <ExpenseTitle title={props.title}/>
            <div className='expense-item__price'>
                <ExpensePrice price={props.price}/>
            </div>
            </div>
        </div>
    );
}

export default ExpenseItem;