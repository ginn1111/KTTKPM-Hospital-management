'use client';
import { actions } from '@/slices/templateSlice';
import { templateMsgSelector } from '@/slices/templateSlice/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Card, Space } from 'antd';

const Template = () => {
  const templateMsg = useAppSelector(templateMsgSelector);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(actions.templateAction('Kiến trúc và thiết kế phần mềm'));
  };

  return (
    <Card className="m-4">
      <h1 className="text-red-400 text-xl">{templateMsg}</h1>
      <Space>
        <Button onClick={handleChange}>Change message</Button>
      </Space>
    </Card>
  );
};

export default Template;
