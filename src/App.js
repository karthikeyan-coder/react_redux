import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import { actionCreators } from './state/index';
function App() {
  const account = useSelector((state)=>state.account)
  const dispatch = useDispatch()
  const {depositMoney, WithdrawMoney} = bindActionCreators(actionCreators, dispatch);

  
  console.log('account', account)
  return (
    <div className="App">
          {account}
          <button onClick={()=>depositMoney(1000)} >deposit</button>
          <button onClick={()=>WithdrawMoney(1000)} >withdraw</button>
          </div>
  );
}

export default App;
