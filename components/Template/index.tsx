import { actions } from '@/slices/templateSlice';
import { templateMsgSelector } from '@/slices/templateSlice/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Button, Card, Space, Typography } from 'antd';

const Template = () => {
  const templateMsg = useAppSelector(templateMsgSelector);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(actions.templateAction('Kiến trúc và thiết kế phần mềm'));
  };

  return (
    <Card className="m-4">
      <Typography.Title className="text-blue" level={1}>
        {templateMsg}
      </Typography.Title>
      <Space>
        <Button onClick={handleChange}>Change message</Button>
      </Space>
    </Card>
  );
};

export default Template;
