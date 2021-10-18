import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Badge,Table, Button, Space, Switch, Popconfirm } from 'antd';
// import { DownOutlined } from '@ant-design/icons';

import './userDataGrid.scss';
import { 
  getCustomers, 
  approveCustomer
} from '../../redux/actions';

const UserDataGrid = () => {

    
    const dispatch = useDispatch();
    const { loading, customers, errorMessage} = useSelector(
      ({ customer }) => customer
    );
    console.log(loading, customers, errorMessage);
    useEffect(() => {
      dispatch(getCustomers());
    }, [])

    // const [toggle, setToggle] = useState(false);
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const handlePopConfirm = (record) => {
      //update isApproved field in database
      dispatch(approveCustomer(record));
      //send an email to customer
      //reflect the change in UI
      record.isApproved = true;
    }

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const clearFilters = () => {
        setFilteredInfo(null);
    };

    const clearAll = () => {
        setFilteredInfo(null);
        setSortedInfo(null)
    };

    const setAgeSort = () => {
      setSortedInfo({
        order: 'descend',
        columnKey: 'age',  
      });
  };

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [
          { text: 'Joe', value: 'Joe' },
          { text: 'Jim', value: 'Jim' },
        ],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        // sorter: (a, b) => a.age - b.age,
        // sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        // ellipsis: true,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [
          { text: 'London', value: 'London' },
          { text: 'New York', value: 'New York' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Status',
        key: 'isApproved',
        sorter: true,
        render: function approveSwitch(_, record) {
        
        const {isApproved, name} = record;
         return (
           <>
            {
              !isApproved ? (
                <>
                  <Popconfirm title={`Do you want to approve ${name}?`} onConfirm={() => handlePopConfirm(record)}>
                    <Switch checked={false}/>
                  </Popconfirm>
                </>
              ):(
                  <Badge 
                    count={'approved'}
                    style={{ backgroundColor: '#52c41a' }}
                  />
              )
            }  
          </>
         );
        },
      },
    ];
    return (
      <>
        <Space style={{ marginBottom: 16 }}>
          <Button onClick={setAgeSort}>Sort age</Button>
          <Button onClick={clearFilters}>Clear filters</Button>
          <Button onClick={clearAll}>Clear filters and sorters</Button>
        </Space>
        <Table columns={columns} dataSource={customers} onChange={handleChange} />
      </>
    );
  }

  export default UserDataGrid;
