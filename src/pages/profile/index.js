import React from 'react';
import {
    Row,
    Col,
    Card,
    List,
    Button,
    Upload,
    message,
    Form,
    Input,
  } from 'antd';
  import TextArea from 'antd/lib/input/TextArea';
  import user from '../../img/user-profile.jpeg';
  import { UploadOutlined } from '@ant-design/icons';

  const data = [
    'Branding',
    'UI/UX',
    'Web - Design',
    'Packaging',
    'Print & Editorial',
  ];
//   const {TabPane} = Tabs;
//   function callback (key) {
//     console.log (key);
//   }
import DashboardLayout from '../../components/layouts/dashboardLayout';
import './profile.scss';

const Profile = () => {
  const props = {
    beforeUpload: file => {
      if (file.type !== 'image/png') {
        message.error(`${file.name} is not a png file`);
      }
      return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
    },
    onChange: info => {
      console.log(info.fileList);
    },
  };
    // const formItemLayout = {
    //     labelCol: {
    //       xs: {span: 24},
    //       sm: {span: 3},
    //     },
    //     wrapperCol: {
    //       xs: {span: 24},
    //       sm: {span: 115},
    //     },
    //   };
    return (
        <DashboardLayout>
               <Row>
          <Col xs={24}>

            <Card bordered={false} className="profile-details">
              <Row>
                <Col sm={10} md={8} xl={4} style={{padding: '20px'}}>
                  <div className="user-image m-b-20">
                    <img src={user} />
                    <Upload {...props}>
                      <Button icon={<UploadOutlined />}>Upload profile picture</Button>
                    </Upload>
                  </div>
                  <div className="personal-info">
                    <h2>Jeremy Rose</h2>
                    <h4 className="user-designation m-b-10">
                      Product Designer
                    </h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      {' '}
                      Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                      {' '}
                    </p>
                  </div>
                  <div className="contact-info">
                    <h2 className="after-underline">Contact Information</h2>
                    <Form className="m-t-15 m-b-20">
                      <Form.Item label="Phone No" className="contact-form">
                        <Input placeholder={9876543210} />
                      </Form.Item>
                      <Form.Item label="Email" className="contact-form">
                        <Input placeholder="Enter Your Email Address ...." />
                      </Form.Item>
                      <Form.Item label="Address" className="contact-form">
                        <TextArea placeholder="Enter Your  Address ...." />
                      </Form.Item>
                      <Form.Item label="Site" className="contact-form">
                        <Input placeholder="Enter your site url..." />
                      </Form.Item>
                    </Form>
                  </div>
                </Col>
                <Col sm={14} md={16} xl={20} style={{padding: '10px 20px'}}>
                  <div className="user-details">
                    <span className="floating-icon">Star Icon here</span>
                    <div className="work-experience">
                      <h2 className="after-underline">Work</h2>
                      <div className="m-b-10 m-t-15">
                        <h3>Spotify New York</h3>
                        <span>2015 - Present</span>
                      </div>
                      <p className="m-b-25">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <br />{' '}

                        {' '}
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s
                      </p>
                      <div className="m-b-10 m-t-15">
                        <h3>Metropolitan Museum</h3>
                        <span>2013 - 2015</span>
                      </div>
                      <p className="m-b-25">
                        It is a long established fact that a reader will be distracted
                        {' '}
                        by the readable content of a page when looking at its layout. The point of using
                        {' '}
                        Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                        {' '}
                        as opposed to using
                      </p>
                    </div>

                    <h2 className="after-underline">Rankings</h2>
                    <div className="d-flex align-items-center user-ratings">
                      <h1 className="m-r-10">8.6</h1>
                      <span>Icon here </span>
                      <span>Icon here </span>
                      <span>Icon here </span>
                      <span>Icon here </span>
                      <span>Icon here </span>
                    </div>
                    <div className="m-t-25">
                      <h2 className="after-underline">Skills</h2>
                      <List
                        dataSource={data}
                        renderItem={item => (
                          <List.Item className="skill-item">{item}</List.Item>
                        )}
                      />
                    </div>
                    <div className="m-t-30 m-b-30 user-buttons">
                      <Button><span>Icon message hrere </span> Send Message</Button>
                      <Button><span>Icon check </span>Contacts</Button>
                      <Button>Report User</Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>

          </Col>

        </Row>
        </DashboardLayout>
    )
}

export default Profile;
