import React from 'react';
import { Layout} from 'antd';

import UserDataGrid from '../userDataGrid';
import './content.scss';

const Content = () => {
    return (
      <Layout.Content style={{ margin: '0 16px' }}>
        <div className="content">
          <UserDataGrid/>  
        </div>
      </Layout.Content>
    )
}

export default Content;
