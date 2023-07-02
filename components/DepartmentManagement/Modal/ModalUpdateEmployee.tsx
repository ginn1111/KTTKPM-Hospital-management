'use client';

import Modal from 'antd/es/modal/Modal';
import React, { useEffect, useState } from 'react';
import { ModalUpdateProps } from '../hooks/useUpdateEmployee';
import { DatePicker, Form, Input, Select, Spin, notification } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import dayjs, { Dayjs } from 'dayjs';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import {
  addNewEmployeeThunk,
  updateEmployeeThunk,
} from '@/slices/employeeSlice';
import { employeeLoadingSelector } from '@/slices/employeeSlice/selectors';
import { departmentListSelector } from '@/slices/departmentSlice/selectors';

type ModalUpdateEmployeeProps = {
  modal: ModalUpdateProps;
  onClose: () => void;
};

type FormEmployee = {
  dateOfBirdth: Dayjs;
} & Partial<Omit<Employee, 'dateOfBirdth'>>;

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
        dateOfBirdth: fmtBirthday,
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
    alert(JSON.stringify(payload));
    dispatch(addNewEmployeeThunk(payload));
  };
  const handleUpdate = (payload: Partial<Employee>) => {
    dispatch(updateEmployeeThunk({ ...modal.data, ...payload }));
  };

  const handleConfirm = async () => {
    try {
      await form.validateFields();

      const { dateOfBirdth, ...restValue } = form.getFieldsValue();
      const fmtDob = dayjs(dateOfBirdth).format();

      const payload: Partial<Employee> = {
        dateOfBirth: fmtDob,
        ...restValue,
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
            dateOfBirdth: dayjs(),
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
          <Form.Item label="Giới tính" name="gender">
            <Select
              options={[
                { label: 'Nam', value: 1 },
                { label: 'Nữ', value: 0 },
              ]}
            />
          </Form.Item>

          <Form.Item label="Phòng ban" name="departmentId">
            <Select
              options={departmentList.map(({ id, departmentName }) => ({
                value: id,
                label: departmentName,
              }))}
            />
          </Form.Item>
          <Form.Item label="Ngày sinh" name="dateOfBirdth">
            <DatePicker
              className="w-full"
              placeholder="ngày sinh"
              format="DD-MM-YYYY"
            />
          </Form.Item>
          <Form.Item label="Địa chỉ" name="address">
            <TextArea placeholder="địa chỉ" />
          </Form.Item>
        </Form>
      </Spin>
    </Modal>
  );
};

export default ModalUpdateEmployee;
