import './App.css';
import 'antd/dist/antd.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setResults } from './redux/actions';


import Header from './containers/Header';
import FormFields from './containers/FormFields';
import ListItems from './containers/ListItems';

function App() {
  const [searchCriteria, setSearchCriteria] = useState('');
  const [engineSelected, setEngineSelected] = useState([]);

  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(setResults(searchCriteria, engineSelected));
  };

  const handleKeyPress = (e) => {
    setSearchCriteria(e.target.value);
  }

  const handleChange = (value) => {
    setEngineSelected(value);
  }

  const checkIfButtonShouldBeEnable = () => !!searchCriteria &&  engineSelected.length !== 0

  const shouldButtonEnabled = checkIfButtonShouldBeEnable();
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <FormFields
          handleSearch={handleSearch}
          shouldButtonEnabled={shouldButtonEnabled}
          handleKeyPress={handleKeyPress}
          handleChange={handleChange} />
        <ListItems />
      </header>
    </div>
  );
}

export default App;
