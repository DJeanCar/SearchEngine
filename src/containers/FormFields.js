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
          onChange={handleKeyPress}
          placeholder="input search text"
          allowClear
          size="large"
          onSearch={handleSearch}
          enterButton={
            <Button disabled={!shouldButtonEnabled} type="primary">Search</Button>
          }
        />
      </div>
      <div>
      <Select style={{ width: 200 }} onChange={handleChange} mode="multiple">
        <Option value="google">Google</Option>
        <Option value="bing">Bing</Option>
      </Select>
      </div>
    </div>
  );
};

export default FormFields;
