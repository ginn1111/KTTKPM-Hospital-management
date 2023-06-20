import { Button, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import { RetweetOutlined, SearchOutlined } from '@ant-design/icons';
import { OptionProps } from 'antd/es/select';
import dayjs from 'dayjs';

const GENDER_OPTIONS: Partial<OptionProps>[] = [
  {
    value: 'male',
    label: 'Nam',
  },
  {
    value: 'female',
    label: 'Nữ',
  },
  {
    value: 'other',
    label: 'Khác',
  },
];

const Filter = () => {
  return (
    <Form>
      <Row gutter={[12, 0]}>
        <Col span={5}>
          <Form.Item name="id" className="mb-0">
            <Input placeholder="Mã nhân viên" />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name="fullName" className="mb-0">
            <Input placeholder="Họ tên" />
          </Form.Item>
        </Col>
        <Col span={3}>
          <Form.Item name="gender" className="mb-0">
            <Select
              options={GENDER_OPTIONS}
              allowClear
              placeholder="Giới tính"
            />
          </Form.Item>
        </Col>
        <Col span={5}>
          <Form.Item name="dateOfBirth" className="mb-0">
            <DatePicker
              disabledDate={(date) => dayjs(new Date()).isBefore(date)}
              allowClear
              placeholder="Ngày sinh"
            />
          </Form.Item>
        </Col>
        <Col className="flex gap-x-4" flex={1}>
          <Button
            htmlType="submit"
            type="primary"
            className="grid bg-primary place-items-center ml-auto"
          >
            <SearchOutlined />
          </Button>
          <Button htmlType="reset" className="grid place-items-center">
            <RetweetOutlined className="text-text" />
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
