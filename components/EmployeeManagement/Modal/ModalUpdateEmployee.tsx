'use client';

import { departmentListSelector } from '@/slices/departmentSlice/selectors';
import {
  addNewEmployeeThunk,
  updateEmployeeThunk,
} from '@/slices/employeeSlice';
import { employeeLoadingSelector } from '@/slices/employeeSlice/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { DatePicker, Form, Input, Select, Spin } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import Modal from 'antd/es/modal/Modal';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState } from 'react';
import { ModalUpdateProps } from '../hooks/useUpdateEmployee';

type ModalUpdateEmployeeProps = {
  modal: ModalUpdateProps;
  onClose: () => void;
};

type FormEmployee = {
  dateOfBirth: Dayjs;
} & Partial<Omit<Employee, 'dateOfBirth'>>;

const ModalUpdateEmployee = ({ modal, onClose }: ModalUpdateEmployeeProps) => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(employeeLoadingSelector);
  const departmentList = useAppSelector(departmentListSelector);
  const [isDirty, setIsDirty] = useState(false);
  const [form] = Form.useForm<FormEmployee>();

  useEffect(() => {
    if (!modal?.isAdd) {
      const { dateOfBirth, ...restValues } = modal.data;

      const fmtBirthday = dayjs(dateOfBirth);

      form.setFieldsValue({
        dateOfBirth: fmtBirthday,
        ...restValues,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(modal.data)]);

  const title = modal?.isAdd
    ? 'Thêm nhân viên'
    : `Cập nhật thông tin cho nhân viên ${modal.data.fullName}`;

  const handleClose = () => {
    form.resetFields();
    setIsDirty(false);
    onClose();
  };

  const handleAdd = (payload: Partial<Employee>) => {
    dispatch(addNewEmployeeThunk(payload));
  };
  const handleUpdate = (payload: Partial<Employee>) => {
    dispatch(updateEmployeeThunk({ ...modal.data, ...payload }));
  };

  const handleConfirm = async () => {
    try {
      await form.validateFields();

      const { dateOfBirth, ...restValue } = form.getFieldsValue();
      const fmtDob = dayjs(dateOfBirth).format();

      const payload: Partial<Employee> = {
        dateOfBirth: fmtDob,
        ...restValue,
        // fullName: 'Nguyễn Thị N',
        // gender: 0,
        // dateOfBirth: '2000-02-02',
        // address: 'Quan 9, Ho Chi Minh',
        // phone: '0123123123',
        // email: 'ntn@gmail.com',
        // departmentId: 'cb910bb6-1c9a-467a-9f85-e336c246dd94',
      };
      if (modal?.isAdd) {
        handleAdd(payload);
      } else {
        handleUpdate(payload);
      }
    } catch (error) {
      // empty block
    }
  };

  return (
    <Modal
      centered
      title={title}
      open={modal.open}
      onCancel={handleClose}
      onOk={handleConfirm}
      okText="Xác nhận"
      okButtonProps={{
        className: 'bg-primary',
        disabled: isLoading || !isDirty,
        loading: isLoading,
      }}
      cancelText="Huỷ"
    >
      <Spin spinning={isLoading} tip={'Đang xử lý...'}>
        <Form
          initialValues={{
            gender: 0,
            dateOfBirth: dayjs(),
            departmentId: departmentList?.[0].id,
          }}
          onFieldsChange={() => setIsDirty(true)}
          validateTrigger="onBlur"
          requiredMark="optional"
          form={form}
          labelCol={{ span: 7 }}
          colon={false}
        >
          <Form.Item
            className="mt-8"
            hasFeedback
            label="Họ và tên"
            name="fullName"
            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
          >
            <Input placeholder="họ và tên" />
          </Form.Item>

          <Form.Item
            className="mt-8"
            hasFeedback
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Vui lòng nhập email' }]}
          >
            <Input placeholder="email" />
          </Form.Item>
          <Form.Item
            className="mt-8"
            hasFeedback
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }]}
          >
            <Input placeholder="số điện thoại" />
          </Form.Item>
          <Form.Item
            label="Giới tính"
            name="gender"
            rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}
          >
            <Select
              options={[
                { label: 'Nam', value: 1 },
                { label: 'Nữ', value: 0 },
              ]}
            />
          </Form.Item>

          <Form.Item
            label="Ngày sinh"
            name="dateOfBirth"
            rules={[{ required: true, message: 'Vui lòng chọn ngày sinh' }]}
          >
            <DatePicker
              className="w-full"
              placeholder="ngày sinh"
              format="DD-MM-YYYY"
            />
          </Form.Item>

          <Form.Item label="Phòng ban" name="departmentId">
            <Select
              options={departmentList?.map(({ id, departmentName }) => ({
                value: id,
                label: departmentName,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Địa chỉ"
            name="address"
            rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
          >
            <TextArea placeholder="địa chỉ" />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};

export default ModalUpdateEmployee;
