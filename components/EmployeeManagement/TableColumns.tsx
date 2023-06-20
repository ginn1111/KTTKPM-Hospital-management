import dayjs from 'dayjs';

const TableColumns = () => {
  return [
    {
      title: 'STT',
      render: (_: unknown, _record: unknown, idx: number) => (
        <span>{idx + 1}</span>
      ),
    },
    {
      title: 'Mã nhân viên',
      key: 'id',
      dataIndex: 'id',
    },
    {
      title: 'Họ và tên',
      key: 'fullName',
      dataIndex: 'fullName',
    },
    {
      title: 'Giới tính',
      key: 'gender',
      dataIndex: 'gender',
    },
    {
      title: 'Ngày sinh',
      key: 'dateOfBirth',
      dataIndex: 'dateOfBirth',
      render: (dateOfBirth: string) => (
        <span>{dayjs(dateOfBirth).format('DD - MM - YYYY')}</span>
      ),
    },
    {
      title: 'Địa chỉ',
      key: 'address',
      dataIndex: 'address',
    },
    {
      title: 'Phòng ban',
      key: 'department',
      dataIndex: 'department',
    },
    {
      title: 'Vị trí',
      key: 'position',
      dataIndex: 'position',
    },
    {
      title: 'Chức danh',
      key: 'title',
      dataIndex: 'title',
    },
  ];
};

export default TableColumns;
