import React from 'react';
import { Input, Select, Button } from 'antd';

const { Search } = Input;
const { Option } = Select;

const FormFields = ({
  handleSearch,
  handleKeyPress,
  handleChange,
  shouldButtonEnabled = false
}) => {
  return (
    <div>
      <div>
        <Search
          data-testid='search-box'
          onChange={handleKeyPress}
          placeholder="input search text"
          allowClear
          size="large"
          onSearch={handleSearch}
          enterButton={
            <Button data-testid='search-button' disabled={!shouldButtonEnabled} type="primary">Search</Button>
          }
        />
      </div>
      <div>
      <Select data-testid='engine-dropdown' style={{ width: 200 }} onChange={handleChange} mode="multiple">
        <Option data-testid='select-option' value="google">Google</Option>
        <Option data-testid='select-option' value="bing">Bing</Option>
      </Select>
      </div>
    </div>
  );
};

export default FormFields;
